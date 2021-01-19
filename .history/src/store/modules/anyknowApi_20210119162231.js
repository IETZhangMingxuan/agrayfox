import {
  getBaiduNewsList,
  getWeiboNewsList,
  getZhihuNewsList,
  getQdailyNewsList,
} from "http/http";
const OK = 200;
export default {
  state: {
    BaiduNewsList: [],
    WeiboNewsList: [],
    ZhihuNewsList: [],
    QdailyNewsList:[],
  },
  getters: {

  },
  mutations: {
    getBaiduNewsList(state, data) {
      state.BaiduNewsList = data;
    },
    getWeiboNewsList(state, data) {
      state.WeiboNewsList = data;
    },
    getZhihuNewsList(state, data) {
      state.ZhihuNewsList = data;
    },
    getQdailyNewsList(state, data) {
      state.QdailyNewsList = data;
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
    },
    async getZhihuNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getZhihuNewsList();
      console.log(msg, data);
      commit("getZhihuNewsList", data);
      return data;
    },
    async getQdailyNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getQdailyNewsList();
      console.log(msg, data);
      commit("getQdailyNewsList", data);
      return data;
    }
  }
}
