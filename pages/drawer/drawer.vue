<template>
	<view class="page">
		<view class="DrawerPage" :class="[modalName=='viewModal'?'show':'']">
			<view class="cu-custom" :style="'height:'+CustomBar+'px'">
				
			</view>
			<view class='padding margin text-center' v-for="(item,index) in 10" v-if="index == TabCur" :key='index'>
				<view class='text-bold text-xxl margin-xl'>Tab{{index}}</view>
				<view class='text-xl margin-xl' @tap="showModal" :data-target="'viewModal'">点击打开全息抽屉</view>
				<navigator class='cu-btn bg-green lg block shadow radius margin-xl' open-type="reLaunch" url="../extends/extends"
				 hover-class="none">
					<text class='icon-back'> </text> 返回上一页
				</navigator>
			</view>
		</view>
		<view class="DrawerClose" @tap='hideModal' :class="modalName=='viewModal'?'show':''">
			<text class='icon-pullright'></text>
		</view>
		<view class="DrawerWindow" :class="modalName=='viewModal'?'show':''">
			<view class='padding-xl text-center text-white'>
				<image src='../../static/images/logo.png' class='response' mode='widthFix' style='width:200upx;margin-top:100upx'></image>
				<view class='text-xl'>ColorUI组件库
					<text class='text-df'>v2.0</text>
				</view>
				<view class='margin-top-sm'>
					<text>By:文晓港</text>
				</view>
			</view>
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				<view class="cu-item arrow">
					<view class='content' @tap='CopyLink' :data-link='"https://github.com/weilanwl/ColorUI"'>
						<text class='icon-github text-grey'></text>
						<text class='text-grey'>GitHub</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<navigator class='content' url='../about/about' hover-class='none'>
						<image src='/images/logo.png' class='png' mode='aspectFit'></image>
						<text class='text-grey'>关于ColorUI组件库</text>
					</navigator>
				</view>
				<view class="cu-item arrow">
					<navigator class='content' url='../log/log' hover-class='none'>
						<text class='icon-formfill text-green'></text>
						<text class='text-grey'>日志</text>
					</navigator>
				</view>
				<view class="cu-item arrow">
					<view class='content' @tap="showQrcode">
						<text class='icon-appreciatefill text-red'></text>
						<text class='text-grey'>赞赏支持</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<button class='cu-btn content' open-type='feedback'>
						<text class='icon-writefill text-cyan'></text>
						<text class='text-grey'>意见反馈</text>
					</button>
				</view>
				<view class="cu-item arrow">
					<navigator class='content' url='../test/list' hover-class='none'>
						<text class='icon-creativefill text-orange'></text>
						<text class='text-grey'>Bug测试</text>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hasUserInfo: false,
				canIUse: uni.canIUse('button.open-type.getUserInfo'),
				TabCur: 1,
				scrollLeft: 0,
				userInfo: {},
				modalName: '',
				CustomBar: 50,
				StatusBar: 100
			};
		},
		methods: {
			getUserInfo: function(e) {
				console.log(e)
				/**
				 * app.globalData.userInfo = e.detail.userInfo => 可以vuex保存状态,main.js保留全局变量
				 * 
				 */
				this.userInfo = e.detail.userInfo;
				this.hasUserInfo = true;
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null;
			},
			tabSelect(e) {
				console.log(e);
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
	.page {
		background-color: #555;
		background-size: 100%;
	}

	.DrawerPage {
		position: absolute;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.6s;
	}

	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}

	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		background-color: #555555;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.6s;
	}

	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}

	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.6s;
	}

	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}

	.DrawerPage .cu-bar.tabbar .action button.icon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}

	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}

	.DrawerPage .nav {
		flex: 1;
	}

	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}

	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}

	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
	}
</style>
