<template>
	<view>
		<view class="sun-title">animaction动画演示(注意看说明)</view>
		<view class="content">
			<view class="box bg-blue animated bounceInDown delay-2s"></view>
			<view class="box bg-green animated bounceInDown delay-3s"></view>
			<view class="box bg-orange animated bounceInLeft infinite slow"></view>
			<view class="box bg-red animated bounceInRight infinite slower"></view>
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
	/* 
		动画推荐用:animaction.css
		
		使用方法:
		实例：1.animated infinite bounce delay-2s
		实例：2.animated bounce faster
		示例：1.animated(必须参数) infinite(是否无限循环) bounce(动画效果) delay-2s(延迟两秒执行)
		示例：2.animated(必须参数) bounce(动画效果) faster(动画等级)
		
		单次执行:
		animated bounce faster
		
		多次间隔执行(infinite=无限循环):
		animated infinite bounce delay-2s
		
		额外(动画等级)参数：
		slow	2s
		slower	3s
		fast	800ms
		faster	500ms
		
		动画延迟时间有:
		delay-2s
		delay-3s
		delay-4s
		delay-5s
	*/

	page {

		background: none;
		background-color: #eee;
	}

	.sun-title {
		margin-bottom: 5%;
		background-color: #fff;
	}

	.content {
		display: flex;
		flex-wrap: wrap;
	}

	.box {
		width: 48%;
		height: 200upx;
		color: #fff;
		font-weight: bold;
		line-height: 200upx;
		text-align: center;
		margin-bottom: 7%;
		box-shadow: 0 2upx 16upx #666;
	}

	.box:nth-child(2n+0) {
		margin-left: 2%;
	}

	/* 
		背景颜色(BG)
	 */
	.bg-eee {
		background-color: #ececec;
	}

	.bg-red {
		background-color: #D24D57;
	}

	.bg-green {
		background-color: #26A65B;
	}

	.bg-yellow {
		background-color: #FFCD42;
	}

	.bg-blue {
		background-color: #4B8BF4;
	}

	.bg-orange {
		background-color: #EB7347;
	}

	.bg-black {
		background-color: #2C3E50;
	}

	.bg-blackgreen {
		background-color: #84AF9B;
	}

	.bg-orangered {
		background-color: #FC9D99;
	}

	.bg-grassgreen {
		background-color: #AEDD81;
	}

	.bg-blackblue {
		background-color: #00CCFF;
	}

	.bg-grey {
		background-color: #D0D0D0;
	}
</style>
