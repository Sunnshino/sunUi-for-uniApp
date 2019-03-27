<template>
	<view class="content">
		<navigator open-type="navigate" hover-class='nav-hover' style="animated infinite bounce delay-2s" :url="''+item.name+'/'+item.name" v-for="(item,index) in elements"
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
				elements: [
					{
						title:'分割线',
						name:'line'
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
