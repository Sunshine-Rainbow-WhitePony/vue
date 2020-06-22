<template>
  <div class="split-pane-con">
    <!-- <split-pane :value="offset" @input="handleInput"></split-pane> -->
    <!-- 上边的写法可以用v-model语法糖代替 -->
    <!-- <split-pane v-model="offset"></split-pane> -->
    <!-- 下边在使用一个更简便的方法，用到.sync -->
    <!-- .sync首先给value属性绑定offset这个值，同时绑定一个事件来更新offset这个值 -->
    <split-pane :value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>
<script>
import SplitPane from "@/components/split-pane"

export default {
  components:{
    SplitPane
  },
  data(){
    return {
      offset: 0.8
    }
  },
  methods:{
    /* handleInput(value){
      this.offset = value
    } */
  }
}
</script>
<style lang="less" scoped>
  .split-pane-con{
    width: 400px;
    height: 200px;
    background: papayawhip;
  }
</style>