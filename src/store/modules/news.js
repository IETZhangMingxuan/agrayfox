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
    getWYNewsList(state, result) {
      state.WYNewsList = result;
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
      commit("getWYNewsList", result);
      return result;
    }
  }
}
