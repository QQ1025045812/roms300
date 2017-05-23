module.exports = {
  bar: {
    chart: {
      type: 'spline',
      marginRight:10
    },
    events:{
      load:function(){
        var series=this.series[0];
        var chart=this;
        setInterval(function(){
          var x=(new Date()).getTime;
          var y=Math.random();
          series.addPoint([x,y],true,true);
          activeLastPointToolip(chart);
        },1000)
      }
    },
    title:{
      text:"辐射强度实时曲线"
    },
    xAxis:{
      type:'datatime',
      tickPixelInterval:150
    },
    series: [{
      data: [50, 235, 809, 947]
    }]
  }
}