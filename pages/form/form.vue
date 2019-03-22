<template>
	<view>
		<!-- <view class="cu-custom" :style="'height:'+CustomBar+'px';">
			<view class="cu-bar fixed bg-gradual-pink" :style="'height:'{{CustomBar}}px;padding-top:{{StatusBar}}px;">
				<navigator class='action' open-type="navigateBack" delta="1" hover-class="none">
					<text class='icon-back'></text> 表单
				</navigator>
			</view>
		</view> -->
		<form>

			<view class="cu-form-group margin-top">
				<view class='title'>邮件</view>
				<input placeholder="两字短标题" class='radius' name='input'></input>
			</view>
			<view class="cu-form-group">
				<view class='title'>输入框</view>
				<input placeholder="三字标题" class='radius' name='input'></input>
			</view>
			<view class="cu-form-group">
				<view class='title'>收货地址</view>
				<input placeholder="统一标题的宽度" class='radius' name='input'></input>
			</view>
			<view class="cu-form-group">
				<view class='title'>收货地址</view>
				<input placeholder="输入框带个图标" class='radius' name='input'></input>
				<text class='icon-locationfill text-orange'></text>
			</view>
			<view class="cu-form-group">
				<view class='title'>验证码</view>
				<input placeholder="输入框带个按钮" class='radius' name='input'></input>
				<button class='cu-btn bg-green shadow'>验证码</button>
			</view>
			<view class="cu-form-group">
				<view class='title'>手机号码</view>
				<input placeholder="输入框带标签" class='radius' name='input'></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>


			<view class="cu-form-group margin-top">
				<view class='title'>普通选择</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class='title'>多列选择</view>
				<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex"
				 :range="multiArray">
					<view class="picker">
						{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class='title'>时间选择</view>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
					<view class="picker">
						{{time}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class='title'>日期选择</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class='title'>地址选择</view>
				<picker mode="region" @change="RegionChange" :value="region" :custom-item="customItem">
					<view class="picker">
						{{region[0]}}，{{region[1]}}，{{region[2]}}
					</view>
				</picker>
			</view>

			<view class="cu-form-group margin-top">
				<view class='title'>开关选择</view>
				<switch></switch>
			</view>
			<view class="cu-form-group">
				<view class='title'>定义颜色</view>
				<switch class='red sm' checked></switch>
			</view>
			<view class="cu-form-group">
				<switch class='switch-sex' checked></switch>
				<view class='title'>定义图标</view>
			</view>
			<view class="cu-form-group">
				<view class='title'>方形开关</view>
				<switch class='orange radius sm' checked></switch>
			</view>
			<radio-group class="block">
				<view class="cu-form-group margin-top">
					<view class='title'>单选操作(radio)</view>
					<radio checked></radio>
				</view>
				<view class="cu-form-group">
					<view class='title'>定义样式</view>
					<radio class='radio'></radio>
				</view>
				<view class="cu-form-group">
					<view class='title'>定义颜色</view>
					<view>
						<radio class='blue radio'></radio>
						<radio class='red margin-left-sm'></radio>
					</view>
				</view>
			</radio-group>

			<view class="cu-form-group margin-top">
				<view class='title'>复选选操作(checkbox)</view>
				<checkbox></checkbox>
			</view>
			<view class="cu-form-group">
				<view class='title'>定义形状</view>
				<checkbox class='round' checked></checkbox>
			</view>
			<view class="cu-form-group">
				<view class='title'>定义颜色</view>
				<checkbox class='round blue' checked></checkbox>
			</view>
			<view class="cu-form-group margin-top">
				<view class="grid col-3 grid-square flex-sub">
					<view class="padding-xs bg-img" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);">
					</view>
					<view class="padding-xs bg-img" style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);">
						<view class="cu-tag bg-red">
							<text class='icon-close'></text>
						</view>
					</view>
					<view class="padding-xs solids">
						<text class='icon-cameraadd'></text>
					</view>
				</view>
			</view>
			<view class="cu-form-group margin-top" v-show="modalName!=null">
				<textarea placeholder="多行文本输入框" maxlength="-1" :disabled="modalName!=null" placeholder-class='placeholder'></textarea>
			</view>
			<view class="cu-form-group top" v-show="modalName!=null">
				<view class='title'>点文本框</view>
				<textarea placeholder="多行文本输入框" maxlength="-1" :disabled="modalName!=null" placeholder-class='placeholder'></textarea>
			</view>
			<!-- 
  <view class="cu-form-group margin-top">
    <view class='title'>多级联动</view>
    <picker mode="region" bindchange="RegionChange" value="{{region}}" custom-item="{{customItem}}">
      <view class="picker">
        {{region[0]}}，{{region[1]}}，{{region[2]}}
      </view>
    </picker>
  </view> -->
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: null,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				multiArray: [
					['无脊柱动物', '脊柱动物'],
					['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
					['猪肉绦虫', '吸血虫']
				],
				objectMultiArray: [
					[{
							id: 0,
							name: '无脊柱动物'
						},
						{
							id: 1,
							name: '脊柱动物'
						}
					],
					[{
							id: 0,
							name: '扁性动物'
						},
						{
							id: 1,
							name: '线形动物'
						},
						{
							id: 2,
							name: '环节动物'
						},
						{
							id: 3,
							name: '软体动物'
						},
						{
							id: 3,
							name: '节肢动物'
						}
					],
					[{
							id: 0,
							name: '猪肉绦虫'
						},
						{
							id: 1,
							name: '吸血虫'
						}
					]
				],
				multiIndex: [0, 0, 0],
				time: '12:01',
				date: '2018-12-25',
				region: ['广东省', '广州市', '海珠区'],
				data: ''
			};
		},
		methods: {
			PickerChange(e) {
				console.log(e);
				this.index = e.detail.value;
			},
			MultiChange(e) {
				this.multiIndex = e.detail.value;
			},
			MultiColumnChange(e) {
				let data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				};
				data.multiIndex[e.detail.column] = e.detail.value;
				switch (e.detail.column) {
					case 0:
						switch (data.multiIndex[0]) {
							case 0:
								data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
								data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
								break;
							case 1:
								data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
								data.multiArray[2] = ['鲫鱼', '带鱼'];
								break;
						}
						data.multiIndex[1] = 0;
						data.multiIndex[2] = 0;
						break;
					case 1:
						switch (data.multiIndex[0]) {
							case 0:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
										break;
									case 1:
										data.multiArray[2] = ['蛔虫'];
										break;
									case 2:
										data.multiArray[2] = ['蚂蚁', '蚂蟥'];
										break;
									case 3:
										data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
										break;
									case 4:
										data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
										break;
								}
								break;
							case 1:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['鲫鱼', '带鱼'];
										break;
									case 1:
										data.multiArray[2] = ['青蛙', '娃娃鱼'];
										break;
									case 2:
										data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
										break;
								}
								break;
						}
						data.multiIndex[2] = 0;
						break;
				}
				this.data = data;
			},
			TimeChange(e) {
				this.time = e.detail.value;
			},
			DateChange(e) {
				this.date = e.detail.value;
			},
			RegionChange: function(e) {
				this.region = e.detail.value;
			}
		}
	}
</script>

<style>
	form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
