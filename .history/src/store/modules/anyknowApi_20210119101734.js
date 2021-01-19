import {
  getBaiduNewsList
} from "http/http";
const OK = 200;
export default {
  state: {
    BaiduNewsList: []
  },
  getters: {

  },
  mutations: {
    getBaiduNewsList(state, newsHotList) {
      state.newsHotList = newsHotList;
    }
  },
  actions: {
    async getBaiduNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getBaiduNewsList();
      console.log(msg, newslist);
      commit("getBaiduNewsList", data);
      return data;
    }
  }
}
