/* 实时获取抖音实时50条无作者头像榜单 */
import {
    getRightNowList
} from 'http/http'
const OK = 200;
export default {
  state: {
    RightNowList: []
  },
  getters: {},
  mutations: {
    getRightNowList(state, data) {
      state.RightNowList = data;
      // console.log(state.RightNowList,"~~~~~");
    }
  },rightNow
  actions: {
    async getRightNowList({
      commit
    }) {
      const {
        billboard_data
      } = await getRightNowList();
      commit("getRightNowList", billboard_data);
    }
  }
}
