<!-- 景区概况详情 -->
<template>
  <div class="viewdetail">
    <div class="viewdetail-bg left"></div>
    <div class="viewdetail-cont">
      <component :is="primary"></component>
      <div class="viewdetail-cont_show">
        <p>东来桃园简介</p>
      </div>
    </div>
    <div class="viewdetail-bg right"></div>
  </div>
</template>

<script>
import primary from '../../components/vDetail/primary'
import hotMap from '../../components/vDetail/hotMap'

export default {
  components: {
  },
  data() {
    return {
      primary: primary
    }
  },

  created() {
    if( this.$route.params.typeId === 'map') {
      this.primary = hotMap
    }
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
    margin-top: 1.65rem;
    &-bg{
      flex: 1;
      background:linear-gradient(360deg,rgba(0,0,0,0.21) 0%,rgba(255,255,255,0) 100%);
      box-shadow:8px 8px 20px 0px rgba(0,0,0,0.11);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      &.left{
        background-image: url('../../assets/img/pic/10.png');
      }
      &.right{
        background-image: url('../../assets/img/pic/11.png');
      }
    }
    &-cont{
      width: 14.76rem;
      display: flex;
      flex-direction: column;
      position: relative;
      &_show{
        position: absolute;
        display: inline-block;
        bottom: 0.15rem;
        left: -0.8rem;
        height: auto;
        color: #fff;
        p{
          font-size: 20px;
          width: 70px;
          padding-left: 40px;
          line-height: 26px;
          padding-bottom: 0.72rem;
          background: url(../../assets/img/icons/jiantou.png) no-repeat;
          background-position: left 1.7rem;
        }
      }
    }
  }
</style>
