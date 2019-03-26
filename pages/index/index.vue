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
					},
					{
						title:'Request请求',
						name:'basic-request'
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
	page {
	}

	.nav-li {
		color: #fff;
		width: 80%;
		height: 150upx;
		margin-top: 3%;
		padding: 6% 4%;
		margin: 6%;
		display: flex;
		flex-wrap: wrap;
		border-radius: 10upx;
		border-bottom: 1upx solid #ddd;
		background-image: url('https://www.playsort.cn/static/imgs/bg.jpg');
		background-size: cover;
		box-shadow:1upx 2upx 8upx #000;
	}

	.nav-li:first-child {
	}

	.nav-title {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	.nav-name {
		font-weight: bold;
		text-transform: Capitalize;
		text-shadow: 10upx 4upx 12upx #000;
	}

	.nav-name:first-letter {
		color: #17A05D;
	}

	.footer-desc {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10%;
	}

	.desc {
		color: #ddd;
		text-align: center;
		padding: 2%;
		font-size: .8em;
	}

	.line {
		width: 100upx;
		border-bottom: 2upx solid #ddd;
	}
</style>
