import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "babel-polyfill"
import Vant from 'vant'
import 'vant/lib/index.css'


Vue.use(Vant);

Vue.config.devtools = true

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')