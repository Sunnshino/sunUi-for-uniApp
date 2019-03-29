<template>
	<view>
		<view class="content">
			<view class="box bg-blue">#4B8BF4</view>
			<view class="box bg-green animated faster">#26A65B</view>
			<view class="box bg-orange">#EB7347</view>
			<view class="box bg-red">#D24D57</view>
			<view class="box bg-orangered">#FC9D99</view>
			<view class="box bg-black">#2C3E50</view>
			<view class="box bg-blackgreen">#84AF9B</view>
			<view class="box bg-grassgreen">#AEDD81</view>
			<view class="box bg-eee">#ECECEC</view>
			<view class="box bg-grey">#D0D0D0</view>
			<view class="box bg-blackblue">#00CCFF</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
			
		methods:{
			copyColor:()=>{
				
			}
		}
	}
</script>

<style>
	
	/* 
		此提示仅适用于css(html不起作用，望悉知)!
		
		取色小知识(色值一样,可省略前后各三位,譬如常见的黑白)：
		1. #000000 => #000
		2. #FFFFFF => #FFF
		3. #336699 => #369(见本例)
	 */
	
	page {
		background-color: #eee;
	}

	.content {
		display: flex;
		flex-wrap: wrap;
	}

	.box {
		width: 49%;
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
