<!-- 720全景 -->
<template>
  <div class="overview">
    <!-- 主轮播 -->
    <div class="overview-swiperT">
      <div id="certify">
        <div class="swiper-container gallery-top" id="gallery">
          <div class="swiper-wrapper">
            <router-link
              tag="div"
              :to="{name: 'viewdetail',params: { typeId: item.id }}"
              class="swiper-slide"
              v-for="item in bannerList"
              :key="item.id"
            >
              <img :src="item.img" alt="" />
              <p>{{ item.text }}</p>
            </router-link>
          </div>
          <div class="swiper-button-prev my-button-disabled"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
    <!-- 缩略图 -->
    <div class="overview-swiperB">
      <div class="swiper-container thumbs" id="thumbs">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in bannerList" :key="item.id"  class="swiper-slide">
            <img :src="item.img" alt="">
            <p>{{ item.name }}</p>
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
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { queryOverviewList } from '../../api/overview'
export default {
  components: {},
  data() {
    return {
      bannerList: [
        {
          id: 'map',
          name: '景区热度',
          text: '景区最新热度景点示意图',
          img: require('../../assets/img/pic/6.png')
        },
        {
          id: 243,
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
          img: require('../../assets/img/pic/6.png')
        },
        {
          id: 5,
          name: '东来荣誉',
          text: '景区最新热度景点示意图',
          img: require('../../assets/img/pic/7.png')
        },
        {
          id: 6,
          name: '发展历程',
          text: '景区最新热度景点示意图',
          img: require('../../assets/img/pic/8.png')
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
    queryOverviewList().then(res => {
      
      if(res.code === 2000) {
        var bannerList= res.datas.map(item => {
          var obj = {}
          obj.id = item.cn_content_id
          obj.name = item.cs_content_name
          item.text = item.cs_content_name + '示意图'
          return obj
        })
        this.$nextTick(()=>{
          this.initSwiper()
        })
        // console.log(this.bannerList)
      }
      
    })
  },

  mounted() {
    this.initSwiper()
  },

  methods: {
    initSwiper() {
      // 缩略图
      var thumbsSwiper = new Swiper('#thumbs',{
        spaceBetween: 10,
        slidesPerView: 5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop : true,
        watchSlidesVisibility: true,   //防止不可点击
      })
      var gallerySwiper = new Swiper('#gallery', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: thumbsSwiper,
        },
        on: {
          progress: function(progress) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              var slideProgress = this.slides[i].progress;
              var modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.01 + 1;
              }
              var translate = slideProgress * modify * 850 + 'px';
              var scale = 1 - Math.abs(slideProgress) / 5;
              var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform('translateX(' + translate + ') scale(' + scale + ')');
              slide.css('zIndex', zIndex);
              slide.css('opacity', 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css('opacity', 0);
              }
            }
          },
          setTransition: function(transition) {
            for (let i = 0; i < this.slides.length; i++) {
              let slide = this.slides[i]
              slide.style.transition = transition
            }
          }
        }
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.overview{
  margin-top: 2.34rem;
  &-swiperB{
    position: relative;
    width: 13.76rem;
    height: 2rem;
    margin: 62px auto;
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
#certify {
	position: relative;
  width: 12.4rem;
  margin: 0.63rem auto;
  margin-bottom: 0;
  .swiper-button-prev, .swiper-button-next{
    opacity: 0;
  }
}

#certify  .swiper-slide {
	width: 10rem;
	height: 5rem;
	background: #fff;
  box-shadow: 0 8px 30px #ddd;
  position: relative;
  border-radius: 0.32rem;
  overflow: hidden;
}
#certify  .swiper-slide img{
  display:block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
#certify  .swiper-slide p {
  position: absolute;
  bottom: 0;
  z-index: 1;
  font-size: 24px;
  color: #fff;
  width: 100%;
  display: none;
  height: 0.66rem;
  line-height: 0.66rem;
  padding-left: 0.5rem;
  background:rgba(0,0,0,0.55);
  box-shadow:0px 20px 50px 3px rgba(0,0,0,0.28);
  border-radius:0px 0px 32px 32px;
}

#certify .swiper-slide-active{
  p{
    display: block;
  }
}

</style>
