# colorUI-for-uniApp

<p style="text-align:center;width:100%;">
<img src="https://www.playsort.cn/file/colorui.png" />
</p>

E .Support uniapp and open source projects, individuals use free time to transplant colorUI to uniapp, the original author is `Mr. Wen Xiaogang`, thank you for his contribution to the open source project！  

C. 支持uniapp和开源项目，个人利用空闲时间移植colorUI到uniapp，原作者是`文晓港`先生，在此感谢他为开源项目所做出的贡献！ 

## 版本迭代
- 2019/3/22(首次发布)，细节问题待修复，如发现bug请Issues
- 2019/3/22(修复运行端h5,小程序端可正常运行)

## 开发小提示
1. Chrome CORS(跨域)或CORB ,打开快捷图标Chrome,然后在目标(T)最后加上--disable-web-security --user-data-dir --allow-running-insecure-content  
2. console.log(),我们可以在App.vue onLaunch生命周期加上 console.log=()=>{} ,指向空(全局就不会打印了，你也可以局部页面添加=>仅局部失效)

## 后续扩展以及改动
> 2019/3/22 => 新增星级评分组件(支持小程序和H5,其余未测试)  
> 2019/3/23 => 新增简易request封装(已测试过h5和小程序)  
> 2019/3/24 => 新增可选标签(单选、复选)自定义
> 
> 
> 其它待开发...
