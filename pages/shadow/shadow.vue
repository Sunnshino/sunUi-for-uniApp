<template>
	<view>
		<!-- <view class="cu-custom" style="height:{{CustomBar}}px;">
			<view class="cu-bar fixed bg-gradual-blue" style="height:{{CustomBar}}px;padding-top:{{StatusBar}}px;">
				<navigator class='action' open-type="navigateBack" delta="1" hover-class="none">
					<text class='icon-back'></text> 边框阴影
				</navigator>
			</view>
		</view> -->
		<view class="cu-bar bg-white solid-bottom">
			<view class='action'>
				<text class='icon-title text-blue'></text>边框
			</view>
			<view class='action'>
				<switch class='sm' @change='SetSize'></switch>
			</view>
		</view>
		<view class='padding bg-white text-center'>
			<view class='padding' :class="size?'solids':'solid'+'-top'">四周</view>
			<view class='padding margin-top' :class="size?'solid':'solid-top'">上</view>
			<view class='padding margin-top' :class="size?'solid':'solid-right'">右</view>
			<view class='padding margin-top' :class="size?'solid':'solid-bottom'">下</view>
			<view class='padding margin-top' :class="size?'solid':'solid-left'">左</view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-blue'></text>阴影
			</view>
		</view>
		<view class="padding text-center">
			<view class="padding-xl radius shadow bg-white"> 默认阴影</view>
			<view class="padding-xl radius shadow-lg bg-white margin-top">长阴影</view>
			<view class="padding-xl radius shadow-warp bg-white margin-top">翘边阴影</view>
			<view class="padding-xl radius shadow-blur bg-red margin-top">根据背景颜色而改变的阴影</view>
			<view class="padding-xl radius shadow-blur bg-red margin-top bg-img" style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);">
				<view>根据背景颜色而改变的阴影</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				size: ''
			};
		},
		methods: {
			SetSize(e) {
				this.size = e.detail.value
			},
		}
	}
</script>

<style>

</style>
