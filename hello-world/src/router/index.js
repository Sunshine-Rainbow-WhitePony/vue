import Vue from "vue";
import Router from "vue-router";
import routes from "./router";
import store from "@/store"
import { setTitle, setToken, getToken } from "@/lib/util.js";

Vue.use(Router);

const router = new Router({
    //定义路由跳转的模式,默认值是"hash",模拟页面跳转,就是地址栏有个＃号,在#号后边做路由的跳转,页面是不会刷新的,
    //history,使用history的一些api做无刷新页面跳转,需要后端配合,当地址栏的页面没有时,不是显示404,而是跳转到指定页面
    mode: "hash",
    routes
})

//用beforEach,是跳转之前执行
//to是要去的页面对象,form是当前页面对象,next是函数
router.beforeEach((to, from, next) => {
    //页面的title显示对应路由的meta:{title: ""}的内容
    to.meta && setTitle(to.meta.title);
    const token = getToken()
    if (token) {
        store.dispatch('user/authorization', token).then(() => {
            if (to.name === 'login') next({ name: 'data' })
            else next()
        }).catch(() => {
            setToken('')
            next({ name: 'login' })
        })
    } else { //没登录过
        if (to.name === 'login') next()
            // else next({ name: 'login' })
        else next()
    }




    //判断将要跳转的页面是不是登录页
    /* if (to.name !== "login") {
        //如果已登录则直接进入想跳转的页面
        if (HAS_LOGINED) {
            next();
        } else {
            //否则进入登录页
            // next中可以传入{name:""},或者{path: "/"}这种对象,也可传入路径字符串
            next({ name: "login" });
        }
    } else {
        if (HAS_LOGINED) next({ name: "home" })
        else next()
    } */
})

//也是一个全局首位,
router.beforeResolve((to, from, next) => {
    next();
})

//这个是跳转之后执行,没有next参数
router.afterEach((to, from) => {

})

export default router;