import { getAppName } from '@/api/app';

const actions = {
	/* updateAppName ({ commit }){
		getAppName().then(res => {
			const {info: {appName}} = res;//解构赋值
			commit('SET_APP_NAME',appName)
		}).catch(err => {
			console.log(err)
		})
	} */
	
	//action 函数接受一个与 store 实例具有相同方法和属性的对象,this.$store.commit,结构赋值commit,在方法中直接使用
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