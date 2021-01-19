import {
  getBaiduNewsList,
  getWeiboNewsList,
  getZhihuNewsList,
  getQdailyNewsList,
  getTopNewsList,
  // 360
  getTXZNewsList,
  getGlobalNewsList,
  // 36氪
  getTSKeNewsList,
  getSciChinaNewsList,
  getCnBetaNewsList,
  getSnowballNewsList,


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
    GlobalNewsList: [],
    TSKeNewsList: [],
    SciChinaNewsList: [],
    CnBetaNewsList: [],
    SnowballNewsList: [],
  },
  getters: {

  },
  mutations: {
    getSnowballNewsList(state, data) {
      state.SnowballNewsList = data;
    },
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
    getTSKeNewsList(state, data) {
      state.TSKeNewsList = data;
    },
    getSciChinaNewsList(state, data) {
      state.SciChinaNewsList = data;
    },
    getCnBetaNewsList(state, data) {
      state.CnBetaNewsList = data;
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
    },
    async getTSKeNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getTSKeNewsList();
      console.log(msg, data);
      commit("getTSKeNewsList", data);
      return data;
    },
    async getSciChinaNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getSciChinaNewsList();
      console.log(msg, data);
      commit("getSciChinaNewsList", data);
      return data;
    },
    async getCnBetaNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getCnBetaNewsList();
      console.log(msg, data);
      commit("getCnBetaNewsList", data);
      return data;
    }
  }
}
