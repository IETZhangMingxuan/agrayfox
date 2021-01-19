import {
    getLocation
  } from "http/http";
  const OK = 200;
  export default {
    state: {
      Location: []
    },
    getters: {
  
    },
    mutations: {
        getLocation(state, newsHotList) {
        state.Location = newsHotList;
      }
    },
    actions: {
      async getLocation({
        commit
      }) {
        const {
          code,
          newslist
        } = await getLocation();
        commit("getLocation", newslist);
        return newslist;
      }
    }
  }
  