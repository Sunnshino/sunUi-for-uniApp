
<!-- 
 
	参数:
	
	1. type (radio,checkbox)
	2. name：即数据名称,例如radio的title,radio的name(因后端数据传输可能不一)
	3. width：即可选标签宽度(默认300px)
	4. margin：即各个label之间的外边距
	5. radioData：即单选项数据
	6. checkboxData：即多选项数据
	
	小技巧：
	@sendRadioData后面接不同的方法名可以实现单个页面多个单选项复用哦
	
 -->

<template>
	<view class="content">
		<view class="sun-title">
			<span>单选</span>
		</view>
		<sunradio-checkbox type="radio" :radioData="radio" name="title" width="50"  @sendRadioData="sendRadioData" />
		<view class="m-t2"></view>
		<view class="sun-title">
			<span>单选1</span>
		</view>
		<sunradio-checkbox type="radio" :radioData="radio1" name="name" width="150" @sendRadioData="sendRadioData1" />
		<view class="m-t2"></view>
		<view class="sun-title">
			<span>复选</span>
		</view>
		<sunradio-checkbox type="checkbox" :checkboxData="checkbox" name="name" @sendCheckboxData="sendCheckboxData" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				radio: [{
					title: '张三',
					value: '0',
					checked: true
				}, {
					title: '李四',
					value: '1',
					checked: false
				}, {
					title: '黄武',
					value: '2',
					checked: false
				}, {
					title: '刘凯',
					value: '3',
					checked: false
				}],
				radio1: [{
					name: '张三1',
					value: '0',
					checked: true
				}, {
					name: '李四2',
					value: '1',
					checked: false
				}, {
					name: '黄武3',
					value: '2',
					checked: false
				}, {
					name: '刘凯4',
					value: '3',
					checked: false
				}],

				checkbox: [{
					name: '张三疯',
					value: '0',
					checked: true
				}, {
					name: '李四',
					value: '1',
					checked: true
				}, {
					name: '黄武',
					value: '2',
					checked: false
				}, {
					name: '刘凯',
					value: '3',
					checked: false
				}]
			}
		},
		onLoad() {

		},
		methods: {
			// 多个radio组件使用
			sendRadioData(e) {
				console.log('radioGroup：', e)
			},
			sendRadioData1(e) {
				console.log('radioGroup1：', e);
			},
			sendCheckboxData(e) {
				console.log('checkboxGroup：', e)
			}
		}
	}
</script>

<style>
	page{
		padding: 0;
		background: none;
	}
	
	.content {
		background-color: #fff;
	}

	.m-t2 {
		margin-top: 2%;
	}
</style>
