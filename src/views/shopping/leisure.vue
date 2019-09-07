<!-- 休闲购物 -->
<template>
  <div class="leisure">
    <div class="leisure-container">
      <ol class="leisure-container-links">
        <router-link tag="li" to="/leisure/gou" class="leisure-container-links_item">
          <div class="leisure-container-links_item_icon"></div>
          <p>购</p>
        </router-link>
        <router-link tag="li" to="/leisure/chi" class="leisure-container-links_item">
          <div class="leisure-container-links_item_icon"></div>
          <p>吃</p>
        </router-link>
        <router-link tag="li" to="/leisure/zhu" class="leisure-container-links_item">
          <div class="leisure-container-links_item_icon"></div>
          <p>住</p>
        </router-link>
      </ol>
      <div class="leisure-container-box">
        <h5>特色店铺</h5>
        <p class="leisure-container-box_dis">当你有一个傻瓜时，你会很痛苦；你有 50 个傻瓜是最幸福的，吃饭、睡觉、上厕所排着队去的；你有一个聪明人时很带劲，你有 50 个聪明人实际上是最痛苦的，</p>
        <ol class="leisure-container-box-ol">
          <router-link tag="li" :to="{name: 'shoppingdetail', params: {category: 1}}" class="leisure-container-box-ol_item">
            <img src="../../assets/img/pic/20.png" alt=""/>
            <p>店名7</p>
          </router-link>
          <router-link :to="{name: 'shoppingdetail', params: {category: 2}}" class="leisure-container-box-ol_item">
            <img src="../../assets/img/pic/21.png" alt=""/>
            <p>店名1</p>
          </router-link>
          <li class="leisure-container-box-ol_item">
            <img src="../../assets/img/pic/22.png" alt=""/>
            <p>店名1</p>
          </li>
          <li class="leisure-container-box-ol_item">
            <img src="../../assets/img/pic/23.png" alt=""/>
            <p>店名1</p>
          </li>
          <li class="leisure-container-box-ol_item">
            <img src="../../assets/img/pic/24.png" alt=""/>
            <p>店名1</p>
          </li>
          <li class="leisure-container-box-ol_item">
            <img src="../../assets/img/pic/25.png" alt=""/>
            <p>店名1</p>
          </li>
        </ol>
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
<style lang='scss'>
.router-link-exact-active{
  background-color: #fff !important;
}
.leisure{
  margin-top: 1.9rem;
  position: relative;
  &-container{
    width: 12rem;
    height: 8.5rem;
    background-color: #fff;
    position: relative;
    margin: 0 auto;
    border-radius:8px;
    &-links{
      position: absolute;
      width: 0.8rem;
      right: -0.8rem;
      &_item{
        width: 0.8rem;
        height: 1.46rem;
        background:rgba(241,241,241,1);
        border-radius:0px 8px 8px 0px;
        border:1px solid rgba(151,151,151,1);
        margin-top: 0.24rem;
        div{
          width: 0.33rem;
          height: 0.33rem;
          margin: 0.33rem auto 10px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        p{
          font-size: 0.34rem;
          color:rgba(74,74,74,1);
          text-align: center;
        }
        &:nth-child(1) div{
          background-image: url(../../assets/img/icons/gou.png);
        }
        &:nth-child(2) div{
          background-image: url(../../assets/img/icons/gou.png);
        }
        &:nth-child(3) div{
          background-image: url(../../assets/img/icons/gou.png);
        }
      }
    }
    &-box{
      overflow: hidden;
      height: 100%;
      h5{
        color: #E06E6E;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        font-size: 20px;
        background: url(../../assets/img/icons/down.png) no-repeat;
        background-position: center 0.65rem;
        background-size: 20px 19px;
      }
      &_dis{
        width: 9.4rem;
        margin: 0 auto;
        line-height: 24px;
        letter-spacing: 6px;
        text-align: center;
        margin-bottom: 0.5rem;
      }
      &-ol{
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        justify-content: space-between;
        padding: 0 32px;
        width: 102%;
        height: 6.2rem;
        &_item{
          width: 3.59rem;
          height: 3rem;
          position: relative;
          margin-bottom: 0.3rem;
          cursor: pointer;
          img{
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
          p{
            position: absolute;
            bottom: 0;
            height: 0.77rem;
            width: 100%;
            letter-spacing: 4px;
            line-height: 0.77rem;
            padding-left: 0.3rem;
            font-size: 0.28rem;
            color: #fff;
            font-family:'PangMenZhengDao';
            background:rgba(0,0,0,.8);
          }
        }
      }
    }
  }
}
</style>
