<!-- 休闲购物 -->
<template>
  <div class="leisure">
    <div class="leisure-container">
      <ol class="leisure-container-links">
        <router-link tag="li" to="/leisure/gou" class="leisure-container-links_item">
          <div class="leisure-container-links_item_icon">
            
          </div>
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
          <li class="leisure-container-box-ol_item">
            <p>店名1</p>
          </li>
          <li class="leisure-container-box-ol_item">
            <p>店名1</p>
          </li>
          <li class="leisure-container-box-ol_item">
            <p>店名1</p>
          </li>
          <li class="leisure-container-box-ol_item">
            <p>店名1</p>
          </li>
          <li class="leisure-container-box-ol_item">
            <p>店名1</p>
          </li>
          <li class="leisure-container-box-ol_item">
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
  margin-top: .1rem;
  position: relative;
  &-container{
    width: 12rem;
    height: 8.9rem;
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
          margin: 0.33rem auto 5px;
        }
        p{
          font-size: 0.34rem;
          color:rgba(74,74,74,1);
          text-align: center;
        }
      }
    }
    &-box{
      h5{
        color: #E06E6E;
        text-align: center;
      }
    }
  }
}
</style>
