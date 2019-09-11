<!-- 视屏图集 -->
<template>
  <div class="media">
    <div class="media-container">
      <router-link tag="div" to="/media/images" class="media-container_pic">
        <div class="images"></div>
        <div class="media-container_pic_box">
          <div class="media-container_pic_box_img">
            <img src="../../assets/img/icons/images.webp" alt="">
          </div>
          <p>图库</p>
        </div>
      </router-link>
      <router-link tag="div" to="/mediadetai/videos" class="media-container_pic">
        <div class="videos"></div>
        <div class="media-container_pic_box">
          <div class="media-container_pic_box_img">
            <img src="../../assets/img/icons/videos.webp" alt="">
          </div>
          <p>视频</p>
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
    }
  },

  created() {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
  .media{
    margin-top: 2.58rem;
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
        position: relative;
        &_box{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color:rgba(0,0,0,0.4);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          &_img{
            margin-top: 1.8rem;
            margin-bottom: 0.88rem;
            height: 1.57rem;
            width: 1.8rem;
            overflow: hidden;
            img{
              height: 100%;
            }
          }
          p{
            height:70px;
            font-size:50px;
            color: #fff;
            line-height:70px;
            text-align: center;
            letter-spacing:8px;
          }
        }
        .images, .videos{
          position: absolute;
          top: 1px;
          left: 0;
          width: 100%;
          height: 100%;
          filter: blur(2px);
        }
        .images{
          background: rgba(0,0,0,0.4) url('../../assets/img/pic/14.png') no-repeat;
        }
        .videos{
          background: url('../../assets/img/pic/15.png') no-repeat;
        }
      }
    }
  }
</style>
