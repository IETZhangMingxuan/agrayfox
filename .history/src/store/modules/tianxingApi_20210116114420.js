/* 天行API接口专用仓库 */
import {
  getAppleNewsList,
  getInternationalNewsList,
  getChinaNewsList,
  getBlockChainNewsList,
  getTodaysTopNewsList,
  getZongHeNewsList,
  getVirusNumList
} from "http/http";
const OK = 200;
export default {
  state: {
    AppleNewsList: [],
    InternationalNewsList: [],
    ChinaNewsList: [],
    BlockChainNewsList: [],
    TodaysTopNewsList: [],
    ZongHeNewsList:[],
    VirusNumList:[]
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
      state.ZongHeNewsList = newslist;
    },
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
  }
}
