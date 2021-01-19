import {
  getBaiduNewsList,
  getWeiboNewsList
} from "http/http";
const OK = 200;
export default {
  state: {
    BaiduNewsList: [],
    WeiboNewsList:[],
  },
  getters: {

  },
  mutations: {
    getBaiduNewsList(state, data) {
      state.BaiduNewsList = data;
    },
    getWeiboNewsList(state, data) {
      state.BaiduNewsList = data;
    },
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
    },
    async getWeiboNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getWeiboNewsList();
      console.log(msg, data);
      commit("getWeiboNewsList", data);
      return data;
    }
  }
}
