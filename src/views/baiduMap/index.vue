<!-- 百度地图，标注停车场与厕所 -->
<template>
  <div class="bdmap">
    <div class="bdmap-header">
      <div class="bdmap-header_search" v-show="showInput">
        <input type="text" placeholder="" v-model="inputVal"/>
        <div class="bdmap-header_search_btn" @click="handelSearch"></div>
      </div>
      <div class="bdmap-header_icons">
        <router-link tag="div" to="/home" class="bdmap-header_icons_icon">
          <img src="../../assets/img/icons/home.webp" alt=""/>
          <p>首页</p>
        </router-link>
        <router-link tag="div" to="/leisure" class="bdmap-header_icons_icon">
          <img src="../../assets/img/icons/home.webp" alt="" />
          <p>商城</p>
        </router-link>
      </div>
    </div>
    <div id="container" class="bdmap-container"></div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      inputVal: '输入车牌号进行查询',
      showInput: '',
      currentp: {  // 当前位置
        longitude: '116.310791',
        latitude: '40.003419'
      },
      searchp: {  // 查询位置
        longitude: '106.40',
        latitude: '45.90'
      }
    }
  },

  created() {
    if(this.$route.params.category === 'park') {
      this.showInput = true
    } else {
      this.showInput = false
    }
  },
  watch: {
    $route(to,from) {
      if(to.params.category === 'park') {
        this.showInput = true
      } else {
        this.showInput = false
      }
    }
  },
  mounted() {
    this.map = new BMap.Map("container");
    var point = new BMap.Point(116.310791, 40.003419);
    this.map.centerAndZoom(point, 40); 
    this.map.enableScrollWheelZoom(true);
    // this.pointer()
    // this.moveToPoint()
    this.addMarker()
  },

  methods: {
    handelSearch() {
      // 处理搜索
    },
    // 根据点进行标注
    pointer() {
      this.map.clearOverlays(); 
			var new_point = new BMap.Point(this.currentp.longitude, this.currentp.latitude)
			var marker = new BMap.Marker(new_point)  // 创建标注
			this.map.addOverlay(marker)            // 将标注添加到地图中
			this.map.panTo(new_point) 
    },
    // 根据查询地点规划路线
    moveToPoint() {
      var map = this.map
      var riding = new BMap.RidingRoute(map, { 
        renderOptions: { 
            map: map, 
            autoViewport: true 
        }
      });
      var start = new BMap.Point(this.currentp.longitude, this.currentp.latitude);
      var end = new BMap.Point(this.searchp.longitude, this.searchp.latitude);
      riding.search(start, end);
    },
    addMarker(){  // 创建图标对象
      var point = new BMap.Point(116.310791, 40.003419); 
      var myIcon = new BMap.Icon(require('./zhu.png'), new BMap.Size(24, 24));
      // 创建标注对象并添加到地图   
      var marker = new BMap.Marker(point, {icon: myIcon});
      this.map.addOverlay(marker)              // 将标注添加到地图中
    }   
  }
}

</script>
<style lang='scss' scoped>
.bdmap{
  width: 100%;
  height: 100%;
  position: relative;
  &-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &-header{
    width: 100%;
    padding-top: 0.5rem;
    color: #fff;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    &_search{
      width: 5.38rem;
      height: 0.95rem;
      display: inline-block;
      text-align: center;
      background-color: #fff;
      padding-right: 0.7rem;
      margin-left: 0.5rem;
      position: relative;
      input{
        width: 100%;
        border: none;
        line-height: 0.95rem;
        font-size: 0.2rem;
        text-align: center;
      }
      &_btn{
        width: 0.5rem;
        height: 0.5rem;
        cursor: pointer;
        position: absolute;
        top: 0.2rem;
        right: 0.2rem;
        background:rgba(74,144,226,0.24);
        opacity:0.2;
      }
    }
    &_icons{
      float: right;
      display: flex;
      margin-right: 0.92rem;
      &_icon{
        margin-left: 0.5rem;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        img{
          width: 0.44rem;
          height: 0.44rem;
          margin-bottom: 0.1rem;
        }
        p{
          font-size: 0.2rem;
        }
      }
    }
  }
}
</style>
