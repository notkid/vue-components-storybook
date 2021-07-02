<template>
  <button type="button" :class="classes" @click="onClick">
    <!-- <slot name="button">{{ button }}</slot> -->
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "m-Button",

  // 子组件使用props声明需要从父组件接收的数据
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "null",
    },
    primary: {
      type: Boolean,
      default: false,
    },
    //   primary success warning danger info text
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
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

  //计算属性，
  computed: {
    classes() {
      return {
        //   'button':true,
        // ['button-${this.type}']: this.plain,
        // 'button-hyaline': !this.plain,
        [`button-${this.type}`]: this.type,
        // "button-round--use": this.round,
        "button-round--use": this.round,
        "button-disabled": !this.type,
        // "button-primary": this.round,
        [`button-${this.size}`]: true,
      };
    },
    // style() {
    //   return {
    //     type: this.type,
    //   };
    // },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style>
button {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0.5em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  /* color: white; */
}
.button-primary {
  color: white;
  background-color: cornflowerblue;
}
.button-null {
  /* color: rgb(8, 8, 8); */
  background-color: transparent;
}
.button-success {
  color: white;
  background-color: rgb(9, 146, 50);
}
.button-info {
  color: white;
  background-color: rgb(77, 78, 80);
}
.button-warning {
  color: white;
  background-color: rgb(241, 176, 79);
}
.button-danger {
  color: white;
  background-color: rgb(238, 76, 89);
}
.button-mini {
  font-size: 12px;
  padding: 12px 25px;
}
.button-small {
  font-size: 14px;
  padding: 15px 32px;
}
.button-medium {
  font-size: 16px;
  padding: 20px 40px;
}
/* .button-plain:hover{

}
.button-hyaline:hover {
    background-color: rgba(49, 48, 48, 0.15);
} */
.button-round--use {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  border-radius: 3em;
}
.button-disabled {
  /* box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset; */
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.5;
}
</style>