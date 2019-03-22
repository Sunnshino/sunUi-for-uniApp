<template>
	<view>
		<!-- <view class="cu-custom" style="height:{{CustomBar}}px;">
			<view class="cu-bar fixed bg-gradual-pink" style="height:{{CustomBar}}px;padding-top:{{StatusBar}}px;">
				<navigator class='action' open-type="navigateBack" delta="1" hover-class="none">
					<text class='icon-back'></text> 步骤条
				</navigator>
			</view>
		</view> -->
		<view class="cu-bar bg-white solid-bottom">
			<view class='action'>
				<text class='icon-title text-orange'></text> 基本用法
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap='basicsSteps'>下一步</button>
			</view>
		</view>
		<view class='bg-white padding'>
			<view class='cu-steps'>
				<view class='cu-item' :class='index>basics?"":"text-red"' v-for="(item,index) in basicsList" :key='index'>
					<text :class='"icon-"+item.icon'></text> {{item.name}}
				</view>
			</view>
		</view>

		<view class='bg-white padding margin-top-xs'>
			<view class='cu-steps'>
				<view class='cu-item' :class='index>basics?"":"text-orange"' v-for="(item,index) in basicsList" :key='index'>
					<text :class='index>basics?"icon-title":"icon-"+item.icon'></text> {{item.name}}
				</view>
			</view>
		</view>

		<view class='bg-white padding  margin-top-xs'>
			<view class='cu-steps steps-arrow'>
				<view class='cu-item' :class='index>basics?"":"text-blue"' v-for="(item,index) in basicsList" :key='index'>
					<text :class='"icon-"+item.icon'></text> {{item.name}}
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class='action'>
				<text class='icon-title text-orange'></text> 数字完成
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap='numSteps'>下一步</button>
			</view>
		</view>
		<view class='bg-white padding'>
			<view class='cu-steps'>
				<view class='cu-item' :class='index>num?"":"text-blue"' v-for="(item,index) in numList" :key='index'>
					<text class='num' :class="index==2?'err':''" :data-index='index + 1'></text> {{item.name}}
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class='action'>
				<text class='icon-title text-orange'></text> 多级显示
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap='scrollSteps'>下一步</button>
			</view>
		</view>
		<scroll-view scroll-x class='bg-white padding response cu-steps steps-bottom' :scroll-into-view="'scroll-'+scroll"
		 scroll-with-animation>
			<view class='cu-item padding-lr-xl' v-for="(item,index) in 10" :key="index" :id="'scroll-'+index" :class='index>scroll?"":"text-blue"'>
				Level {{index + 1}} <text class='num' :data-index='index + 1'></text>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				basicsList: [{
					icon: 'usefullfill',
					name: '开始'
				}, {
					icon: 'radioboxfill',
					name: '等待'
				}, {
					icon: 'roundclosefill',
					name: '错误'
				}, {
					icon: 'roundcheckfill',
					name: '完成'
				}, ],
				basics: 0,
				numList: [{
					name: '开始'
				}, {
					name: '等待'
				}, {
					name: '错误'
				}, {
					name: '完成'
				}, ],
				num: 0,
				scroll: 0
			};
		},
		methods: {
			basicsSteps() {
				this.basics == this.basicsList.length - 1 ? this.basics = 0 : this.basics += 1;
			},
			numSteps() {
				this.num = this.num == this.length - 1 ? this.num = 0 : this.num + 1;
			},
			scrollSteps() {
				this.scroll = this.scroll == 9 ? this.scroll = 0 : this.scroll + 1;
			}
		}
	}
</script>

<style>

</style>
