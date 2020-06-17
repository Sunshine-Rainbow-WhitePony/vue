<template>
    <div>
        <p ref="ms">text: {{ text }}</p>
        <p ref="ms">c: {{ c }}</p>
        <button @click="change">点</button>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: 'child',
    data(){
        return{
            msg: {
                a: 1,
                x: {
                   er: 3 
                }
            },
            c: 2,
            d: 4,
            text: '我还没开始'
        }
    },
    computed: {
        stu: {
            get(){
                console.log(this.$el)
                return this.d
            },
            set(val){
                this.d = val
            }
        }
    },
    watch: {
        'msg.a': {
            handler (){
                this.text = '我开始请求了'
            },
            deep: false
        }
    },
    methods:{
        change(){
            this.msg.a = 300
        },
        getData(){
            const _this = this
            axios.get('https://yesno.wtf/api')
            .then(function (response) {
                _this.text = '失败'
            })
            .catch(function (error) {
                _this.text = '失败'
            })
        }
    }
}
</script>

<style>
</style>
