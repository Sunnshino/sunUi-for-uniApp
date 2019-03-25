<template>
	<view>
		<view>
			<!-- 不会覆盖限制上传图片数量（也就是count参数生效），notli默认false -->
			<view class="sun-title">上传图片</view>
			<sunui-upimg :upImgConfig="upImgConfig" @onUpImg="upImgData" />
			<!-- 会覆盖限制上传图片数量（也就是count参数失效），notli默认false -->
			<sunui-upimg :upImgConfig="upImgConfig1" @onUpImg="upImgDatas" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/**
				 * 图片上传配置项1
				 */
				upImgConfig: {
					// 后端图片接口地址
					url: 'https://j.dns06.net.cn/index.php?m=Api&c=index&a=uploadDownwind',
					// 是否开启notli(即选择完直接上传)
					notli: false,
					// 图片数量
					count: 2,
					// 新增上传背景修改
					bgColor: '#0089FC',
					// 新增上传icon图标颜色修改
					iconColor: '#fff',
					// 上传文字描述(仅限四个字)
					text: '添加图片'
				},
				/**
				 * 图片上传配置项2
				 */
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

</style>
