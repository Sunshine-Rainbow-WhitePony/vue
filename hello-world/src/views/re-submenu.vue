<template>
    <a-submenu>
        <div slot="title">{{ parent.title }}</div>
        <template v-for="(item, index) in parent.child">
            <a-menu-item v-if="!item.child" :key="`menu_item_${index}`">{{ item.title}}</a-menu-item>
            <re-submenu v-else :parent="item" :key="`menu_item_${index}`"></re-submenu>
        </template>
    </a-submenu>
</template>
<script>
import menuComponent from "_c/menu";
const { AMenuItem, ASubmenu } = menuComponent;
export default {
    name: "ReSubmenu",
    components: {
        AMenuItem,
        ASubmenu
    },
    props: {
        parent: {
            type: Object,
            default: () => ({})
        }
    },
    mounted(){
        this.$nextTick(() => {
            console.log(this.list)
        })
    }
};
</script>