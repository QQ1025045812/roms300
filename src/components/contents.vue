<template>
    <div class="contents-wrap">
        <div class="contents">
             <router-view></router-view>
        </div>
    </div>
</template>
<style>

</style>
<script>
import soldier from './soldier/soldier.vue'
import sysmanage from './sysmanage/sysmanage.vue'
import uav from './uav/uav.vue'
import vehicle from './vehicle/vehicle.vue'
import home from './home/home.vue'
export default {
  components:{
    soldier,sysmanage,uav,vehicle,home
  },
  //name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>