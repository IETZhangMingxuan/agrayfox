import {
  getWYNewsList
} from "http/http";
const OK = 200;
export default {
  state: {
    WYNewsList: []
  },
  getters: {

  },
  mutations: {
    getWYNewsList(state, WYNewsList) {
      state.WYNewsList = WYNewsList;
    }
  },
  actions: {
    async getWYNewsList({
      commit
    }) {
      const {
        code,
        result
      } = await getWYNewsList();
      // console.log(code, newslist);
      commit("getWYNewsList", result);
      return result;
    }
  }
}