<template>
  <div id="app">
    <sidebar></sidebar>
    <contents>
       
    </contents> 
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
import contents from './components/contents.vue'
//import topbar from './components/topbar.vue'
export default {
  components:{
    sidebar,contents
  },
  //name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
