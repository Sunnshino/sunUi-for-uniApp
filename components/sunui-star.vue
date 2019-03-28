<template name="sunui-star">
	<view class="sunui-stars">
		<view class="sunui-m">
			<view class="sunui-stars-items" v-for="(item, index) in maxStar" :key="index" @tap="changeStar" :data-value="index">
				<view v-show="type=='star'">
					<text class="iconfont icon-star" :class="[curStarNum > index ?'icon-star-hover':'icon-star-nhover']" :style="'font-size:'+starSize+';'"></text>
				</view>
				<view v-show="type=='love'">
					<text class="iconfont icon-aixin" :class="[curStarNum > index ?'icon-love-hover':'icon-love-nhover']" :style="'font-size:'+starSize+';'"></text>
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
			type: {
				type: String,
				default: 'star'
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
				curStarNum: 0,
				icon: 'icon-aixin'
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
	
	/* 
		如要进行图标扩展，请看以下说明
		
		1. 去阿里图库把喜欢的图标加入购物车，然后下载代码，解压以后把iconfont.css复制进来
		2. 把所有图标链接加上：https://at.alicdn.com/t/ (不加会引入错误)
		3. 可以看代码行5~10扩展,基本上改个名称，改个type类型，最后再写个经过前经过后样式即可
	 */
	
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
		src: url('https://at.alicdn.com/t/iconfont.eot?t=1553739503978');
		/* IE9 */
		src: url('https://at.alicdn.com/t/iconfont.eot?t=1553739503978#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
			url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMcAAsAAAAABvQAAALQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBXIFdATYCJAMMCwgABCAFhG0HNhsjBsgOJSGJwIDhIYFkBNWy9ezup0hSoEJ2+FweFaJE4RAGiwKhUSYKh0KorNE36V99DnKOxCIPnmwOxHdLlVBtd6RP3Dttis9nRbnMNfBTF2AcUKBjDYqsQBL0hrELXuBxAm1zIujtF1U0AFOFPS4Q1yytAqaFsKKwXFOoNywt4oGRZrpLNwH30ffjT1yYktQye+rBVaEW5HwmvjfKt9WEjoBEspwTbBUZ64BCXDa6jxkk6XUG2rrS0GgF6oqQlopVFZHYUNadPzySIOrs6i5YRsbkoSQel8S3kfSpsxmejpdtwAV9cusQi+7Du487NzXtPrx00LGhYefo3n1OjWHhvmMuu1yaG/Hs5RMHnJua9xwYfrzU4Liz5OwcXffwWeOjR6mHloMvPml+8iL93YfK2nv//aV3gugtCkiQTr9Xu8ztv3A69F/ksanvZw+9Jk7BobO2k8ciK4KG6fs5kPx4trjgcknBxVeBry6WJAI5raTM0n9qq6JqvflacnjytVCQCvKC8mmgB0D1IL/mDQCqL/kt/f/n35h5X3/abZPxx7RTwMeN6m9RqHpQDK/QlGCSvyoZ2FYMmW3JRRN7YsubLQ5wJqCQ+1TA9o+9nq6fuvN8aJqa4G+YfQtv03xGLvR11HRsoq5pC21rild3TMAMRGlh1SxAGDqDpO8J2dAtcqG/Qs20L6gbhgHaDsNhy47FYM3zMVIRpIXqQchqZIlybcQ8rq1DdK+gwnlZxGhCWMfGYGxUTDlXjCSEl5ih66PjCKEghWURFoHTkCDIUMEyhzQkiiFESYuOppreFKWRRWBuD4aoEIgWpDYIYmnIJFTQnTCvfL4OQuslUMEdhDp/EwTTYfuHYkWJGUAuVkuDCI/yik4fWhyCoEAUTCaCisAgRCCQQUrzIA6iQURhJiQVaaKdTtRQddT2WvH/9kCbvV+OFDmKckNU2EjFDrASAA==') format('woff2'),
			url('https://at.alicdn.com/t/iconfont.woff?t=1553739503978') format('woff'),
			url('https://at.alicdn.com/t/iconfont.ttf?t=1553739503978') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
			url('https://at.alicdn.com/t/iconfont.svg?t=1553739503978#iconfont') format('svg');
		/* iOS 4.1- */
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-star:before {
		content: "\e805";
	}

	.icon-aixin:before {
		content: "\e635";
	}

	.icon-star {
		font-size: 1.5em;
	}

	/* 爱心图标经过颜色 */
	.icon-love-nhover {
		color: #ddd;
	}

	/* 爱心图标经过后颜色 */
	.icon-love-hover {
		color: #F00;
	}

	/* star图标前颜色 */
	.icon-star-nhover {
		color: #ddd;
	}

	/* star图标后颜色 */
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
