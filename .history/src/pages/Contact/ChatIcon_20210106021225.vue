<template>
  <div class="chatIcon">
    <el-popover
      placement="top-start"
      width="400"
      trigger="click"
      class="emoBox"
    >
      <div class="emotionList">
        <a
          href="javascript:void(0);"
          @click="getEmo(index)"
          v-for="(item, index) in faceList"
          :key="index"
          class="emotionItem"
          >{{ item }}</a
        >
      </div>
      <el-button
        class="emotionSelect"
        icon="iconfont icon-biaoqing"
        slot="reference"
      ></el-button>
    </el-popover>
    <el-input
      v-model="textarea"
      class="chatText"
      resize="none"
      type="textarea"
      id="textarea"
      rows="5"
      @keyup.enter.native="sendInfo"
    ></el-input>
  </div>
</template>
<script>
const appData = require("@/utils/emoji.json");
export default {
  mounted() {
    for (let i in appData) {
      this.faceList.push(appData[i].char);
    }
  },
  data() {
    return {
      faceList: [],
      textarea: ""
    };
  },
  methods: {
    getEmo(index) {
      var textArea = document.getElementById("textarea");
      function changeSelectedText(obj, str) {
        if (window.getSelection) {
          // 非IE浏览器
          textArea.setRangeText(str);
          // 在未选中文本的情况下，重新设置光标位置
          textArea.selectionStart += str.length;
          textArea.focus();
        } else if (document.selection) {
          // IE浏览器
          obj.focus();
          var sel = document.selection.createRange();
          sel.text = str;
        }
      }
      changeSelectedText(textArea, this.faceList[index]);
      this.textarea = textArea.value; // 要同步data中的数据
      // console.log(this.faceList[index]);
      return;
    }
  }
};
</script>

<style lang="scss">
/* el-popover是和app同级的，所以scoped的局部属性设置了无效 */
/* 需要设置全局style */
.el-popover {
  height: 200px;
  width: 400px;
  overflow: scroll;
  overflow-x: auto;
}
</style>

<style scoped>
.chatIcon {
  padding: 0 10px;
  font-size: 25px;
}
.emotionList {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
.emotionItem {
  width: 10%;
  font-size: 20px;
  text-align: center;
}
/*包含以下四种的链接*/
.emotionItem {
  text-decoration: none;
}
/*正常的未被访问过的链接*/
.emotionItem:link {
  text-decoration: none;
}
/*已经访问过的链接*/
.emotionItem:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
.emotionItem:hover {
  text-decoration: none;
}
/* 正在点击的链接*/
.emotionItem:active {
  text-decoration: none;
}
</style>