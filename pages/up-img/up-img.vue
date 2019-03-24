<template>
	<view>
		<view>
			<colorui-upimg :upImgConfig="upImgConfig" @onUpImg="upImgData" />
			<!-- 会覆盖限制上传图片数量（也就是count参数失效），notli默认false -->
			<colorui-upimg :upImgConfig="upImgConfig1" @onUpImg="upImgDatas" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				upImgConfig: {
					// 后端图片接口地址
					url: 'https://j.dns06.net.cn/index.php?m=Api&c=index&a=uploadDownwind',
					// 是否开启notli(即选择完直接上传)
					notli: false,
					// 图片数量
					count: 2
				},
				upImgConfig1: {
					// 后端图片接口地址
					url: 'https://j.dns06.net.cn/index.php?m=Api&c=index&a=uploadDownwind',
					// 是否开启notli(即选择完直接上传)
					notli: true,
					// 图片数量(count参数失效)
					count: 2
				}
			};
		},
		methods: {
			//获取上传图片的所有信息,为数组
			upImgData(e) {
				console.log('来了,伙计1', e)
			},
			//获取上传图片的所有信息,为数组
			upImgDatas(e) {
				console.log('来了,伙计2', e)
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}
</style>
