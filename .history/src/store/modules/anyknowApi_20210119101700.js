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
        code,
        newslist
      } = await getBaiduNewsList();
      // console.log(code, newslist);
      commit("getBaiduNewsList", newslist);
      return newslist;
    }
  }
}
