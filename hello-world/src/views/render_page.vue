<template>
  <div>
    <list :list="list" >
        <count-to slot-scope="count" :end-val="count.number"></count-to>
    </list>
  </div>
</template>
<script>
import List from "@/components/list";
import CountTo from '@/components/count-to'
export default {
  data() {
    return {
      list: [{ num: 100 }, { num: 300 }, { num: 45 }]
    };
  },
  components: {
    List,
    CountTo
  },
  methods: {
    /* renderFun(h, name) {
      return h(
        "i",
        {
          style: {
            color: "pink"
          }
        },
        name
      );
    } */

    //jsx写法
    //此时传入的第一个参数必须是h
    renderFun(h, num) {
      return (
        //   <i on-click={this.handleClick} style={{color: 'pink'}}>{name}</i>
        <CountTo nativeOn-click={this.handleClick} on-on-animation-end={this.handleEnd} endVal={num} style={{color: 'pink'}}>{}</CountTo>
      )
    },
    handleClick(event){
        console.log(event)
    },
    handleEnd(val){
        console.log(val)
    }
  }
};
</script>