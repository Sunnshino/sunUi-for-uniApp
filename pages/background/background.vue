<template>
	<view>
	<!-- 	<view class="cu-custom" style="height:{{CustomBar}}px;">
			<view class="cu-bar fixed bg-gradual-blue" style="height:{{CustomBar}}px;padding-top:{{StatusBar}}px;">
				<navigator class='action' open-type="navigateBack" delta="1" hover-class="none">
					<text class='icon-back'></text> 背景颜色
				</navigator>
			</view>
		</view>
 -->
		<view class="cu-bar bg-white solid-bottom">
			<view class='action'>
				<text class='icon-title text-blue'></text>深色背景
			</view>
		</view>
		<view class='grid col-3 padding-sm'>
			<view class='padding-sm' v-for="(item,index) in ColorList" :key='index'>
				<view class="padding radius text-center shadow-blur" :class='"bg-"+item.name'>
					<view class="text-lg">{{item.title}}</view>
					<view class='margin-top-sm text-Abc'>{{item.name}}</view>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white solid-bottom">
			<view class='action'>
				<text class='icon-title text-blue'></text>淡色背景
			</view>
		</view>
		<view class='grid col-3 bg-white padding-sm'>
			<view class='padding-sm' v-for="(item,index) in ColorList" :key='index' v-if="index<12">
				<view class="padding radius text-center light" :class='"bg-"+item.name'>
					<view class="text-lg">{{item.title}}</view>
					<view class='margin-top-sm text-Abc'>{{item.name}}</view>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class='action'>
				<text class='icon-title text-blue'></text>渐变背景
			</view>
		</view>
		<view class='grid col-2 padding-sm'>
			<view class='padding-sm'>
				<view class='bg-gradual-red padding radius text-center shadow-blur'>
					<view class="text-lg">魅红</view>
					<view class='margin-top-sm text-Abc'>#f43f3b - #ec008c</view>
				</view>
			</view>
			<view class='padding-sm'>
				<view class='bg-gradual-orange padding radius text-center shadow-blur'>
					<view class="text-lg">鎏金</view>
					<view class='margin-top-sm text-Abc'>#ff9700 - #ed1c24</view>
				</view>
			</view>
			<view class='padding-sm'>
				<view class='bg-gradual-green padding radius text-center shadow-blur'>
					<view class="text-lg">翠柳</view>
					<view class='margin-top-sm text-Abc'>#39b54a - #8dc63f</view>
				</view>
			</view>
			<view class='padding-sm'>
				<view class='bg-gradual-blue padding radius text-center shadow-blur'>
					<view class="text-lg">靛青</view>
					<view class='margin-top-sm text-Abc'>#0081ff - #1cbbb4</view>
				</view>
			</view>
			<view class='padding-sm'>
				<view class='bg-gradual-purple padding radius text-center shadow-blur'>
					<view class="text-lg">惑紫</view>
					<view class='margin-top-sm text-Abc'>#9000ff - #5e00ff</view>
				</view>
			</view>
			<view class='padding-sm'>
				<view class='bg-gradual-pink padding radius text-center shadow-blur'>
					<view class="text-lg">霞彩</view>
					<view class='margin-top-sm text-Abc'>#ec008c - #6739b6</view>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-blue'></text>图片背景
			</view>
		</view>
		<view class="bg-img bg-mask padding-tb-xl" style="background-image: url('https://albedo-theme.com/wp-content/uploads/2016/08/pexels-photo-26180.jpg')">
			<view class='padding-xl text-white'>
				<view class='padding-xs text-xl'>
					我和春天有个约会
				</view>
				<view class='padding-xs'>
					I Have a Date with Spring
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-blue'></text>视频背景
			</view>
		</view>
		<view class="bg-video bg-mask">
			<video src='https://www.weilanwl.com/theme/wl/assets/images/slider1.mp4' autoplay loop muted show-play-btn
			 controls objectFit="cover"></video>
			<cover-view class='padding-xl text-white'>
				<cover-view class='padding-xs text-xl'>
					开源是创新的动力之源
				</cover-view>
				<cover-view class='padding-xs'>
					Open Source is the Power Source of Innovation
				</cover-view>
			</cover-view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='icon-title text-blue'></text>透明背景(文字层)
			</view>
		</view>
		<view class='grid col-2 padding-sm'>
			<view class='padding-sm'>
				<view class="bg-img padding-bottom-xl" style="background-image: url('https://image.weilanwl.com/img/square-3.jpg')">
					<view class='bg-shadeTop padding padding-bottom-xl'>
						上面开始
					</view>
				</view>
			</view>
			<view class='padding-sm'>
				<view class="bg-img padding-top-xl" style="background-image: url('https://image.weilanwl.com/img/square-3.jpg')">
					<view class='bg-shadeBottom padding padding-top-xl '>
						下面开始
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ColorList: [{
						title: '嫣红',
						name: 'red',
						color: '#e54d42'
					},
					{
						title: '桔橙',
						name: 'orange',
						color: '#f37b1d'
					},
					{
						title: '明黄',
						name: 'yellow',
						color: '#fbbd08'
					},
					{
						title: '橄榄',
						name: 'olive',
						color: '#8dc63f'
					},
					{
						title: '森绿',
						name: 'green',
						color: '#39b54a'
					},
					{
						title: '天青',
						name: 'cyan',
						color: '#1cbbb4'
					},
					{
						title: '海蓝',
						name: 'blue',
						color: '#0081ff'
					},
					{
						title: '姹紫',
						name: 'purple',
						color: '#6739b6'
					},
					{
						title: '木槿',
						name: 'mauve',
						color: '#9c26b0'
					},
					{
						title: '桃粉',
						name: 'pink',
						color: '#e03997'
					},
					{
						title: '棕褐',
						name: 'brown',
						color: '#a5673f'
					},
					{
						title: '玄灰',
						name: 'grey',
						color: '#8799a3'
					},
					{
						title: '草灰',
						name: 'gray',
						color: '#aaaaaa'
					},
					{
						title: '墨黑',
						name: 'black',
						color: '#333333'
					},
					{
						title: '雅白',
						name: 'white',
						color: '#ffffff'
					},
				]
			};
		}
	}
</script>

<style>

</style>
