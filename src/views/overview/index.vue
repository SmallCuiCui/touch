<!-- 720全景 -->
<template>
  <div class="overview">
    <div id="certify">
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper">
          <router-link tag="div"
            :to="{name: 'viewdetail',params: {typeId: item.id}}"
            class="swiper-slide"
            v-for="item in bannerList"
            :key="item.id"
          >
            <img :src="item.img" />
            <p>{{ item.text }}</p>
          </router-link>
        </div>
        <div class="swiper-scrollbar"></div>  
      </div>
    </div>
    <!-- <div id="thumbs">
      <div class="swiper-container gallery-thumbs">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
            <img :src="item.img" />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  components: {},
  data() {
    return {
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
        }
      ]
    }
  },

  created() {
    
  },

  mounted() {
    this.initSwiper()
  },

  methods: {
    initSwiper() {
      // 缩略图
      // var thumbsSwiper = new Swiper('#thumbs',{
      //   spaceBetween: 10,
      //   slidesPerView: 4,
      //   watchSlidesVisibility: true
      // })
      new Swiper('#certify .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        spaceBetween: 10,
        // thumbs: {
        //   swiper: thumbsSwiper,
        // },
        on: {
          progress: progress => {
            var swiper = document.querySelectorAll('.swiper-slide')
            for (let i = 0; i < swiper.length; i++) {
              var slide = swiper[i]
              var slideProgress = swiper[i].progress
              var modify = 1
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1
              }
              let translate = slideProgress * modify * 400 + 'px'
              let scale = 1 - Math.abs(slideProgress) / 9
              let zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
              slide.style.transform = 'translateX(' + translate + ') scale(' + scale + ')'
              slide.style.zIndex = zIndex
              slide.style.opacity = 1
              if (Math.abs(slideProgress) > 3) {
                slide.style.opacity = 0
              }
            }
          },
          setTransition: function(transition) {
            var swiper = document.querySelectorAll('.swiper-slide')
            for (let i = 0; i < swiper.length; i++) {
              let slide = swiper[i]
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
#certify {
	position: relative;
  width: 12.4rem;
  height: 5rem;
  margin: 0.63rem auto;
}

#certify .swiper-container {
	padding-bottom: 60px;
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
