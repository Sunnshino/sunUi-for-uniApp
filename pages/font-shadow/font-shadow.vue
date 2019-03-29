<!-- 
 
	box-shadow分为内阴影(inset)和外阴影(默认外阴影)
	
	也就是常说的上阴影、下阴影、左阴影、右阴影、四周阴影
	
	box-shadow参数如下:
	第1个参数：水平偏移值
	第2个参数：垂直偏移值
	第3个参数：模糊程值
	第4个参数：阴影颜色(可以是16进制,也可以是rgba值)
 
 -->

<template>
	<view>
		<view class="box box-left">
			水平(左右)位移(左阴影为负数,右阴影为正数)
		</view>

		<view class="box box-top">
			垂直(上下)位移(上阴影为负数,下阴影为正数)
		</view>

		<view class="box box-opacity">
			模糊程度
		</view>

		<view class="box box-color">
			阴影颜色
		</view>

		<view class="box box-inset">
			内阴影
		</view>

		<view class="box box-custom">
			四周阴影定制
		</view>
		
		<view class="box text-black">
			文字阴影(black)
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	
	[class*='text-']{
		font-size: 1.5em !important;
	}
	
	page {
		text-align: center;
		background: none;
	}

	.box {
		display: inline-block;
		width: 90%;
		height: 250upx;
		text-align: center;
		line-height: 250upx;
		font-size: .5em;
		background-color: #fff;
		border: 1upx solid #eee;
		border-radius: 25upx;
		margin-bottom: 10%;
	}

	.box:first-child {
		margin-top: 10%;
	}

	.box-test {
		box-shadow: 2upx 2upx 0 #333;
	}

	.box-top {
		box-shadow: 0 10upx 0 #333;
	}

	.box-left {
		box-shadow: 10upx 0 0 #333;
	}

	.box-opacity {
		box-shadow: 2upx 2upx 15upx rgba(0, 0, 0, .2);
	}

	.box-color {
		box-shadow: 2upx 2upx 15upx #8EC63F;
	}

	.box-inset {
		box-shadow: 2upx 2upx 15upx #333 inset;
	}

	.box-custom {
		box-shadow: -10upx 0 10upx red,
			/*左边阴影*/
			0 -10upx 10upx #000,
			/*上边阴影*/
			10upx 0 10upx green,
			/*右边阴影*/
			0 10upx 10upx blue;
		/*下边阴影*/

	}
	
	.text-black{
		text-shadow: 0.1em 0.1em 0.05em #333;
	}
</style>
