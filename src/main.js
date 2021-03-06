import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './assets/css/reset.css'
import $ from 'expose-loader?$!jquery'

new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
