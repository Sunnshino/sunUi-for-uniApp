<template>
	<view class="content">
		<navigator open-type="navigate" hover-class='nav-hover' style="animated infinite bounce delay-2s" :url="'../'+item.name+'/'+item.name" v-for="(item,index) in elements"
		 :key="index" class="nav-li" :class='"bg-"+item.color'>
			<view class="nav-title">{{item.title}}</view>
			<view class="nav-name">{{item.name}}</view>
			<text :class='"icon-"+item.icon'></text>
		</navigator>

		<view class="footer-desc">
			<view class="line"></view>
			<view class="desc">其它待开发...</view>
			<view class="line"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				elements: [{
						title: '星级评价',
						name: 'star',
					},
					{
						title: '上传图片',
						name: 'up-img',
					},
					{
						title: '轮播图',
						name: 'swiper',
					},
					{
						title: '自定义标签 ',
						name: 'radio-checkbox',
					},
					{
						title: '滚动公告',
						name: 'speaker'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
