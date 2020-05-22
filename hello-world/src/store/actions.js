import { getAppName } from '@/api/app';

const actions = {
	//{ commit }是解构赋值,commit用于提交一个mutation
	/* updateAppName ({ commit }){
		getAppName().then(res => {
			const {info: {appName}} = res;//解构赋值
			commit('SET_APP_NAME',appName)
		}).catch(err => {
			console.log(err)
		})
	} */
	
	async updateAppName ({commit}){
		try{
			const {info: {appName}} = await getAppName()
			commit('SET_APP_NAME',appName)
		}catch (err){
			console.log(err)
		}
	}
}

export default actions;