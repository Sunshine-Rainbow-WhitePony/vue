<template>
	<div>我是text3,传入的参数是：{{ $route.params.name }}
        <a @click="fun2">点</a>
    </div>
</template>

<script>
export default{
    name: 'text3',
    methods:{
        fun1: () => {
            console.log(this)
        },
        fun2: function(){
            console.log(this)
        }
    }
}
</script>

<style></style>
