<template>
	<view>
		<view class="footer-desc">
			<view class="line"></view>
			<view class="desc">分割线随意定制...</view>
			<view class="line"></view>
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
	.footer-desc {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10%;
		width: 100%;
	}

	.desc {
		/* 更改字体颜色 */
		color: #ddd;
		text-align: center;
		margin: 0 2%;
		font-size: .8em;
	}

	.line {
		/* 更改宽度 */
		width: 100upx;
		/* 更改边框颜色 */
		border-bottom: 2upx solid #ddd;
	}
</style>
