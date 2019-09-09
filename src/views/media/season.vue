<!-- 图片四季分类组件 -->
<template>
  <div class="season">
    <div class="season-box">
      <router-link 
        tag="div"
        v-for="item in seasonList"
        :key="item.seasonId"
        :to="{name: 'mediadetai', params: {seasonId: item.seasonId}}"
        class="season-box_pic model"
      >
        <img :src="item.img" alt="">
        <div class="season-box_pic_model">
          <p>{{ item.title }}</p>
          <span></span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      seasonList: [
        {
          title: '景区景点名称1',
          seasonId: 'spring',
          img: require('../../assets/img/pic/spring.png')
        },
        {
          title: '景区景点名称2',
          seasonId: 'summer',
          img: require('../../assets/img/pic/summer.png')
        },
        {
          title: '景区景点名称3',
          seasonId: 'fall',
          img: require('../../assets/img/pic/fall.png')
        },
        {
          title: '景区景点名称4',
          seasonId: 'winter',
          img: require('../../assets/img/pic/winter.png')
        }
      ]
    }
  },

  created() {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.season{
  height:8.56rem;
  width: 100%;
  margin-top: 1.65rem;
  &-box{
    padding: 1.10rem 1.95rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background:url(../../assets/img/bg_season.png) 100% 100%;
    box-shadow:8px 8px 50px 0px rgba(0,0,0,0.5);
    &_pic{
      width: 3.56rem;
      height: 6.35rem;
      border-radius:7px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      &_model{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        cursor: pointer;
        z-index: 1;
        p{
          text-align: center;
          font-size: 16px;
          color:#fff;
          margin: 2rem auto;
          margin-bottom: 0;
          width: 20px;
          line-height: 24px;
          text-align: center;
        }
        span{
          display: block;
          width: 1px;
          height: 0.74rem;
          background-color: rgba(225, 225, 225, .5);
          margin: 30px auto;
        }
      }
    }
  }
}
</style>
