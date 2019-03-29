<template>
	<view>
		<view>
			<!-- 不会覆盖限制上传图片数量（也就是count参数生效），notli默认false -->
			<view class="sun-title">上传图片</view>
			<sunui-upimg :upImgConfig="upImgConfig" @onUpImg="upImgData" ref="uImage" />
			<!-- <button type="primary" @tap="uImageTap">上传图片</button> -->
			<button type="primary" @tap="getUpImgInfo">获取上传图片信息</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/**
				 * 图片上传配置项
				 * 
				 * 关于阿里云oos,开启oos的话(需要配置./ali-oos/config.js的配置项)
				 */
				upImgConfig: {
					// 是否阿里云oos且oos地址必须是https
					oos: true,
					// 阿里云oos上传key_secret(后端传)
					AccessKeySecret: 'zmOJcaqKJB5e4gqtLunHcNoMBTdDgp',
					// 阿里云oos上传key_id(后端传)
					OSSAccessKeyId: 'LTAIPcJL9J5OZr2G',
					// 阿里云oos上传目录(必须存在)
					oosDirectory: 'mifanimg',

					// 后端图片接口地址(阿里云开启oos的话就填写阿里云上传服务器url：http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/否则的话写自己后端上传图片地址，注意把oos置为false!!!)
					url: 'http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/',
					// 是否开启notli(即选择完直接上传)
					notli: false,
					// 图片数量
					count: 2,
					// 新增上传背景修改
					bgColor: '#0089FC',
					// 新增上传icon图标颜色修改
					iconColor: '#fff',
					// 上传文字描述(仅限四个字)
					text: '上传图片',
					// 删除图标定义背景颜色
					delIconColor: '',
					// 删除图标字体颜色
					delIconText: '',
					// 上传图标替换(+),是个http,https图片地址(https://www.playsort.cn/right.png)
					iconReplace: ''
				},
				imgArr: []
			};
		},
		methods: {
			// 上传图片(2019/3/29新增) -> 手动上传(需要传入上传url,还需要搭配count参数使用!)
			uImageTap(e) {
				this.$refs.uImage.uploadimage('http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/');
			},
			//获取上传图片返回来的数组(Step1)
			upImgData(e) {
				// 上传图片数组
				let arrImg = [];
				for (let i = 0, len = e.length; i < len; i++) {
					if (e[i].path_server != "") {
						arrImg.push(e[i].path_server.split(','));
					}
				}
				// 图片信息保存到data数组
				this.imgArr = arrImg;
			},
			// 获取上传图片的所有信息(Step2)
			getUpImgInfo() {
				console.log('转成多维数组:', this.imgArr);
				console.log('转成一维数组:', this.imgArr.join().split(','));
			}
		}
	}
</script>

<style>
</style>
