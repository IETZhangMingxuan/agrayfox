<template>
  <div id="robot" :class="{ minShow: isMinShow }">
    <div class="header" v-show="headerIsShow">
      <img src="images/robot.jpeg" alt="404 not found" title="小白" />
      <p>{{ robotName }}</p>
      <div class="control">
        <i class="iconfont icon-zuixiaohua" v-show="!isMinShow"></i>
        <i class="iconfont icon-close"></i>
      </div>
    </div>
    <div class="main" v-show="mainIsShow" ref="scrollBox">
      <div class="wrapper">
        <div class="talkList clearfix">
          <p
            v-for="(talk, index) in talkList"
            :key="index"
            :class="{ isme: index % 2 == 0, isyou: index % 2 == 1 }"
          >
            {{ talk }}
          </p>
        </div>
      </div>
    </div>
    <!-- 模拟虚拟dom -->
    <div class="blank-dom"></div>
    <div class="footer" v-show="footerIsShow">
      <input
        type="text"
        placeholder="快来和我聊天吧"
        maxlength="20"
        @keyup.enter="sendMessage"
        v-model.trim="inputMsg"
      />
      <i class="iconfont icon-fasong" @click="sendMessage"></i>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      inputMsg: "",
      saveInputMsg: "",
      talkList: [],
      headerIsShow: true,
      mainIsShow: true,
      footerIsShow: true,
      isMinShow: false,
      robotName: "机器人小白"
    };
  },
  methods: {
    async sendMessage() {
      if (this.inputMsg !== "") {
        this.talkList.push(this.inputMsg);
        this.saveInputMsg = this.inputMsg;
        this.$refs.scrollBox.scrollTop = this.$refs.scrollBox.scrollHeight;
        this.inputMsg = "";
        this.robotName = "对方正在输入...";
        await setTimeout(() => {
          axios({
            method: "GET",
            url: `http://www.tuling123.com/openapi/api?key=fef25662f0d442a9bc94ce5bd83f776b&info=${this.saveInputMsg}`
          }).then(response => {
            let result = response.data.text;
            this.robotName = "机器人小白";
            this.talkList.push(result);
          });
        }, 2000);
        // 将滚动条自动滚到底部
        await setTimeout(() => {
          this.$refs.scrollBox.scrollTop = this.$refs.scrollBox.scrollHeight;
        }, 2050);
      }
    }
  },
  async mounted() {
    await setTimeout(() => {
      this.talkList.push("你好呀,有什么不懂的问题可以来问我");
    }, 2000);
  }
};
</script>
<style scoped>
#robot {
  font-family: "Microsoft Yahei";
  user-select: none;
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
  width: 29.5%;
  background-color: #fff;
  /* 控制机器人模块与上方模块的距离 */
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  position: relative;
}
.isme {
  float: left;
  max-width: 300px !important;
  color: #666;
  background-color: #fff !important;
}
.isyou {
  float: right;
  max-width: 300px !important;
}
.minShow {
  bottom: -370px !important;
}
.header {
  box-sizing: border-box;
  height: 60px !important;
  border: 1px solid rgba(51, 51, 51, 0.1);
  padding: 10px 5px 30px 5px;
  position: relative;
  background-color: hsla(0, 0%, 92%, 0.8);
  border-radius: 10px 10px 0 0;
}

.header img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  left: 15px;
}

.header p {
  height: 40px;
  line-height: 40px;
  position: absolute;
  left: 70px;
  top: 10px;
  font-weight: 300;
  font-size: 16px;
  background-color: transparent;
}

.header .control {
  width: 50px;
  height: 10px;
  position: absolute;
  right: 0px;
  top: 0px;
}

.header .icon-zuixiaohua {
  color: #999;
  font-weight: 100 !important;
  width: 10px;
  font-size: 30px;
  height: 10px;
  position: absolute;
  right: 45px;
  top: 4px;
  cursor: pointer;
}

.header .icon-zuidahua {
  color: #999;
  font-weight: 400 !important;
  width: 10px;
  font-size: 13px;
  height: 10px;
  position: absolute;
  right: 44px;
  top: 5.5px;
  cursor: pointer;
}

.header .icon-zuidahua:hover {
  font-weight: 700 !important;
}

.header .icon-zuixiaohua:hover {
  font-weight: 700 !important;
}

.header .icon-close {
  color: #999;
  font-weight: 300 !important;
  width: 10px;
  font-size: 18px;
  height: 10px;
  position: absolute;
  right: 15px;
  top: 3px;
  cursor: pointer;
}

.header .icon-close:hover {
  font-weight: 800 !important;
}

.main {
  box-sizing: border-box;
  height: 300px;
  border: none;
  border-left: 1px solid rgba(51, 51, 51, 0.1);
  border-right: 1px solid rgba(51, 51, 51, 0.1);
  overflow-y: scroll !important;
  overflow: hidden;
  background-color: #f5f5f5;
  padding: 5px 0;
}

.main::-webkit-scrollbar {
  width: 50px;
  height: 4px;
}

.main::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgba(0, 0, 0, 1);
}

.clearfix:before {
  /*伪元素content属性可以为空但是不能不写  如果不写  不渲染*/
  content: "";
  /*clear  必须要在块级元素身上才能生效*/
  display: block;
  clear: both;
}

.main .wrapper {
  /* border:1px solid orangered; */
  height: auto;
}

.main .talkList {
  height: auto;
  padding-bottom: 150px;
}

.main .talkList p {
  width: auto;
  height: auto;
  line-height: 20px;
  padding: 5px 10px;
  display: inline-block;
  font-size: 14px;
  margin: 8px 15px;
  letter-spacing: 0px;
  word-break: break-all;
  word-wrap: break-word;
  clear: both;
  background-color: rgba(159, 235, 107);
  color: #333;
  border-radius: 8px;
}

.main .talkList p:first-child {
  margin-top: 10px !important;
}

.main .talkList p:last-child {
  margin-bottom: 50px !important;
}

.blank-dom {
  height: 15px;
  /* border:1px solid green; */
  background-color: #f5f5f5;
  border-left: 1px solid rgba(51, 51, 51, 0.1);
  border-right: 1px solid rgba(51, 51, 51, 0.1);
}

.footer {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  position: relative;
  margin-top: -5px;
  width: 100%;
}

.footer input {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  outline: none;
  border: 1px solid transparent;
  font-size: 12px;
  background-color: #eaeaea;
  padding: 0px 0px 0px 10px;
  width: 100%;
  border-radius: 0 0 10px 10px;
}

.footer input:focus {
  background-color: #fff;
  /* border: 1px solid #ccc; */
  border-color: #eaeaea;
}

.icon-fasong {
  position: absolute;
  top: 0px;
  right: 10px;
  background-color: transparent;
  color: #666;
  font-size: 18px;
  height: 10px !important;
  z-index: 99999;
}

.icon-fasong:hover {
  color: #409eef;
  cursor: pointer;
}

input:focus + .icon-fasong {
  color: #409eef !important;
}
</style>
