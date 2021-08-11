import ResizeObserver from "../vc-resize-observer";
import PropTypes from "../_util/vue-types";
import BaseMixin from "../_util/BaseMixin";
import classNames from "classnames";
import omit from "omit.js";

import { ConfigConsumerProps } from "../config-provider/configConsumerProps";

import {
  addObserveTarget,
  removeObserveTarget,
  getTargetRect,
  getFixedTop,
  getFixedBottom,
} from "./utils";
import throttleByAnimationFrame from "../_util/throttleByAnimationFrame";
const AffixStatus = {
  None: "none",
  Prepare: "Prepare",
};
function getDefaultTarget() {
  return typeof window !== "undefined" ? window : null;
}

// Affix
const AffixProps = {
  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop: PropTypes.number,
  offset: PropTypes.number,
  /** 距离窗口底部达到指定偏移量后触发 */
  offsetBottom: PropTypes.number,
  /** 固定状态改变时触发的回调函数 */
  // onChange?: (affixed?: boolean) => void;
  /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
  target: PropTypes.func.def(getDefaultTarget),
  prefixCls: PropTypes.string,
};

const Affix = {
  name: "MAffix",
  props: AffixProps,
  mixins: [BaseMixin],
  inject: {
    configProvider: { default: () => ConfigConsumerProps },
  },
  data() {
    return {
      affixStyle: undefined,
      placeholderStyle: undefined,
      status: AffixStatus.None,
      prevTarget: null,
    };
  },
  beforeMount() {
    this.updatePosition = throttleByAnimationFrame(this.updatePosition);
    this.lazyUpdatePosition = throttleByAnimationFrame(this.lazyUpdatePosition);
  },
  mounted() {
    const { target } = this;
    if (target) {
      // [Legacy] Wait for parent component ref has its value.
      // We should use target as directly element instead of function which makes element check hard.
      this.timeout = setTimeout(() => {
        addObserveTarget(target(), this);
        // Mock Event object.
        this.updatePosition();
      });
    }
  },
  updated() {
    this.measure();
  },
  methods: {
    getOffsetTop() {
      const { offset, offsetBottom } = this;
      let { offsetTop } = this;
      if (typeof offsetTop === "undefined") {
        offsetTop = offset;
      }

      if (offsetBottom === undefined && offsetTop === undefined) {
        offsetTop = 0;
      }
      return offsetTop;
    },

    getOffsetBottom() {
      return this.offsetBottom;
    },
    // =================== Measure ===================
    measure() {
      const { status, lastAffix } = this;
      const { target } = this;
      if (
        status !== AffixStatus.Prepare ||
        !this.$refs.fixedNode ||
        !this.$refs.placeholderNode ||
        !target
      ) {
        return;
      }

      const offsetTop = this.getOffsetTop();
      const offsetBottom = this.getOffsetBottom();

      const targetNode = target();
      if (!targetNode) {
        return;
      }

      const newState = {
        status: AffixStatus.None,
      };
      const targetRect = getTargetRect(targetNode);
      const placeholderReact = getTargetRect(this.$refs.placeholderNode);
      const fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop);
      const fixedBottom = getFixedBottom(
        placeholderReact,
        targetRect,
        offsetBottom
      );
      if (fixedTop !== undefined) {
        newState.affixStyle = {
          position: "fixed",
          top: fixedTop,
          width: placeholderReact.width + "px",
          height: placeholderReact.height + "px",
        };
        newState.placeholderStyle = {
          width: placeholderReact.width + "px",
          height: placeholderReact.height + "px",
        };
      } else if (fixedBottom !== undefined) {
        newState.affixStyle = {
          position: "fixed",
          bottom: fixedBottom,
          width: placeholderReact.width + "px",
          height: placeholderReact.height + "px",
        };
        newState.placeholderStyle = {
          width: placeholderReact.width + "px",
          height: placeholderReact.height + "px",
        };
      }

      newState.lastAffix = !!newState.affixStyle;
      if (lastAffix !== newState.lastAffix) {
        this.$emit("change", newState.lastAffix);
      }

      this.setState(newState);
    },

    // @ts-ignore TS6133
    prepareMeasure() {
      this.setState({
        status: AffixStatus.Prepare,
        affixStyle: undefined,
        placeholderStyle: undefined,
      });
      this.$forceUpdate();

      // Test if `updatePosition` called
      if (process.env.NODE_ENV === "test") {
        this.$emit("testUpdatePosition");
      }
    },
    updatePosition() {
      this.prepareMeasure();
    },
    lazyUpdatePosition() {
      const { target } = this;
      const { affixStyle } = this;

      // Check position change before measure to make Safari smooth
      if (target && affixStyle) {
        const offsetTop = this.getOffsetTop();
        const offsetBottom = this.getOffsetBottom();

        const targetNode = target();
        if (targetNode && this.$refs.placeholderNode) {
          const targetRect = getTargetRect(targetNode);
          const placeholderReact = getTargetRect(this.$refs.placeholderNode);
          const fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop);
          const fixedBottom = getFixedBottom(
            placeholderReact,
            targetRect,
            offsetBottom
          );

          if (
            (fixedTop !== undefined && affixStyle.top === fixedTop) ||
            (fixedBottom !== undefined && affixStyle.bottom === fixedBottom)
          ) {
            return;
          }
        }
      }
      // Directly call prepare measure since it's already throttled.
      this.prepareMeasure();
    },
  },
  render() {
    const { prefixCls, affixStyle, placeholderStyle, $slots, $props } = this;
    const getPrefixCls = this.configProvider.getPrefixCls;
    const props = {
      attrs: omit($props, ["prefixCls", "offsetTop", "offsetBottom", "target"]),
    };
    const className = classNames({
      [getPrefixCls("affix", prefixCls)]: affixStyle,
    });
    return (
      <ResizeObserver onResize={() => this.updatePosition()}>
        <div {...props} style={placeholderStyle} ref="placeholderNode">
          <div class={className} ref="fixedNode" style={affixStyle}>
            {$slots.default}
          </div>
        </div>
      </ResizeObserver>
    );
  },
};

export default Affix;
