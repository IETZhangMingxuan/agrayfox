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
    getUserWeather(state, HeWeather6) {
      state.UserWeather = HeWeather6;
      // console.log(state.UserWeather,"~~~~~");
    }
  },
  actions: {
    async getUserWeather({
      commit
    }) {
      const {
        HeWeather6
      } = await getUserWeather();
      commit("getRightNowList", HeWeather6);
    }
  }
}
