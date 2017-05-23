<template>
    <div>
        <h2>检测情况</h2>
        <div class="show-data clearfix">
            <div class="left">
                <ul>
                    <li>经度：E1200120.8</li>
                    <li>维度：N32115.56</li>
                </ul>
                <ul>
                    <li>速度：12m/s</li>
                    <li>高度：3m</li>
                </ul>
            </div>
            <div class="right">
                <div class="title">78nSv/h</div>
                <div class="content">实时剂量率</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .show-data{
        padding:22px 14px 32px  20px;
        border:1px solid #dadada;
    }
    .show-data li{
        line-height:28px;
    }
    .show-data .left{
        float:left;
        width:196px;
    }
    .show-data .right{
        float:left;
        background:#4195ff;
        width:140px;
        height:140px;
        border-radius:50%;
        position:relative;
        color:#fff;
    }
    .right .title{
        font-size:16px;
        position:absolute;
        top:52px;
        text-align:center;
        width:100%;
    }
    .right .content{
        position:absolute;
        bottom:32px;
        text-align:center;
        width:100%;
    }
</style>
<script>
import vmap from '../home/map.vue'
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
        vmap
    }
}
</script>