import {
  getWeiboHotList
} from "http/http";
const OK = 200;
export default {
  state: {
    weiboHotList: []
  },
  getters: {

  },
  mutations: {
    getWeiboHotList(state, weiboHotList) {
      state.weiboHotList = weiboHotList;
    }
  },
  actions: {
    async getWeiboHotList({commit}) {
      const {code,newslist} = await getWeiboHotList();
      console.log(code, newslist);
      commit("getWeiboHotList",newslist);
      return newslist;
    }
  }
}
