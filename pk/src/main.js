// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import './assets/css/global-1.0.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(iView);
//挂载Vuex
Vue.use(Vuex);
// 容器是唯一的
const store = new Vuex.Store({
  state: {
    check: '',
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 注册
  components: { App },
  template: '<App/>'
})
