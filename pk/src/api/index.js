// 接口文件
import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3000' // 增加默认请求路径

// axios 数据拦截处理
axios.interceptors.response.use((res) => {
  return res.data
});

// 请求数据链接 
  //  export let commonUrl = "http://xyhd.chaoxing.com:8086/"; // 测试地址  
  // export let commonUrl = "http://xyhd.chaoxing.com/"; // 线上地址
//export let commonUrl = "http://120.131.6.133:8086/"; // 线上上传地址
//  export let commonUrl = "https://xyhd.chaoxing.com/"; // 测试链接
  export let commonUrl = "/"; // 测试地址 / 线上地址
  //  export let commonUrl = "http://192.168.98.230:80/"; // 测试地址 / 线上地址
// 获取活动列表数据
export let getData = (url,params) => {
  return axios.post(url, params);
  // return axios.get("https://www.easy-mock.com/mock/5b7660bb76a41b2c09dbf28b/pcActiveList/pcActiveList#!method=get");
};

