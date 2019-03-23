
<!-- 
	如需更改星级颜色,请修改css：110和117行,默认#FFBF19
 -->


<template name='colorui-star'>
	<view>
		<view class="colorui-star">
			<view class="colorui-rate">
				<view v-for="(item,index) in starArr" :key='index' @tap="handleTap" :data-index="index" :class="item"></view>
				<view v-show="colorStar.tips">
					<view class="m-t2">{{colorStar.rate==1?colorStar.tipsArr[0]:colorStar.rate==2?colorStar.tipsArr[1]:colorStar.rate==3?colorStar.tipsArr[2]:colorStar.rate==4?colorStar.tipsArr[3]:colorStar.tipsArr[4]}}</view>
				</view>
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				starArr: [],
			};
		},
		name: 'colorui-star',
		props: {
			colorStar: {
				type: Object,
				default: function() {
					/**
					 *  默认配置
					 * 
					 * icon: 'star' => 默认,不可更改 (String)
					 * disabled：=> 不禁用评级 (Boolean)
					 * rate：=> 星级 (Number)
					 * tips: => 是否显示评级信息 (Boolean)
					 * tipsArr：=> 评级信息内容(Array)
					 */
					return {
						icon: 'star',
						disabled: false,
						rate: 1,
						tips: false,
						tipsArr: ['很差', '差', '一般', '好', '非常好']
					}
				}
			}
		},
		created() {
			this.getStarArr()
		},
		beforeMount() {

		},
		mounted() {},
		methods: {
			getStarArr: function() {
				let starArr = [];
				for (let i = 0, len = this.colorStar.rate; i < len; i++) {
					starArr.push(this.colorStar.icon);
				}
				for (let j = 0; j < 5 - this.colorStar.rate; j++) {
					starArr.push(this.colorStar.icon + '-o');
				}
				this.starArr = starArr;
			},
			handleTap: function(e) {
				if (this.colorStar.disabled) {
					return;
				}
				this.colorStar.rate = Number(e.currentTarget.dataset.index) + 1;
				this.$emit('change', {
					value: Number(e.currentTarget.dataset.index) + 1
				});
				this.getStarArr();
			}
		}
	}
</script>

<style>
	.m-t2 {
		margin-top: 2%;
	}

	.colorui-rate {
		text-align: center;
		background-color: #fff;
		padding: 3%;
		/* margin: 2%; */
	}

	.colorui-star .star,
	.colorui-star .star-o {
		width: 0;
		height: 0;
		color: red;
		position: relative;
		display: inline-block;
		vertical-align: middle;
		border-left: 24upx solid transparent;
		border-right: 24upx solid transparent;
		/* 如需更改星级颜色,请修改这里! Step1 */
		border-bottom: 20upx solid #FFBF19;
		transform: rotate(180deg);
		margin: 0 10upx;
	}

	.colorui-star .star::after,
	.colorui-star .star::before,
	.colorui-star .star-o::after,
	.colorui-star .star-o::before {
		content: '';
		width: 0;
		height: 0;
		color: #f00;
		display: inline-block;
		border-left: 24upx solid transparent;
		border-right: 24upx solid transparent;
		/* 如需更改星级颜色,请修改这里! Step2 */
		border-bottom: 20upx solid #FFBF19;
		position: absolute;
		top:0;
		left: -24upx;
	}

	.colorui-star .star::after,
	.colorui-star .star-o::after {
		content: '';
		transform: rotate(-68deg);
	}

	.colorui-star .star::before,
	.colorui-star .star-o::before {
		content: '';
		transform: rotate(68deg);
	}

	.colorui-star .star-o {
		border-bottom: 20upx solid #ccc;
	}

	.colorui-star .star-o::after,
	.colorui-star .star-o::before {
		border-bottom: 20upx solid #ccc;
	}
</style>
