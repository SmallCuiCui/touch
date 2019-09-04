<!-- 媒体详情页 -->
<template>
  <div class="mediadetail">
    <div class="mediadetail-box">
      <div class="pc-slide">
			<div class="view">
				<div class="swiper-container">
					<a class="arrow-left" href="#" @click="changeBannerL"></a>
					<a class="arrow-right" href="#" @click="changeBannerR"></a>
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in bannerList" :key="item.id">
							<a target="_blank"><img :src="item.img" alt=""></a>
						</div>
					</div>
				</div>
			</div>
			<div class="preview">
				<a class="arrow-left" href="#" @click="changeBannerL"></a>
				<a class="arrow-right" href="#" @click="changeBannerR"></a>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide active-nav" v-for="item in bannerList" :key="item.id">
							<img :src="item.img" alt="">
						</div>
					</div>
				</div>
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
    console.log(this.$route.params)
  },

  mounted() {
    this.initSwiper()
  },

  methods: {
    initSwiper() {

      this.viewSwiper = new Swiper('.view .swiper-container', {
				onSlideChangeStart: function() {
					updateNavPosition();
				}
      })
      
      this.previewSwiper = new Swiper('.preview .swiper-container', {
				visibilityFullFit: true,
				slidesPerView: 'auto',
				onlyExternal: true,
				onSlideClick: function() {
					viewSwiper.swipeTo(this.previewSwiper.clickedSlideIndex);
				}
			})
    },
    changeBannerL(e) {
      console.log(111)
      e.preventDefault();
      if(this.viewSwiper.activeIndex == 0) {
        this.viewSwiper.swipeTo(this.viewSwiper.slides.length - 1, 1000);
        return;
      }
      this.viewSwiper.swipePrev();
    },
    changeBannerR(e) {
      e.preventDefault();
      if(this.viewSwiper.activeIndex == this.viewSwiper.slides.length - 1) {
        this.viewSwiper.swipeTo(0, 1000);
        return
      }
      this.viewSwiper.swipeNext();
    },
    updateNavPosition() {
      document.querySelector('.preview .active-nav').classList.remove('active-nav');
				var activeNav = document.querySelector('.preview .swiper-slide')[this.viewSwiper.activeIndex].classList.add('active-nav');
				if(!activeNav.classList.includes('swiper-slide-visible')) {
					if(activeNav.index() > this.previewSwiper.activeIndex) {
						var thumbsPerNav = Math.floor(this.previewSwiper.width / activeNav.width()) - 1;
						this.previewSwiper.swipeTo(activeNav.index() - thumbsPerNav);
					} else {
						this.previewSwiper.swipeTo(activeNav.index());
					}
				}
    }
  }
}

</script>
<style lang='scss' scoped>
.mediadetail{
  height:8.56rem;
  width: 100%;
  background:linear-gradient(269deg,rgba(112,157,235,0.04) 0%,rgba(0,0,0,0.61) 100%);
  &-box{
    padding-top: 25px;
    .pc-slide {
				width: 500px;
				margin: 0 auto;
			}
			
    .view .swiper-container {
      width: 500px;
      height: 500px;
    }
    
    .view .arrow-left {
      background: url('../../assets/img/icons/leftc.webp') no-repeat left top;
      position: absolute;
      left: 10px;
      top: 50%;
      margin-top: -25px;
      width: 28px;
      height: 51px;
      z-index: 10;
    }
			
    .view .arrow-right {
      background: url('../../assets/img/icons/rightc.webp') no-repeat left top;
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -25px;
      width: 28px;
      height: 51px;
      z-index: 10;
    }
			
    .preview {
      width: 100%;
      margin-top: 10px;
      position: relative;
    }
    
    .preview .swiper-container {
      width: 430px;
      height: 82px;
      margin-left: 35px;
    }
    
    .preview .swiper-slide {
      width: 87px;
      height: 82px;
    }
    
    .preview .slide6 {
      width: 82px;
    }
    
    .preview .arrow-left {
      // background: url(images/feel3.png) no-repeat left top;
      position: absolute;
      left: 10px;
      top: 50%;
      margin-top: -9px;
      width: 9px;
      height: 18px;
      z-index: 10;
    }
    
    .preview .arrow-right {
      // background: url(images/feel4.png) no-repeat left bottom;
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -9px;
      width: 9px;
      height: 18px;
      z-index: 10;
    }
    
    .preview img {
      padding: 1px;
    }
    
    .preview .active-nav img {
      padding: 0;
      border: 1px solid #F00;
    }
  }
}
</style>
