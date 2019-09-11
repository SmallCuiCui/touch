<!-- 百度地图，标注停车场与厕所 -->
<template>
  <div class="bdmap">
    <div class="bdmap-header">
      <div class="bdmap-header_search" v-show="showInput">
        <input type="text" value="inputVal"  v-model="inputVal"/>
        <div class="bdmap-header_search_btn" @click="handelSearch"></div>
      </div>
      <div class="bdmap-header_icons">
        <router-link tag="div" to="/home" class="bdmap-header_icons_icon">
          <img src="../../assets/img/icons/home.png" alt=""/>
          <p>首页</p>
        </router-link>
        <router-link tag="div" to="/leisure" class="bdmap-header_icons_icon">
          <img src="../../assets/img/icons/shop.png" alt="" />
          <p>商城</p>
        </router-link>
      </div>
    </div>
    <div id="container" class="bdmap-container"></div>
  </div>
</template>

<script>
import { queryPosition } from '@/api/baidumap'
export default {
  components: {},

  data() {
    return {
      inputVal: '输入车牌号进行查询',
      showInput: true,
      currentp: {  // 当前位置，东来桃源
        longitude: '104.37165196470758',
        latitude: '30.481247929627624'
      },
      searchp: {  // 查询位置
        longitude: '104.38086804025664',
        latitude: '30.48114895861858'
      },
      dataList: [
        {
          longitude: '104.38086804025664',
          latitude: '30.48014895861858'
        },
        {
          longitude: '104.37545564345',
          latitude: '30.481134534543'
        },
        {
          longitude: '104.37534532355',
          latitude: '30.48212345454'
        },
        {
          longitude: '104.37034532355',
          latitude: '30.48212345454'
        }
      ]
    }
  },

  created() {
    if(this.$route.params.category === 'park') {
      this.showInput = true
      this.queryPoint('parkingLot')
    } else {
      this.showInput = false
      this.queryPoint('toilet')
      this.addMarker()
    }
  },
  watch: {
    $route(to,from) {
      this.pointer()  // 标注当前位置
      if(to.params.category === 'park') {
        this.showInput = true
        this.queryPoint('parkingLot')
        this.moveToPoint()
      } else {
        this.showInput = false
        // this.map.clearOverlays();
        this.queryPoint('toilet')
        this.addMarker()
      }
    }
  },
  mounted() {
    this.map = new BMap.Map("container");
    var point = new BMap.Point(this.currentp.longitude, this.currentp.latitude);
    this.map.centerAndZoom(point, 40); 
    this.map.enableScrollWheelZoom(true);
    this.pointer()  // 标注当前位置
    if(this.showInput) {
      this.moveToPoint()
    } else {
      this.addMarker()
    }
  },

  methods: {
    handelSearch() {
      // 处理搜索
      if(this.inputVal) {
        var map = this.map
        var local = new BMap.LocalSearch(map, {
            onSearchComplete: () => {
              //如果搜索的有结果
              if(local.getResults() != undefined) {
                  this.map.clearOverlays(); //清除地图上所有覆盖物
                  if(local.getResults().getPoi(0)) {
                      var point = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
                      this.map.centerAndZoom(point, 18);
                      var marker = new BMap.Marker(point); // 创建标注
                      this.map.addOverlay(marker); // 将标注添加到地图中
                      marker.enableDragging(); // 可拖拽
                      console.log("当前定位经度:"+point.lng+"纬度:"+point.lat);
                  } else {
                      alert("未匹配到地点!可拖动地图上的红色图标到精确位置");
                  }
              } else {
                  alert("未找到搜索结果")
              }
          }
        })
        local.search(this.inputVal)
      } else {
        this.$message({
          message: '请输入车牌号!'
        })
      }
      
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
      })
      var start = new BMap.Point(this.currentp.longitude, this.currentp.latitude)
      var end = new BMap.Point(this.searchp.longitude, this.searchp.latitude)
      riding.search(start, end)
    },
    addMarker(){  // 创建图标对象
      this.dataList.map(item => {
        var point = new BMap.Point(item.longitude, item.latitude)
        var myIcon = new BMap.Icon(require('../../assets/img/icons/toile.png'), new BMap.Size(44, 44))
        // 创建标注对象并添加到地图   
        var marker = new BMap.Marker(point, {icon: myIcon})
        this.map.addOverlay(marker)          // 将标注添加到地图中
      })
    },
    queryPoint(cateType){
      queryPosition({title: cateType}).then(res => {
        if(res.code === 2000) {
          this.dataList = res.datas.map(item => {
            return {
              id: item.cnId,
              longitude: item.csLatitude,
              latitude: item.csLongitude,
              name: item.csPositionName
            }
          })
          console.log(this.dataList)
        }
      })
    }  
  }
}

</script>
<style lang='scss'>
.BMap_cpyCtrl {
  display:none;
}
.anchorBL{
  display:none;
}

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
        background-image: url(../../assets/img/icons/enter.png);
        background-repeat: no-repeat; 
      }
    }
    &_icons{
      float: right;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 0.92rem;
      &_icon{
        margin-left: 0.5rem;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        img{
          width: 0.5rem;
          height: 0.5rem;
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
