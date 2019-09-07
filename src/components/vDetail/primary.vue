<!--  -->
<template>
  <div class="primary">
    <div class="primary_head">
      <p>{{ title }}</p>
      <div></div>
    </div>
    <div class="primary_text" v-html="content"></div>
    <!-- <div class="primary_img">
      <img src="../../assets/img/pic/12.png" alt="">
    </div> -->
  </div>
</template>

<script>
import { queryOverviewDetai } from '../../api/overview'
export default {
  components: {},

  data() {
    return {
      title: '东来桃园',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  },

  created() {
    let typeId = this.$route.params.typeId
    queryOverviewDetai({ id: typeId }).then(res => {
      console.log(res)
      if(res.code === 2000) {
        this.title = res.datas.csContentName
        this.content = res.datas.csSubmContent
      }
    })
  },

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.primary{
  padding-top: 0.46rem;
  height: 100%;
  &_head{
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
    height: 5.5rem;
    font-size:15px;
    margin: 0 auto;
    font-family:PingFangSC;
    font-weight:300;
    color:rgba(6,30,58,1);
    line-height:24px;
    letter-spacing:6px;
    overflow: auto;
    p{
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
  &_text >>> img{
    width: 100%;
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
}
</style>
