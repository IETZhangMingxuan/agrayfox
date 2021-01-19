import {
    getNewsHotList
  } from "http/http";
  const OK = 200;
  export default {
    state: {
      newsHotList: []
    },
    getters: {
  
    },
    mutations: {
      getNewsHotList(state, newsHotList) {
        state.newsHotList = newsHotList;
      }
    },
    actions: {
      async getNewsHotList({
        commit
      }) {
        const {
          code,
          newslist
        } = await getNewsHotList();
        // console.log(code, newslist);
        commit("getNewsHotList", newslist);
        return newslist;
      }
    }
  }
  