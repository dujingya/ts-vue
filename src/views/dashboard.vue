<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-button @click="handle">修改hello</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue, Model, Watch } from 'vue-property-decorator';
import { getDataList } from '../request/index'
@Component({
    components: {
        HelloWorld
    }
})
export default class Dashboard extends Vue {
    private str: string = '';
    private hello: string = "Hello World!"
    private params: { beginIndex: number, endIndex: number, search: ''} = {
      beginIndex: 0,
      endIndex: 10,
      search: ''
    }
    private created() {
      console.log(1111)
    }
    private mounted() {
        // getDataList(this.params).then((res) => {
        //     console.log(res, 2222222)
        // })
    }
    @Watch('hello')
    private helloChange() {
        console.log(this.hello, 'hello被修改了')
    }
    private handle() {
        console.log('准备修改了')
        this.hello = '准备修改了'
    }
}
</script>
