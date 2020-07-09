<template>
	<div>
		我是home
		<button @click="getInfo">请求数据</button>
        <button @click='handleLogout'>退出登录</button>
		<button @click='goPage'>跳转页面</button>
	</div>
</template>

<script>
    import { getUserInfo } from '@/api/user.js'
    import { mapActions } from 'vuex'
	
	export default {
		methods:{
			getInfo(){
				/* axios.post('/schedule/subject/getData',{pid: '2114',pageSize: 500,curPage: 1})
				.then(res => {
					console.log(res)
				}) */
				//这里调用axios封装，实际就是axios.create()，返回的是一个promise
				getUserInfo({pid: '2114',pageSize: 500,curPage: 1}).then(res => {
					console.log(res.data)
				}).catch(err => {
					console.log(err)
				})
            },
            ...mapActions('user',['logout']),
            handleLogout(){
                this.logout()
                this.$router.push({name: 'login'})
            },
			goPage(){
				this.$router.push({name: 'email',params: {userId: 123}})
			}
		}
	}
</script>

<style>
</style>
