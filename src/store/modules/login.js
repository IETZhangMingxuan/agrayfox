// 该仓库用来保存一切与登录注册或者存取cookie/token有关的数据
const ok = 200;
import {
  getAllUsersInfo,
  sendLoginAxios,
  sendRegisterAxios,
  autoLoginAxios,
  editUserNavlistAxios,
  getAllComments,
  setComments
} from "http/http";

export default {
  state: {
    allUsersInfo: [],
    userInfo: {},
    registerInfo: {},
    allComments: []
  },
  getters: {},
  mutations: {
    getAllUsersInfo(state, data) {
      state.allUsersInfo = data;
    },
    sendLoginAxios(state, data) {
      state.userInfo = data;
    },
    logOut(state, {}) {
      state.userInfo = {}
    },
    sendRegisterAxios(state, data) {
      state.registerInfo = data;
    },
    autoLoginAxios(state, data) {
      state.userInfo = data;
    },
    editUserNavlistAxios(state, data) {
      state.userInfo = data;
    },
    getAllComments(state, data) {
      state.allComments = data;
    },
    setComments(state, data) {
      state.allComments = data;
    }
  },
  actions: {
    // 获取数据库中全部用户信息
    async getAllUsersInfo({
      commit
    }) {
      const data = await getAllUsersInfo();
      // console.log(`data为:${data}`,typeof data);
      commit("getAllUsersInfo", data);
    },
    // 登录操作 post => /login 更新vuex仓库中userInfo数据 
    async sendLoginAxios({
      commit
    }, {
      username,
      password
    }) {
      const {
        code,
        data
      } = await sendLoginAxios(username, password, data);
      if (code === 200) {
        commit("sendLoginAxios", data);
        console.log('登录成功');
        return 200;
      } else if (code === 207) {
        console.log('登录失败!');
        return 207
      } else {
        console.log('网络断点...')
      }
    },
    // 登出操作 不发送axios请求 只是站内清空vuex中仓库中userInfo数据 
    async logOut({
      commit
    }) {
      commit('logOut', {})
    },
    // 用户注册 post => /register 向数据库中新增数据
    async sendRegisterAxios({
      commit
    }, {
      username,
      password,
      email
    }) {
      const {
        code,
        data
      } = await sendRegisterAxios(username, password, email, data);
      if (code === 200) {
        commit("sendRegisterAxios", data);
        console.log('注册成功');
        return 200;
      } else if (code === 207) {
        console.log('注册失败!');
        return 207
      } else {
        console.log('网络断点...')
      }
    },
    // 自动登录
    async autoLoginAxios({
      commit
    }) {
      const {
        code,
        data
      } = await autoLoginAxios();
      if (code === 200) {
        console.log('来自根组件:token可以使用鸭', data);
        commit("autoLoginAxios", data);
      } else if (code === 207) {
        console.log('来自根组件:token已经过期啦', data);
        commit("autoLoginAxios", {});
      } else {
        console.log('网络抖动...')
      }
    },
    // 用户修改自定义导航并将修改后的信息上传到数据库中并读取,然后修改仓库中userInfo数据
    async editUserNavlistAxios({
      commit
    }, {
      finalStr
    }) {
      const {
        code,
        data
      } = await editUserNavlistAxios(finalStr);
      if (code === 200) {
        commit("editUserNavlistAxios", data);
        console.log('修改成功');
        return 200;
      } else if (code === 207) {
        console.log('修改失败');
        return 207
      } else {
        console.log('网络抖动...')
      }

    },
    // 获取全部评论
    async getAllComments({
      commit
    }) {
      const {
        code,
        data
      } = await getAllComments();
      if (code === 200) {
        commit('getAllComments', data);
      } else {
        console.log('获取评论失败');
      }
    },
    // 发布评论
    async setComments({
      commit
    }, {
      username,
      profile,
      content,
      time
    }) {
      const {
        code,
        message,
        data
      } = await setComments(username, profile, content, time);
      if (code === 200) {
        commit('setComments', data);
        return 200;
      } else if (code === 400) {
        console.log(`评论失败,原因是${message}`);
        return 400;
      }
    }
  }
}
