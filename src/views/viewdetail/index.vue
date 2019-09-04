<!-- 景区概况详情 -->
<template>
  <div class="viewdetail">
    <div class="viewdetail-bg left"></div>
    <div class="viewdetail-cont">
      <div class="viewdetail-cont_head">
        <p>东来桃园</p>
        <div></div>
      </div>
      <div class="viewdetail-cont_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div class="viewdetail-cont_img">
        <img src="../../assets/img/pic/12.png" alt="">
      </div>
      <div class="viewdetail-cont_show">
        <p>东来桃园简介</p>
      </div>
    </div>
    <div class="viewdetail-bg right"></div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
    }
  },

  created() {
    console.log(this.$route.params.typeId)
  },

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
  .viewdetail{
    display: flex;
    height: 7.5rem;
    width: 100%;
    background:rgba(255,255,255,1);
    box-shadow:8px 8px 50px 0px rgba(0,0,0,0.5);
    &-bg{
      width: 2.22rem;
      background-size: 100%;
      background:linear-gradient(360deg,rgba(0,0,0,0.21) 0%,rgba(255,255,255,0) 100%);
      box-shadow:8px 8px 20px 0px rgba(0,0,0,0.11);
      background-repeat: no-repeat;
      &.left{
        background-image: url('../../assets/img/pic/10.png');
      }
      &.right{
        background-image: url('../../assets/img/pic/11.png');
      }
    }
    &-cont{
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      &_head{
        padding-top: 0.46rem;
        p{
          text-align: center;
          font-size:32px;
          font-family:'STYuanti-TC';
          color:rgba(224,110,110,1);
          line-height:45px;
          letter-spacing:5px;
        }
        div{
          width:75px;
          height:2px;
          background:rgba(235,158,158,1);
          border-radius:1px;
          margin: 10px auto;
          margin-bottom: 0.55rem;
        }
      }
      &_text{
        width:10.97rem;
        font-size:15px;
        margin: 0 auto;
        font-family:PingFangSC;
        font-weight:300;
        color:rgba(6,30,58,1);
        line-height:24px;
        letter-spacing:6px;
      }
      &_img{
        margin: 20px auto;
        width: 12rem;
        height: 3.68rem;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      &_show{
        position: relative;
        display: inline-block;
        bottom: 0.34rem;
        left: -0.6rem;
        height: auto;
        color: #fff;
        p{
          font-size: 20px;
          width: 30px;
          padding-bottom: 0.72rem;
        }
      }
    }
  }
</style>
