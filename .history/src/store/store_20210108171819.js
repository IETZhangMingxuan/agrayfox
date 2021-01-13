import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import getters from './getters'
import mutations from './mutaitions'
import actions from './actions'
import weibohot from './modules/weibohot.js'
import hotnews from './modules/hotnews'
import douyinVideo from './modules/douyinVideo'
import kuaiShouVideo01 from './modules/kuaiShouVideo01'
import rightNow from './modules/rightNow'
import douyinMusic from './modules/douyinMusic'
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules:{
    weibohot,
    hotnews,
    douyinVideo,
    kuaiShouVideo01,
    rightNow,
    douyinMusic,
  },
});
