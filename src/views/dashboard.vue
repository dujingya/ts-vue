<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld'
import { Component, Vue, Model } from 'vue-property-decorator';
import { getDataList } from '../request/index'
@Component({
    components: {
        HelloWorld
    }
})
export default class Dashboard extends Vue {
    created() {
      console.log(1111)
    }
}
</script>
