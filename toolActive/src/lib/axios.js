//封装axios
import axios from 'axios'
import { baseURL } from '@/config'

class HttpRequest {
    //构造方法
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
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

        instance.interceptors.request.use(config => {
            return config
        }, error => {
            return Promise.reject(error);
        })

        //添加一个响应拦截器
        instance.interceptors.response.use(res => {
            const { data } = res
            return data
        }, error => {
            return Promise.reject(error);
        })
    }

    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance)
            // options.url = this.baseUrl + options.url
        return instance(options)
    }
}

export default HttpRequest