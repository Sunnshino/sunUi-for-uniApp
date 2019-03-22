<template>
	<view>
		<view class="cu-bar bg-white">
			<view class='action'>
				<text class='icon-title text-orange'></text> 默认效果
			</view>
		</view>
		<view class="padding-sm">
			<view class='flex flex-wrap justify-around'>
				<button v-for="(item,index) in list" :key='index' class='cu-btn margin-sm basis-sm shadow' :class="['animation-'+animation==item.name?item.name :'','bg-'+item.color]"
				 @tap='toggle' :data-class='item.name'>{{item.name}}</button>
			</view>
		</view>
		<view class="cu-bar bg-white">
			<view class='action'>
				<text class='icon-title text-orange'></text> 反向动画
			</view>
		</view>


		<!-- <view class="padding-sm">
			<view class='flex flex-wrap justify-around'>
				<button class='cu-btn animation-reverse margin-sm basis-sm shadow' :class="[{}]"
				 @tap='toggle' :data-class='item.name+"s"' v-for="(item,index) in list" :key='index'>{{item.name}}</button>
			</view>
		</view> -->
		<view class="cu-bar bg-white">
			<view class='action'>
				<text class='icon-title text-orange'></text> 延迟执行
			</view>
			<view class='action'>
				<button class='cu-btn bg-cyan shadow' @tap='mtoggleDelay'>开始执行</button>
			</view>
		</view>

		<view class="padding-sm">
			<view class='flex flex-wrap justify-around'>
				<button class='margin-sm basis-sm shadow cu-btn' :class="['bg-'+item.color,toggleDelay?'animation-slide-bottom':'']"
				 :style='"animation-delay:"+(index+1)*0.1+"s"' v-for="(item,index) in list" :key='index'>0.{{index+1}}s</button>
			</view>
		</view>


		<view class="cu-bar bg-white">
			<view class='action'>
				<text class='icon-title text-orange'></text> Gif动画
			</view>
		</view>
		<view class="margin radius bg-gradual-green shadow-blur">
			<image src='https://image.weilanwl.com/gif/wave.gif' mode='scaleToFill' class='gif-black response' style='height:100upx'></image>
		</view>
		<view class="margin flex">
			<view class='bg-black flex-sub margin-right radius shadow-lg'>
				<image src='https://image.weilanwl.com/gif/loading-black.gif' mode='aspectFit' class='gif-black response' style='height:240upx'></image>
			</view>
			<view class='bg-white flex-sub radius shadow-lg'>
				<image src='https://image.weilanwl.com/gif/loading-white.gif' mode='aspectFit' class='gif-white response' style='height:240upx'></image>
			</view>
		</view>
		<view class="margin flex">
			<view class='bg-gradual-blue flex-sub margin-right radius shadow-lg'>
				<image src='https://image.weilanwl.com/gif/rhomb-black.gif' mode='aspectFit' class='gif-black response' style='height:240upx'></image>
			</view>
			<view class='bg-white flex-sub radius shadow-lg'>
				<image src='https://image.weilanwl.com/gif/rhomb-white.gif' mode='aspectFit' class='gif-white response' style='height:240upx'></image>
			</view>
		</view>
		<view class="margin flex">
			<view class='bg-white flex-sub margin-right radius shadow-lg'>
				<image src='https://image.weilanwl.com/gif/loading-1.gif' mode='aspectFit' class='gif-white response' style='height:240upx'></image>
			</view>
			<view class='bg-black flex-sub radius shadow-lg'>
				<image src='https://image.weilanwl.com/gif/loading-2.gif' mode='aspectFit' class='gif-black response' style='height:240upx'></image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: 'fade',
						color: 'red'
					},
					{
						name: 'scale-up',
						color: 'orange'
					},
					{
						name: 'scale-down',
						color: 'olive'
					},
					{
						name: 'slide-top',
						color: 'green'
					}, {
						name: 'slide-bottom',
						color: 'cyan'
					},
					{
						name: 'slide-left',
						color: 'blue'
					},
					{
						name: 'slide-right',
						color: 'purple'
					},
					{
						name: 'shake',
						color: 'mauve'
					}
				],
				toggleDelay: false,
				animation: ''
			};
		},
		methods: {
			toggle(e) {
				console.log(e);
				let animation = e.currentTarget.dataset.class;
				this.animation = animation;
				setTimeout(() => {
					this.animation = '';
				}, 1000)
			},
			mtoggleDelay() {
				this.toggleDelay = true;
				setTimeout(() => {
					this.toggleDelay = false;
				}, 1000)
			}
		}
	}
</script>

<style>
	image[class*="gif-"] {
		border-radius: 6upx;
		display: block;
	}

	.gif-black {
		mix-blend-mode: screen;
	}

	.gif-white {
		mix-blend-mode: multiply;
	}


	[class*=animation-] {
		animation-duration: .5s;
		animation-timing-function: ease-out;
		animation-fill-mode: both
	}

	.animation-fade {
		animation-name: fade;
		animation-duration: .8s;
		animation-timing-function: linear
	}

	.animation-scale-up {
		animation-name: scale-up
	}

	.animation-scale-down {
		animation-name: scale-down
	}

	.animation-slide-top {
		animation-name: slide-top
	}

	.animation-slide-bottom {
		animation-name: slide-bottom
	}

	.animation-slide-left {
		animation-name: slide-left
	}

	.animation-slide-right {
		animation-name: slide-right
	}

	.animation-shake {
		animation-name: shake
	}

	.animation-reverse {
		animation-direction: reverse
	}

	@keyframes fade {
		0% {
			opacity: 0
		}

		100% {
			opacity: 1
		}
	}

	@keyframes scale-up {
		0% {
			opacity: 0;
			transform: scale(.2)
		}

		100% {
			opacity: 1;
			transform: scale(1)
		}
	}

	@keyframes scale-down {
		0% {
			opacity: 0;
			transform: scale(1.8)
		}

		100% {
			opacity: 1;
			transform: scale(1)
		}
	}

	@keyframes slide-top {
		0% {
			opacity: 0;
			transform: translateY(-100%)
		}

		100% {
			opacity: 1;
			transform: translateY(0)
		}
	}

	@keyframes slide-bottom {
		0% {
			opacity: 0;
			transform: translateY(100%)
		}

		100% {
			opacity: 1;
			transform: translateY(0)
		}
	}

	@keyframes shake {

		0%,
		100% {
			transform: translateX(0)
		}

		10% {
			transform: translateX(-9px)
		}

		20% {
			transform: translateX(8px)
		}

		30% {
			transform: translateX(-7px)
		}

		40% {
			transform: translateX(6px)
		}

		50% {
			transform: translateX(-5px)
		}

		60% {
			transform: translateX(4px)
		}

		70% {
			transform: translateX(-3px)
		}

		80% {
			transform: translateX(2px)
		}

		90% {
			transform: translateX(-1px)
		}
	}

	@keyframes slide-left {
		0% {
			opacity: 0;
			transform: translateX(-100%)
		}

		100% {
			opacity: 1;
			transform: translateX(0)
		}
	}

	@keyframes slide-right {
		0% {
			opacity: 0;
			transform: translateX(100%)
		}

		100% {
			opacity: 1;
			transform: translateX(0)
		}
	}
</style>
