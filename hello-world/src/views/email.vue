<template>
	<div>
		<button @click="handleClick">按我</button>
	</div>
</template>

<script>
	export default {
		methods: {
			handleClick () {
				this.$bus.$emit('on-click','hello');
			}
		},
		mounted (){
			console.log(this.$bus);
			console.log(this.$route.params.userId);
		}
	}
</script>

<style>
</style>
