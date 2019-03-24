<!-- 
	icon: 即滚动图标 
	msgs：即滚动数据
	vertical：是否横轴滚动,默认true
	interval：总执行时长(默认5000ms=5s)
 -->



<template>
	<view class="ab-center">
		<!-- 横轴滚动 -->
		<colorui-speaker :icon="icon" :msgs="speakrmsg"></colorui-speaker>

		<view style="margin-top:3%;"></view>

		<!-- 纵轴滚动 -->
		<colorui-speaker :vertical="false" :interval="5000" :icon="icon" :msgs="speakrmsg"></colorui-speaker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon: 'https://www.playsort.cn/img/audio.png',
				speakrmsg: [{
						title: "小米出现澎湃S1哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈00000000000000000000000000",
						url: "../index/hw"
					},
					{
						title: "华为麒麟980",
						url: "../index/xm"
					},
					{
						title: "China",
						url: "../index/bg"
					}
				]
			};
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
</style>
