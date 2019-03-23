<template>
	<view>
		<colorui-star @change="starInfo" :colorStar="colorStar">
			<view class="m-2">禁用-不可点击</view>
		</colorui-star>

		<colorui-star @change="starInfo" :colorStar="colorStar1">
			<view class="m-2">禁用-展示评级</view>
		</colorui-star>

		<colorui-star @change="starInfo" :colorStar="colorStar2">
			<view class="m-2">启用-可评级</view>
		</colorui-star>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				colorStar: {
					disabled: true,
					rate: 1,
					icon: 'star',
					tips: false,
					tipsArr: ['很差', '差', '一般', '好', '非常好']
				},
				colorStar1: {
					disabled: true,
					rate: 2,
					icon: 'star',
					tips: true,
					tipsArr: ['很差', '差', '一般', '好', '非常好']
				},
				colorStar2:{
					disabled: false,
					rate: 2,
					icon: 'star',
					tips: true,
					tipsArr: ['很差', '差', '一般', '好', '非常好']
				}
			};
		},
		methods: {
			starInfo(e) {
				console.log('星级评分:', e)
			}
		}
	}
</script>

<style>
	.m-2 {
		margin: 2% 0;
		padding: 2% 0;
		border-bottom: 1upx solid #ddd;
	}
</style>
