//这个函数会在store实例初始化的时候调用
export default store => {
	//刷新浏览器后第一就执行的操作可以放到这里
	console.log('store初始化了')
	// if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
	
	//当每次提交mutation之后,都会执行subscribe中的回调函数
	//mutations就是本次提交mutation的信息
	//state是当前模块的state
	store.subscribe((mutations,state) => {
		console.log('提交mutation')
		localStorage.state = JSON.stringify(state);
	})
}