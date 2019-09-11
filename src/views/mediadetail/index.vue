<!-- 媒体详情页 -->
<template>
  <div class="mediadetail">
    <div class="mediadetail-box">
      <div class="mediadetail-box-swiperT">
        <div class="swiper-container gallery" id="gallery">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in bannerList" :key="item.bannnerId">
              <!-- 图库 -->
              <img :src="item.bannerUrl"  v-if="mediaIsimg" alt=""/>
              <!-- 图库 -->
              <video class="video-js" v-else preload="auto" poster="./m.jpg" @click="playVideo(false, index)">
                <source :src="item.bannerUrl" type="video/mp4">
                <source :src="item.bannerUrl" type="video/webm">
                <source :src="item.bannerUrl" type="video/ogg">
              </video>
              <div v-if="!mediaIsimg && !isPlayVideo" class="videoBtn" @click="playVideo(true, index)"></div>
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
            <div class="swiper-slide active-nav" v-for="(item, index) in bannerList" :key="item.bannnerId">
              <img :src="item.bannerImg" alt="">
              <p>{{ item.bannerName }}</p>
              <div>
                <font>{{ index + 1 }} /</font>
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
import { queryImages, queryVideos } from '@/api/media'
import { baseUrl } from '@/config'
export default {
  data() {
    return {
      mediaIsimg: true,
      isPlayVideo: false,
      bannerList: [
        {
          bannnerId: 1,
          bannerName: '景区热度',
          text: '景区最新热度景点示意图',
           bannerImg: require('../../assets/img/pic/6.png'),
          bannerUrl: require('../../assets/img/pic/6.png')
        },
        {
          bannnerId: 2,
          bannerName: '东来桃园简介',
          text: '景区最新热度景点示意图',
           bannerImg: require('../../assets/img/pic/7.png'),
          bannerUrl: require('../../assets/img/pic/7.png')
        },
        {
          bannnerId: 3,
          bannerName: '东来桃园文化',
          text: '景区最新热度景点示意图',
           bannerImg: require('../../assets/img/pic/8.png'),
          bannerUrl: require('../../assets/img/pic/8.png')
        },
        {
          bannnerId: 4,
          bannerName: '发展历程',
          text: '景区最新热度景点示意图',
           bannerImg: require('../../assets/img/pic/9.png'),
          bannerUrl: require('../../assets/img/pic/9.png')
        },
        {
          bannnerId: 5,
          bannerName: '东来荣誉',
          text: '景区最新热度景点示意图',
           bannerImg: require('../../assets/img/pic/6.png'),
          bannerUrl: require('../../assets/img/pic/6.png')
        },
        {
          bannnerId: 6,
          bannerName: '发展历程',
          text: '景区最新热度景点示意图',
           bannerImg: require('../../assets/img/pic/7.png'),
          bannerUrl: require('../../assets/img/pic/7.png')
        },
        {
          id: 7,
          bannerName: '东来荣誉',
          text: '景区最新热度景点示意图',
          bannerImg: require('../../assets/img/pic/8.png'),
          bannerUrl: require('../../assets/img/pic/8.png')
        }
      ]
    }
  },

  created() {
    // 视屏库
    if(this.$route.params.seasonId === 'videos') {
      this.mediaIsimg = false
      queryVideos().then(res => {
        if(res.code === 2000) {
          this.bannerList = res.datas.list.map(item => {
            var obj = {}
            obj.bannnerId = item.cnId
            obj.bannerName = item.csVideoName
            // 后端给。。
            obj.bannerImg =  'http://img0.imgtn.bdimg.com/it/u=2854320073,4263146037&fm=26&gp=0.jpg'
            obj.bannerUrl = baseUrl + item.csVideoUrl
            return obj
          })
        }
      })
    } else {  // 图片库
      this.mediaIsimg = true
      let seasonId = this.$route.params.seasonId
      let cateId = ''
      switch(seasonId) {
        case 'spring':
          cateId = 1
          break
        case 'summer':
          cateId = 2
          break
        case 'fall':
          cateId = 3
          break
        case 'winter':
          cateId = 4
          break
      }
      queryImages({
        cnSceneryId: 15,
        cnLocationId: cateId
      }).then(res => {
        if(res.code === 2000) {
          this.bannerList = res.datas.list.map(item => {
            var obj = {}
            obj.bannnerId = item.cnId
            obj.bannerName = item.csPictureName
            obj.bannerImg = baseUrl + item.csPictureUrl
            obj.bannerUrl = baseUrl + item.csPictureUrl
            return obj
          })
          console.log(this.bannerList)
        }
      })
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
    let videos = document.querySelectorAll('video')
    // videos.forEach((video) => {
    //     this.getPosterImg(video)
    // });
  },
  methods: {
    initSwiper() {
      var _this = this
      var thumbsSwiper = new Swiper('#thumbs',{
        spaceBetween: 10,
        slidesPerView: 5,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // loop : true,
        watchSlidesVisibility: true,//防止不可点击
      })
      var gallerySwiper = new Swiper('#gallery',{
        // autoplay: true,
        // loop : true,
        thumbs: {
          swiper: thumbsSwiper,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          transitionEnd(){
            // 视屏切换时暂停所有视屏
            if(!_this.mediaIsimg){
              var myVideos = document.querySelectorAll('video')
              _this.isPlayVideo = false
              myVideos.forEach(item => {
                item.pause()
              })
            }
          }
        }
      })
    },
    playVideo(tag, index) {
      this.isPlayVideo = tag
      var myVideos = document.querySelectorAll('video')
      var currentVideo = myVideos[index]
      if(this.isPlayVideo) {
        currentVideo.play()
      } else {
        currentVideo.pause()
      }
    },
    getPosterImg(video, scale = 0.8){
      video.addEventListener('loadeddata', function(e) {
        // 拿到图片
        let canvas = document.createElement('canvas')
        canvas.width = video.videoWidth * scale
        canvas.height = video.videoHeight * scale
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
        let src = canvas.toDataURL('image/png')
        // 设置属性
        video.setAttribute('poster', src)
      })
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
  background:url(../../assets/img/bg_season.png) 100% 100%;
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
          .videoBtn{
            position: absolute;
            top: 2.5rem;
            left: 5.56rem;
            width: 0.88rem;
            height: 0.88rem;
            cursor: pointer;
            background: url(../../assets/img/icons/videos.webp) no-repeat;
          }
        }
      }
      .swiper-button-prev, .swiper-button-next{
        width: 1.4rem;
        height: 1.4rem;
        position: absolute;
        top: 2.25rem;
        border: none;
        color: #fff;
        // background:rgba(216,216,216,0.17);
        background: none;
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
      margin-bottom: 0;
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
