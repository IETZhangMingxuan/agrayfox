import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import getters from './getters'
import mutations from './mutaitions'
import actions from './actions'
import weibohot from './modules/weibohot.js'
import hotnews from './modules/hotnews'
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules:{
    weibohot,
    hotnews
  },
});
