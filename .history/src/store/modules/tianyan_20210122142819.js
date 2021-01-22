import {
  getTYVideoList
} from "http/http";
const OK = 200;
export default {
  state: {
    TYVideoList: []
  },
  getters: {

  },
  mutations: {
    getTYVideoList(state, result) {
      state.TYVideoList = result;
    }
  },
  actions: {
    async getTYVideoList({
      commit
    }) {
      const {
        code,
        result
      } = await getTYVideoList();
      // console.log(code, newslist);
      commit("getTYVideoList", result);
      return result;
    }
  }
}
