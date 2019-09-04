<!-- 文艺演出 -->
<template>
  <div class="culture">
    <el-carousel class="culture-container" :interval="5000" arrow="always">
      <el-carousel-item class="culture-container-item" v-for="item in 4" :key="item">
        <div class="culture-container-item_pic">
          <p class="culture-container-item_pic_title">活动标题</p>
        </div>
        <div class="culture-container-item_text">
          <h5 class="culture-container-item_text_title">精彩活动</h5>
          <ul>
            <li>
              <p>演出日</p>
              <h4 style="color: '#F5A623';">(周日到周四)</h4>
              <p>演出时间</p>
              <h4>09:00-10:00</h4>
              <p>演出地点</p>
              <h4>游客服务中心广场</h4>
            </li>
            <li>
              <p>演出日</p>
              <h4 style="color: '#E06E6E';">(周日到周四)</h4>
              <p>演出时间</p>
              <h4>09:00-10:00</h4>
              <p>演出地点</p>
              <h4>游客服务中心广场</h4>
            </li>
          </ul>
        </div>
      </el-carousel-item>
    </el-carousel>
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
.culture{
  &-container{
    width: 15rem;
    height: 6rem;
    overflow: hidden;
    background-color: #fff;
    margin: 1.2rem auto;
    position: relative;
    .el-carousel__container{
      width: 15rem;
      height: 100%;
    }
    &-item{
      width: 100%;
      height: 100%;
      display: flex;
      &_pic{
        flex: 1;
        background-image: url(../../assets/img/pic/17.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        &_title{
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding-left: 0.6rem;
          font-size: 0.42rem;
          height: 0.9rem;
          color: #fff;
          line-height: 0.9rem;
          background:rgba(0,0,0,.4);
        }
      }
      &_text{
        flex: 1;
        display: flex;
        flex-direction: column;
        &_title{
          height: 1.14rem;
          line-height: 1.14rem;
          font-size: 0.42rem;
          text-align: center;
          color: rgba(0, 0, 0, 1);
        }
        ul{
          flex: 1;
          display: flex;
          width: 6.25rem;
          border-top: 1px solid #979797;
          margin: 0 auto;
          li{
            flex: 1;
            text-align: center;
            color: #4A4A4A;
            &:nth-child(1){
              border-right: 1px solid #979797;
            }
            p{
              margin-top: 0.52rem;
              font-size: 0.24rem;
            }
            h4{
              font-size: 0.3rem;
              font-weight: normal;
              margin-top: 0.2rem;
              letter-spacing:2px;
            }
          }
        }
      }
    }
    .el-carousel__arrow{
      width:1.38rem;
      height:1.38rem;
      background:rgba(216,216,216,0.4);
      box-shadow:0px 0px 20px 0px rgba(255,255,255,0.5);
      position: fixed;
      top: 5.8rem;
      z-index: 1000;
      i{
        font-size: 0.42rem;
        color: #fff;
      }
    }
    .el-carousel__arrow--left{
      left: 1.2rem;
    }
    .el-carousel__arrow--right{
      right: 1.2rem;
    }
    .el-carousel__indicators{
      position: fixed;
      top: 9.15rem;
      margin-top: 0.2rem;
      li{
        border-radius: 50%;
        overflow: hidden;
        margin-right: 0.9rem;
        padding: 0;
        background-color: #fff;
        button{
          width: 0.23rem;
          height: 0.23rem;
          border-radius: 50%;
          background-color: #fff;
        }
      }
      .is-active{
        button{
          background-color: #FF9999;
        }
      }
    }
  }
}
</style>
