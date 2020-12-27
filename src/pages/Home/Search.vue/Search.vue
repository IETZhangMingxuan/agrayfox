<template>
  <div id="search">
    <div class="buttonList">
      <ul>
        <li
          v-for="item in searchNameList"
          :key="item.id"
          @click="activeFn(item.id)"
          :class="{ active: active == item.id }"
        >
          <img :src="item.imgUrl" alt="" class="imgIcon" />
          <span class="searchButton">{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="searchMain">
      <input type="text" placeholder="请输入搜索内容" v-model="searchContent" />
      <button @click="search(active, searchContent)">
        搜索
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchNameList: [
        { name: "百度", id: "0", imgUrl: "https://static.iiter.cn/baidu.ico" },
        { name: "Github", id: "1", imgUrl: "https://static.iiter.cn/github.ico" },
        { name: "谷歌", id: "2", imgUrl: "https://static.iiter.cn/google.png" },
        { name: "CSDN", id: "3", imgUrl: "https://static.iiter.cn/csdn.ico" },
        { name: "oschina", id: "4", imgUrl: "https://static.iiter.cn/oschina.ico" },
        { name: "掘金", id: "5", imgUrl: "https://static.iiter.cn/gold.png" },
        { name: "知乎", id: "6", imgUrl: "https://static.iiter.cn/zhihu.ico" },
        { name: "必应", id: "7", imgUrl: "https://static.iiter.cn/biying.ico" },
        { name: "思否", id: "8", imgUrl: "https://static.iiter.cn/segmentfault.png" }
      ],
      active: "0",
      searchContent: ""
    };
  },
  methods: {
    activeFn(id) {
      console.log(id);
      this.active = id;
    },
    search(index, searchContent) {
      console.log(index, searchContent);
      switch (index) {
        case "0":
          window.open(`https://www.baidu.com/s?wd=${searchContent}`, "_blank");
          break;
        case "1":
          window.open(`https://github.com/search?q=${searchContent}`, "_blank");
          break;
        case "2":
          window.open(`https://www.google.com/search?q=${searchContent}`, "_blank");
          break;
        case "3":
          window.open(`https://so.csdn.net/so/search/s.do?q=${searchContent}`, "_blank");
          break;
        case "4":
          window.open(`https://www.oschina.net/search?scope=all&q=${searchContent}`, "_blank");
          break;
        case "5":
          window.open(`https://juejin.cn/search?query=${searchContent}`, "_blank");
          break;
        case "6":
          window.open(`https://www.zhihu.com/search?q=${searchContent}`, "_blank");
          break;
        case "7":
          window.open(`https://cn.bing.com/search?q=${searchContent}`, "_blank");
          break;
        case "8":
          window.open(`https://segmentfault.com/search?q=${searchContent}`, "_blank");
          break;
      }
      this.searchContent = "";
    }
  }
};
</script>
<style scoped lang="less">
@defaultColor: #007fff;
#search {
  /* 测试 */
  //   border: 1px dashed blue;
  background: linear-gradient(180deg, #fff, #DFEFFC,#fff);
  padding: 20px 0px 25px 0px;
  .buttonList {
    ul {
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: center;
      li {
        font-family: "微软雅黑";
        font-size: 14px;
        margin-left: 2px;
        box-shadow: 1px 1px 0.5px rgba(129, 196, 255, 0.5);
        background-color: #fff;
        user-select: none;
        .imgIcon {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          margin-right: 2px;
        }
        .searchButton {
          white-space: nowrap;
          display: inline-block;
          padding: 0 18px 0 0;
          list-style: none;
          padding-left: 2px;
        }
      }
      li.active {
        color: #fff;
        background-color: rgba(129, 196, 255, 1);
        box-shadow: 0 0 2px 2px rgba(99, 93, 253, 0.3);
      }
      li:hover {
        color: #fff;
        background-color: rgba(129, 196, 255, 1);
        box-shadow: 0 0 2px 2px rgba(99, 93, 253, 0.3);
      }
    }
    ul > li {
      padding-left: 10px;
      border-radius: 25px 0 25px 0;
      height: 25px;
      text-align: center;
      line-height: 25px;
      display: flex;
      align-items: center;
      cursor: pointer;
      border: 1px solid #e3e3e3;
      transition: all 0.2s;
      margin-right: -2px;
    }
  }
  .searchMain {
    margin-top: 30px;
    margin-left: 50px;
    vertical-align: bottom;
    display: flex;
    justify-content: center;
    input {
      width: 320px;
      height: 35px;
      border: 1px solid rgba(67, 155, 255, 1);
      border-right: none;
      border-radius: 35px 0 0 35px;
      padding: 0 20px;
      box-sizing: border-box;
      outline: none;
      box-sizing: border-box;
      font-size: 14px;
    }
    button {
      box-sizing: border-box;
      height: 35px;
      line-height: 35px;
      border: none;
      width: 80px;
      border-radius: 0 35px 35px 0;
      background-color: rgba(67, 155, 255, 1);
      //   background-color: rgba(129, 196, 255, 1);
      color: #fff;
      outline: none;
      font-family: "华文中宋";
      font-size: 15px;
      letter-spacing: 1px;
    }
  }
}
</style>
