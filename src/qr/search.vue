<template>
  <div class="container">
    <!-- 输入框 -->
    <input
      class="input"
      placeholder="请输入内容"
      :class="classes"
      v-model="items"
      @keyup="search"
      ref="count"
    />
    <!-- @keyup 指定按键松开会触发的事件，在用户输入的时候触发
         ref属性是为了方便后面操作DOM拿到输入框的值
     -->
    <!-- <button type="button" class="btn">search</button> -->
    <!-- 下拉框 -->
    <div class="div">
      <ul v-show="state">
        <li v-for="(item, index) in list" :key="index">
          <span>{{ item.id }}</span>
          <span id="span2">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template> 

<script>
export default {
  name: "m-search",
  props: {
    type: {
      type: String,
      validator: function (a) {
        return ["text", "textarea"].indexOf(a) !== -1;
      },
    },
    fetchSuggestions: {
      type: Function,
      // default:function (queryString,callback) {
      //   if(queryString)
      //   callback([
      //     { id: "1001", name: "哈哈" },
      //     { id: "1205", name: "财务" },
      //   ]);
      // },
    },
  },

  data() {
    return {
      items: "",
      state: false,
      dataList: [
        { id: "1001", name: "哈哈" },
        { id: "1002", name: "呵呵" },
        { id: "1103", name: "晓丽" },
        { id: "1104", name: "小兰" },
        { id: "1205", name: "财务" },
      ],
      list: [],
    };
  },

  methods: {
    currentValue: function () {
      this.$emit("input", this.items.text);
    },
    search() {
      this.list = []; //定义的数组存放筛选之后的数据
      this.items = this.$refs.count.value; //将输入框输入的值赋值给列表
      //判断是否展示下拉框，输入了展示，反之不展示
      if (this.items.length > 0) {
        this.state = true;
      } else {
        this.state = false;
      }
      if (this.fetchSuggestions) {
        this.fetchSuggestions(this.items, (res) => {
          this.list = res;
        });
        return;
      }
      //循环模拟数据的数组,map方法将一个原数组变成一个新数组，dataList-msg
      this.dataList.map((msg) => {
        //拿当前json的id、name去分别跟输入的值进行比较
        //indexOf 如果在检索的字符串中没有出现要找的值是会返回-1的
        if (
          msg.id.indexOf(this.items) != -1 ||
          msg.name.indexOf(this.items) != -1
        ) {
          //然后把当前json添加到list数组中
          this.list.push(msg);
        }
        // console.log(this.list);
      });
    },
  },

  computed: {
    classes() {
      return {
        [`input-${this.type}`]: true,
      };
    },
  },
};
</script>

<style scoped>
.input-text {
  height: 28px;
}
.input-textarea {
  height: 40px;
  width: 400px;
}
.input {
  color: black;
  height: 28px;
  border: rgb(186, 189, 189) 1px solid;
  padding-left: 10px;
  margin-bottom: 1px;
}
.div {
  background-color: rgb(248, 248, 248);
  width: 150px;
  margin-top: 0px;
  margin-left: 5px ;
  padding-top: 0;
  box-shadow: 0px 1px 10px 1px rgba(70, 69, 69, 0.3);
}
.div ul {
  list-style-type: none;
    margin-top: 9px;
    margin-left: 4px;
    font-size: 13px;
}
#span2{
  margin-left: 18px;
}
</style>
