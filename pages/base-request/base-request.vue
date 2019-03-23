<template>
	<view>
		{{title}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: ''
			};
		},
		async onLoad() {
			/**
			 * Tips
			 * 
			 * 1. 默认GET
			 * 2. 请求方式GET、POST
			 * 
			 * 
			 * Param
			 * 
			 * method:请求方法,默认GET
			 * urL:请求地址
			 * show：是否显示加载图标,默认false
			 * title:加载名称,默认加载中...
			 * data:数据,为空可以不加
			 */

			const $rq_info = await this.$Rq({
				url: 'https://a11.admin168.net/index.php?m=Api&c=Api&a=indexList'
			})

			const $rq_info1 = await this.$Rq({
				method:'GET',
				url: 'https://a11.admin168.net/index.php?m=Api&c=Api&a=indexList'
			})
			
			const $rq_info2 = await this.$Rq({
				data:{},
				url: 'https://a11.admin168.net/index.php?m=Api&c=Api&a=indexList'
			})

			console.log('数据1:',$rq_info,'数据2:',$rq_info,'数据3:',$rq_info)
			
			// 设置到视图层(view)
			this.title = $rq_info.info.title;
		}
	}
</script>

<style>

</style>
