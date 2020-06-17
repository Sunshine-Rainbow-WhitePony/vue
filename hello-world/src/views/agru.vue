<template>
	<div>
		<p>{{ food }}</p>
	</div>
</template>

<script>
export default {
	props: {
		food: {
			type: String,
			default: "lison"
		}
	},
	//这个方法是在渲染该组件对应路由被确认前调用
	beforeRouteEnter(to, from, next) {
		//to是当前路由对象
		//from是上一个路由对象
		
		//this,这个方法是在页面渲染之前调用，使用this获取不到当前实例。
		
		//必须执行
		next(vm => {
			console.log(vm);//vm就是当前组件的实例
		});
	},
	//这个方法是路由离开之前被调用
	beforeRouteLeave(to, from, next){
		const leave = confirm("您确定要离开吗");
		if(leave) next()
		else next(false)
	},
	//这个方法是当前的组件被复用时执行，就是第一次调用时不执行
	beforeRouteUpdate(to, from, next){
		next();
	}
};
</script>

<style></style>
