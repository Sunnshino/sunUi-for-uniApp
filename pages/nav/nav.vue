<template>
	<view>
		<!-- <view class="cu-custom" style="height:{{CustomBar}}px;">
			<view class="cu-bar fixed bg-gradual-pink" style="height:{{CustomBar}}px;padding-top:{{StatusBar}}px;">
				<navigator class='action' open-type="navigateBack" delta="1" hover-class="none">
					<text class='icon-back'></text> 导航栏
				</navigator>
			</view>
		</view> -->
		<view v-if="index==TabCur" class='bg-grey padding margin text-center' v-for="(item,index) in 10" :key='index'>
			Tab{{index}}
		</view>
		<view class="cu-bar bg-white solid-bottom">
			<view class='action'>
				<text class='icon-titles text-orange '></text> 默认
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in 10" :key='index' @tap='tabSelect'
			 :data-id="index">
				Tab{{index}}
			</view>
		</scroll-view>

		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class='action'>
				<text class='icon-title text-orange'></text> 居中
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in 3" :key='index' @tap='tabSelect'
			 :data-id="index">
				Tab{{index}}
			</view>
		</scroll-view>

		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class='action'>
				<text class='icon-title text-orange'></text> 平分
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav">
			<view class='flex text-center'>
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange':''" v-for="(item,index) in 4" :key='index' @tap='tabSelect'
				 :data-id="index">
					Tab{{index}}
				</view>
			</view>
		</scroll-view>
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class='action'>
				<text class='icon-title text-orange'></text> 背景
			</view>
		</view>
		<scroll-view scroll-x class="bg-red nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-white':''" v-for="(item,index) in 3" :key='index' @tap='tabSelect'
			 :data-id="index">
				Tab{{index}}
			</view>
		</scroll-view>
		<view class="cu-bar bg-white margin-top solid-bottom">
			<view class='action'>
				<text class='icon-title text-orange'></text> 图标
			</view>
		</view>
		<scroll-view scroll-x class="bg-green nav text-center">
			<view class="cu-item" :class="0==TabCur?'text-white cur':''" @tap='tabSelect' :data-id="0">
				<text class='icon-camerafill'></text> 数码
			</view>
			<view class="cu-item" :class="1==TabCur?'text-white cur':''" @tap='tabSelect' :data-id="1">
				<text class='icon-upstagefill'></text> 排行榜
			</view>
			<view class="cu-item" :class="2==TabCur?'text-white cur':''" @tap='tabSelect' :data-id="2">
				<text class='icon-clothesfill'></text> 皮肤
			</view>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0
			};
		},
		methods: {
			tabSelect(e) {
				console.log(e.currentTarget.dataset);
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			}
		}
	}
</script>

<style>

</style>
