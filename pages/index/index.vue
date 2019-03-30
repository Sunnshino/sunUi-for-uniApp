<template>
	<view class="content">
		<navigator open-type="navigate" hover-class='nav-hover' style="animated infinite bounce delay-2s" :url="'../'+item.name+'/'+item.name"
		 v-for="(item,index) in elements" :key="index" class="nav-li">
			<view class="nav-title">{{item.title}}</view>
			<view class="nav-icon">
				<view class="nav-name">{{item.name}}</view>
				<text :class='"icon-"+item.icon' :style="'color:'+item.color"></text>
			</view>
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
						icon: 'star',
						color: '#FFCC00'
					},
					{
						title: '上传图片',
						name: 'up-img',
						icon: 'shangchuantupian_f',
						color: '#1D82FE'
					},
					{
						title: '轮播图',
						name: 'swiper',
						icon: 'gesture_swipe-right-h',
						color: '#FFCD42'
					},
					{
						title: '自定义标签 ',
						name: 'radio-checkbox',
						icon: 'checkboxoutline',
						color: '#1AA034'
					},
					{
						title: '滚动公告',
						name: 'speaker',
						icon: 'gonggao',
						color: '#FFBD18'
					},
					{
						title:'分段器',
						name:'tab',
						icon:''
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
