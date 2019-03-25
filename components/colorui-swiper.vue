<template name="colorui-swiper">
	<view>

		<swiper class="card-swiper" :class="DotStyle?'square-dot':'round-dot'" indicator-dots="true" circular="true" autoplay="true"
		 interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff" v-if="swiperConfig.type=='card'">
			<swiper-item v-for="(item,index) in swiperConfig.data" :key='index' :class="cardCur==index?'cur':''">
				<view class='bg-img shadow-blur' :style="'background-image:url('+(item[swiperConfig.url])+')'"></view>
			</swiper-item>
		</swiper>

		<swiper class="screen-swiper" :class="DotStyle?'square-dot':'round-dot'" circular="true" autoplay="true" interval="5000"
		 duration="500" v-else-if="swiperConfig.type=='text'">
			<swiper-item v-for="(item,index) in swiperConfig.data" :key="index">
				<view class="colorui-swiper">
					<image :src="item[swiperConfig.url]" mode='aspectFill'></image>
					<view class="title">{{item[swiperConfig.title]}}</view>
				</view>
			</swiper-item>
		</swiper>

		<swiper class="screen-swiper" :class="DotStyle?'square-dot':'round-dot'" indicator-dots="true" circular="true"
		 autoplay="true" interval="5000" duration="500" v-else>
			<swiper-item v-for="(item,index) in swiperConfig.data" :key="index">
				<image :src="item[swiperConfig.url]" mode='aspectFill'></image>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				DotStyle: true,
				towerList: [],
				towerStart: '',
				direction: ''
			};
		},

		props: {
			swiperConfig: {
				type: Object,
				default: function() {
					return {
						type: 'basic',
						url: 'url',
						title: '',
						data: [{
							id: 0,
							url: 'https://image.weilanwl.com/img/4x3-1.jpg'
						}, {
							id: 1,
							url: 'https://image.weilanwl.com/img/4x3-2.jpg'
						}, {
							id: 2,
							url: 'https://image.weilanwl.com/img/4x3-3.jpg'
						}, {
							id: 3,
							url: 'https://image.weilanwl.com/img/4x3-4.jpg'
						}, {
							id: 4,
							url: 'https://image.weilanwl.com/img/4x3-2.jpg'
						}, {
							id: 5,
							url: 'https://image.weilanwl.com/img/4x3-4.jpg'
						}, {
							id: 6,
							url: 'https://image.weilanwl.com/img/4x3-2.jpg'
						}]
					}
				}
			}
		},

		created() {},
		name: 'colorui-swiper',
		methods: {
			DotStyles(e) {
				this.DotStyle = e.detail.value;
			},
			cardSwiper(e) {
				this.cardCur = e.detail.current;
			},
			towerSwiper(name) {
				let list = name;
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.towerList = list;
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.colorui-swiper {
		position: relative;
		height: 100%;
	}

	.colorui-swiper .title {
		width: 100%;
		color: #fff;
		padding: 3%;
		background-color: rgba(0, 0, 0, .5);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		position: absolute;
		bottom: 0;
	}

	.screen-swiper>swiper-item {
		width: 100%;
	}
</style>
