<template>
    <div>
        <h2 class="wrap">轨迹</h2>
       <div class="wrap">
            <vmap :m="mapdata"></vmap>
        </div>
        <div class="divide"></div>
        <div class="check-video-wrap clearfix wrap">
            <div class="check">
                <check></check>
            </div>
            <div class="videos">
                <videos></videos>
            </div>
        </div>
        <div class="divide"></div>
        <h2 class="wrap">
            辐射剂量值实时曲线
        </h2>
        <div class="wrap">
            <charts :option="option"></charts>
        </div>
    </div>
</template>
<style>
    .check{
        width:404px;
        float:left;
    }
    .videos{
        float:right;
        width:558px;
    }
</style>
<script>
import vmap from '../home/map.vue'
import check from '../uav/check.vue'
import videos from '../uav/videos.vue'
import charts from '../common/chart.vue'
import options from '../../assets/js/options'
export default{
    data(){
        var option=options.bar;
        return{
            option:{
                id:'test3',
                option:option
            },
            mapdata:{  //vue2.0将数据定位对象的形式，实现父子组件的通信
                height:250,
                longitude:116.404,
                latitude:39.915
            }
        }
    },
    components:{
        vmap,check,videos,charts
    }
}
</script>