<template>
	<input @input="handleInput" :value="value">
</template>

<script>
	export default {
		name: "AInput",
		props: {
			value: {
				type: [String,Number],
				default: ""
			}
		},
		methods: {
			handleInput(event){
				const value = event.target.value;
				//$emit，当触发input事件时，会把value作为回调函数的参数传出去
				this.$emit('input',value);
			}
		}
	}
</script>

<style>
</style>
