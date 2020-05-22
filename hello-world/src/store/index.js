import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions'
import user from './module/user'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
	//开启严格模式,在这种情形下,用赋值的形式在组件中直接修改state的值就会报错,只能使用mutation的setter方法修改.
	// strict: ture,
	strict: process.env.NODE_ENV === "development",//development是开发环境,值为true,打包后这里的值就是false,在生产环境不会报错.
	state,
	getters,
	mutations,
	actions,
	modules: {
		user
	},
	plugins: [saveInLocal]
})