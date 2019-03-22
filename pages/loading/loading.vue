<template>
	<view>
		<!-- <view class="cu-custom" style="height:{{CustomBar}}px;">
			<view class="cu-bar fixed bg-gradual-blue" style="height:{{CustomBar}}px;padding-top:{{StatusBar}}px;">
				<navigator class='action' open-type="navigateBack" delta="1" hover-class="none">
					<text class='icon-back'></text> 加载
				</navigator>
				<view class='action'>
					<view class="cu-load load-icon {{!isLoad?'loading':'over'}}"></view>
				</view>
			</view>
		</view> -->
		<view class="cu-bar bg-white">
			<view class='action'>
				<text class='icon-title text-blue'></text>背景
			</view>
		</view>
		<view class="cu-load bg-blue" :class="!isLoad?'loading':'over'"></view>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-blue'></text>加载状态
			</view>
			<view class='action'>
				<switch class='sm' @change='isLoading'></switch>
			</view>
		</view>
		<view class="cu-load bg-grey" :class="!isLoad?'loading':'over'"></view>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-blue'></text>加载错误
			</view>
		</view>
		<view class="cu-load bg-red erro"></view>

		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-blue'></text>弹框加载
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap='mloadModal'>
					点我
				</button>
			</view>
		</view>
		<view class='cu-load load-modal' v-if="loadModal">
			<!-- <view class='icon-emojifill text-orange'></view> -->
			<image src='../../static/images/logo.png' class='png' mode='aspectFit'></image>
			<view class='gray-text'>加载中...</view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-blue'></text>进度条加载
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap='mloadProgress'>
					点我
				</button>
			</view>
		</view>
		<view class='load-progress' :class="loadProgress!=0?'show':'hide'">
			<view class='load-progress-bar bg-green' :style="'transform: translate3d(-'+100-loadProgress+'%, 0, 0)'"></view>
			<view class='load-progress-spinner text-green'></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLoad: '',
				loadModal: false,
				loadProgress: 0
			};
		},
		methods: {
			isLoading(e) {
				this.isLoad = e.detail.value
			},
			mloadModal() {
				this.loadModal = true
				setTimeout(() => {
					this.loadModal = false
				}, 2000)
			},
			mloadProgress() {
				this.loadProgress = this.loadProgress + 3
				if (this.loadProgress < 100) {
					setTimeout(() => {
						this.mloadProgress();
					}, 100)
				} else {
					this.loadProgress = 0
				}
			}
		}
	}
</script>

<style>

</style>
