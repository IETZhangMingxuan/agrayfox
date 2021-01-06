/* 实时获取快手热门视频榜单 */
import {
  getKuaiShouVideoList01
} from 'http/http'
const OK = 200;
export default {
  state: {
    kuaiShouVideoList01: []
  },
  getters: {},
  mutations: {
    getKuaiShouVideoList01(state, data) {
      state.kuaiShouVideoList01 = data;
    }
  },
  actions: {
    async getKuaiShouVideoList01({
      commit
    }) {
      const {
        code,
        data
      } = await getKuaiShouVideoList01();
      console.log(code, data);
      commit("getKuaiShouVideoList01", data);
      return data;
    }
  }
}
