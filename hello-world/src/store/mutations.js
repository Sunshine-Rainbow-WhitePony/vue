import vue from 'vue'

const mutations = {
	//这个state是同级目录的state.js的对象,params可以是一个值,也可以是一个对象
	SET_APP_NAME(state,params){
		state.appName = params;
	},
	SET_APP_VERSION(state){
		vue.set(state,'appVersion','v2.0');
	},
	SET_STATE_VALUE(state,val){
		state.stateValue = val;
	}
}

export default mutations