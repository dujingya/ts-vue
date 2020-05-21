const exportExcel = () => {
    let arrList = []
    if (this.selectList.length > 0 && (this.selectList.length < this.excelList.length)) {
        this.selectList.forEach((item, index) => {
            this.excelList.forEach((val, k) => {
                if (item.pid === val.id) {
                    arrList.push(val)
                }
            })
        })
    } else {
        arrList = this.excelList
    }
    let arr = []
    arrList.forEach(item => {
        if (item['100'].length > 0) {
            let len = item['100'].length
            arr.push(len)
        }
    })
    let len = Math.max(...arr)
    // console.log(len)
    let header = ['序号', '标注的图片']
    let value = ['index', 'url']
    arrList.forEach((item, index) => {
        item.index = index + 1
        if (item['100'].length > 0) {
            item['100'].forEach((val, k) => {
                item['dname_100_' + k] = val.dname
                item['result_100_' + k] = val.result
                header.push(val.dname)
                value.push('result_100_' + k)
            })
            if (item['100'].length < 4) {
                for (let i = item['100'].length; i < len; i++) {
                    item['dname_100_' + i] = ''
                    item['result_100_' + i] = ''
                }
            }
        } else {
            for (let i = 0; i < len; i++) {
                item['dname_100_' + i] = ''
                item['result_100_' + i] = ''
            }
        }
        if (item['1000'].length > 0) {
            item['1000'].forEach((val, k) => {
                item['dname_1000_' + k] = val.dname
                item['result_1000_' + k] = val.result
                header.push(val.dname)
                value.push('result_1000_' + k)
            })
            if (item['1000'].length < 4) {
                for (let i = item['1000'].length; i < len; i++) {
                    item['dname_1000_' + i] = '暂无'
                    item['result_1000_' + i] = ''
                }
            }
        } else {
            for (let i = 0; i < len; i++) {
                item['dname_1000_' + i] = ''
                item['result_1000_' + i] = ''
            }
        }
    })
    // console.log(arrList, 99999999)
    // console.log(this.unique(header), 10000000000)
    // console.log(this.unique(value), 20000000000)
    require.ensure([], () => {
        const { export_json_to_excel } = require('./vendor/Export2Excel');
        // 头
        let tHeader = header
        tHeader.splice(len * 2 + 2)
        // 对应的标签
        let filterVal = value
        // 标签对应的内容  是一个数组结构
        let list = arrList
        let data = this.formatJson(filterVal, list);
        data.forEach((item, index) => {
            item.splice(len * 2 + 2)
        })
        // console.log(data, 40000000)
        let classification = 2 // 主要的算分类，算法100和算法1000两种形式
        export_json_to_excel(tHeader, data, len, classification, '列表excel');
    })
}
