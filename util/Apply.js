/**
 * 关于支付,因未开发过uniapp(暂未封装)!
 * https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment
 * 
 * 仅供测试h5、微信小程序支付
 */



/**
 * 微信小程序支付,仅支持微信支付(后续可能集成网页支付宝支付web-view)
 *
 * @param : provider(String) ->付款商家
 * @param : timeStamp(String) ->时间戳(当前支付时间)
 * @param : nonceStr(String) ->支付密匙
 * @param : packages(String) ->支付id
 * @param : signType(String) ->加密方式(默认MD5)
 * @param : paySign(String)
 *
 *
 *
 * 小程序支付调用(参数顺序无所谓!!!)
 *
 * appletsApply(provider, timeStamp, nonceStr, packages, signType, paySign,res=>{},fail=>{})
 */

const appletsApply = ({
	provider,
	timeStamp,
	nonceStr,
	packages,
	signType,
	paySign,
	success,
	fail
}) => (
	uni.requestPayment({
		provider,
		timeStamp,
		nonceStr,
		package: packages,
		signType,
		paySign,
		success(res) {
			typeof success == 'function' && success(JSON.stringify(res));
		},
		fail(err) {
			typeof fail == 'function' && fail(JSON.stringify(err));
		}
	});
)


/*
    微信公众号支付方法(uni-app h5)适用:https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
    获取微信加签信息
    @param{data}:获取的微信加签
    @param{res}:成功回调
    @param{fail}:失败回调     
    @warn:因为package为严格模式下的保留字，不能用作变量.
	
	
	publicApply({
		
	},res=>{
		
	},fail=>{
		
	})
	
*/

const wx = require('jweixin-module'); // 注意npm 安装 jweixin-module
const publicApply = (data, cb, errorCb) => {

	let [appId, timestamp, nonceStr, signature, packages, paySign] = [data.appId, data.timeStamp, data.nonceStr, data.signature,
		data.package, data.paySign
	];

	wx.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId, // 必填，公众号的唯一标识
		timestamp, // 必填，生成签名的时间戳
		nonceStr, // 必填，生成签名的随机串
		signature, // 必填，签名，见附录1
		jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});

	wx.ready(() => {
		wx.chooseWXPay({
			timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
			nonceStr, // 支付签名随机串，不长于 32 位
			'package': packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
			signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
			paySign, // 支付签名
			success(res) {
				typeof cb == 'function' && cb(res);
			},
			fail(res) {
				typeof errorCb == 'function' && errorCb(res);
			}
		});
	});

	wx.error((res) => {
		// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
	});
}


module.exports = {
	publicApply,
	appletsApply
}
