<!-- 媒体详情页 -->
<template>
  <div class="mediadetail">
    <div class="mediadetail-box">

      <div class="mediadetail-box-swiperT">
        <div class="swiper-container gallery" id="gallery">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
              <img v-if="mediaIsimg" :src="item.img" alt=""/>
              <video v-else id="my-video" class="video-js" controls preload="auto" poster="./m.jpg" data-setup="{}">
                <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
                <source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm">
                <source src="http://vjs.zencdn.net/v/oceans.ogv" type="video/ogg">
              </video>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev">
          <img src="../../assets/img/icons/leftc.webp" alt="">
        </div>
        <div class="swiper-button-next">
          <img src="../../assets/img/icons/rightc.webp" alt="">
        </div>
      </div>
      <!-- 缩略图 -->
      <div class="mediadetail-box-swiperB">
        <div class="swiper-container thumbs" id="thumbs">
          <div class="swiper-wrapper">
            <div class="swiper-slide active-nav" v-for="(item, index) in bannerList" :key="item.id">
              <img :src="item.img" alt="">
              <p>图库2</p>
              <div>
                <font>{{ index+1 }} /</font>
                <span>{{ bannerList.length }}</span>
                </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div class="swiper-button-next">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  components: {},

  data() {
    return {
      mediaIsimg: true,
      videos:[
        {
          id:1,
          title:'test2',
          youtobeURL:'http://player.youku.com/embed/XMzcwNTY3NTM2MA',
          speaker:'harry',
          likes:101,
          views:0,
          describe:'good'
        }
      ],
      bannerList: [
        {
          id: 1,
          name: '景区热度',
          text: '景区最新热度景点示意图',
          img: require('../../assets/img/pic/6.png')
        },
        {
          id: 2,
          name: '东来桃园简介',
          text: '景区最新热度景点示意图',
          img: require('../../assets/img/pic/7.png')
        },
        {
          id: 3,
          name: '东来桃园文化',
          text: '景区最新热度景点示意图',
          img: require('../../assets/img/pic/8.png')
        },
        {
          id: 4,
          name: '发展历程',
          text: '景区最新热度景点示意图',
          img: require('../../assets/img/pic/9.png')
        },
        {
          id: 5,
          name: '东来荣誉',
          text: '景区最新热度景点示意图',
          img: require('../../assets/img/pic/9.png')
        },
        {
          id: 6,
          name: '发展历程',
          text: '景区最新热度景点示意图',
          img: require('../../assets/img/pic/9.png')
        },
        {
          id: 7,
          name: '东来荣誉',
          text: '景区最新热度景点示意图',
          img: require('../../assets/img/pic/9.png')
        }
      ]
    }
  },

  created() {
    if(this.$route.params.seasonId === 'videos') {
      this.mediaIsimg = false
    } else {
      this.mediaIsimg = true
    }
  },
  watch: {
    $route(to, from) {
      if(to.$route.params.seasonId === 'videos') {
        this.mediaIsimg = false
      } else {
        this.mediaIsimg = true
      }
    }
  },
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      var thumbsSwiper = new Swiper('#thumbs',{
        spaceBetween: 10,
        slidesPerView: 5,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // loop : true,
        watchSlidesVisibility: true,//防止不可点击
      })
      var gallerySwiper = new Swiper('#gallery',{
        spaceBetween: 10,
        // autoplay: true,
        // loop : true,
        thumbs: {
          swiper: thumbsSwiper,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })
      if(!this.mediaIsimg) {
        this.initVideo()
      }
    },
    initVideo() {
      // console.log(videojs)
      // var myPlayer = videojs('my-video')
      // videojs("my-video").ready(function(){
      //   var myPlayer = this;
      //   myPlayer.play();
      // })
    }
  }
}

</script>
<style lang='scss' scoped>
.mediadetail{
  height:8.56rem;
  width: 100%;
  margin-top: 1.65rem;
  background:rgba(255,255,255,0);
  box-shadow:8px 8px 50px 0px rgba(0,0,0,0.5);
  &-box{
    padding-top: 25px;
    &-swiperT{
      position: relative;
      .gallery{
        width: 12rem;
        height: 5.87rem;
        margin: 0 auto;
        border-radius: 7px;
        overflow: hidden;
        .swiper-slide{
          width: 100%;
          height: 100%;
          img{
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
          video{
            width: 12rem;
            height: 5.87rem;
          }
        }
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
        left: 1rem;
      }
      .swiper-button-next{
        right: 1rem;
      }
    }
    
    &-swiperB{
      position: relative;
      width: 13.76rem;
      height: 2rem;
      margin: 24px auto;
      border-radius:7px;
      overflow: hidden;
      background-color: #fff;
      .thumbs{
        width: 12.36rem;
        height: 1.8rem;
        margin: 10px auto;
        .swiper-slide{
          width: 2.4rem;
          height: 1.8rem;
          margin-right: 10px;
          position: relative;
          color: #fff;
          img{
            width: 100%;
            height: 100%;
          }
          p, div{
            position: absolute;
            left: 0;
          }
          p{
            text-align: center;
            width: 100%;
            top: 0.74rem;
          }
          div{
            bottom: 10px;
            height: 33px;
            line-height: 33px;
            width: 100%;
            padding-right: 15px;
            text-align: right;
            span{
              color: orangered;
            }
          }
        }
      }
      .swiper-button-prev, .swiper-button-next{
        width: 0.7rem;
        height: 2rem;
        text-align: center;
        font-size: 0.5rem;
        line-height: 2rem;
        background: #fff;
        position: absolute;
        top: 0.22rem;
        outline: none;
        color: #444444;
      }
      .swiper-button-prev{
        left: 0;
      }
      .swiper-button-next{
        right: 0;
      }
    }
    
  }
}
</style>
