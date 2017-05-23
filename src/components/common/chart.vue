<template>
  <div>
    <div :id="id"></div>
  </div>
</template>
<script>
import HighCharts from 'highcharts'

export default {
  data(){
    return {
      id:this.option.id
    }
  },
  // 验证类型
  props: ['option'],
  mounted() {
    HighCharts.chart(this.option.id,this.option.option)
    
  }
}
</script>