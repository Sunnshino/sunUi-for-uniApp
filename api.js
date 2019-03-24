/**
 * 主域名地址
 */
const hostDomain = 'https://a11.admin168.net/index.php?m=Api&c=Api&a=';



let api = {
	/**
	 * 静态资源地址
	 */
	static: {
		imageDomain: 'https://dev.xx.com'
	},
	/**
	 * Api接口
	 */
	api: {
		// 主页信息获取
		indexList:'indexList',
		// 测试
		test:'test'
	}
};

for (let key in api.api) {
	api.api[key] = hostDomain + api.api[key];
}
module.exports = api;
