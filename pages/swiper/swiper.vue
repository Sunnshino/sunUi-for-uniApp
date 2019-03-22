<template>
	<view>
		<!-- <view class="cu-custom" style="height:{{CustomBar}}px;">
			<view class="cu-bar fixed bg-gradual-pink" style="height:{{CustomBar}}px;padding-top:{{StatusBar}}px;">
				<navigator class='action' open-type="navigateBack" delta="1" hover-class="none">
					<text class='icon-back'></text> 轮播图
				</navigator>
			</view>
		</view> -->
		<view class="cu-bar bg-white">
			<view class='action'>
				<text class='icon-title text-pink'></text> 全屏限高轮播
			</view>
			<view class='action'>
				<switch class='sm' @change='DotStyles'></switch>
			</view>
		</view>
		<swiper class="screen-swiper" :class="DotStyle?'square-dot':'round-dot'" indicator-dots="true" circular="true" autoplay="true"
		 interval="5000" duration="500">
			<swiper-item v-for="(item,index) in 4" :key="index">
				<image :src="'https://image.weilanwl.com/img/4x3-'+(index+1)+'.jpg'" mode='aspectFill'></image>
			</swiper-item>
		</swiper>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-pink'></text> 卡片式轮播
			</view>
		</view>
		<swiper class="card-swiper" :class="DotStyle?'square-dot':'round-dot'" indicator-dots="true" circular="true" autoplay="true"
		 interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in 4" :key='index' :class="cardCur==index?'cur':''">
				<view class='bg-img shadow-blur' :style="'background-image:url(https://image.weilanwl.com/img/4x3-'+(index+1)+'.jpg)'"></view>
			</swiper-item>
		</swiper>

		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-pink'></text> 堆叠式轮播
			</view>
		</view>
		<view class="tower-swiper" @touchmove="towerMove" @touchstart="towerStart" @touchend="towerEnd">
			<view class='tower-item' :class="[item.zIndex==1 ? 'none' : '']" v-for="(item,index) in towerList"  :key='index' :style='"transform: scale("+(0.5+item.zIndex/10)+");margin-left:"+(item.mLeft*100-150)+"upx;z-index:"+item.zIndex+""'>
				<view class='bg-img shadow-blur' :style="'background-image:url('+item.url+')'"></view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				tower: [{
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
				}],
				DotStyle: '',
				towerList: [],
				towerStart: '',
				direction: ''
			};
		},
		onLoad() {
			this.towerSwiper(this.tower);
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			DotStyles(e) {
				this.DotStyle = e.detail.value;
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current;
			},
			// towerSwiper
			// 初始化towerSwiper
			towerSwiper(name) {
				let list = name;
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.towerList = list;
			},

			// towerSwiper触摸开始
			towerStarts(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			towerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			towerEnd(e) {
				let direction = this.direction;
				let list = this.towerList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < list.length; i++) {
						list[i - 1].mLeft = list[i].mLeft
						list[i - 1].zIndex = list[i].zIndex
					}
					list[list.length - 1].mLeft = mLeft;
					list[list.length - 1].zIndex = zIndex;
					this.towerList = list;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = list.length - 1; i > 0; i--) {
						list[i].mLeft = list[i - 1].mLeft
						list[i].zIndex = list[i - 1].zIndex
					}
					list[0].mLeft = mLeft;
					list[0].zIndex = zIndex;
					this.towerList = list;
				}
			}
		}
	}
</script>

<style>

</style>
