<template name="sunui-swiper">
	<view>

		<swiper class="card-swiper" indicator-dots="true" circular="true" autoplay="true"
		 interval="5000" duration="500" @change="cardChange" indicator-color="#8799a3" indicator-active-color="#0081ff" previous-margin="100upx" next-margin="100upx" display-multiple-items="1" v-if="swiperConfig.type=='card'">
			<swiper-item v-for="(item,index) in swiperConfig.data" :key='index' :class="cardCur==index?'cur':''">
				<image :src="item[swiperConfig.url]" mode='widthFix'></image>
			</swiper-item>
		</swiper>

		<swiper class="screen-swiper"  circular="true" autoplay="true" interval="5000"
		 duration="500" v-else-if="swiperConfig.type=='text'">
			<swiper-item v-for="(item,index) in swiperConfig.data" :key="index">
				<view class="sunui-swiper">
					<image :src="item[swiperConfig.url]" mode='widthFix'></image>
					<view class="title">{{item[swiperConfig.title]}}</view>
				</view>
			</swiper-item>
		</swiper>

		<swiper class="screen-swiper" indicator-dots="true" circular="true"
		 autoplay="true" interval="5000" duration="500" v-else>
			<swiper-item v-for="(item,index) in swiperConfig.data" :key="index">
				<image :src="item[swiperConfig.url]" mode='widthFix'></image>
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
		name: 'sunui-swiper',
		methods: {
			DotStyles(e) {
				this.DotStyle = e.detail.value;
			},
			cardChange(e){
				console.log(e)
			}
		}
	}
</script>

<style scoped>
	page {
		background-color: #fff;
	}

	swiper {
		height: 350upx;
	}

	image {
		width: 100%;
		height: 100%;
	}
	
	.sun-title{
		margin-bottom: 3%;
	}
	
	.card-swiper image{
		margin:5%;
	}
	
	.card-swiper+.checkd{
		transform: scale(1.2);
	}

	.sunui-swiper {
		position: relative;
		height: 100%;
	}

	.sunui-swiper .title {
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
