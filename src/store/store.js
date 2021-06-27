import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import getters from './getters'
import mutations from './mutaitions'
import actions from './actions'
import weibohot from './modules/weibohot.js'
import hotnews from './modules/hotnews'
import rightNow from './modules/rightNow'
import douyinMusic from './modules/douyinMusic'
import news from './modules/news'
import tianyan from './modules/tianyan'
import tianxingApi from './modules/tianxingApi'
import randomSentences from "./modules/randomSentences"
import anyknow from "./modules/anyknowApi"
import login from "./modules/login"
import myKuaiShou from "./modules/myKuaiShou"
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    weibohot,
    hotnews,
    rightNow,
    douyinMusic,
    news,
    tianyan,
    tianxingApi,
    randomSentences,
    anyknow,
    login,
    myKuaiShou
  }
});
