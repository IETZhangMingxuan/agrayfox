// 该仓库用来保存一切与快手爬虫相关的数据
const ok = 200;
import {
  getKuaiShouHot,
  getKuaiShouSearchVideos,
  getKuaiShouSearchUsers,
  getKuaiShouSearchComments,
  getKuaiShouSearchUserInfo
} from "http/http";
export default {
  state: {
    kuaiShouHot: [],
    kuaiShouSearchVideos: [],
    kuaiShouSearchUsers: [],
    kuaiShouVideoComments: [],
    kuaiShouUserInfo: []
  },
  getters: {},
  mutations: {
    getKuaiShouHot(state, data) {
      state.kuaiShouHot = data;
    },
    getKuaiShouSearchVideos(state, data) {
      state.kuaiShouSearchVideos = data;
    },
    getKuaiShouSearchUsers(state, data) {
      state.kuaiShouSearchUsers = data;
    },
    getKuaiShouSearchComments(state, data) {
      state.kuaiShouVideoComments = data;
    },
    getKuaiShouSearchUserInfo(state, data) {
      state.kuaiShouUserInfo = data;
    }
  },
  actions: {
    // 获取快手精彩短视频
    async getKuaiShouHot({
      commit
    }) {
      const {
        code,
        data
      } = await getKuaiShouHot();
      if (code === 200) {
        commit("getKuaiShouHot", data);
      } else {
        console.log('获取快手热门视频失败');
      }
    },
    // 根据关键字搜索快手视频
    async getKuaiShouSearchVideos({
      commit
    }, {
      keyword
    }) {
      const {
        code,
        data
      } = await getKuaiShouSearchVideos(keyword);
      if (code === 200) {
        commit("getKuaiShouSearchVideos", data);
      } else {
        console.log('根据关键字搜索快手视频失败,不要着急,慢慢检查')
      }
    },
    // 根据关键字搜索快手用户
    async getKuaiShouSearchUsers({
      commit
    }, {
      keyword
    }) {
      const {
        code,
        data
      } = await getKuaiShouSearchUsers(keyword);
      if (code === 200) {
        commit("getKuaiShouSearchUsers", data);
      } else {
        console.log('根据关键字搜索快手用户失败,不要着急,慢慢检查')
      }
    },
    // 根据photoId获取当前视频下的评论
    async getKuaiShouSearchComments({
      commit
    }, {
      photoId,
      authorId
    }) {
      const {
        code,
        data
      } = await getKuaiShouSearchComments(photoId, authorId);
      if (code === 200) {
        commit('getKuaiShouSearchComments', data);
      } else {
        console.log('获取快手视频评论列表失败');
      }
    },
    // 根据userid获取指定用户主页信息
    async getKuaiShouSearchUserInfo({
      commit
    }, {
      userId
    }) {
      const {
        code,
        data
      } = await getKuaiShouSearchUserInfo(userId);
      if (code === 200) {
        commit('getKuaiShouSearchUserInfo', data);
      } else {
        console.log('获取快手用户信息失败');
      }
    }
  }
}
