<!-- 图片四季分类组件 -->
<template>
  <div class="season">
    <div class="season-box">
      <router-link tag="div" :to="{name: 'mediadetai', params: {seasonId: 'spring'}}" class="season-box_pic model">
        <div class="season-box_pic_model">
          <p>景区景点名称</p>
          <span></span>
        </div>
      </router-link>
      <router-link tag="div" :to="{name: 'mediadetai', params: {seasonId: 'summer'}}" class="season-box_pic model">
        <div class="season-box_pic_model">
          <p>景区景点名称</p>
          <span></span>
        </div>
      </router-link>
      <router-link tag="div" :to="{name: 'mediadetai', params: {seasonId: 'fall'}}" class="season-box_pic model">
        <div class="season-box_pic_model">
          <p>景区景点名称</p>
          <span></span>
        </div>
      </router-link>
      <router-link tag="div" :to="{name: 'mediadetai', params: {seasonId: 'winter'}}" class="season-box_pic model">
        <div class="season-box_pic_model">
          <p>景区景点名称</p>
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
  background:linear-gradient(269deg,rgba(112,157,235,0.04) 0%,rgba(0,0,0,0.61) 100%);
  &-box{
    padding: 1.10rem 1.95rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    &_pic{
      width: 3.56rem;
      height: 6.35rem;
      border-radius:7px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      &_model{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color:rgba(15,15,15,0.4);
        cursor: pointer;
        p{
          text-align: center;
          font-size: 16px;
          color: rgba(225, 225, 225, .8);
          margin: 2rem auto;
          margin-bottom: 0;
          width: 20px;
          line-height: 22px;
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
    .model:nth-child(1){
      background-image: url('../../assets/img/pic/spring.png');
    }
    .model:nth-child(2){
      background-image: url('../../assets/img/pic/summer.png');
    }
    .model:nth-child(3){
      background-image: url('../../assets/img/pic/fall.png');
    }
    .model:nth-child(4){
      background-image: url('../../assets/img/pic/winter.png');
    }
  }
}
</style>
