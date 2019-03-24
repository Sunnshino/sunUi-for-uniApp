<template name='colorui-speaker'>
	<view>
		<view class="swiper-msg">
			<view class="swiper-msg-icon">
				<image :src="icon" mode="widthFix"></image>
			</view>
			<swiper :vertical="vertical" autoplay circular :interval="interval">
				<swiper-item v-for="(item,index) in msgs" :key='index'>
					<navigator :url="item.url" :open-type="'navigate'">{{item.title}}</navigator>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: {
			msgs: {
				type: Array,
				default:function(){
					return [];
				}
			},
			icon: {
				type: String,
				default:function(){
					return ``;
				}
			},
			interval: {
				type: Number,
				default:function(){
					return 3000;
				}
			},
			vertical: {
				default:function(){
					return true;
				}
			}
		},
		name: 'colorui-speaker',
		methods: {

		}
	}
</script>

<style>
	navigator {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.swiper-msg {
		width: 100%;
		font-size: 0.8em;
		border: 1upx solid #ddd;
		margin: 0;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
	}

	.swiper-msg-icon {
		width: 40upx;
		margin: 0 10upx;
		flex-shrink: 0;
	}

	.swiper-msg-icon image {
		width: 40upx;
		height: 40upx;
	}

	.swiper-msg swiper {
		width: 100%;
		height: 60upx;
	}

	.swiper-msg swiper-item {
		line-height: 60upx;
	}
</style>
