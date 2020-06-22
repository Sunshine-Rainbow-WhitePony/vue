<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="showChild = !showChild">
      <slot name="title"></slot>
      <span class="shrink-icon" :style="{transform: `rotateZ(${!showChild ? 0 : 180}deg)`}">^</span>
    </div>
    <div v-show="showChild" class="a-submenu-child-box">
      <slot></slot>
    </div>
  </ul>
</template>
<script>
export default {
  name: "ASubmenu",
  data() {
    return {
      showChild: false,
    };
  },
};
</script>
<style lang="less">
.a-submenu {
  &-title {
    background: palevioletred;
    position: relative;
    .shrink-icon {
      position: absolute;
      right: 10px;
      top: 0px;
      color: #fff;
    }
  }
  &-child-box {
    overflow: hidden;
    padding-left: 20px;
  }
}
</style>