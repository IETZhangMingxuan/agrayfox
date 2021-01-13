import {
    getGamesNewsList
  } from "http/http";
  const OK = 200;
  export default {
    state: {
        GamesNewsList: []
    },
    getters: {
  
    },
    mutations: {
        getGamesNewsList(state, newsHotList) {
        state.GamesNewsList = newsHotList;
      }
    },
    actions: {
      async getGamesNewsList({
        commit
      }) {
        const {
          code,
          data
        } = await getGamesNewsList();
        commit("getGamesNewsList", data);
        return data;
      }
    }
  }
  