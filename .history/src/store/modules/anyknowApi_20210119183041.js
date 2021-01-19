import {
  getBaiduNewsList,
  getWeiboNewsList,
  getZhihuNewsList,
  getQdailyNewsList,
  getTopNewsList,
  // 360
  getTXZNewsList,
  getGlobalNewsList,

} from "http/http";
const OK = 200;
export default {
  state: {
    BaiduNewsList: [],
    WeiboNewsList: [],
    ZhihuNewsList: [],
    QdailyNewsList: [],
    TXZNewsList: [],
    TopNewsList: [],
    GlobalNewsList:[],
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
    getTXZNewsList(state, data) {
      state.TXZNewsList = data;
    },
    getTopNewsList(state, data) {
      state.TopNewsList = data;
    },
    getGlobalNewsList(state, data) {
      state.GlobalNewsList = data;
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
    },
    async getTXZNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getTXZNewsList();
      console.log(msg, data);
      commit("getTXZNewsList", data);
      return data;
    },
    async getTopNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getTopNewsList();
      console.log(msg, data);
      commit("getTopNewsList", data);
      return data;
    },
    async getGlobalNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getGlobalNewsList();
      console.log(msg, data);
      commit("getGlobalNewsList", data);
      return data;
    }
  }
}
