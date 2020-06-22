<template>
  <ul>
    <li v-for="(item, index) in list" :key="`list_item_${index}`">
      <!-- <span v-if="!render">{{ item.num }}</span>
      <render-dom v-else :render-func="render" :num="item.num"></render-dom> -->
      <slot :number="item.num"></slot>
    </li>
  </ul>
</template>
<script>
import RenderDom from '@/components/render-dom'
export default {
  name: "list",
  components:{
    RenderDom,
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
        type: Function,
        default: () => {}
    }
  }
};
</script>