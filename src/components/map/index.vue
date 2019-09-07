<!-- 景区地图 -->
<template>
  <div class="map">
    <div class="map_bg">
      <img src="../../assets/img/pic/26.png" alt="">
    </div>
    
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
    }
  },

  created() {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.map{
  &_bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    img{
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
}
</style>
