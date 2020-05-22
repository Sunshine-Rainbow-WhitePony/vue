const state = {
	userName: "lison"
}
const getters = {
	firstLetter: (state) => {
		return state.userName.substr(0,1);
	}
}
const mutations = {
	SET_USER_NAME (state,params){
		state.userName = params;
	}
}
const actions = {
	//commit是触发一个mutation
	//state是当前文件的state
	//rootState是根目录(store)的state
	//dispatch用来触发一个action
	updateUserName ({ commit, state, rootState ,dispatch}){
		//
	}
}

export default {
	namespaced: true,//使用命名空间
	state,
	getters,
	mutations,
	actions
}