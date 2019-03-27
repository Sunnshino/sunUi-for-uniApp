<template name="sunui-star">
	<view class="sunui-stars">
		<view class="sunui-m">
			<view class="sunui-stars-items" v-for="(item, index) in maxStar" :key="index" @tap="changeStar" :data-value="index">
				<view>
					<text class="iconfont icon-star" :class="[curStarNum > index ?'icon-star-hover':'icon-star-nhover']" :style="'font-size:'+starSize+';'"></text>
				</view>
			</view>
		</view>
		<slot></slot>
	</view>
</template>
<script>
	export default {
		name: "sunui-star",
		props: {
			starConfig: {
				type: Object,
				default: function() {
					return {
						maxStar: 5,
						defaultStar: 0,
						disabledStar: false
					}
				}
			},
			starSize: {
				type: String,
				default: '1.5em'
			},
			maxStar: {
				type: Number,
				default: 5
			},
			defaultStar: {
				type: Number,
				default: 3
			},
			disabledStar: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				curStarNum: 0
			}
		},
		created() {
			this.curStarNum = this.defaultStar;
		},
		methods: {
			changeStar(e) {
				if (this.disabledStar) {
					return;
				}
				this.curStarNum = Number(e.currentTarget.dataset.value) + 1;
				this.$emit("changeStar", {
					curStar: this.curStarNum
				});
			}
		}
	}
</script>
<style>
	[class*="icon-"] {
		font-family: "iconfont" !important;
		font-size: 32upx;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* https://at.alicdn.com/t */
	@font-face {
		font-family: "iconfont";
		src: url('https://at.alicdn.com/t/iconfont.eot?t=1553663976523');
		/* IE9 */
		src: url('https://at.alicdn.com/t/iconfont.eot?t=1553663976523#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
			url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAK8AAsAAAAABnQAAAJwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBAIEOATYCJAMICwYABCAFhG0HLhuyBcgOJUGJ2IAhIYRACNGyZfb2a1XUqsB3XaqQKBzCYFGgJMI1oxCyGXHz+pepvfWl0mks7I98nXOpJ2E9d6WWFZo5Uj5x7/SvgAKZDyiXMQatMagLqIsDKdA9MIqsSCJvGLvAJTwm0DQnnctpaXUz8JZZqwLxIPIU8M4FZJml60K15mAWrzzU03M6BryE349/qvAmqRSsqov7Ehbk/3jYWcVT+aTbJwSBgI5XUGAHkImb2sQZN8HYbpoJd0vAvsqDn0pZ+naxV4tgf51V2gYzMBn8VFz5raYT3NZUa4C9UZcSa2PWzcjWVuvqwnJ4c7N53e6IaAmyHRtRlqi2FvfSxa2lyNY221LW/UNNw8V/nO5eo43WaqAo2XzRsCg5j3ZT/nY3Jt73V26InbWyHzy+kVES1fySUwL5AMqr4qvYBS4I3m7+rH1B2T/1Vgbfn8k/oa+8yvq5gPquncEvkvUcyLrCsqWsympHk7VTtzU1UQLsGboZa5zcTybUTUa4amZTFOpWyMzaQUXLPqrqDtC0rex4ywjmJnIDW6YBQt8ekq53FPpOyMy6RsXUC6r64Yamuwi7sGUtRN8ijCiCWEiPQJHR6zjHQXyj8kbED2gonFWEnFaETWIYKmWKYroM6RCeY4tpkFcRwkEO67WwFDyHNBo9NGC9hBgiEwgxZMrlXN2bZIxeC3ydwBAKgbAg2ghIxNDT4fzxhG/p840Q3gANCm7pqwm3QjATcXZISUbRgyzT6nr13csrJoN4KgTBgTiYnhZUCuYhGhp6kKF+ngRhEDLCiJhBJrk9jOurla2v137dCWiyTCns+kJ+JBQGAA==') format('woff2'),
			url('https://at.alicdn.com/t/iconfont.woff?t=1553663976523') format('woff'),
			url('https://at.alicdn.com/t/iconfont.ttf?t=1553663976523') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
			url('https://at.alicdn.com/t/iconfont.svg?t=1553663976523#iconfont') format('svg');
		/* iOS 4.1- */
	}

	.icon-star {
		font-size: 1.5em;
	}

	.icon-star:before {
		content: "\e805";
	}

	/* 图标前颜色 */
	.icon-star-nhover {
		color: #ddd;
	}

	/* 图标后颜色 */
	.icon-star-hover {
		color: #FFCC00;
	}

	.sunui-m {
		width: 80%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.sunui-stars {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
