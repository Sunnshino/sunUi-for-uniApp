<template>
	<!-- 
		因H5以外的平台不支持硬解码,目前仅能添加几种常用图标颜色
		采用字体图标,图标和图标颜色自由修改！
		字体图标来自阿里图库！！
	 -->
	<view class="example">
		<view class="sun-title">星级评价(禁用)</view>
		<sunui-star :defaultStar="3" :disabledStar="true" class="sunui-star" />
		<view class="sun-title">星级评价(启用)</view>
		<sunui-star :defaultStar="2" :maxStar="5" :starSize='"1.2em"' @changeStar="changeStar" class='sunui-star' />
		<view class="sun-title">星级评价(更多)</view>
		<sunui-star :defaultStar="4" :maxStar="8" @changeStar="changeStar" class='sunui-star' />
		<view class="sun-title">星级评价(slot)</view>
		<sunui-star :defaultStar="4" :maxStar="6" @changeStar="changeStar" class='sunui-star'>
			<view class="sunui-small">(这里可以写评价内容...)</view>
		</sunui-star>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				starConfig: {
					// 默认
					defaultStar: 3,
					// 是否禁用
					disabledStar: true,
					// 最大星级
					maxStar: 5,
					// 图标大小(对应font-size)
					starSize: '1.5em'
				}
			}
		},
		methods: {
			changeStar: function(e) {
				console.log('curStar:', e.curStar)
			}
		}
	}
</script>
<style scoped>
	/* sunui-star /deep/.icon-star-hover {
		color: #f00;
	} */
	.sunui-small{
		color: #666;
		font-size: .7em;
	}
	
	.sunui-star {
		margin-top: 5%;
	}

	.example {
		padding: 10%;
	}
</style>
