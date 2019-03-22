<template>
	<view>
		<!-- <view class="cu-custom" style="height:{{CustomBar}}px;">
			<view class="cu-bar fixed bg-gradual-pink" style="height:{{CustomBar}}px;padding-top:{{StatusBar}}px;">
				<navigator class='action' open-type="navigateBack" delta="1" hover-class="none">
					<text class='icon-back'></text> 模态窗口
				</navigator>
			</view>
		</view> -->
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-orange '></text> 普通窗口
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap="showModal" :data-target="'Modal'">Modal</button>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class='content'>Modal标题</view>
					<view class='action' @tap='hideModal'>
						<text class='icon-close text-red'></text>
					</view>
				</view>
				<view class='padding-xl'>
					Modal 内容。
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-orange '></text> 底部窗口
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap="showModal" :data-target="'bottomModal'">Bottom</button>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class='action text-green'>确定</view>
					<view class='action text-blue' bindtap='hideModal'>取消</view>
				</view>
				<view class='padding-xl'>
					Modal 内容。
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-orange '></text> 对话窗口
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap="showModal" :data-target="'DialogModal1'">Dialog</button>
				<button class='cu-btn bg-blue shadow margin-left' @tap="showModal" :data-target="'DialogModal2'">Dialog</button>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class='content'>Modal标题</view>
					<view class='action' @tap='hideModal'>
						<text class='icon-close text-red'></text>
					</view>
				</view>
				<view class='padding-xl'>
					Modal 内容。
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class='action'>
						<button class='cu-btn line-green text-green' @tap='hideModal'>取消</button>
						<button class='cu-btn bg-green margin-left' @tap='hideModal'>确定</button>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='DialogModal2'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class='content'>Modal标题</view>
					<view class='action' @tap='hideModal'>
						<text class='icon-close text-red'></text>
					</view>
				</view>
				<view class='padding-xl'>
					Modal 内容。
				</view>
				<view class="cu-bar bg-white">
					<view class='action margin-0 flex-sub text-green ' @tap='hideModal'>
						<text class='icon-moneybag'></text>微信支付</view>
					<view class='action margin-0 flex-sub text-green solid-left' @tap='hideModal'>取消</view>
					<view class='action margin-0 flex-sub  solid-left' @tap='hideModal'>确定</view>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-orange '></text> 图片窗口
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap="showModal" :data-target="'Image'">Image</button>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='Image'?'show':''">
			<view class="cu-dialog">
				<view class="bg-img" style="background-image: url('https://albedo-theme.com/wp-content/uploads/2016/08/pexels-photo-26180.jpg');height:200px;">
					<view class="cu-bar justify-end text-white">
						<view class='action' @tap='hideModal'>
							<text class='icon-close '></text>
						</view>
					</view>
				</view>
				<view class="cu-bar bg-white">
					<view class='action margin-0 flex-sub  solid-left' @tap='hideModal'>我知道了</view>
				</view>
			</view>
		</view>


		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-orange '></text> 单选窗口
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap="showModal" :data-target="'RadioModal'">Radio</button>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap='hideModal'>
			<view class="cu-dialog" catchtap>
				<radio-group class="block">
					<view class='cu-list menu text-left'>
						<view class='cu-item' v-for="(item,index) in 5" :key='index'>
							<label class='flex justify-between align-center flex-sub'>
								<view class='flex-sub'>Item {{index +1}}</view>
								<radio class='round'></radio>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-orange '></text> 多选窗口
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap="showModal" :data-target="'ChooseModal'">Choose</button>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='ChooseModal'?'show':''" @tap='hideModal'>
			<view class="cu-dialog" catchtap>
				<view class="cu-bar bg-white">
					<view class='action text-green'>确定</view>
					<view class='action text-blue' @tap='hideModal'>取消</view>
				</view>
				<view class='grid col-3 padding-sm'>
					<view class='padding-xs' v-for="(item,index) in 9" :key='index'>
						<button class='cu-btn orange lg block' :class="index == 2?'bg':'line'+'-orange'">Item {{index + 1}}</button>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-orange '></text> 侧边抽屉
			</view>
			<view class='action'>
				<button class='cu-btn bg-green shadow' @tap="showModal" :data-target="'DrawerModalL'">Left</button>
				<button class='cu-btn bg-blue shadow margin-left' @tap="showModal" :data-target="'DrawerModalR'">Right</button>
			</view>
		</view>
		<view class="cu-modal drawer-modal justify-start" @tap='hideModal' :class="modalName=='DrawerModalL'?'show':''">
			<view class="cu-dialog basis-lg" catchtap>
				<view class='cu-list menu text-left'>
					<view class='cu-item arrow' v-for="(item,index) in 5" :key='index'>
						<view class='content'>
							<view>Item {{index +1}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-modal drawer-modal justify-end" @tap='hideModal' :class="modalName=='DrawerModalR'?'show':''">
			<view class="cu-dialog basis-lg" catchtap>
				<view class="cu-list menu menu-avatar text-left">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></view>
						<view class='content'>
							<view class='text-grey'>文晓港</view>
							<view class='text-gray text-sm'>
								<text class='icon-infofill text-red'></text> 消息未送达</view>
						</view>
						<view class='action'>
							<view class='text-grey text-xs'>22:20</view>
							<view class="cu-tag round bg-grey sm">5</view>
						</view>
					</view>
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);">
							<view class="cu-tag badge">99+</view>
						</view>
						<view class='content'>
							<view class='text-grey'>文晓港
								<view class="cu-tag round bg-orange sm">SVIP</view>
							</view>
							<view class='text-gray text-sm'>
								<text class='icon-redpacket_fill text-red'></text> 收到红包</view>
						</view>
						<view class='action'>
							<view class='text-grey text-xs'>22:20</view>
							<text class='icon-notice_forbid_fill text-gray'></text>
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
				modalName: ''
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target;
			},
			hideModal(e) {
				this.modalName = null;
			}
		}
	}
</script>

<style>

</style>
