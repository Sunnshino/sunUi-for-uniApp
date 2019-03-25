
<!-- 
	如需更改星级颜色,请修改css：110和117行,默认#FFBF19
 -->

<template name='sun-star'>
	<view>
		<view class="sun-star">
			<view class="sunui-rate">
				<view v-for="(item,index) in starArr" :key='index' @tap="handleTap" :data-index="index" :class="item"></view>
				<view v-show="sunStar.tips">
					<view class="m-t2">{{sunStar.rate==1?sunStar.tipsArr[0]:sunStar.rate==2?sunStar.tipsArr[1]:sunStar.rate==3?sunStar.tipsArr[2]:sunStar.rate==4?sunStar.tipsArr[3]:sunStar.tipsArr[4]}}</view>
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
		name: 'sun-star',
		props: {
			sunStar: {
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
				for (let i = 0, len = this.sunStar.rate; i < len; i++) {
					starArr.push(this.sunStar.icon);
				}
				for (let j = 0; j < 5 - this.sunStar.rate; j++) {
					starArr.push(this.sunStar.icon + '-o');
				}
				this.starArr = starArr;
			},
			handleTap: function(e) {
				if (this.sunStar.disabled) {
					return;
				}
				this.sunStar.rate = Number(e.currentTarget.dataset.index) + 1;
				this.$emit('change', {
					value: Number(e.currentTarget.dataset.index) + 1
				});
				this.getStarArr();
			}
		}
	}
</script>

<style scoped>
	.m-t2 {
		margin-top: 2%;
		color: #666;
		font-size: .8em;
	}
	.sunui-rate {
		text-align: center;
		background-color: #fff;
		padding: 3%;
	}

	.sun-star .star,
	.sun-star .star-o {
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

	.sun-star .star::after,
	.sun-star .star::before,
	.sun-star .star-o::after,
	.sun-star .star-o::before {
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

	.sun-star .star::after,
	.sun-star .star-o::after {
		content: '';
		transform: rotate(-68deg);
	}

	.sun-star .star::before,
	.sun-star .star-o::before {
		content: '';
		transform: rotate(68deg);
	}

	.sun-star .star-o {
		border-bottom: 20upx solid #ccc;
	}

	.sun-star .star-o::after,
	.sun-star .star-o::before {
		border-bottom: 20upx solid #ccc;
	}
</style>
