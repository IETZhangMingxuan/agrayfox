import {
    getUserWeather
} from 'http/http'
const OK = 200;
export default {
  state: {
    UserWeather: []
  },
  getters: {},
  mutations: {
    getUserWeather(state, newslist) {
      state.UserWeather = newslist;
      // console.log(state.UserWeather,"~~~~~");
    }
  },
  actions: {
    async getUserWeather({
      commit
    }) {
      const {
        newslist
      } = await getUserWeather();
      commit("getRightNowList", newslist);
    }
  }
}
