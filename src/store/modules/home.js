const state = {
  checkId: 3,
  navList: [
    {
      name: '首页',
      ename: 'Tourist guide',
      path: '/home',
      type: 1
    },
    {
      name: '720全景漫游',
      ename: 'panoramic roaming',
      path: '/scenery',
      type: 2
    },
    {
      name: '景区概况',
      ename: 'Tourist guide',
      path: '/overview',
      type: 3
    },
    {
      name: '视频图库',
      ename: 'Tourist guide',
      path: '/media',
      type: 4
    },
    {
      name: '游购景区',
      ename: 'Tourist guide',
      path: '/shopping',
      type: 5
    }
  ]
}
const getters = {
  // 选中项
  checkItem(state) {
    return state.filter(item => {
      return item.type === state.checkId
    })
  },
  // 未选中列表
  guideList(state) {
    return state.filter(item => {
      return item.type !== state.checkId
    })
  }
}

const mutations = {
  toggleCheck(state, id) {
    state.checkId = id
  }
}

export default {
  namespaced: true,
  strict: process.env.NODE_ENV === 'development',
  state,
  getters,
  mutations
}

