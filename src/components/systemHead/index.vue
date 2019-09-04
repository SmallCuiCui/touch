<!-- 系统头部 -->
<template>
  <div class="header-container">
    <div class="header-container-left" >
      <img src="../../assets/img/icons/left.webp" @click="goBack" alt="">
    </div>
    <div class="header-container-title" v-show="title">
      <div class="header-container-title_img">
        <img src="../../assets/flower.webp" alt="">
      </div>
      <h4 class="header-container-title_text">{{ title }}</h4>
    </div>
    <div class="header-container-right">
      <router-link tag="div" to="/home" class="header-container-right_icon">
        <img src="../../assets/img/icons/home.webp" alt=""/>
        <p>首页</p>
      </router-link>
      <router-link tag="div" to="/shopping" class="header-container-right_icon">
        <img src="../../assets/img/icons/home.webp" alt="" />
        <p>商城</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: ''
    }
  },

  created() {
    this.title = this.$route.params.seasonId === "videos" ? '视频' : this.$route.meta.title
  },
  watch: {
    $route(to,from){
      this.title = this.$route.params.seasonId === "videos" ? '视频' : this.$route.meta.title
    }
  },
  mounted() {},

  methods: {
    goBack() {
      this.$router.back()
    }
  }
}

</script>
<style lang='scss' scoped>
.header-container{
  height: 1.6rem;
  padding-top: 0.4rem;
  color: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
  &-left{
    padding-left: 0.4rem;
    cursor: pointer;
  }
  &-title{
    height: 100%;
    width: 3.7rem;
    display: flex;
    position: absolute;
    top: 0.8rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    &_img{
      width: 0.7rem;
      height: 0.7rem;
      margin-right: 0.2rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &_text{
      font-size: 0.65rem;
      font-weight: 400;
      color: #fff;
    }
  }
  &-right{
    display: flex;
    margin-right: 0.65rem;
    &_icon{
      margin-left: 0.4rem;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      img{
        width: 0.44rem;
        height: 0.44rem;
        margin-bottom: 0.1rem;
      }
      p{
        font-size: 0.2rem;
      }
    }
  }
}
</style>
