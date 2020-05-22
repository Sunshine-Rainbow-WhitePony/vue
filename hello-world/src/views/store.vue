<template>
	<div>
		<a-input :value="stateValue" @input="handleInput"/>
		<p>stateValue:{{stateValue}}</p>
		<!-- <p>{{ inputValue }} -> lastLetter is {{ inputValuelastLetter }}</p>
		<a-show :content="inputValue"/>
		<p>appName: {{ appName }}</p>
		<p>appVersion: {{ appVersion }} </p>
		<p>firstLetter: {{ firstLetter }}</p>
		<button @click="handleChangeAppName">修改appName</button>
		<p>{{ userName }}</p>
		<button @click="handleChangeUserName">修改userName</button>
		<button @click="registerModule">动态注册模块</button>
		<p v-for="(li,index) in todoList" key= "index">{{ li }}</p> -->
	</div>
</template>

<script>
	import AInput from '@/components/Ainput.vue';
	import AShow from '@/components/AShow.vue';
	import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
	
	export default {
		name:"store",
		data () {
			return {
				inputValue: '',
			}
		},
		components:{
			AInput,
			AShow
		},
		computed:{
			//1.原始写法，直接获取state的值
			/* appVersion(){
				return this.$store.state.appVersion
			}, */
			
			// ...mapState(['appName','appVersion']),//效果与上方代码一样，这里...是展开操作符
			//还可以传对象，state是根目录中state，就是store文件夹中的state.js
			...mapState('user',{
				userName: state => state.userName
			}),
			
			...mapState({
				appName: state => state.appName,
				appVersion: state => state.appVersion,
				todoList: state => state.todo ? state.todo.todoList : [],
				// stateValue: state => state.stateValue,
			}),
			
			stateValue: {
				get (){
					return this.$store.state.stateValue;
				},
				set (val){
					this.SET_STATE_VALUE(val);
				}
			},
			
			//2.
			/* appNameWithVersion () {
				return this.$store.getters.appNameWithVersion
			}, */
			// ...mapGetters(['appNameWithVersion']);
			
			/* firstLetter (){
				return this.userName.substr(0,1)
			} */
			...mapGetters('user',['firstLetter'])//mapGetters相较于上边的方法，优势是可以用于多个组件，上边的只能通过传值到别的组件
		},
		methods: {
			handleInput (val) {
				console.log(val);
				this.SET_STATE_VALUE(val);
			},
			...mapMutations(['SET_APP_NAME','SET_STATE_VALUE']),
			...mapMutations('user',['SET_USER_NAME']),
			...mapActions(['updateAppName']),
			handleChangeAppName() {
				// this.appName = "newName";//会报错，因为appName是计算属性，默认有getter方法，当访问这个属性时调用，但是没有setter方法，想改变它的值就要定义setter方法
				// this.$store.commit('SET_APP_NAME','newName');//第一个参数是个方法，是通过这个方法来修改值，定义在mutation.js中
				/* this.$store.commit({
					type: 'SET_APP_NAME',
					appName: 'newName'
				}); */
				// this.SET_APP_NAME('newName');
				/* this.SET_APP_NAME({
					appName: 'newName'
				}); */
				// this.$store.commit('SET_APP_VERSION');
				// this.updateAppName()
				this.$store.dispatch('updateAppName')
			},
			handleChangeUserName(){
				this.SET_USER_NAME('vue-cource');
			},
			registerModule () {
				this.$store.registerModule('todo',{
					state: {
						todoList: ['学习mutation','学习actions']
					}
				})
			}
		}
	}
</script>

<style>
</style>
