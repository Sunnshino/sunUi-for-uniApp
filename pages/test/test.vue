<template>
	<view>
		<sunui-layer></sunui-layer>
		
		<button type="primary" @tap="click">PPPP</button>
		<view>
			<popup-layer ref="popup" :direction="'left'">
				<view class="zidingyi">
					<button> 我是自定义的内容我是自定义的内容我是自定义的内容我是自定义的内容</button>
				</view>
			</popup-layer>


		</view>
		<!-- <web-view src="https://www.playsort.cn/uniapp-example/up-document.html"></web-view> -->
	</view>
</template>

<script>

	export default {
		data() {
			return {

			};
		},
		onLoad() {
			console.log('fffffffff');
		},
		methods: {
			click(e) {
				this.$refs.popup.show() // 弹出
			}
		}
	}
</script>

<style>
	page {
		background: none;
	}
</style>
