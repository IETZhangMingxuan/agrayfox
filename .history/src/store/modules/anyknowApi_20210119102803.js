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
    getBaiduNewsList(state, data) {
      state.BaiduNewsList = data;
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
      console.log(msg, data);
      commit("getBaiduNewsList", data);
      return data;
    }
  }
}
