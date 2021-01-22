<template>
  <div id="hotweibo" class="animate__animated animate__slideInLeft">
    <div class="header">
      <div class="line"></div>
      <span class="title">微信文章搜索</span>
      <div @click="changeIndex(currentIndex, totalSize, pageSize)">
        <input
          type="text"
          v-model="wxsearch"
          placeholder="请输入关键词进行搜索"
          class="wxSearchInput"
          @keydown.13="searchVXArticles"
        />
        <button @click="searchVXArticles" @keydown.13="searchVXArticles" class="wxSearchButton">搜索</button>
      </div>
    </div>
    <div class="main">
      <h3 v-show="!resultList.length" class="loading">等待搜索中...</h3>
      <ul class="hotWeiboList">
        <li v-for="(item, index) in resultList" :key="index">
          <span class="indexBlock">{{ index + 1 }}</span>
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="tag"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      /* 初始显示的首个索引:可修改,但不建议 */
      currentIndex: 0,
      /* 返回的总条数:不可修改 */
      totalSize: 10,
      /* 每页显示条数:可修改 */
      pageSize: 10,
      /* 微信文章搜索关键词 */
      wxsearch: "最新疫情",
      resultList: [
      ]
    };
  },
  methods: {
    changeIndex(currentIndex, totalSize, pageSize) {
      if (currentIndex < totalSize - pageSize) {
        this.currentIndex = currentIndex + pageSize;
      } else {
        this.currentIndex = 0;
      }
    },
    searchVXArticles(wxsearch, resultList) {
      axios
        .get(
          `http://api.tianapi.com/txapi/wxsearch/index?key=4428d8e64916b6207baf857dac31f424&word=${wxsearch}`
        )
        .then(response => {
          const result = response.data.newslist;
          // console.log("取得微信文章数据");
          this.resultList = result;
          // console.log("微信文章数据为:" + this.resultList);
          // console.log(this.resultList[0].title, this.resultList[1].title);
        })
        .catch(error => {
          console.log("我没有获取到微信文章数据,原因是:" + error.message);
        });
    }
  }
};
</script>
<style scoped lang="less">
#hotweibo {
  //   border: 1px solid blue;
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
  padding-bottom: 10px;
  border-radius: 10px;
  position: relative;
  .header {
    // border: 1px dashed red;
    position: relative;
    .line {
      width: 4px;
      height: 25px;
      line-height: 25px;
      // background-color: #409eef;
      background-color: #07c160;
      margin: 20px 0px 0px -280px;
      display: inline-block;
    }
    .title {
      font-family: "微软雅黑";
      font-size: 16px;
      margin-left: 15px;
      color: #333;
      position: absolute;
      top: 21.5px;
      user-select: none;
    }
    .wxSearchInput {
      height: 30px;
      line-height: 30px;
      width: 220px;
      text-align: left;
      padding-left: 10px;
      border-radius: 5px 0px 0px 5px;
      border: 1px solid #07c160;
      outline: none;
      font-family: "Microsoft Yahei";
      font-size: 14px;
      margin-left: 0px;
      margin-top: 5px;
    }
    .wxSearchButton {
      height: 32px;
      line-height: 31px;
      width: 50px;
      border-radius: 0px 5px 5px 0px;
    //   border: 1px solid #07c160;
      border: none;
      outline: none;
      background-color: #07c160;
      color:#fff;
      font-family: "Microsoft Yahei";
      font-size: 14px;
    }
    .wxSearchButton:hover{
        background-color: #079a4e;
    }
    .change {
      font-family: "微软雅黑";
      font-size: 12px;
      margin-left: 40px;
      // color: orangered;
      color: #666;
      position: absolute;
      top: 24px;
      right: 20px;
      user-select: none;
      .icon-exchange {
        padding-right: 4px;
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
    }
    .change:hover {
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      // color: #0876e4;
      color: #07c160;
    }
  }
  .main {
    margin: 10px 0px 0px 10px;
    position: relative;
    .loading {
      font-family: "微软雅黑";
      font-size: 14px;
      font-weight: 400;
      color: #555;
      text-align: center;
      // position: absolute;
      // top:40%;
      // left:35%;
    }
    .hotWeiboList {
      list-style-type: none;
      text-align: left;
      li {
        padding: 5px 10px;
        text-align: left;
        .indexBlock {
          font-family: "Microsoft Yahei";
          // font-family: "-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial;";
          font-size: 12px;
          //   padding: 5px 12px 3px 3px;
          padding: 3px 12px;
          height: 40px;
          line-height: 20px;
          overflow: hidden;
          border-radius: 5px;
          background-color: #eaeaea;
          color: #666;
          user-select: none;
        }

        a {
          margin-left: 5px;
          text-decoration: none;
          color: #666;
          font-family: "Microsoft Yahei";
          font-size: 14px;
        }
        a:hover {
          color: #07c160;
        }
      }
    }
  }
}
#hotweibo:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
}
</style>
