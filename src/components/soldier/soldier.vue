<template>
    <div>
        <h2 class="wrap">轨迹</h2>
       <div class="wrap">
            <vmap :m="mapdata"></vmap>
        </div>
        <div class="divide"></div>
        <h2 class="wrap">视频</h2>
        <div class="wrap">
            <radiation></radiation>
        </div>
    </div>
</template>
<style>

</style>
<script>
import vmap from '../home/map.vue'
import radiation from '../home/radiation.vue'
//import videos from './videos.vue'
export default{
    data(){
        return{
            mapdata:{  //vue2.0将数据定位对象的形式，实现父子组件的通信
                height:250,
                longitude:116.404,
                latitude:39.915
            }
        }
    },
    components:{
        vmap,radiation
    }
}
</script>