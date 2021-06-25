<template>
  <MyCard class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <button style="float: right; padding: 3px 0" type="text">操作按钮</button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{ "列表内容 " + o }}
    </div>
  </MyCard>
</template>

<script>
import { MyCard } from "./card.vue";

export default {
  components: {
    MyCard,
  },
};
</script>


<style>
.text {
  font-size: 14px;
  float: right;
  padding: 3px 10px;
  color: deepskyblue;
  background-color: white;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>


