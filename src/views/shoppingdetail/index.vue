<!-- 购，吃，住详情页面 -->
<template>
  <div class="shoppdetail">
    <div class="shoppdetail-con">
      <p class="shoppdetail-con_title"><span>{{ dataDetai.title }}</span></p>
      <p class="shoppdetail-con_time">
        <span>营业时间：</span>{{ dataDetai.time }}</p>
      <router-link tag="p" to="/bdmap/park" class="shoppdetail-con_address">
        <span>营业地址：</span>中山街36号铺（点击查看地点）
      </router-link>
      <div class="shoppdetail-con_dis">{{ dataDetai.content }}当你有一个傻瓜时，你会很痛苦；你有 50 个傻瓜是最幸福的，吃饭、睡觉、上厕所排着队去的；你有 50 个聪明人实际上是最痛苦的，</div>
      <ul class="shoppdetail-con-img">
        <li class="shoppdetail-con-img_item">
          <img src="../../assets/img/pic/19.png" alt=""/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { queryDetailById } from '@/api/shopping'
export default {
  components: {},

  data() {
    return {
      cateId: '',
      dataDetai: {}
    }
  },

  created() {
    this.cateId = this.$route.params.category
    queryDetailById({id: this.cateId}).then(res => {
      if(res.code === 2000) {
        var obj = {}
        obj.title = res.datas[0].cs_content_name
        obj.time = res.datas[0].cs_title_name
        obj.position = res.datas[0].cs_position_name
        obj.addresP = {
          latitude: res.datas[0].cs_latitude,
          longitude: res.datas[0].cs_longitude
        }
        obj.content = res.datas[0].cs_subm_content
        this.dataDetai = obj
      }
    })
  },

  mounted() {
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
.shoppdetail{
  width: 12rem;
  height: 8.5rem;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 1.9rem;
  background-color: #fff;
  border-radius:7px;
  &-con{
    padding: 0 1.3rem;
    font-size: 0.16rem;
    overflow: auto;
    height: 100%;
    width: 102%;
    &_title{
      height: 0.9rem;
      line-height: 0.9rem;
      color: #E06E6E;
      text-align: center;
      letter-spacing: 2px;
      font-size: 0.3rem;
      span{
        padding: 15px 18px;
        border-bottom: 1px solid #E06E6E;
      }
    }
    &_time, &_address{
      padding-left: 3.27rem;
      line-height: 0.3rem;
      letter-spacing: 2px;
      span{
        padding-left: 30px;
      }
    }
    &_time{
      color: #F5A623;
    }
    &_address{
      color: #4DADFF;
      cursor: pointer;
      span{
        background: url(../../assets/img/icons/fly.webp) no-repeat;
        background-position: 0 center;
      }
    }
    &_dis{
      letter-spacing: 6px;
      line-height: 0.24rem;
      text-align: center;
      margin: 0.2rem 0 0.6rem;
      img{
        width: 100%;
        // vertical-align: top;
      }
    }
    &-img{
      width: 100%;
      &_item{
        margin-bottom: 0.4rem;
        img{
          width: 100%;
          vertical-align: top;
        }
      }
    }
  }
}
</style>
