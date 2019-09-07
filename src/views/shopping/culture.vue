<!-- 文艺演出 -->
<template>
  <div class="culture">
    <div class="culture-container">
      <div class="swiper-container" id="gallery">
        <div class="swiper-wrapper">
          <div class="swiper-slide culture-container-item" v-for="item in 4" :key="item.id">
            <div class="culture-container-item_pic">
              <p class="culture-container-item_pic_title">活动标题</p>
            </div>
            <div class="culture-container-item_text">
              <h5 class="culture-container-item_text_title">精彩活动</h5>
              <ul>
                <li>
                  <p>演出日</p>
                  <h4 style="color: #F5A623;">(周日到周四)</h4>
                  <p>演出时间</p>
                  <h4>09:00-10:00</h4>
                  <p>演出地点</p>
                  <h4>游客服务中心广场</h4>
                </li>
                <li>
                  <p>演出日</p>
                  <h4 style="">(周日到周四)</h4>
                  <p>演出时间</p>
                  <h4>09:00-10:00</h4>
                  <p>演出地点</p>
                  <h4>游客服务中心广场</h4>
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
    <!-- <el-carousel class="culture-container" :interval="5000" arrow="always">
      <el-carousel-item class="culture-container-item" v-for="item in 4" :key="item">
        <div class="culture-container-item_pic">
          <p class="culture-container-item_pic_title">活动标题</p>
        </div>
        <div class="culture-container-item_text">
          <h5 class="culture-container-item_text_title">精彩活动</h5>
          <ul>
            <li>
              <p>演出日</p>
              <h4 style="color: #F5A623;">(周日到周四)</h4>
              <p>演出时间</p>
              <h4>09:00-10:00</h4>
              <p>演出地点</p>
              <h4>游客服务中心广场</h4>
            </li>
            <li>
              <p>演出日</p>
              <h4 style="">(周日到周四)</h4>
              <p>演出时间</p>
              <h4>09:00-10:00</h4>
              <p>演出地点</p>
              <h4>游客服务中心广场</h4>
            </li>
          </ul>
        </div>
      </el-carousel-item>
    </el-carousel> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  components: {},

  data() {
    return {
    }
  },

  created() {},

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
      width: 1.38rem;
      height: 1.38rem;
      position: absolute;
      top: 2.25rem;
      border: none;
      color: #fff;
      background:rgba(216,216,216,0.17);
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
        background-image: url(../../assets/img/pic/17.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        &_title{
          position: absolute;
          bottom: 0;
          left: 0;
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
}
</style>
