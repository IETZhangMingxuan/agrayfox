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
  getEasymoneyNewsList,
  getCaixinNewsList,
  getInvestingNewsList,
  getPearVideoList,
  getBilibiliVideoList,
  getGameSkyGameList,
  getMaoYanList,
  getSteamList,
  getDeveloperTopList,
  getOsChinaTopList,
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
    EasymoneyNewsList: [],
    CaixinNewsList: [],
    InvestingNewsList: [],
    PearVideoList: [],
    BilibiliVideoList: [],
    GameSkyGameList: [],
    MaoYanList: [],
    SteamList: [],
    DeveloperTopList: [],
    OsChinaTopList: []
  },
  getters: {

  },
  mutations: {
    getOsChinaTopList(state, data) {
      state.OsChinaTopList = data;
    },
    getDeveloperTopList(state, data) {
      state.DeveloperTopList = data;
    },
    getSteamList(state, data) {
      state.SteamList = data;
    },
    getMaoYanList(state, data) {
      state.MaoYanList = data;
    },
    getGameSkyGameList(state, data) {
      state.GameSkyGameList = data;
    },
    getBilibiliVideoList(state, data) {
      state.BilibiliVideoList = data;
    },
    getPearVideoList(state, data) {
      state.PearVideoList = data;
    },
    getInvestingNewsList(state, data) {
      state.InvestingNewsList = data;
    },
    getCaixinNewsList(state, data) {
      state.CaixinNewsList = data;
    },
    getEasymoneyNewsList(state, data) {
      state.EasymoneyNewsList = data;
    },
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
    async getDeveloperTopList({
      commit
    }) {
      const {
        msg,
        data
      } = await getDeveloperTopList();
      console.log(msg, data);
      commit("getDeveloperTopList", data);
      return data;
    },
    async getSteamList({
      commit
    }) {
      const {
        msg,
        data
      } = await getSteamList();
      console.log(msg, data);
      commit("getSteamList", data);
      return data;
    },
    async getMaoYanList({
      commit
    }) {
      const {
        msg,
        data
      } = await getMaoYanList();
      console.log(msg, data);
      commit("getMaoYanList", data);
      return data;
    },
    async getGameSkyGameList({
      commit
    }) {
      const {
        msg,
        data
      } = await getGameSkyGameList();
      console.log(msg, data);
      commit("getGameSkyGameList", data);
      return data;
    },
    async getBilibiliVideoList({
      commit
    }) {
      const {
        msg,
        data
      } = await getBilibiliVideoList();
      console.log(msg, data);
      commit("getBilibiliVideoList", data);
      return data;
    },
    async getPearVideoList({
      commit
    }) {
      const {
        msg,
        data
      } = await getPearVideoList();
      console.log(msg, data);
      commit("getPearVideoList", data);
      return data;
    },
    async getInvestingNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getInvestingNewsList();
      console.log(msg, data);
      commit("getInvestingNewsList", data);
      return data;
    },
    async getCaixinNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getCaixinNewsList();
      console.log(msg, data);
      commit("getCaixinNewsList", data);
      return data;
    },
    async getEasymoneyNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getEasymoneyNewsList();
      console.log(msg, data);
      commit("getEasymoneyNewsList", data);
      return data;
    },
    async getSnowballNewsList({
      commit
    }) {
      const {
        msg,
        data
      } = await getSnowballNewsList();
      console.log(msg, data);
      commit("getSnowballNewsList", data);
      return data;
    },
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
