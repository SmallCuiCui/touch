<!-- 底部-两个快捷导航 -->
<template>
  <div class="footer">
    <div class="footer_code" v-if="showCode">
      <div class="footer_code_img">
        <img src="../../assets/img/code.jpg" alt="">
      </div>
      <p>关注公众号自助语音导游</p>
    </div>
    <div class="footer-link">
      <router-link tag="div" to="/bdmap/washroom" class="footer-link_icon">
        <img src="../../assets/img/icons/foot_toile.png" alt="">
        <p class="header-sjop_text">厕所</p>
      </router-link>
      <router-link tag="div" to="/bdmap/park" class="footer-link_icon">
        <img src="../../assets/img/icons/foot_park.png" alt="">
        <p class="header-sjop_text">停车场</p>
      </router-link>
      <div class="footer-link_cv">便捷功能点</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      showCode: false
    }
  },
  watch: {
    $route(to, from){
      this.showCode = this.$route.meta.code
    }
  },
  created() {
    this.showCode = this.$route.meta.code
  },

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.footer{
  &_code{
    position: absolute;
    bottom: 0.38rem;
    left: 0.8rem;
    &_img{
      width: 1.83rem;
      height: 1.83rem;
      margin-bottom: 0.2rem;
      padding: 10px;
      img{
        width: 100%;
        height: 100%;
        vertical-align: top;
        background-color: #fff;
      }
    }
    p{
      width: 100%;
      text-align: center;
      font-size: 17px;
    }
  }
  &-link{
    position: absolute;
    right: 52px;
    bottom: 28px;
    width: 5.39rem;
    height: 1.24rem;
    color: #fff;
    padding-right: 0.4rem;
    background:linear-gradient(270deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.05) 100%);
    border-right: 3px solid rgba(74,144,226,1);
    &_icon{
      display: flex;
      align-items: center;
      flex-direction: column;
      float: right;
      font-size:20px;
      margin-left: 50px;
      cursor: pointer;
      img{
        margin-top: 20px;
        margin-bottom: 10px;
        width: 50px;
        height: 50px;
      }
      p{
        margin-bottom: 22px;
      }
    }
    &_cv{
      height: 20px;
      line-height: 20px;
      font-size: 16px;
      letter-spacing: 1px;
      position: absolute;
      right: -3px;
      top: -32px;
      border-right: 3px solid rgba(74,144,226,1);
      padding-right: 10px;
    }
  }
    
}
</style>
