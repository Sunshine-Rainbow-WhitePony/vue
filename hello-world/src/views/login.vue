<template>
    <div>
        <input type="text" v-model="userName" placeholder="请输入"/>
        <input type="password" v-model="password" />
        <button @click="handleSubmit">登录</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "login_page",
    data(){
        return{
            userName: "",
            password: ""
        }
    },
    methods:{
        ...mapActions('user',['login']),
        handleSubmit(){
            this.login({
                userName: this.userName,
                password: this.password
            }).then(()=>{
                //$router.push是跳转，里面传入命名路由
                this.$router.push({
                    name: 'home'
                })
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style>
input {
    display: block;
    margin-top: 10px;
}
button{
    margin-top: 10px;
}
</style>
