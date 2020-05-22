const path = require("path");
const resolve = dir => path.join(__dirname,dir);
const BASE_URL = process.env.NODE_ENV === "procution" ? "" : "/";

module.exports = {
	lintOnSave: false,
	// baseUrl: BASE_URL,
	chainWebpack: config => {
		config.resolve.alias
			.set("@", resolve("src"))
	},
	//打包时不生成map文件
	// procutionSourceMap: false,
	//跨域配置
	//告诉开发服务器,将任何未知请求(也就是没有匹配到静态文件的请求)都代理到这个url来满足跨域的需求
	devServer: {
		proxy: 'http://pk.chaoxing.com',
	}
}