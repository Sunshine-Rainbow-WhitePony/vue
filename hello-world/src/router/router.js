// import text1 from "@/views/text1.vue";

export default [
    /* {
    	path: '/text1',
    	component: text1,
    },
    {
    	path: '/text2',
    	//相对于第一个,这种方法是懒加载,只有访问到这个页面,才会去引入
    	component: () => import('@/views/text2.vue'),
    },
    {
    	//动态路由，name相当于出入text3.vue文件的参数
    	path: '/text3:name',
    	component: () => import('@/views/text3.vue'),
    },
    {
    	//嵌套路由
    	path: '/parent',
    	component: () => import("@/views/parent.vue"),
    	children: [
    		{
    			path: 'child',
    			component: () => import("@/views/child.vue"),
    		}
    	]
    },
    {
    	//命名路由
    	path: '/text3',
    	name: "text3",
    	component: () => import('@/views/text3.vue'),
    },
    {
    	//重定向
    	path: '/main',
    	redirect: to => {
    		console.log(to);
    		// return '/text3';//返回一个路径
    		return {
    			name: 'text3'
    		}
    	}
    }, */
    {
        //命名视图
        path: '/name_view',
        components: {
            dafault: () =>
                import ('@/views/child.vue'),
            email: () =>
                import ('@/views/email.vue'),
            tel: () =>
                import ('@/views/tel.vue'),
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('@/views/home.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ("@/views/login.vue"),
        meta: { //元信息
            title: "登录页"
        },
        //特定页的独享守卫
        beforeEnter: (to, from, next) => {
            //from是上一个页面对象
            //to是当前页面对象
            console.log(from.name);
            console.log(to.name);
            //next必须调用,否则页面无法成功跳转
            next();
        }
    },
    {
        //router传参
        path: '/agru',
        name: "agru",
        component: () =>
            import ('@/views/agru.vue'),
        /* props: {
        	food: "banana"
        }, */
        //也用函数返回,({})是箭头函数返回对象的简写,相当于{ return {} }
        props: route => {
            console.log(route)
        }
    },
    {
        path: '/child',
        name: 'child',
        component: () =>
            import ('@/views/child.vue')
    },
    {
        path: '/store',
        name: 'store',
        component: () =>
            import ('@/views/store.vue')
    },
    {
        path: '/email',
        // name: 'email',
        component: () =>
            import ('@/views/email.vue')
    },
    {
        path: '/tel',
        name: 'tel',
        component: () =>
            import ('@/views/tel.vue')
    },
    {
        path: '/count-to',
        name: 'count_to',
        component: () =>
            import ('@/views/count-to.vue')
    },
    {
        path: '/menu_page',
        name: 'menu_page',
        component: () =>
            import ('@/views/menu-page.vue')
    },
    {
        path: '/split-pane',
        name: 'split_pane',
        component: () =>
            import ('@/views/split-pane.vue')
    },
    {
        path: '/render_page',
        name: 'render_page',
        component: () =>
            import ('@/views/render_page.vue')
    },
    /* {
    	//对应router/index.js文件中配置的mode: "history"模式,当地址栏的地址找不到的时候,跳转到child.vue(一般是自己写的404页面)
    	//这个一定要写到最后,因为这个配置的优先级是从上到下,越上边的优先级高
    	path: "*",
    	component: () => import('@/views/child.vue')
    } */

]