/* 天行API接口专用仓库 */
import {
  getAppleNewsList,
  getInternationalNewsList,
  getChinaNewsList,
  getBlockChainNewsList,
  getTodaysTopNewsList,
  getZongHeNewsList,
  getVirusNumList,
  getSportsNewsList,
} from "http/http";
const OK = 200;
export default {
  state: {
    AppleNewsList: [],
    InternationalNewsList: [],
    ChinaNewsList: [],
    BlockChainNewsList: [],
    TodaysTopNewsList: [],
    ZongHeNewsList: [],
    VirusNumList: [],
    SportsNewsList: [],
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
    },
    getBlockChainNewsList(state, newslist) {
      state.BlockChainNewsList = newslist;
    },
    getTodaysTopNewsList(state, newslist) {
      state.TodaysTopNewsList = newslist;
    },
    getZongHeNewsList(state, newslist) {
      state.ZongHeNewsList = newslist;
    },
    getVirusNumList(state, newslist) {
      state.VirusNumList = newslist;
    },
    getSportsNewsList(state, newslist) {
      state.SportsNewsList = newslist;
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
      // console.log(code, newslist);
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
      // console.log(code, newslist);
      commit("getChinaNewsList", newslist);
      return newslist;
    },
    async getBlockChainNewsList({
      commit
    }) {
      const {
        code,
        newslist
      } = await getBlockChainNewsList();
      //console.log(code, newslist);
      commit("getBlockChainNewsList", newslist);
      return newslist;
    },
    async getTodaysTopNewsList({
      commit
    }) {
      const {
        code,
        newslist
      } = await getTodaysTopNewsList();
      // console.log(code, newslist);
      commit("getTodaysTopNewsList", newslist);
      return newslist;
    },
    async getZongHeNewsList({
      commit
    }) {
      const {
        code,
        newslist
      } = await getZongHeNewsList();
      // console.log(code, newslist);
      commit("getZongHeNewsList", newslist);
      return newslist;
    },
    async getVirusNumList({
      commit
    }) {
      const {
        newslist
      } = await getVirusNumList();
      // console.log(code, newslist);
      commit("getVirusNumList", newslist);
      return newslist;
    },
    async getSportsNewsList({
      commit
    }) {
      const {
        newslist
      } = await getSportsNewsList();
      // console.log(code, newslist);
      commit("getSportsNewsList", newslist);
      return newslist;
    }
  }
}
