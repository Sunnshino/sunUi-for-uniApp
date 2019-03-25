<template>
	<view>
		<view class="sun-title">星级评价(禁用)</view>
		<sunui-star @change="starInfo" :sunStar="sunStar"></sunui-star>

		<view class="sun-title">星级评价(禁用-展示评价)</view>
		<sunui-star @change="starInfo" :sunStar="sunStar1">
		</sunui-star>

		<view class="sun-title">星级评价(启用)</view>
		<sunui-star @change="starInfo" :sunStar="sunStar2">
		</sunui-star>
		
		<view class="sun-title">星级评价(启用-展示评价)</view>
		<sunui-star @change="starInfo" :sunStar="sunStar3">
		</sunui-star>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				sunStar: {
					disabled: true,
					rate: 1,
					icon: 'star',
					tips: false,
					tipsArr: ['很差', '差', '一般', '好', '非常好']
				},
				sunStar1: {
					disabled: true,
					rate: 2,
					icon: 'star',
					tips: true,
					tipsArr: ['很差', '差', '一般', '好', '非常好']
				},
				sunStar2: {
					disabled: false,
					rate: 2,
					icon: 'star',
					tips: false,
					tipsArr: ['很差', '差', '一般', '好', '非常好']
				},
				sunStar3: {
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

</style>
