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
         <h2 class="wrap">辐射剂量值实时曲线</h2>
         <div class="wrap">
            <charts :option="chartn"></charts>
         </div>
         <div class="divide"></div>
         <h2 class="wrap">能谱曲线</h2>
          <div class="wrap">
            <charts :option="chartf"></charts>
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
    #test1 {
        width: 100%;
        height: 306px;
    }
     #test2 {
        width: 100%;
        height: 306px;
    }
</style>
<script>
import vmap from '../home/map.vue'
import check from './check.vue'
import videos from './videos.vue'
import charts from '../common/chart.vue'
import options from '../../assets/js/options'
import options2 from '../../assets/js/options2'
export default{
    name:'uav',
    data(){
        var option=options.bar;
        var option2=options2.bar;
        return{
            chartn:{
                id:'test1',
                option:option
            },
            chartf:{
                id:'test2',
                option:option2
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
    },
    // mounted(){
    //   let that=this
    //   $.ajax({
    //     url:this.fetchUrl+'ROMS3000_GY_BLACKBOXAction!queryAll',
    //     type:'post',
    //     success:function(res){
    //       console.log(res)
    //       let result=eval('('+res+')')
    //       that.listData=result.data.map((item)=>{
    //         item.state==1?item.state='报警':item.state='正常'
    //         return item;
    //       })
    //     },
    //     error:function(err){
    //       console.log(err)
    //     }
    //   })
    // }
}
</script>