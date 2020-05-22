<template>
	<div>
		我是home
		<button @click="getInfo">请求数据</button>
	</div>
</template>

<script>
	import { getUserInfo } from '@/api/user.js'
	
	export default {
		methods:{
			getInfo(){
				/* axios.post('/schedule/subject/getData',{pid: '2114',pageSize: 500,curPage: 1})
				.then(res => {
					console.log(res)
				}) */
				
				getUserInfo({pid: '2114',pageSize: 500,curPage: 1}).then(res => {
					console.log(res)
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style>
</style>
