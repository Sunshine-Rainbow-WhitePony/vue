<template>
    <div class="menu-box">
        <!-- <a-menu>
            <a-menu-item>111</a-menu-item>
            <a-menu-item>222</a-menu-item>
            <a-submenu>
                <a-menu-item>333-1</a-menu-item>
                <a-menu-item>333-2</a-menu-item>
                <a-submenu>
                    <div slot="title">333-3</div>
                    <a-menu-item>333-3-1</a-menu-item>
                    <a-menu-item>333-3-2</a-menu-item>
                </a-submenu>
            </a-submenu>
        </a-menu> -->
        <a-menu>
            <template v-for="(item,index) in list">
                <a-menu-item v-if="!item.child" :key="item.index">{{ item.title }}</a-menu-item>
                <re-submenu v-else :parent="item" :key="`menu_item_${index}`"></re-submenu>
            </template> 
        </a-menu>
    </div>
</template>
<script>
import menuComponent from "_c/menu";
import ReSubmenu from "./re-submenu"

export default {
    name: "menu_page",
    components: {
        //...拆分操作符，可以把menuComponent的属性拆分出来，扁平化的放到components对象里
        ...menuComponent,
        ReSubmenu
    },
    data() {
        return {
            list: [
                {
                    title: 1111
                },
                {
                    title: 2222
                },
                {
                    title: 3333,
                    child: [
                        {
                            title: '3333 - 11'
                        },
                        {
                            title: '3333 - 22'
                        },
                        {
                            title: '3333 - 33',
                            child: [
                                {
                                    title: '3333 - 33 - 1'
                                },
                                {
                                    title: '3333 - 33 - 2'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
</script>
<style lang="less">
.menu-box {
    height: 300px;
    width: 400px;
}
</style>