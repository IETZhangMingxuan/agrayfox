/* 天行API接口专用仓库 */
import {
  getAppleNewsList,
  getInternationalNewsList,
  getChinaNewsList
} from "http/http";
const OK = 200;
export default {
  state: {
    AppleNewsList: [],
    InternationalNewsList: [],
    ChinaNewsList: []
  },
  getters: {

  },
  mutations: {
    getAppleNewsList(state, newslist) {
      state.AppleNewsList = newslist;
    },
    getInternationalNewsList(state, newslist) {
      state.InternationalNewsList = newslist;
    },
    getChinaNewsList(state, newslist) {
      state.ChinaNewsList = newslist;
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
      //   console.log(code, newslist);
      commit("getAppleNewsList", newslist);
      return newslist;
    },
    async getInternationalNewsList({
      commit
    }) {
      const {
        code,
        newslist
      } = await getInternationalNewsList();
      console.log(code, newslist);
      commit("getInternationalNewsList", newslist);
      return newslist;
    },
    async getChinaNewsList({
        commit
      }) {
        const {
          code,
          newslist
        } = await getChinaNewsList();
        console.log(code, newslist);
        commit("getChinaNewsList", newslist);
        return newslist;
      }
  }
}
