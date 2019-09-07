<!-- 景区实时热力图 -->
<template>
  <div class="hotmap">
    <div class="hotmap-container" id="map">

    </div>
  </div>
</template>

<script>
// import '../../assets/js/heatmap'
// import '../../assets/js/gmaps-heatmap'
import Heatmap from 'heatmap.js'
export default {
  components: {},

  data() {
    return {
      dataPoints: [
        { 
          x: 100,  
          y: 100,
          radius: 100, 
          value: 10 
        },
        {  
          x: 150,  
          y: 150,
          radius: 100, 
          value: 10 
        }
      ]  
    }
  },

  created() {
    
},

  mounted() {
    this.initMap()
  },

  methods: {
    initMap() {
      var config = {
        container: document.getElementById('map'),
        radius: 100,    
        maxOpacity: .5,
        minOpacity: 0,
        blur: .75,    
        gradient: {     
        '.5': 'green',
        '.8': 'blue',
        '.95': 'red'
        }
      }
      var heatmapInstance = Heatmap.create({
        container: document.getElementById('map')
      })
      var points = []
      var max = 0
      var width = 600
      var height = 400
      var len = 200
      while (len--) {
        var val = Math.floor(Math.random() * 100)
        max = Math.max(max, val)
        var point = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height),
          value: val
        }
        points.push(point)
      }
      var data = {
        max: max,
        data: points
      }
      // 因为data是一组数据,web切图报价所以直接setData
      heatmapInstance.setData(data)
    }
  }
}

</script>
<style lang='scss' scoped>
.hotmap{
  height: 100%;
  width: 100%;
  &-container{
    background: url('../../assets/img/bg1.png') no-repeat;
    background-size: 100%;
    height: 100%;
    width: 100%;
  }
}
</style>
