<!-- 

使用实例：
	 <radio-checkbox type="radio" :radioData="radio" :labelStyle="label"></radio-checkbox>
	 <radio-checkbox type="checkbox" :checkboxData="checkbox" :labelStyle="label"></radio-checkbox> 
 -->


<template name="sunradio-checkbox">
	<view>
		<view v-show="type=='radio' || type==undefined || type==''">
			<view class="sunsin-group">
				<radio-group @change="radioChange">
					<label v-for="(item,index) in radioData" :key="index" :class="[item.checked ? 'checkd' : '']" :style="{width: labelWidth,'margin':margin}">
						<radio :value="item[value]" :checked="item.checked" />
						<text>{{item[name]}}</text>
					</label>
				</radio-group>
			</view>
		</view>

		<view v-show="type=='checkbox'">
			<view class="sunsin-group">
				<checkbox-group @change="checkboxChange">
					<label v-for="(item,index) in checkboxData" :key="index" :class="[item.checked ? 'checkd' : '']" :style="{width: labelWidth,'margin':margin}">
						<checkbox :value="item[value]" :checked="item.checked" />
						<text>{{item[name]}}</text>
					</label>
				</checkbox-group>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		name: 'sunradio-checkbox',
		props: {
			type: {
				type: String,
				default:function(){
					return `radio`
				}
			},
			name: {
				type: String,
				default:function(){
					return `name`
				}
			},
			value: {
				type: String,
				default:function(){
					return `value`
				}
			},
			width: {
				type: [String, Number],
				default: function() {
					return `300`
				}
			},
			margin:{
				type:String
			},
			radioData: {
				type: Array
			},
			checkboxData: {
				type: Array
			}
		},
		computed: {
			labelWidth() {
				return `${this.width}px`
			}
		},
		methods: {
			radioChange(e) {
				for (let i = 0, len = this.radioData.length; i < this.radioData.length; i++) {
					this.radioData[i].value == e.detail.value ? this.radioData[i].checked = true : this.radioData[i].checked = false;
				}
				this.$emit('sendRadioData', e.detail.value);
				// console.log('radio-group:', e.detail.value);
			},
			checkboxChange(e) {
				for (let i = 0, len = this.checkboxData.length; i < len; i++) {
					e.detail.value.includes(this.checkboxData[i].value) ? this.checkboxData[i].checked = true : this.checkboxData[i].checked =
						false;
				}
				this.$emit('sendCheckboxData', e.detail.value);
				// console.log('checkbox-group:', e.detail.value)
			}
		}
	}
</script>

<style scoped>
	/* 
	如有需求,可以更改radio/checkbox未激活样式!
	可以调边距等一系列css , 硬解码当前测试小程序不支持
	*/
	label {
		font-size: .7em;
		height: 30upx;
		line-height: 30upx;
		padding: 2.5%;
		margin: 12upx;
		text-align: center;
		background-color: #eee;
		border-radius: 5upx;
	}

	radio-group,
	checkbox-group {
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	/* 
		如有需求,可以更改radio/checkbox激活样式!
	 */
	.checkd {
		color: #fff;
		background-color: #00C777;
	}

	.sunsin-group radio,
	.sunsin-group checkbox {
		display: none;
	}

	.sunsin-group {
		display: flex;
		flex-wrap: wrap;
		width: 100vw;
	}
</style>
