<template>
  <div class="z-card" :class="shadowClass"> 
    <div class="header">    
      <slot name="header">{{header}}</slot> 
    </div>
    <div class="m-body" :style="bodyStyle">
     <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-card",

  props: {
    shadow: {
      type: String,
      default: "always",
    },
    header: {
      type: String,
      default: ''
    },
    bodyStyle: {
      type: Object,
      default: ''
    }
  },
  // data() {
  //   return {
  //     visible: true,
  //   };
  // },
  computed: {
    shadowClass :function() {
      return {
        [`z-card--${this.shadow}`]: true,
      }
    }
  }
};
</script>

<style scoped>
.z-card {
  width: 480px;
  height: 190px;
  margin: 10px 0 0 5px;
  border-radius: 6px;
  border-color: firebrick;
  border: 1px solid rgb(221, 218, 218);
}
.header {
  margin: 5px 0 8px 0px;
  padding: 9px 8px 10px 4px;
  height: 26px;
  border-bottom: 1px solid rgb(221, 218, 218);
}
.z-card--hover:hover {
  box-shadow: 0 0 7px grey;
}
.z-card--always {
  box-shadow: 0 0 7px grey;
}
.z-card--never {
  box-shadow: 0 0 0 rgb(255, 254, 254);
}
.m-body{
  padding: '20px';
}
/* .heater:before,
.heater:after {
  display: table;
  content: "";
}
.heater:after {
  clear: both;
}
.item {
  margin: 14px 0 10px 16px;
  font-size: 13px;
}
.button {
  float: right;
  padding: 3px 10px;
  color: deepskyblue;
  background-color: white;
  border: 0;
} */
/* .firstTemplate{
    width: 480px;
    height: 190px;
    margin: 10px 0 0 5px;
    border-radius: 6px;
    border-color:firebrick;
    border: 1px solid rgb(221, 218, 218);
  }
  .firstTemplate:hover{
    box-shadow: 0 0 7px grey;
  }
  .heater{
    margin: 5px  0 8px 0px;
    padding: 9px 8px 10px 4px;
    height: 26px;
    border-bottom: 1px solid rgb(221, 218, 218);
  }
  .button{
    float: right; 
    padding: 3px 10px;
    color: deepskyblue;
    background-color:white;
  }
  .heater:before,
  .heater:after {
    display: table;
    content: "";
  }
  .heater:after {
    clear: both;
  }
  .item{
    margin: 14px 0 10px 16px;
    font-size: 13px;
  } */
</style>

