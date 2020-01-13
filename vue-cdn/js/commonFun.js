//折叠面板组件
Vue.component("Panel", {
	props: ['name'],
	template: `<div>
				<div class="panel" @click="ifshow">
					<span>{{ name }}</span>
				</div>
				<slot></slot>
			   </div>`,
	data: function() {
		return {
			flag: false
		}
	},
	beforeCreate() {
		console.log("1:"+this.flag);
		console.log(this.$root.tabFlag);
	},
	created() {
		console.log("2:"+this.flag);
	},
	beforeMount() {
		console.log("3:"+this.flag);
	},
	mounted() {
		console.log("4:"+this.flag);
	},
	beforeUpdate() {
		console.log("5:"+this.flag);
	},
	updated() {
		console.log("6:"+this.flag);
	},
	methods: {
		ifshow: function() {
			this.flag = !this.flag;
			this.$emit('flag', this.flag);
		}
	}

});

Vue.component("pa-content", {
	props: ['text'],
	template: `<div messge="$parent.flag" class="item">{{ text }}</div>`, //messge中接收到来自父级得数据flag
	data: function() {
		return {

		}
	},
});

//组件2
Vue.component("Panel2", {
	props: {
		paneldata: Array
	},
	template: `<div>
					<div v-for="(item,index) in paneldata" :key="index">
						<div class="panel" @click="item.isShow = !item.isShow">{{item.name}}</div>
						<div class="level2" :class="{slideUp: !item.isShow}" :style="{height: item.data.length*40 + 'px'}">
							<div v-for="e in item.data">
								<div class="item">{{ e.value }}</div>
							</div>
						</div>
				   </div>
			   </div>`,
	data: function() {
		return {
			flag: false
		}
	},
});

Vue.component('base-tem', {
	props: ['todos'],
	computed: {
		inputListeners: function() {}
	},
	template: `
    <ul>
		<li v-for="(todo,i) in todos" :key="i">
			<slot :todo="todo">
				{{todo.value}}
			</slot>
		</li>
    </ul>
  `,
	data: function() {
		return {

		}
	}
})

Vue.component('tem1', {
	template: `
		<div>内容1</div>
  `
})

Vue.component('tem2', {
	template: `
		<div>内容2</div>
  `
})

Vue.component('tem3', {
	template: `
		<div>内容3</div>
  `
})

var myVue = new Vue({
	el: "#vue",
	data: {
		tabFlag: 0,
		switchFlag: true,
		selectList: [{
				key: 1,
				value: "下拉选项1",
			},
			{
				key: 2,
				value: "下拉选项2",
			},
			{
				key: 3,
				value: "下拉选项3",
			},
			{
				key: 4,
				value: "下拉选项4",
			},
		],
		selectConShow: false,
		selectText: "",
		/**表格*/
		tableHead: ["学科", "课时", "是否为单双周", "操作"],
		tableData: "",
		menuData: [{
				id: 1,
				name: "一级面板",
				isShow: false,
				data: [{
						href: "",
						value: "周九良"
					},
					{
						href: "",
						value: "周九良"
					},
					{
						href: "",
						value: "周九良"
					},
					{
						href: "",
						value: "周九良"
					},
					{
						href: "",
						value: "周九良"
					}
				]
			},
			{
				id: 2,
				name: "一级面板",
				isShow: false,
				data: [{
						href: "",
						value: "张九龄"
					},
					{
						href: "",
						value: "张九龄"
					},
					{
						href: "",
						value: "张九龄"
					},
				]
			}
		],
		firstName: "li",
		lastName: "meina",
		animateShow: true,
		panelShow: "",

		/* 练习 */
		todos: [{
				value: 1,
				iscomplete: true,
			},
			{
				value: 2,
				iscomplete: true,
			},
			{
				value: 3,
				iscomplete: true,
			},
			{
				value: 4,
				iscomplete: true,
			},
		],
		currentView: 'tem1'
	},
	methods: {
		isShow: function(item) {
			this.panelShow = item;
		},
		deleteRow: function(id) {
			var this_ = this;
			this.tableData.forEach(function(e, i) {
				if (e.id === id) {
					this_.tableData.splice(i, 1);
					return false;
				}
			})
		},
		editVal: function() {
			this.firstName = "li";
			this.lastName = "tina";
		},
		onFocus: function(e) {
			console.log('ok');
		}
	},
	filters: {
		handleAlter: function(value) {
			switch (value) {
				case 0:
					return "否";
				case 1:
					return "单";
				case 2:
					return "双";
			}
		}
	},
	computed: {
		fullName: {
			get: function() {
				return this.firstName + " " + this.lastName;
			},
			set: function(newVal) {
				let nameArr = newVal.split(" ");
				this.firstName = nameArr[0];
				this.lastName = nameArr[1];
			}
		}
	},
	created() {
		//		console.log(this.$refs.nnpanel);
	},
	mounted() {
		//参数
		// let params = new FormData();
		// params.append("", 2);
		let _this = this;
		axios
			.get('../data/data.json')
			.then(response => {
				if (response.data.status) {
					_this.tableData = response.data.info;
				}
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {

			})

		/* 替代方案fetch */
		/*fetch("http://192.168.98.103/studies/work/info", {
		    method: "post",
		    headers: {
		        'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(params)
		}).then(result => {
		    console.log(result);
		}).then(data => {
		    console.log(data);
		}).catch(error => console.log('error is', error)); */
	},
})
