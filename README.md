>**colorUi在pages文件夹下color-ui(注意！注意！！注意！！！) => 提示仅作用于uniApp插件库**  
>**如无法按照预期运行,请star并且watch本项目,以便得到最新的UI('_')**  
>**原作者`文晓港`也将于本月上线colorui,是uniapp版本的,希望大家多多支持！**  

# colorUI-for-uniApp

<p style="text-align:center;width:100%;">
<img src="https://www.playsort.cn/file/colorui.png" />
</p>

**E .Support uniapp and open source projects, individuals use free time to transplant colorUI to uniapp, the original author is `Mr. Wen Xiaogang`, thank you for his contribution to the open source project！**  

**C. 支持uniapp和开源项目，个人利用空闲时间移植colorUI到uniapp，原作者是`文晓港`先生，在此感谢他为开源项目所做出的贡献！**

## 版本迭代
- 2019/3/22(首次发布)，细节问题待修复，如发现bug请Issues
- 2019/3/22(修复运行端h5,小程序端可正常运行)
- 2019/3/24(修复和删除一些内容)

## 开发小提示
- Chrome CORS(跨域)或CORB ,打开快捷图标Chrome,然后属性->目标(T)最后加上`--disable-web-security --user-data-dir --allow-running-insecure-content`  
- console.log(),我们可以在App.vue onLaunch生命周期加上 `console.log=()=>{}` ,指向空(全局就不会打印了，你也可以局部页面添加=>仅局部失效)


## 基础元素
- 布局
- 文本
- 按钮
- 头像
- 边框阴影
- 背景
- 图标
- 标签
- 进度条
- 加载


## 交互组件
- **滚动公告(已被组件化)**
- **可选标签(已被组件化)**
- **星级评分(已被组件化)**
- 步骤条(未被组件化)
- 时间轴(未被组件化)
- 轮播(未被组件化)
- 模态框(未被组件化)
- 表单(未被组件化)
- 导航栏(未被组件化)
- 聊天(未被组件化)
- 卡片(未被组件化)
- 表单(未被组件化)
- 列表(未被组件化)

## 扩展
- Request简易请求封装
- 微动画
- 全屏抽屉
- 垂直导航


## 后续扩展以及改动
- 2019/3/22 => 新增星级评分组件(已测试过h5和小程序)  
- 2019/3/23 => 新增简易request封装(已测试过h5和小程序)  
- 2019/3/24 => 新增可选标签(单选、复选)自定义(已测试过h5和小程序)  
- 2019/3/24 => 新增api.js(管理后端接口更加方便、快捷、清晰,可以在base-request查看示例),新增滚动公告组件(已测试过h5和小程序)

##### *其它待开发...*
