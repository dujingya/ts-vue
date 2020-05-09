<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="addRow">增加</el-button>
    <el-table
            :data="tableData"
            style="width: 100%"
            >
      <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150">
      </el-table-column>
      <el-table-column
              prop="name"
              label="姓名"
              width="120">
      </el-table-column>
      <el-table-column
              prop="province"
              label="省份"
              width="120">
      </el-table-column>
      <el-table-column
              prop="city"
              label="市区"
              width="120">
      </el-table-column>
      <el-table-column
              prop="address"
              label="地址"
              width="300">
      </el-table-column>
      <el-table-column
              prop="zip"
              label="邮编"
              width="120">
      </el-table-column>
      <el-table-column
              fixed="right"
              label="操作"
              width="120">
        <template slot-scope="scope">
          <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small">
            移除
          </el-button>
          <el-button
                  @click.native.prevent="editeRow(scope.$index, scope.row)"
                  type="text"
                  size="small">
            修改
          </el-button>
          <el-button
                  @click.native.prevent="previewRow(scope.$index, scope.row)"
                  type="text"
                  size="small">
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="日期">
          <el-input v-model="form.date" :disabled="dataIndex!== 1 && this.dataIndex !== 3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name" :disabled="dataIndex!== 1 && this.dataIndex !== 3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="省份">
          <el-input v-model="form.province" :disabled="dataIndex!== 1 && this.dataIndex !== 3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="市区">
          <el-input v-model="form.city" :disabled="dataIndex!== 1 && this.dataIndex !== 3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address" :disabled="dataIndex!== 1 && this.dataIndex !== 3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮编">
          <el-input v-model="form.zip" :disabled="dataIndex!== 1 && this.dataIndex !== 3" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class HelloWorld extends Vue {
  private tableData = [{
    date: '2016-05-03',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333,
  }, {
    date: '2016-05-02',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333,
  }, {
    date: '2016-05-04',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333,
  }, {
    date: '2016-05-01',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333,
  }, {
    date: '2016-05-08',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333,
  }, {
    date: '2016-05-06',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333,
  }, {
    date: '2016-05-07',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333,
  }]
  private dialogFormVisible: boolean = false
  private Index: number = 0
  private dataIndex: number = 0
  private form = {
    name: '',
    date: '',
    province: '',
    city: '',
    address: '',
    zip: 0,
  }
  @Prop() private msg!: string
  private isShow: boolean = false
  private dislog: boolean = false
  public created() {
    this.isShow = true
  }
  public mounted() {
    this.dislog =  false
  }
  public deleteRow(index: number, rows: any): void {
    this.dataIndex = 0
    rows.splice(index, 1)
  }
  public addRow(index: number, rows: any): void {
    this.dataIndex = 3
    this.dialogFormVisible = true
  }
  public editeRow(index: number, rows: any): void {
    this.dataIndex = 1
    this.dialogFormVisible = true
    this.Index = index
    this.form = {
      name: rows.name,
      date: rows.date,
      province: rows.province,
      city: rows.city,
      address: rows.address,
      zip: rows.zip,
    }
    this.$set(this.tableData, index, this.form)
  }
  public previewRow(index: number, rows: any): void {
    this.dataIndex = 2
    this.dialogFormVisible = true
    this.Index = index
    this.form = {
      name: rows.name,
      date: rows.date,
      province: rows.province,
      city: rows.city,
      address: rows.address,
      zip: rows.zip,
    }
  }
  public confirm() {
    if (this.dataIndex === 0) {

    } else if (this.dataIndex === 1) {
      this.$set(this.tableData, this.Index, this.form)
    } else if (this.dataIndex === 2) {

    } else {
      this.tableData.push(this.form)
    }
    this.dialogFormVisible = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-form-item__content{
  text-align: left;
}
  .hello{
    margin: 0 50px;
  }
  .el-input{
    width: 200px;
  }
</style>
