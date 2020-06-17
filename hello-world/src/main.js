import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from "./lib/bus"

if (process.env.NODE_ENV === "development") { //开发环境
    Vue.config.devtools = true
        // require("./mock")
} else if (process.env.NODE_ENV == 'production') { //生产环境
    Vue.config.devtools = false
}

Vue.config.productionTip = false; //阻止启动生产消息

Vue.prototype.$bus = Bus;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')