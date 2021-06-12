<template>
  <div id="robot" :class="{ minShow: isMinShow }">
    <div class="header" v-show="headerIsShow">
      <img src="../../../public/images/robot.jpeg" alt="404 not found" title="小白" />
      <p>愚蠢的小白</p>
      <div class="clear">
        <span class="clearBtn" @click="clear">清除聊天</span>
      </div>
      <div class="control">
        <i class="iconfont icon-zuixiaohua" @click="zuixiaohua" v-show="!isMinShow"></i>
        <i class="iconfont icon-close" @click="close"></i>
        <i class="iconfont icon-zuidahua" v-show="isMinShow"></i>
      </div>
    </div>
    <div class="main" v-show="mainIsShow">
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
    <div class="footer" v-show="footerIsShow">
      <input
        type="text"
        placeholder="快来和我聊天吧"
        maxlength="20"
        @keyup.enter="sendMessage"
        v-model="inputMsg"
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
      talkList: [],
      headerIsShow: true,
      mainIsShow: true,
      footerIsShow: true,
      isMinShow: false
    };
  },
  methods: {
    async sendMessage() {
      if (this.inputMsg !== "") {
        this.talkList.push(this.inputMsg);
        await axios({
          method: "GET",
          url: `http://www.tuling123.com/openapi/api?key=fef25662f0d442a9bc94ce5bd83f776b&info=${this.inputMsg}`
        }).then(response => {
          console.log(response.data.text);
          let result = response.data.text;
          this.talkList.push(result);
          console.log(this.talkList);
        });
        this.inputMsg = "";
      }
    },
    zuixiaohua() {
      this.mainIsShow = false;
      this.footerIsShow = false;
      this.isMinShow = true;
    },
    close() {
      this.mainIsShow = false;
      this.footerIsShow = false;
      this.headerIsShow = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.talkList.push("你好呀,有什么不懂的问题可以来问我");
    }, 3000);
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: "Microsoft Yahei";
  height: 5000px;
  position: relative;
  background-color: #f4f4f4;
  user-select: none;
}

#robot {
  position: fixed;
  left: 10px;
  bottom: 10px;
  width: 240px;
  height: 430px;
  background-color: #fff;
}
.isme {
  float: left;
  max-width: 200px !important;
  color: #666;
  background-color: #fff !important;
}
.isyou {
  float: right;
  max-width: 200px !important;
}
.minShow {
  bottom: -370px !important;
}
.header {
  box-sizing: border-box;
  height: 90px !important;
  border: 1px solid rgba(51, 51, 51, 0.1);
  padding: 10px 5px 30px 5px;
  position: relative;
  background-color: hsla(0, 0%, 92%, 0.8);
}

.header img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  left: 10px;
}

.header p {
  height: 50px;
  line-height: 50px;
  position: absolute;
  left: 60px;
  top: 4px;
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
  font-size: 14px;
  height: 10px;
  position: absolute;
  right: 44px;
  top: 5px;
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

.header .clear {
  position: absolute;
  right: 10px;
  bottom: 10px;
  height: 15px !important;
  line-height: 17px;
  border: 1px solid #409eff;
  padding: 1px 4px;
  font-size: 8px;
  border-radius: 4px;
  background-color: transparent;
  letter-spacing: -0.1px;
}

.header .clear:hover {
  cursor: pointer;
  color: dodgerblue;
}

.header .clear span {
  text-align: center;
  color: #409eef;
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
}

.main::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
  scrollbar-arrow-color: red;
}

.main::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
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
  margin-top: 15px !important;
}

.main .talkList p:last-child {
  margin-bottom: 50px !important;
}
.footer {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  position: relative;
}

.footer input {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  outline: none;
  border: 1px solid transparent;
  font-size: 12px;
  background-color: #eaeaea;
  width: 240px;
  padding: 0px 0px 0px 10px;
}

.footer input:focus {
  background-color: #fff;
  /* border: 1px solid #ccc; */
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
