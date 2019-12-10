import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;//阻止启动生产消息

new Vue({
  render: h => h(App),
}).$mount('#app')
