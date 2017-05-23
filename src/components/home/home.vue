<template>
   <div>
    <h2 class="wrap"> 地图</h2>
    <div class="wrap">
        <vmap :m="mapdata"></vmap>
    </div>
    <div class="divide"></div>
    <h2 class="wrap">辐射值</h2>
    <div class="wrap">
        <radiation></radiation>
    </div>
   </div>
</template>
<style scoped>

</style>
<script>
    import vmap from './map.vue'
    import radiation from './radiation.vue'
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