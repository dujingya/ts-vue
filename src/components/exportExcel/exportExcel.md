# 表格导出excel
* 安装三个依赖
```bazaar
安装三个依赖包
npm install -S file-saver
npm install -S xlsx
npm install -D script-loader
```
* exportExcel.js 是使用时放到页面中正常使用的时候的方法，现有的事动态的拼接获取动态的title，正常如果已知title是固定的，则可直接写死 header和value
```bazaar
let header = ['序号', '标注的图片']
let value = ['index', 'url']
```