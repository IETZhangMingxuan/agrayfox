import {
    getRandomSentencesList
  } from "http/http";
  const OK = 200;
  export default {
    state: {
        RandomSentencesList: []
    },
    getters: {
  
    },
    mutations: {
        getRandomSentencesList(state, result) {
        state.RandomSentencesList = result;
      }
    },
    actions: {
      async getRandomSentencesList({
        commit
      }) {
        const {
          result
        } = await getRandomSentencesList();
        commit("getRandomSentencesList", result);
        return result;
      }
    }
  }
  