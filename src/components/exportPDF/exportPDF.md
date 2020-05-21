# html页面导出pdf
* 使用方式，在页面直接调用 getPdf 方法，传入两个参数，元素ID和导出pdf的名称
```bazaar
<button type="button" class="btn btn-primary exportBtn" v-on:click="getPdf('appDOM', '统计报告')">导出PDF</button>
```