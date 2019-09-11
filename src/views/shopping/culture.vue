<!-- 文艺演出 -->
<template>
  <div class="culture">
    <div class="culture-container">
      <div class="swiper-container" id="gallery">
        <div class="swiper-wrapper">
          <div class="swiper-slide culture-container-item" v-for="item in actList" :key="item.id">
            <div class="culture-container-item_pic">
              <img :src="item.imgUrl" alt="">
              <p class="culture-container-item_pic_title">{{ item.actName }}</p>
            </div>
            <div class="culture-container-item_text">
              <h5 class="culture-container-item_text_title">{{ item.actName }}</h5>
              <ul>
                <li v-for="(act, index) in item.activity" :key="index">
                  <p>演出日</p>
                  <h4 style="color: #F5A623;">({{act.csavtivityweekends}})</h4>
                  <p>演出时间</p>
                  <h4>{{ act.cdavtivitytime }}</h4>
                  <p>演出地点</p>
                  <h4>{{ act.csavtivitylocation }}</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev">
        <img src="../../assets/img/icons/leftc.webp" alt="">
      </div>
      <div class="swiper-button-next">
        <img src="../../assets/img/icons/rightc.webp" alt="">
      </div>
    </div>
    <div class="culture-icon">
      <span></span>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { queryLeatureList } from '@/api/shopping'
import { baseUrl } from '@/config'
export default {
  components: {},

  data() {
    return {
      actList: [
        {
          actName: '活动1名称',
          imgUrl: require('../../assets/img/pic/17.png'),
          actid: 1,
          activity: [
            {
              csavtivityweekends: '周三-周四',
              cdavtivitytime: '18：00-20：30',
              csavtivitylocation: '金牛广场'
            }
          ]
        },
        {
          actName: '活动2名称',
          imgUrl: require('../../assets/img/pic/14.png'),
          actid: 2,
          activity: [
            {
              csavtivityweekends: '周三-周四',
              cdavtivitytime: '18：00-20：30',
              csavtivitylocation: '金牛广场'
            },
            {
              csavtivityweekends: '周一-周五',
              cdavtivitytime: '18：00-20：30',
              csavtivitylocation: '金牛广场'
            }
          ]
        }
      ]
    }
  },

  created() {
    queryLeatureList().then(res => {
      // console.log(res)
      if(res.code === 2000) {
        this.actList = res.datas.map(item => {
          var obj = {}
          obj.actName = item.csactivityname
          obj.imgUrl = baseUrl + item.cspictureurl
          obj.actid = item.cnactivitycode
          obj.activity = item.activity
          return obj
        })
      }
    })
  },

  mounted() {
    this.initSwiper()
  },

  methods: {
    initSwiper() {
      new Swiper('#gallery',{
        // autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })
    }
  }
}

</script>
<style lang='scss'>
.culture{
  margin-top: 2.58rem;
  &-container{
    width: 15rem;
    height: 6rem;
    background-color: #fff;
    margin: 1.2rem auto;
    position: relative;
    .swiper-container{
      width: 100%;
      height: 100%;
      position: relative;
      
    }
    .swiper-button-prev, .swiper-button-next{
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      top: 2.25rem;
      border: none;
      color: #fff;
      background:none;
      border-radius: 50%;
      outline: none;
      img{
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
    }
    .swiper-button-prev{
      left: -1.92rem;
    }
    .swiper-button-next{
      right: -1.92rem;
    }
    .swiper-pagination{
      width: 5rem;
      height: 30px;
      bottom: -0.9rem;
      left: 0;
      right: 0;
      margin: auto;
      span{
        width: 23px;
        height: 23px;
        background-color: #fff;
        margin: 0 24px;
        opacity: 1;
        &.swiper-pagination-bullet-active{
          background:rgba(255,153,153,1);
        }
      }
    }
    &-item{
      width: 100%;
      height: 100%;
      display: flex;
      &_pic{
        flex: 1;
        position: relative;
        overflow: hidden;
        img{
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
        }
        &_title{
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          padding-left: 0.6rem;
          font-size: 0.42rem;
          height: 0.9rem;
          color: #fff;
          line-height: 0.9rem;
          background:rgba(0,0,0,.4);
        }
      }
      &_text{
        flex: 1;
        display: flex;
        flex-direction: column;
        &_title{
          height: 1.14rem;
          line-height: 1.14rem;
          font-size: 0.42rem;
          text-align: center;
          color: rgba(0, 0, 0, 1);
        }
        ul{
          flex: 1;
          display: flex;
          width: 6.25rem;
          border-top: 1px solid #979797;
          margin: 0 auto;
          li{
            flex: 1;
            text-align: center;
            color: #4A4A4A;
            &:nth-child(2){
              border-left: 1px solid #979797;
              h4:nth-child(2){
                color: #E06E6E;
              }
            }
            p{
              margin-top: 0.52rem;
              font-size: 0.24rem;
            }
            h4{
              font-size: 0.3rem;
              font-weight: normal;
              margin-top: 0.2rem;
              letter-spacing:2px;
            }
          }
        }
      }
    }
  }
  &-icon{
    position: absolute;
    bottom: 0.28rem;
    left: 0;
    text-align: center;
    span{
      padding-left: 0.37rem;
      padding-top: 0.63rem; 
      // background: url(../../assets/img/icons/bottom_icon.png) no-repeat;
    }
  }
}
</style>
