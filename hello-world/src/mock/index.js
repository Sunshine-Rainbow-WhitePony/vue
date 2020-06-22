import Mock from 'mockjs'
import { getUserInfo } from './response/user'

const Random = Mock.Random;

//当拦截到这个请求地址，就会调用getUserInfo方法
Mock.mock(/\/schedule\/subject\/getData/, "post", getUserInfo)

Mock.setup({
    timeout: 0
})

Random.extend({
    fruit() {
        const fruit = ['apple', 'banana', 'orange', 'lemon']
        return this.pick(fruit);
    }
})

export default Mock