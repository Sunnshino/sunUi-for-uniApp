<template>
	<view>
		<!-- <view class="cu-custom" :style="'height:'+CustomBar+'px';">
			<view class="cu-bar fixed bg-gradual-pink" style="height:{{CustomBar}}px;padding-top:{{StatusBar}}px;">
				<navigator class='action' open-type="navigateBack" delta="1" hover-class="none">
					<text class='icon-back'></text> 卡片
				</navigator>
			</view>
		</view> -->
		<view class="cu-bar bg-white solid-bottom">
			<view class='action'>
				<text class='icon-titles text-orange '></text> 案例类卡片
			</view>
			<view class='action'>
				<switch class='sm' :checked='isCard' @change='isCards'></switch>
			</view>
		</view>
		<view class="cu-card case" :class="isCard?'no-card':''">
			<view class="cu-item shadow" v-for="(item,index) in 1" :key='index'>
				<view class='image'>
					<image src="https://image.weilanwl.com/img/4x3-1.jpg" mode="widthFix"></image>
					<view class="cu-tag bg-blue">福利</view>
					<view class='cu-bar bg-shadeBottom'>我和制服不得不说的那些事！</view>
				</view>
				<view class="cu-list menu menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-4.jpg);"></view>
						<view class='content flex-sub'>
							<view class='text-grey'>猪皮蛋</view>
							<view class='text-gray text-sm flex justify-between'>
								十天前
								<view class="text-gray text-sm">
									<text class="icon-attentionfill"></text> 10
									<text class="icon-appreciatefill"></text> 20
									<text class="icon-messagefill"></text> 30
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom" :class="isCard?'margin-top':''">
			<view class='action'>
				<text class='icon-titles text-orange '></text> 动态类卡片
			</view>
			<view class='action'>
				<switch class='sm' :checked='isCard' @change='isCards'></switch>
			</view>
		</view>
		<view class="cu-card dynamic" :class="isCard?'no-card':''">
			<view class="cu-item shadow" v-for="(item,idb) in 1" :key='idb'>
				<view class="cu-list menu menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></view>
						<view class='content flex-sub'>
							<view>晓晓萌</view>
							<view class='text-gray text-sm flex justify-between'>
								2018年12月3日
							</view>
						</view>
					</view>
				</view>
				<view class='text-content'>
					你们的铲屎官是不是经常突然对手机傻笑？我家铲屎官常常坐沙发上笑的发抖！（暗中观察.jpg）
				</view>
				<view class="grid flex-sub padding-lr" :class="isCard?'col-3 grid-square':'col-1'">
					<view class="bg-img" :class="isCard?'':'only-img'" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"
					 v-for="(item,ida) in isCard?9:1" :key='ida'>
					</view>
				</view>
				<view class='text-gray text-sm text-right padding'>
					<text class="icon-attentionfill"></text> 10
					<text class="icon-appreciatefill"></text> 20
					<text class="icon-messagefill"></text> 30
				</view>
				<view class="cu-list menu menu-avatar comment solids-top">
					<view class="cu-item" v-for="(item,index) in 2" :key='index'>
						<view class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></view>
						<view class='content'>
							<view class='text-grey'>猪皮蛋</view>
							<view class='text-gray text-content text-df'>
								我家铲屎官不舔毛，还抠脚！
							</view>
							<view class='bg-grey padding-sm radius margin-top-sm  text-sm' v-if="index==1">
								<view class="flex" :class="idx!=0?'margin-top-sm':''" v-for="(item,idx) in 2" :key='idx'>
									<view>我：</view>
									<view class='flex-sub'>我家的铲屎官也不舔毛！</view>
								</view>
							</view>
							<view class='margin-top-sm flex justify-between'>
								<view class='text-gray text-df'>2018年12月4日</view>
								<view>
									<text :class="['icon-appreciate'+!isZan?'fill':'','text-'+!isZan?'red':'gray']"></text>
									<text class="icon-messagefill text-gray margin-left-sm"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class='action'>
				<text class='icon-titles text-orange '></text> 文章类卡片
			</view>
			<view class='action'>
				<switch class='sm' :checked='isCard' @change='isCards'></switch>
			</view>
		</view>
		<view class="cu-card article" :class="isCard?'no-card':''">
			<view class="cu-item shadow" v-for="(item,idxs) in 1" :key='idxs'>
				<view class="title">这里有个戏精铲屎官，主子了解一下？</view>
				<view class="content">
					<image src="https://image.weilanwl.com/img/4x3-3.jpg" mode="aspectFill"></image>
					<view class="desc">
						<view class='text-content'> 这是一个伪铲屎官为了给自己的程序凑字数瞎几把乱写的一堆文字，了解一下就OK！ヾ(=･ω･=)o</view>
						<view>
							<view class='cu-tag bg-red light sm round'>假装有猫系列</view>
							<view class='cu-tag bg-green light sm round'>戏精系列</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCard: ''
			};
		},
		methods: {
			isCards(e) {
				this.isCard = e.detail.value
			}
		}
	}
</script>

<style>

</style>
