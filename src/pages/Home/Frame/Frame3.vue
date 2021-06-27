<template>
  <div
    id="frame"
    class="animate__animated animate__slideInLeft"
    :class="{ OverFlowHidden: isOverFlowHidden }"
  >
    <div class="header">
      <div class="line"></div>
      <span class="title">自定义导航</span>
      <span class="tips" v-if="userInfo.token" :class="{ changeTips: isChangeTips }">{{
        tips
      }}</span>
      <!-- svg图标 -->
      <div class="frame-edit" v-if="userInfo.token">
        <svg class="icon icon-shezhi" aria-hidden="true" @click="editFn">
          <use xlink:href="#icon-shezhi"></use>
        </svg>
      </div>
      <!-- 添加自定义导航 -->
      <div class="addNavInput animate__animated animate__slideInRight" v-if="isAddNavShow">
        <h3>添加自定义导航</h3>
        <div class="inputs">
          <i class="iconfont icon-fuzhilianjie"></i>
          <input type="text" placeholder="请输入网址" v-model="link" />
          <i class="iconfont icon-wanzhengxingming"></i>
          <input type="text" placeholder="请输入自定义名称" maxlength="4" v-model="linkName" />
        </div>
        <button @click="addConfirm(2)" class="yes-btn">确定</button>
        <button @click="addConfirm(1)" class="no-btn">取消</button>
      </div>
      <!-- 消息弹窗 -->
      <div
        class="addNavMessage"
        v-if="addNavMessageIsShow"
        :class="{ navMessageGreen: navMessageGreenIsShow, navMessageRed: navMessageRedIsShow }"
      >
        <p>{{ addNavMessage }}</p>
      </div>
    </div>
    <ul class="frameList" v-if="userInfo.token">
      <li
        class="single"
        v-for="(item, index) in testArr"
        :key="index"
        :class="{ singleBorder: isCloseShow, shake: isCloseShow }"
      >
        <img
          :src="`${testArr[index][0]}/favicon.ico`"
          onerror="onerror=null;src=`./images/default.png`"
        />
        <a :href="testArr[index][0]" target="_blank">{{ testArr[index][1] }}</a>
        <i
          class="iconfont icon-close-circle"
          v-if="isCloseShow"
          @click="deleteSingleNav(index)"
        ></i>
      </li>
      <li
        class="single addSingle"
        v-if="isCloseShow"
        :class="{ shake: isCloseShow }"
        @click="addNav"
      >
        <i class="iconfont icon-addNav-copy"></i>
        <span class="addNav">添加导航</span>
      </li>
    </ul>
    <div v-else class="shouldLogin">
      <router-link to="/login">登录后可以查看</router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      isCloseShow: false,
      navlistArr: [],
      testArr: [],
      isAddNavShow: false,
      link: "http://www.",
      linkName: "",
      addNavMessage: "测试专用",
      addNavMessageIsShow: false,
      navMessageGreenIsShow: false,
      navMessageRedIsShow: false,
      isOverFlowHidden: true,
      tips: "点击图标编辑",
      isChangeTips: false
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.login.userInfo
    })
  },
  methods: {
    ...mapActions(["editUserNavlistAxios"]),
    async editFn() {
      this.isCloseShow = !this.isCloseShow;
      if (this.isCloseShow) {
        this.isChangeTips = true;
        this.tips = "点击图标保存";
      } else {
        // 将数组转为数据库所需的字符串
        // 新建一个空字符串用来存储
        let sendStr = ``;
        let finalStr = "";
        this.testArr.forEach((item, index) => {
          // 分解数组
          var xstr = `${item[0]};${item[1]},`;
          console.log(xstr);
          sendStr += xstr;
          if (index == this.testArr.length - 1) {
            finalStr = sendStr.slice(0, -1);
          }
          console.log(this.testArr);
          console.log(sendStr);
          console.log(finalStr);
          this.looklook = finalStr;
        });
        const code = await this.editUserNavlistAxios({ finalStr });
        if (code === 200) {
          this.isChangeTips = false;
          this.tips = "点击图标编辑";
          this.isOverFlowHidden = true;
          this.addNavMessage = "修改成功";
          this.navMessageGreenIsShow = true;
          this.addNavMessageIsShow = true;
          await setTimeout(() => {
            this.addNavMessageIsShow = false;
            this.navMessageGreenIsShow = false;
          }, 1500);
        } else {
          this.addNavMessage = "修改失败";
          this.navMessageRedIsShow = true;
          this.addNavMessageIsShow = true;
          await setTimeout(() => {
            this.addNavMessageIsShow = false;
            this.navMessageRedIsShow = false;
          }, 2500);
        }
      }
    },
    addNav() {
      this.isAddNavShow = !this.isAddNavShow;
      this.isOverFlowHidden = false;
    },
    async addConfirm(type) {
      if (type === 1) {
        this.isAddNavShow = !this.isAddNavShow;
      } else if (type === 2) {
        this.isAddNavShow = !this.isAddNavShow;
        let addArr = [this.link, this.linkName];
        console.log(addArr);
        this.testArr.push(addArr);
        console.log(this.testArr);
        this.link = "http://www.";
        this.linkName = "";
        /* 改变消息弹窗 */
        this.addNavMessage = "添加成功";
        this.navMessageGreenIsShow = true;
        this.addNavMessageIsShow = true;
        await setTimeout(() => {
          this.addNavMessageIsShow = false;
          this.navMessageGreenIsShow = false;
        }, 1000);
      }
    },
    async deleteSingleNav(index) {
      console.log(this.testArr.length);
      if (this.testArr.length <= 1) {
        this.addNavMessage = "无法删除";
        this.navMessageRedIsShow = true;
        this.addNavMessageIsShow = true;
        await setTimeout(() => {
          this.addNavMessageIsShow = false;
          this.navMessageRedIsShow = false;
        }, 2500);
      } else {
        this.testArr.splice(index, 1);
        /* 改变消息弹窗 */
        this.addNavMessage = "删除成功";
        this.navMessageRedIsShow = true;
        this.addNavMessageIsShow = true;
        await setTimeout(() => {
          this.addNavMessageIsShow = false;
          this.navMessageRedIsShow = false;
        }, 500);
      }
    },
    /* 此组件中没有用到,是个备份函数,如果主函数editFn出错了可以在这里查看原逻辑 */
    async uploadNavlistFn() {
      console.log("我要上传到数据库了");
      console.log(this.testArr);
      // 将数组转为数据库所需的字符串
      // 新建一个空字符串用来存储
      let sendStr = ``;
      let finalStr = "";
      this.testArr.forEach((item, index) => {
        // 分解数组
        var xstr = `${item[0]};${item[1]},`;
        sendStr += xstr;
        if (index == this.testArr.length - 1) {
          finalStr = sendStr.slice(0, -1);
        }
        this.looklook = finalStr;
      });
      // 上面的操作已经对用户改动后的自定义导航进行了转换,现在可以上传到数据库中替换原数据
      const code = await this.editUserNavlistAxios({ finalStr });
    }
  },
  watch: {
    // 要保证userInfo加载完成后再渲染界面
    userInfo: {
      handler(val) {
        this.$nextTick(() => {
          let arr = [];
          this.userInfo.userInfo.navlist.split(",").forEach(item => {
            arr.push(item.split(";"));
          });
          this.testArr = arr;
        });
      },
      deep: true,
      immediate: true
    }
  }
  // 下面代码是通过总线来获取用户信息,是初版方案.现在的方案是将用户信息存储到了vuex仓库中,哪个组件需要就使用mapState辅助函数即可
  // 这样不用梳理各个组件麻烦的关系,直接使用仓库的好处显而易见
  //   async created() {
  //     this.$bus.$on("sendUserInfoToHome", okok => {
  //       this.userinfo = okok;
  //       console.log(this.userinfo);
  //     });
  //   }
};
</script>
<style scoped lang="less">
#frame {
  // border: 1px solid blue;
  position: relative;
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
  width: 70%;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  margin-left: 20px;
  height: 410px;
  .header {
    // border: 1px dashed red;
    position: relative;
    .line {
      width: 3px;
      height: 20px;
      line-height: 20px;
      background-color: #409eef;
      margin: 25px 0px 0px 30px;
      display: inline-block;
    }
    .title {
      font-family: "Microsoft Yahei";
      font-size: 16px;
      margin-left: 20px;
      color: #333;
      position: absolute;
      top: 22.5px;
      user-select: none;
    }
    .tips {
      font-family: "Microsoft Yahei";
      font-weight: 300;
      font-size: 12px;
      background-color: #f38a86;
      color: #fff;
      padding: 4px 10px;
      position: absolute;
      right: 58px;
      top: 22px;
      border-radius: 10px;
    }
    .changeTips {
      background-color: #89d4ac;
      color: #fff;
    }
    .frame-edit {
      .icon-shezhi {
        position: absolute;
        right: 27px;
        top: 21px;
        font-size: 24px;
        &:hover {
          cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
        }
      }
    }
    .addNavInput {
      position: absolute;
      top: 0px;
      left: -369px;
      width: 349px;
      height: 410px !important;
      border-radius: 10px;
      background-color: #fff;
      z-index: 999;
      font-family: "Microsoft Yahei";
      h3 {
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        color: #409eee;
        margin-top: 10px;
      }
      .inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
          display: block;
          height: 40px;
          line-height: 40px;
          outline: none;
          color: #555666;
          border: none;
          width: 270px;
          margin: 20px 0 10px 0;
          font-family: "Microsoft Yahei";
          font-weight: 300;
          font-size: 16px;
          padding-left: 40px;
          background-color: #f5f5f5;
          border-radius: 10px;
        }
        .icon-fuzhilianjie {
          color: #409eef;
          font-size: 20px;
          position: absolute;
          top: 99.5px;
          left: 31.5px;
        }
        .icon-wanzhengxingming {
          color: #409eef;
          font-size: 21px;
          position: absolute;
          top: 169.5px;
          left: 31.5px;
        }
      }
      button {
        outline: none;
        border: none;
        padding: 6px 15px;
        background-color: #eaeaea;
        font-size: 16px;
        font-family: "microsoft yahei";
        font-weight: 700;
        border-radius: 10px;
        margin-top: 150px;
        color: #555666;
        margin-right: 20px;
      }
      .yes-btn {
        margin-left: 20px;
        background-color: #0fd068;
        color: #fff;
      }
      .no-btn {
        margin-left: 160px;
        background-color: #f55e55;
        color: #fff;
      }
    }
    .addNavInput:hover {
      box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
    }
    .addNavMessage {
      position: absolute;
      top: 150px;
      left: 311px;
      background-color: #f5f5f5;
      z-index: 999;
      width: 200px;
      height: 60px !important;
      text-align: center;
      line-height: 60px;
      font-family: "microsoft yahei";
      font-size: 18px;
      font-weight: 700;
      color: #555666;
      border-radius: 20px;
      letter-spacing: 1px;
    }
    .navMessageGreen {
      background-color: #89d4ac !important;
      color: #fff;
    }
    .navMessageRed {
      background-color: #f38a86 !important;
      color: #fff;
    }
  }
  .frameList {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: 25px;
    // border: 1px solid red;
    .single {
      list-style: none;
      position: relative;
      // overflow: hidden;
      width: 134px;
      height: 37px !important;
      line-height: 26px;
      padding: 10px;
      padding: 2px 16px;
      margin-right: 22px;
      box-sizing: border-box;
      border: 2px solid transparent;
      border-radius: 10px;
      vertical-align: center;
      text-align: left;
      background-color: transparent;
      user-select: none;
      margin-top: 8px;
      // background-color: #fff;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      a {
        vertical-align: middle;
        text-decoration: none;
        color: #333;
        font-family: "Microsoft Yahei";
        font-size: 14px;
        margin-left: 10px;
        user-select: none;
      }
      a:hover {
        color: #409eef;
      }
      .icon-close-circle {
        position: absolute;
        right: -8px;
        top: -11px;
        font-size: 18px;
        color: #f55e55;
        z-index: 2;
        &:hover {
          cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
        }
      }
      .icon-addNav-copy {
        font-size: 27px;
        color: #555666;
        line-height: 31px;
        margin-left: -6px;
        &:hover {
          cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
        }
      }
      .addNav {
        font-family: "microsoft yahei";
        font-weight: 400;
        font-size: 14px;
        color: #333;
        line-height: 31px;
        display: inline-block;
        vertical-align: top;
        margin-left: 10px;
        &:hover {
          cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
        }
      }
    }
    .singleBorder {
      background-color: #f5f5f5;
    }
    .addSingle:hover {
      background-color: rgba(245, 245, 245, 1);
      opacity: 0.8;
      border-radius: 10px;
    }
    /* 点击自定义设置按钮显示抖动特效 */
    .shake {
      animation: shake 800ms ease-in-out;
    }
    @keyframes shake {
      /* 水平抖动，核心代码 */
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }
      20%,
      80% {
        transform: translate3d(+2px, 0, 0);
      }
      30%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }
      40%,
      60% {
        transform: translate3d(+4px, 0, 0);
      }
      50% {
        transform: translate3d(-4px, 0, 0);
      }
    }
  }
  .shouldLogin {
    z-index: 888;
    width: 100%;
    height: 100%;
    line-height: 100%;
    font-family: "microsoft yahei";
    font-size: 18px;
    color: #555666;
    font-weight: 300;
    position: absolute;
    left: 0%;
    top: 0%;
    text-align: center;
    line-height: 410px;
    background: linear-gradient(45deg, #b9f5b9, transparent);
    border-radius: 10px;
    a {
      text-decoration: none;
      color: #409eef;
      font-weight: 700;
    }
  }
}
.OverFlowHidden {
  overflow: hidden;
}
#frame::before {
  content: "";
  opacity: 0.3;
  top: 0;
  left: 0px;
  bottom: 0;
  right: 0px;
  position: absolute;
  z-index: -1;
  border-radius: 10px;
}
#frame::after {
  content: "";
  background: url(./images/0005.png) 300px no-repeat;
  opacity: 0.3;
  top: 0;
  left: 0px;
  bottom: 0;
  right: 0px;
  position: absolute;
  z-index: -1;
  border-radius: 10px;
}
#frame:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
}
</style>
