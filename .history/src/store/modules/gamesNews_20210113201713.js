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
        getGamesNewsList(state, data) {
        state.GamesNewsList = data;
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
  