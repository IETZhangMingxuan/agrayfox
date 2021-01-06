/* 实时获取抖音实时音乐榜单 */
import {
    getDouyinMusicList
} from 'http/http'
const OK = 200;
export default {
  state: {
    DouyinMusicList: []
  },
  getters: {},
  mutations: {
    getDouyinMusicList(state, data) {
      state.DouyinMusicList = data;
      // console.log(state.DouyinMusicList,"音乐榜数据");
    }
  },
  actions: {
    async getDouyinMusicList({
      commit
    }) {
      const {
        billboard_data
      } = await getDouyinMusicList();
      commit("getDouyinMusicList", billboard_data);
    }
  }
}
