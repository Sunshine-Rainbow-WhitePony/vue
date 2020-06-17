<template>
	<div id="app">
		<!-- <ActiveShow></ActiveShow> -->
		<div class="nav">
			<router-link to="/home">home</router-link>
			<router-link to="/agru">agru</router-link>
			<router-link to="/child">child</router-link>
		</div>
		<!-- <transition-group name="router">
			<router-view key="default"/>
			<router-view key="agru" name="agru"></router-view>
			<router-view key="child" name="child"></router-view>
		</transition-group> -->
		<!-- <transition-group :name="routerTransition">
			<router-view key="default"/>
		</transition-group> -->
		<router-view key="default"></router-view>
		<router-view key="email" name="email"></router-view>
		<router-view key="tel" name="tel"></router-view>
	</div>
</template>
<style lang="less">
	.nav{
		a{
			font-size: 14px;
			margin-right: 10px;
		}
	}
	
	.router-enter{//页面即将要显示的效果
		opacity: 0;
	}
	
	.router-enter-active{//页面从没有到有的过程
		transition: opacity 1s ease;
	}
	
	.router-enter-to{//页面完全显示的效果
		opacity: 1;
	}
	
	.router-leave{
		opacity: 1;
	}
	
	.router-leave-active{
		transition: opacity 1s ease;
	}
	
	.router-leave-to{
		opacity: 0;
	}
</style>
<script>
	// import ActiveShow from '@/components/activeList.vue';

	export default {
		name: 'app',
		components: {
			// ActiveShow,
		},
		data() {
			return {
				// routerTransition: '',
			}
		},
		/* watch:{
			'$route' (to) {
				to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
			}
		} */
	}
</script>