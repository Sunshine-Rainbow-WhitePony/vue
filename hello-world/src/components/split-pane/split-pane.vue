<template>
  <div class="wrapper">
    <div class="split-pane-wrapper" ref="outer">
      <div class="pane pane-left" :style="{ width: leftOffsetPercent }">
        <slot name="left"></slot>
      </div>
      <div class="pane-trigger-con" @mousedown ="handleMousedown" :style="{ width: `${triggerWidth}px`, left: triggerLeft}"></div>
      <div class="pane pane-right" :style="{ left: leftOffsetPercent }">
        <slot name="right"></slot>
      </div>
    </div>
    <button @click="handleClick">更新</button>
  </div>
</template>
<script>
export default {
  name: "SplitPane",
  props:{
    value:{
      type: Number,
      default: 0.5
    },
    triggerWidth:{
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data() {
    return {
      // leftOffset: 0.3,
      canmove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`;
    },
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth/2}px)`;
    },
  },
  methods: {
    handleClick() {
      this.value = Math.random();
    },
    handleMousedown(event){//鼠标按下时执行
      document.addEventListener("mousemove",this.handleMousemove)
      document.addEventListener("mouseup",this.handleMouseup)
      this.initOffset = (this.triggerWidth / 2) - (event.pageX - event.srcElement.getBoundingClientRect().left)
      console.log(this.initOffset)
      this.canmove = true
    },
    handleMouseup(){
      this.canmove = false
    },
    handleMousemove(event){
      if(this.canmove){
        // getBoundingClientRect()返回容器距离窗口各个边的距离
        const outerRect = this.$refs.outer.getBoundingClientRect()
        let offsetPercent = (event.pageX - outerRect.left + this.initOffset) / outerRect.width
        if(offsetPercent < this.min) offsetPercent = this.min
        if(offsetPercent > this.max) offsetPercent = this.max
        // this.$emit("input",offsetPercent)//要改变父级的传入组件的值，不能直接赋值，要通过$emit
        this.$emit('update:value', offsetPercent);//对应.sync的抛出方法
      }
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  margin-top: 20px;

  height: 100%;
  width: 100%;
}
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  .pane {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      background: palevioletred;
    }
    &-right {
      background: forestgreen;
      right: 0;
    }
    &-trigger-con {
      height: 100%;
      background: #000;
      position: absolute;
      top: 0;
      z-index: 9;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>