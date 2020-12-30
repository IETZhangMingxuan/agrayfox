import {getDouyinVideoList} from 'http/http'
const OK = 200;
export default {
  state: {
    douyinVideoList: []
  },
  getters: {

  },
  mutations: {
    getDouyinVideoList(state, douyinVideoList) {
      state.douyinVideoList = douyinVideoList;
    }
  },
  actions: {
    async getDouyinVideoList({
      commit
    }) {
      const {
        code,
        newslist
      } = await getDouyinVideoList();
      // console.log(code, newslist);
      commit("getDouyinVideoList", newslist);
      return newslist;
    }
  }
}
