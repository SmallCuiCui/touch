<template>
<!-- 全景漫游 -->
  <div id="home-container" class="home">
    <div class="home-header">
      <div class="home-header-logo">
        <img src="../../assets/flower.webp" alt="">东来桃源
      </div>
      <div class="home-header-news">
        <img src="../../assets/img/icons/start.webp" alt="">
        <div class="home-header-news_text">
          <span>最新消息：这边消息右向左滑动一条</span>
          <font>.8月29日.</font>
        </div>
      </div>
      <router-link tag='div' to="/leisure" class="home-header-shop">
        <img src="../../assets/img/icons/home.webp" alt="">
        <p class="home-header-sjop_text">商城</p>
      </router-link>
    </div>
    <div class="home-nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide home-nav-item" :dataIndex="nav.id" v-for="(nav, index) in navList" :key="index">
              <div class="home-nav-item_img">
                <img :src="nav.img" alt="">
              </div>
              <div :class="nav.isChecked ? 'center home-nav-item_title' : 'home-nav-item_title'" @click="chageNav(index)">
                <h5 class="home-nav-item_title_c">{{ nav.name }}</h5>
                <p class="home-nav-item_title_e">{{ nav.ename }}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="home-guidLine">
      <div class="home-guidLine_left">
        <img src="../../assets/img/icons/hand.webp" alt="">
      </div>
      <div class="home-guidLine_text"><router-link :to="linkUrl" tag="span">查看详情</router-link></div>
      <router-link tag="div" to="/map" class="home-guidLine_right">
        <div class="home-guidLine_right_title">
          <h5 class="home-nav-item_title_c">景区地图</h5>
          <p class="home-nav-item_title_e">Scenic Spots</p>
        </div>
        <div class="home-guidLine_right_c1">
          <div class="home-guidLine_right_c1_c2">
            <div class="home-guidLine_right_c1_c2_c3"></div>
          </div>
        </div>
      </router-link>
    </div>
    
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'Home',
  data() {
    return {
      // guideList: '',
      navList: [
        {
          name: '首页',
          ename: 'Tourist guide',
          path: '/home',
          isChecked: false,
          img: require('../../assets/img/pic/1.png')
        },
        {
          name: '720全景漫游',
          ename: 'panoramic roaming',
          path: '/scenery',
          isChecked: false,
          img: require('../../assets/img/pic/2.png')
        },
        {
          name: '景区概况',
          ename: 'Tourist guide',
          path: '/overview',
          isChecked: true,
          img: require('../../assets/img/pic/3.png')
        },
        {
          name: '视频图库',
          ename: 'Tourist guide',
          path: '/media',
          isChecked: false,
          img: require('../../assets/img/pic/4.png')
        },
        {
          name: '游购景区',
          ename: 'Tourist guide',
          path: '/shopping',
          isChecked: false,
          img: require('../../assets/img/pic/5.png')
        }
      ],
      linkUrl: '/overview'
    }
  },
  computed: {
    // ...mapGetters([
    //   'checkItem',
    //   'guideList'
    // ])
  },
  watch: {

  },
  mounted() {
    this.initSwiper()
  },
  created() {
    // console.log(this.$store.state.home.checkId)
  },
  methods: {
    // ...mapMutations(['toggleCheck']),
    chageNav(index) {
      var list = []
      var count = 0
      this.navList = this.navList.map((item, dex) => {
        if (index === dex) {
          item.isChecked = true
          list[2] = item
          this.linkUrl = item.path
        } else {
          item.isChecked = false
        }
        return item
      })
      this.navList.forEach((item, dex) => {
        if (!item.isChecked) {
          list[count] = item
          count++
          if (count === 2) {
            count++
          }
        }
      })
      this.navList = list
    },
    initSwiper() {
      var myswiper = new Swiper('.swiper-container',{
        direction : 'vertical',
        loop: true,
        initialSlide :2,
        slidesPerView: 5,  // 一次显示全部
        slidesPerGroup: 1,  // 一次滑动切换一张
        centeredSlides:true,  //active slide 居中
        // spaceBetween: 20,  // 轮播项之间的间隙
        on: {
        slideChangeTransitionStart: function(){
          console.log(this.activeIndex);
        },
        touchEnd: function(event){
          //你的事件
          var slide = this.getSlide(this.activeIndex)
          console.log(slide.data('key'))
        },
      },
      })
      var newSlide = myswiper.createSlide('内容');
      newSlide.data('key','value');
      myswiper.appendSlide(newSlide);
    }
    
  }
}
</script>

<style lang="scss" scoped>
.home{
  position: relative;
  height: 100%;
  width: 100%;
  color: #fff;
  background-image: url('../../assets/img/bg.jpg');
  background-repeat:  no-repeat;
  background-size: 100% 100%;
  &-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
    width: 100%;
    color: #fff;
    position: relative;
    &-logo{
      width: 3.6rem;
      height: 0.6rem;
      line-height: 0.6rem;
      padding-left: 0.6rem;
      font-size: 0.4rem;
      letter-spacing: 3px;
      img{
        height: 0.44rem;
        width: 0.44rem;
        vertical-align: middle;
        margin-right: 0.2rem;
      }
    }
    &-news{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      width: 862px;
      height: 60px;
      background:rgba(0,0,0,0.1);
      border-radius:15px;
      border:1px solid rgba(53,53,53,1);
      padding-left: 16px;
      display: flex;
      align-items: center;
      img{
        width: 35px;
        height: 21px;
        margin-right: 0.15rem;
      }
      &_text{
        font-size: 18px;
      }
    }
    &-shop{
      width: 174px;
      height: 206px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size:20px;
      cursor: pointer;
      img{
        margin-bottom: 10px;
        width: 44px;
        height: 44px;
      }
    }
  }
  &-nav{
    margin-left: 1.8rem;
    margin-top: -0.2rem;
    .swiper-container{
      width: 100%;
      height: 8.6rem;
    }
    &-item{
      // height: 1.72rem;
      transform: scale(0.9);
      display: flex;
      align-items: center;  
      color:rgba(255,255,255,1);
      &_img{
        display: inline-block;
        height: 1.72rem;
        width: 1.72rem;
        cursor: pointer;
        transform: scale(0.64);
        img{
          height: 100%;
          width: 100%;
        }
      }
      &_title{
        height: 0.98rem;
        cursor: pointer;
        letter-spacing:2px;
        &.center{
          height: 1.72rem;
          margin-left: 6rem;
          h5{
            height: 0.5rem;
            font-size: 40px;
            line-height: 0.3rem;
            letter-spacing: 3px;
            margin-top: 0.3rem;
          }
          p{
            font-size: 0.2rem;
          }
        }
        h5{
          margin-top: 0.24rem;
          margin-bottom: 0.05rem;
          font-size: 0.24rem;
          font-weight: 500;
          height: 24px;
          line-height: 24px;
          text-align: center;
        }
        p{
          height: 25px;
          line-height: 25px;
          font-size: 16px;
        }
      }
    }
    .swiper-slide-active,.swiper-slide-duplicate-active{
        transform: scale(1);
        // .home-nav-item_img{
        //   width: 1.72rem;
        //   height: 1.72rem;
        // }
        div{
          transform: scale(1);
        }
    }
    .swiper-slide-prev{
      align-items: flex-start;
      margin-left: -0.55rem;
      .home-nav-item_img{
        margin-top: -0.3rem;
      }
    }
    .swiper-slide-next{
      align-items: flex-end;
      margin-left: -0.55rem;
      .home-nav-item_img{
        margin-bottom: -0.3rem;
      }
    }
  }
  &-guidLine{
    position: absolute;
    top: 4.55rem;
    left: 0;
    display: flex;
    justify-content: space-between;
    height: 2.3rem;
    width: 100%;
    align-items: center;
    &_left{
      margin-left: 0.51rem;
      width: 0.28rem;
      height: 0.47rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &_text{
      width: 3.36rem;
      height: 1.07rem;
      cursor: pointer;
      position: absolute;
      left: 6.5rem;
      line-height: 1.07rem;
      font-size: 0.6rem;
    }
    &_right{
      margin-right: 1.46rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      &_title{
        height: 0.98rem;
        margin-right: 0.3rem;
        h5{
            margin-top: 0.24rem;
            margin-bottom: 0.05rem;
            font-size: 0.24rem;
            font-weight: 500;
            height: 24px;
            line-height: 24px;
        }
        p{
          height: 25px;
          line-height: 25px;
          font-size: 16px;
        }
      }
      &_c1{
        width: 2.28rem;
        height: 2.28rem;
        border-radius: 50%;
        background: rgba(216,216,216,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        &_c2{
          width: 1.98rem;
          height: 1.98rem;
          line-height: 1.98rem;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(216,216,216,0.56);
          display: flex;
          align-items: center;
          justify-content: center;
          &_c3{
            width: 1.76rem;
            height: 1.76rem;
            background: url('../../assets/img/pic/1.png') no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
}
</style>
