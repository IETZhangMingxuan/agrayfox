import {
  getYQList
} from "http/http";
const OK = 200;
export default {
  state: {
    YQList: []
  },
  getters: {

  },
  mutations: {
    getYQList(state, data) {
      state.YQList = data;
    }
  },
  actions: {
    async getYQList({
      commit
    }) {
      const {
        code,
        data
      } = await getYQList();
      commit("getYQList", data);
      return data;
    }
  }
}
