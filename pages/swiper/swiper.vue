<template>
	<view>
		<view class="sun-title">basic</view>
		<sunui-swiper :swiperConfig="swiperConfig"></sunui-swiper>
		<view class="sun-title">text</view>
		<sunui-swiper :swiperConfig="swiperConfig1"></sunui-swiper>
		<view class="sun-title">card</view>
		<sunui-swiper :swiperConfig="swiperConfig2"></sunui-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/**
				 * 轮播图仅支持以下参数
				 * 
				 * type: basic,text,card(basic是最常见的,text是加了文字描述的,而card是卡片式轮播) > String类型
				 * url：后端传过来的图片url地址,如果为urls可以更改为urls或其它 url:'urls',默认url:'url'
				 * title：后端传过来的文字描述,默认为空. 
				 * data:为模拟数据,这个数据可以由接口传输过来
				 * 
				 * 具体可以看模拟数据！
				 */
				swiperConfig: {
					// type为动态value
					type: 'basic',
					// url为动态value
					url: 'url',
					// title为动态value
					title: 'text',
					data: [{
						id: 0,
						url: 'https://image.weilanwl.com/img/4x3-1.jpg',
						text: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello'
					}, {
						id: 1,
						url: 'https://image.weilanwl.com/img/4x3-2.jpg',
						text: 'sunUi'
					}, {
						id: 2,
						url: 'https://image.weilanwl.com/img/4x3-3.jpg',
						text:'Welocme'
					}, {
						id: 3,
						url: 'https://image.weilanwl.com/img/4x3-4.jpg',
						text:'useUniapp'
					}]
				},
				swiperConfig1: {
					// type为动态value
					type: 'text',
					// url为动态value
					url: 'url',
					// title为动态value
					title: 'text',
					data: [{
						id: 0,
						url: 'https://image.weilanwl.com/img/4x3-1.jpg',
						text: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello'
					}, {
						id: 1,
						url: 'https://image.weilanwl.com/img/4x3-2.jpg',
						text: 'sunUi'
					}, {
						id: 2,
						url: 'https://image.weilanwl.com/img/4x3-3.jpg',
						text:'Welocme'
					}, {
						id: 3,
						url: 'https://image.weilanwl.com/img/4x3-4.jpg',
						text:'useUniapp'
					}]
				},
				swiperConfig2: {
					// type为动态value
					type: 'card',
					// url为动态value
					url: 'url',
					// title为动态value
					title: 'text',
					data: [{
						id: 0,
						url: 'https://image.weilanwl.com/img/4x3-1.jpg',
						text: 'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello'
					}, {
						id: 1,
						url: 'https://image.weilanwl.com/img/4x3-2.jpg',
						text: 'sunUi'
					}, {
						id: 2,
						url: 'https://image.weilanwl.com/img/4x3-3.jpg',
						text:'Welocme'
					}, {
						id: 3,
						url: 'https://image.weilanwl.com/img/4x3-4.jpg',
						text:'useUniapp'
					}]
				}


			}
		},
		onLoad() {}
	}
</script>

<style>
	page {
		background-color: #fff;
	}
</style>
