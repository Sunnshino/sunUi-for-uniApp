<template>
	<view></view>
	<!-- <view>
		<view class="cu-bar bg-white search fixed">
			<view class='search-form round'>
				<text class="icon-search"></text>
				<input type="text" placeholder="输入搜索的关键词" confirm-type="search"></input>
			</view>
			<view class='action'>
				<button class='cu-btn bg-gradual-green shadow-blur round'>搜索</button>
			</view>
		</view>
		<scroll-view scroll-y class="indexes" :scroll-into-view="'indexes-'+listCurID"
		 scroll-with-animation="true" enable-back-to-top="true">
			<block v-for="(item,index) in list" :key='index'>
				<view class='padding' :class="'indexItem-'+list[index]" :id="'indexes-'+list[index]" :data-index="list[index]">{{list[index]}}</view>
				<view class="cu-list menu menu-avatar no-padding">
					<view class="cu-item" v-for="(item,idx) in 2" :key="index">
						<view class="cu-avatar round lg">{{list[index]}}</view>
						<view class='content'>
							<view class='text-grey'>{{list[idx]}}<text class='text-abc'>{{list[item]}}</text>君</view>
							<view class='text-gray text-sm'>
								有{{item,+2}}个主子需要伺候
							</view>
						</view>
					</view>
				</view>
			</block>
		</scroll-view>
		<view class='indexBar'>
			<view class='indexBar-box' touchstart="tStart" touchend="tEnd" touchmove="tMove">
				<view class="indexBar-item " v-for="(item,index) in list" :key="index" :id='index' touchstart="getCur" touchend="setCur">{{list[index]}}</view>
			</view>
		</view>
		<view :hidden="hidden" class="indexToast">
			{{listCur}}
		</view>
	</view> -->
</template>

<script>
	export default {
		data() {
			return {
				hidden: true,
				list: [],
				listCur: '',
				boxTop: '',
				barTop: '',
				listCurID: '',
				movableY: ''
			};
		},
		onLoad() {
			let list = [];
			for (let i = 0; i < 26; i++) {
				list[i] = String.fromCharCode(65 + i)
			}
			this.list = list,
				this.listCur = list[0]
		},
		onReady() {
			wx.createSelectorQuery().select('.indexBar-box').boundingClientRect((res) => {
				this.boxTop = res.top
			}).exec();
			wx.createSelectorQuery().select('.indexes').boundingClientRect((res) => {
				this.barTop = res.top
			}).exec()
		},
		methods: {
			//获取文字信息
			getCur(e) {
				this.hidden = false;
				this.listCur = this.list[e.target.id];
			},

			setCur(e) {
				this.hidden = true,
					this.listCur = this.listCur
			},
			//滑动选择Item
			tMove(e) {
				let y = e.touches[0].clientY,
					offsettop = this.boxTop;
				//判断选择区域,只有在选择区才会生效
				if (y > offsettop) {
					let num = parseInt((y - offsettop) / 20);
					this.listCur = this.list[num];
				};
			},

			//触发全部开始选择
			tStart() {
				this.hidden = false;
			},

			//触发结束选择
			tEnd() {
				this.hidden = true;
				this.listCurID = this.listCur;
			},
			indexSelect(e) {
				let barHeight = this.data.barHeight;
				let list = this.data.list;
				let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
				for (let i = 0; i < list.length; i++) {
					if (scrollY < i + 1) {
						this.listCur = list[i];
						this.movableY = i * 20;
						return;
					}
				}
			}
		},
		computed:{
			
		},
		mounted() {
			
		},
		watch:{
			
		}
	}
</script>

<style>
	page {
		padding-top: 50px;
	}

	.indexes {
		position: relative;
	}

	.indexBar {
		position: fixed;
		right: 0px;
		bottom: 0px;
		padding: 10px 10px 10px 30px;
		display: flex;
		align-items: center;
	}

	.indexBar .indexBar-box {
		width: 20px;
		height: auto;
		background: #fff;
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
	}

	.indexBar-item {
		flex: 1;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		color: #888;
	}

	movable-view.indexBar-item {
		width: 20px;
		height: 20px;
		z-index: 9;
	}

	movable-view.indexBar-item::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 5px;
		height: 10px;
		width: 2px;
		background-color: #f37b1d;
	}

	.indexToast {
		position: fixed;
		top: 0;
		right: 40px;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		width: 50px;
		height: 50px;
		border-radius: 5px;
		margin: auto;
		color: #fff;
		line-height: 50px;
		text-align: center;
		font-size: 24px;
	}
</style>
