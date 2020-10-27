<template>
    <div class="a-menu">
        <ul>
            <template v-for="(item,index) in menudata">
                <a-menu-item v-if="!item.child" :key="item.index">{{ item.title }}</a-menu-item>
                <re-submenu v-else :parent="item" :key="`menu_item_${index}`"></re-submenu>
            </template>
        </ul>
    </div>
</template>
<script>
import AMenuItem from "./a-menu-item"
import ReSubmenu from "./re-submenu"
export default {
    name: 'AMenu',
    components:{
        AMenuItem,
        ReSubmenu
    },
    props: {
        menudata: {
            type: Array,
            default: () => ([])
        }
    }
}
</script>
<style lang="less">
.a-menu{
    & *{
        list-style: none;
    }
    ul{
        padding: 0;
        margin: 0;
    }
}
</style>