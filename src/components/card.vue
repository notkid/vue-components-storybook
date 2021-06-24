<template>
<div v-show="visible" class="z-card" :class="shadowClass">
  <div class="header" >
    <span style="padding-left: 10px">卡片内容</span>
    <button class="button">操作按钮</button>
  </div> 
  <!-- <slot></slot> -->
  <div v-for="a in 4" :key="a" class="item">{{'列表内容' + a}}</div>
  <div></div>
</div>
</template>

<script>
    export default{
        name:'my-card',

        props:{
            shadow: {
                type: String,
                default: 'always'
            },
        },
        data() {
          return {
            visible: true
          };
        },   
        // methods: {
        //   close() {
        //     this.visible = false;
        //   }
        // },
        computed: {
          shadowClass() {
            return {
              [`z-card--${this.shadow}`]: true,
            };
          },
        },
        
        
    }
</script>

<style scoped>
    .z-card{
    width: 480px;
    height: 190px;
    margin: 10px 0 0 5px;
    border-radius: 6px;
    border-color:firebrick;
    border: 1px solid rgb(221, 218, 218);
    }
    .header{
      margin: 5px  0 8px 0px;
      padding: 9px 8px 10px 4px;
      height: 26px;
      border-bottom: 1px solid rgb(221, 218, 218);
    }
    .z-card--hover:hover{
    box-shadow: 0 0 7px grey;
    }
    .z-card--always{
    box-shadow: 0 0 7px grey;
  }
    .z-card--never{
    box-shadow: 0 0 0 rgb(255, 254, 254);
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
    }
    .button{
      float: right; 
      padding: 3px 10px;
      color: deepskyblue;
      background-color:white;
      border: 0 ;
    }
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

