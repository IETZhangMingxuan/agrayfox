/* 天行API接口专用仓库 */
import {
  getAppleNewsList,
  getInternationalNewsList
} from "http/http";
const OK = 200;
export default {
  state: {
    AppleNewsList: [],
    InternationalNewsList: []
  },
  getters: {

  },
  mutations: {
    getAppleNewsList(state, newslist) {
      state.AppleNewsList = newslist;
    },
    getInternationalNewsList(state, newslist) {
      state.InternationalNewsList = newslist;
    }
  },
  actions: {
    async getAppleNewsList({
      commit
    }) {
      const {
        code,
        newslist
      } = await getAppleNewsList();
      console.log(code, newslist);
      commit("getAppleNewsList", newslist);
      return newslist;
    }
  }
}
