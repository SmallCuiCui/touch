<!-- 景区实时热力图 -->
<template>
  <div class="hotmap">
    <div id="map" class="hotmap-container"></div>
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
      points: [
        // {
        //   x: 100,
        //   y: 100,
        //   radius: 100,
        //   value: 10
        // }
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
        container: document.getElementById('map')
        // gradient: {
        //   '.5': 'rgba(255, 0, 0, 0.5)',
        //   '.8': 'rgba(255, 0, 0, 0.8)',
        //   '.95': 'rgba(255, 0, 0, 1)'
        // }
      }
      var heatmapInstance = Heatmap.create(config)
      var max = 0
      var width = 1476
      var height = 750
      var len = 200
      while (len--) {
        var val = Math.floor(Math.random() * 100)
        max = Math.max(max, val)
        var point = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height) + 300,
          value: val
        }
        this.points.push(point)
      }
      var data = {
        max: max,
        data: this.points
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
