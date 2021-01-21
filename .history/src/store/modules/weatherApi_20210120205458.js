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
    getUserWeather(state, weatherData) {
      state.UserWeather = weatherData;
      // console.log(state.UserWeather,"~~~~~");
    }
  },
  actions: {
    async getUserWeather({
      commit
    }) {
      let weatherData = await getUserWeather();
      console.log("weatherData为:"+weatherData)
      commit("getRightNowList", weatherData);
    }
  }
}
