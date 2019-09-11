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
        <ol class="leisure-container-box-ol" v-infinite-scroll="loadMore" style="overflow:auto">
          <router-link
            tag="li"
            v-for="item in dataList"
            :key="item.cnId"
            :to="{name: 'shoppingdetail', params: {category: item.cnId}}"
            class="leisure-container-box-ol_item"
          >
            <img :src="item.imgUrl" alt=""/>
            <p>{{ item.name }}</p>
          </router-link>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { queryLeatureList } from '@/api/shopping'
import { baseUrl } from '@/config'
export default {
  data() {
    return {
      cateId: '',
      pageSize: 6,
      pageNum: 1,
      dataList: [
        {
          cnId: '1',
          name: '店铺1',
          imgUrl: require('../../assets/img/pic/20.png')
        },
        {
          cnId: '2',
          name: '店铺2',
          imgUrl: require('../../assets/img/pic/21.png')
        },
        {
          cnId: '3',
          name: '店铺3',
          imgUrl: require('../../assets/img/pic/22.png')
        },
        {
          cnId: '4',
          name: '店铺4',
          imgUrl: require('../../assets/img/pic/23.png')
        },
        {
          cnId: '5',
          name: '店铺5',
          imgUrl: require('../../assets/img/pic/24.png')
        },
        {
          cnId: '6',
          name: '店铺6',
          imgUrl: require('../../assets/img/pic/25.png')
        }
      ],
      islastPage: false,
      first: true
    }
  },
  created() {
    this.getCategory(this.$route)
    this.queryList()
  },
  watch: {
    $route(to, from) {
      // 路由切换时，清空数据并置请求为第一页
      this.dataList = []
      this.pageNum = 1
      this.getCategory(to)
      this.queryList()
    }
  },
  mounted() {},

  methods: {
    getCategory(target){
      switch(target.params.category) {
        case 'gou':
          this.cateId = 2
          break
        case 'chi':
          this.cateId = 1
          break
        case 'zhu':
          this.cateId = 0
          break
      }
    },
    queryList() {
      queryLeatureList({
        "id": this.cateId,
        "pageNum": this.pageNum,
        "pageSize": this.pageSize
      }).then(res => {
        if(res.code === 2000) {
          this.islastPage = res.datas.isLastPage
          res.datas.list.map(item => {
            var obj = {}
            obj.cnId = item.cnId,
            obj.name = item.csContentName
            obj.imgUrl = baseUrl + item.csPictureUrl
            this.dataList.push(obj)
          })
        }
      })
    },
    loadMore(){
      // console.log(this.islastPage)
      if(!this.islastPage) {
        if(this.first) {
          this.first = false
        } else {
          this.pageNum ++
          this.queryList()
        }
      }
    }
  }
}

</script>
<style lang='scss'>
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
        border-left: none;
        cursor: pointer;
        margin-top: 0.24rem;
        &.router-link-exact-active{
          background-color: #fff;
        }
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
