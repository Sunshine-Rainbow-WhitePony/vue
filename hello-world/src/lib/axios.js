//封装axios
import axios from 'axios'
import { baseURL } from '@/config'

class HttpRequest {
    //构造方法
    constructor(baseUrl = baseURL) { //es6写法:参数这里设置了一个默认值,如果调用的时候没有传入值,则用默认值,如果传入值了,则用传入的值
        this.baseUrl = baseUrl //this指代要创建的实例
        this.queue = {}
    }

    //返回内部的配置
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            headers: {
                //添加header
            }
        }
        return config
    }

    //拦截器
    interceptors(instance) {
        //添加一个请求拦截器
        instance.interceptors.request.use(config => {
            //添加全局的loading……

            //Spin是iview组件的loading,这个组件有个遮罩层,这里调用显示之后,页面是无法点击的
            //这里判断queue栈中是否还有请求,如果没有,则这次请求时,让Spin组件显示,如果有,Spin已经显示了,不需再次执行显示
            if (!Object.keys(this.queue).length) {
                // Spin.show()
            }
            this.queue.url = true //将当前请求放入queue栈中
            return config //把config return出去,它的请求就会继续
        }, error => {
            return Promise.reject(error);
        })

        //添加一个响应拦截器
        instance.interceptors.response.use(res => {
            delete this.queue.url //删掉queue栈中请求
            const { data, status } = res
            return { data, status }
        }, error => {
            delete this.queue.url //删掉queue栈中请求
            return Promise.reject(error);
        })
    }

    request(options) {
        const instance = axios.create() //创建一个axios实例
        options = Object.assign(this.getInsideConfig(), options) //把两个对象合并成一个对象,如果两个对象有相同的属性,那么后边的对象的属性值覆盖前边对象的属性值
        this.interceptors(instance)
            // options.url = this.baseUrl + options.url
        return instance(options) //返回实例
    }
}

export default HttpRequest