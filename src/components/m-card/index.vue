<template>
  <div class="m-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="m-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
      <!-- 具名插槽：父组件可以根据相应的name给相应name添加相应的内容，父组件通过v-slot，缩写为# -->
    </div>
    <div class="m-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ElCard',
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String
      }
    }
  };
</script>

<style scoped>
.m-card {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
}
.m-card__body {
    padding: 20px;
}
.m-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
}

.m-card.is-always-shadow, .m-card.is-hover-shadow:focus, .m-card.is-hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
</style>
