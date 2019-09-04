<template>
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
      <div class="home-header-shop">
        <img src="../../assets/img/icons/home.webp" alt="">
        <p class="home-header-sjop_text">商城</p>
      </div>
    </div>
    <ul class="home-nav">
      <li v-for="(nav, index) in navList" :key="index" class="home-nav-item">
        <div class="home-nav-item_img">
          <img :src="nav.img" alt="">
        </div>
        <div :class="nav.isChecked ? 'center home-nav-item_title' : 'home-nav-item_title'" @click="chageNav(index)">
          <h5 class="home-nav-item_title_c">{{ nav.name }}</h5>
          <p class="home-nav-item_title_e">{{ nav.ename }}</p>
        </div>
      </li>
    </ul>
    <div class="home-guidLine">
      <div class="home-guidLine_left">
        <img src="../../assets/img/icons/hand.webp" alt="">
      </div>
      <div class="home-guidLine_text"><router-link :to="linkUrl" tag="span">查看详情</router-link></div>
      <div class="home-guidLine_right">
        <div class="home-guidLine_right_title">
          <h5 class="home-nav-item_title_c">景区地图</h5>
          <p class="home-nav-item_title_e">Scenic Spots</p>
        </div>
        <div class="home-guidLine_right_c1">
          <div class="home-guidLine_right_c1_c2">
            <div class="home-guidLine_right_c1_c2_c3"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-footer">
      <div class="home-footer_icon">
        <img src="../../assets/img/icons/home.webp" alt="">
        <p class="home-header-sjop_text">厕所</p>
      </div>
      <div class="home-footer_icon">
        <img src="../../assets/img/icons/home.webp" alt="">
        <p class="home-header-sjop_text">停车场</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations } from 'vuex'
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
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  position: relative;
  height: 100%;
  color: #fff;
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
      img{
        margin-bottom: 10px;
        width: 44px;
        height: 44px;
      }
    }
  }
  &-nav{
    margin-left: 2.1rem;
    margin-top: 0.56rem;
    &-item{
      margin-bottom: 0.34rem;
      height: 0.98rem;
      display: flex;
      color:rgba(255,255,255,1);
      &_img{
        display: inline-block;
        margin-right: 0.3rem;
        height: 0.98rem;
        width: 0.98rem;
        cursor: pointer;
        img{
          height: 100%;
          width: 100%;
        }
      }
      &_title{
        height: 0.98rem;
        cursor: pointer;
        &.center{
          margin-left: 6.5rem;
          height: 0.9rem;
          h5{
            height: 0.7rem;
            font-size: 40px;
            line-height: 0.7rem;
            letter-spacing: 3px;
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
        }
        p{
          height: 25px;
          line-height: 25px;
          font-size: 16px;
        }
      }
    }
    li:nth-child(3){
      height: 1.72rem;
      .home-nav-item_img{
        width: 1.72rem;
        height: 1.72rem;
      }
    }
    li:nth-child(4), li:nth-child(2){
      margin-left: 0.5rem;
    }
    li:nth-child(1), li:nth-child(5){
      margin-left: 1rem;
    }
  }
  &-guidLine{
    position: absolute;
    top: 4.5rem;
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
      left: 7.3rem;
      line-height: 1.07rem;
      font-size: 0.6rem;
    }
    &_right{
      margin-right: 1.46rem;
      display: flex;
      align-items: center;
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
  &-footer{
    margin-bottom: 30px;
    position: absolute;
    right: 52px;
    bottom: 28px;
    &_icon{
      display: flex;
      flex-direction: column;
      float: right;
      font-size:20px;
      margin-left: 50px;
      img{
        margin-top: 20px;
        margin-bottom: 10px;
        width: 44px;
        height: 44px;
      }
      p{
        margin-bottom: 22px;
      }
    }
  }
}
</style>
