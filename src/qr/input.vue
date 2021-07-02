<template>
  <div class="my-input">
    <input
      class="input"
      :class="classes"
      @input="currentValue"
      v-model="items.text"
      placeholder="请输入内容"
      ref="count"
    />
    <!-- ref 用来给元素或子组件注册引用信息-->

    <span class="remnant" v-if="wordlimit">{{ numberl }}/{{ number2 }}</span>
    <i
      class="cancel"
      :class="flag ? 'show' : 'hid'"
      @click="cancel"
      v-if="clearable"
      >X</i>
    <p>输入的内容是：{{items.text}}</p>
  </div>
</template>

<script>
import button from "./button.vue";
import "./input.css";

export default {
  // components: { button },
  name: "my-input",
  props: {
    type: {
      type: String,
      validator: function (a) {
        return ["text", "textarea"].indexOf(a) !== -1;
      },
    },
    disable: {
      type: Boolean,
    },
    clearable: {
      type: Boolean,
      // default: false,
    },
    maxlength: {
      type: Number,
      // default: 100,
    },
    minlength: {
      type: Number,
    },
    wordlimit: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["medium", "small", "mini"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      flag: false,
      number: "",
      numberl: "0",
      number2: this.maxlength,
      items: {
        text: "",
      },
    };
  },

  //监听输入框事件
  methods: {
    currentValue: function () {
      // this.descInput();
      this.handleinput();
      this.$emit("input", this.items.text); //this.$emit是一个触发器，this.$emit(事件，值)，用于父子组件的传值,将值放在自定义的事件函数中作为参数,传递给父组件
    },
    cancel() {
      this.items.text = "";
      this.flag = false;
    },
    handleinput() {
      this.flag = true;
    },
  },

  watch: {
    //watch()监听某个值（双向绑定）的变化，从而达到change事件监听的效果
    items: {
      handler: function () {
        var _this = this;
        var _suml = this.maxlength; //字体限制为100个
        _this.$refs.count.setAttribute("maxlength", _suml);
        _this.number = _suml - _this.$refs.count.value.length;
        _this.numberl = _this.$refs.count.value.length;
        _this.number2 = _suml;
      },
      deep: true, //深度监听，监听到items对象内部的变化
    },
  },

  computed: {
    classes() {
      return {
        "input-disable": this.disable,
        // "input-clearable": this.clearable,
        [`input-${this.type}`]: true,
        [`input-${this.size}`]: true,
      };
    },
  },
};
</script>

