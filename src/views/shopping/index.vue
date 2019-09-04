<!-- 游购景区 -->
<template>
  <div class="shopping">
    <div class="shopping-container">
      <div to="/culture" class="shopping-container_pic images">
        <div class="shopping-container_pic_box">
          <h5>cultur</h5>
          <h5>&</h5>
          <h5>Performing arts</h5>
          <div class="shopping-container_pic_box_line"></div>
          <p>文化演艺</p>
          <router-link tag="div" class="shopping-container_pic_box_btn" to="/culture">查看详情</router-link>
        </div>
      </div>
      <div to="/leisure" class="shopping-container_pic videos">
        <div class="shopping-container_pic_box">
          <h5>Leisure</h5>
          <h5>&</h5>
          <h5>shopping</h5>
          <div class="shopping-container_pic_box_line"></div>
          <p>休闲购物</p>
          <router-link tag="div" class="shopping-container_pic_box_btn" to="/leisure/gou">查看详情</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    }
  },

  created() {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.shopping{
    margin-top: 1rem;
    color: rgba(255, 255, 255, .9);
    &-container{
      width: 15rem;
      height: 6rem;
      display: flex;
      margin: 0 auto;
      &_pic{
        flex: 1;
        cursor: pointer;
        height: 100%;
        width: 100%;
       
        background-size: 100% 100%;
        &_box{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color:rgba(0,0,0,0.4);
          padding-top: 1.62rem;
          h5{
            font-size: 0.4rem;
            letter-spacing: 4px;
            font-family: 'BigCaslon';
            font-weight: 400;
            line-height: 0.45rem;
          }
          &_line{
            width:3.5rem;
            height:1px;
            margin: 0.3rem auto;
          }
          p{
            font-size: 0.5rem;
            letter-spacing: 8px;
          }
          &_btn{
            width: 2.96rem;
            height: 0.64rem;
            font-size: 0.4rem;
            text-align: center;
            line-height: 0.6rem;
            background:rgba(224,110,110,1);
            margin-top: 0.5rem;
            font-weight: 400;
            letter-spacing: 4px;
          }
        }
        &.images{
          background: rgba(0,0,0,0.4) url('../../assets/img/pic/14.png') no-repeat;
        }
        &.videos{
          background: url('../../assets/img/pic/15.png') no-repeat;
        }
      }
    }
  }
</style>
