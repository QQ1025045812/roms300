import Vue from 'vue'
import vueRouter from 'vue-router'
import app from '../App.vue'
import uav from '../components/uav/uav.vue'
import vehicle from '../components/vehicle/vehicle.vue'
import soldier from '../components/soldier/soldier.vue'
import sysmanage from '../components/sysmanage/sysmanage.vue'
import home from '../components/home/home.vue'

Vue.use(vueRouter)

const router=new vueRouter({
  mode:'history',
  routes:[ 
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/uav',component:uav},
    {path:'/vehicle',component:vehicle},
    {path:'/soldier',component:soldier},
    {path:'/sysmanage',component:sysmanage}    
  ]
})

export default router;
