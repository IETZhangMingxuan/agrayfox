import {
    getkasidatalist
  } from "http/http";
  const OK = 200;
  export default {
    state: {
        kasidatalist: []
    },
    getters: {
  
    },
    mutations: {
        getkasidatalist(state, kasidatalist) {
        state.kasidatalist = kasidatalist;
      }
    },
    actions: {
      async getkasidatalist({
        commit
      }) {
        const {
          code,
          data
        } = await getkasidatalist();
        // console.log(code, newslist);
        commit("getkasidatalist", data);
        return data;
      }
    }
  }
  