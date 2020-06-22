<template>
  <div>
    <count-to ref="countTo" :end-val="endVal" @on-animation-end="handleEnd">
      <span slot="left">数字动画：</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="getNumber">获取数据</button>
    <button @click="updateEndVal">更新endVal</button>
  </div>
</template>
<script>
import CountTo from "@/components/count-to";

export default {
  name: "count_to",
  components: {
    CountTo
  },
  data (){
    return {
      endVal: 100,
    }
  },
  methods: {
    getNumber() {
      //ref，这里获取到组件的实例
      this.$refs.countTo.getCount()
    },
    updateEndVal(){
      this.endVal += Math.random() * 100
    },
    handleEnd(endVal){
      console.log(endVal)
    }
  }
};
</script>