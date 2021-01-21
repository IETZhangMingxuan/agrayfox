<template>
  <div id="hotweibo" class="animate__animated animate__slideInLeft">
    <div class="header">
      <div class="line"></div>
      <span class="title">微信文章搜索</span>
      <div @click="changeIndex(currentIndex, totalSize, pageSize)">
        <input type="text" v-model="wxsearch" placeholder="请输入关键词进行搜索" />
        <button @click="searchVXArticles">搜索</button>
      </div>
    </div>
    <div class="main">
      <h3 v-show="!resultList.length" class="loading">努力加载中...</h3>
      <ul class="hotWeiboList">
        <li v-for="(item, index) in resultList" :key="index">
          <span class="indexBlock">{{ index }}</span>
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
      wxsearch: "",
      resultList: [
        {
          title: "最新疫情通报",
          url:
            "https://mp.weixin.qq.com/s?src=11&timestamp=1611212216&ver=2841&signature=8XzZulcC7m*asLTfiwZksYPAuPOZ8MnCsmVAdKY5PfcjgKDJ5DBth9nkVlgWDa6fOp10Kp7608OKT2PrUdZ8*-ig*f1iaoXZJPnn7axp2eOtji0ARSGfiY1leyceYvFq&new=1"
        },
        {
          title: "疫情反扑!戏剧性一幕发生了!!",
          url:
            "https://mp.weixin.qq.com/s?src=11&timestamp=1611212216&ver=2841&signature=z0*oZSwOF2I9wxZvnJjHotRmdqwl2Q4UF11MdE7Refs37dV745EPrLfQnK4oVu60qKXQXMKcYVCKqMOV1ON-K9sg-Q9VIFCkbfSC7XAHu6Z9AM7segU7YzZtBUWc-mmr&new=1"
        },
        {
          title: "【疫情防控】望奎县新冠肺炎疫情防控工作指挥部通告",
          url:
            "https://mp.weixin.qq.com/s?src=11&timestamp=1611212216&ver=2841&signature=osgQGONJ51h9qey7azXmeW9uhR0T9-A*GEMgLqTyLQlfomnBoF1GygWkB5y5ysOxteFU3f*0xWiasp5kHuOGHztcWAl*yB1BQTP7tzXyBni8dmbxF5fEydzecg7WdvPW&new=1"
        },
        {
          title: "疫情防控不到位,3人被问责",
          url:
            "https://mp.weixin.qq.com/s?src=11&timestamp=1611212216&ver=2841&signature=p6phGJMxPf3u9aH0EMsKSv9EejF9L47wwb08chVlUHyxeRyzGUFQhSydtyginxoKHORffkZldxjNGK1hbbipOICULkLUg-yUgflHaHmqIA8nZCz5WPnYEBjfdDBkuXM7&new=1"
        },
        {
          title: "宁波疫情通报",
          url:
            "https://mp.weixin.qq.com/s?src=11&timestamp=1611212216&ver=2841&signature=TgbuKHbZI81qGZPvH3YqLT-kGeiJPwc8sjnY-ZICoNwV2JydmedUIDyzxF*nFtwDsI6X-o8-s72b66zV2fD8u-*oR4NyyrzF*n3pu7BMi80Hi1L5jj4XtIr809*NyxPo&new=1"
        },
        {
          title: "大连疫情防控紧急通知",
          url:
            "https://mp.weixin.qq.com/s?src=11&timestamp=1611212216&ver=2841&signature=Iwljrs0ZkIeHTtLiqSIQfJqIfabuNNlSZDAIZwe*BYzJe8YEp9VlbovD0smJRs9Syc53PQNi97qZmcTMPJozW-9A3gK5KDRDTwtLBO7TUXjzd*34HIkdtuu4TsIXaVZy&new=1"
        },
        {
          title: "兰陵向城镇一人因违反疫情防控规定销售进口冷链食品被拘留!",
          url:
            "https://mp.weixin.qq.com/s?src=11&timestamp=1611212216&ver=2841&signature=sfbg4MyVOZ9Wtu66jZS3*IT1vaz80GSI8Un3eunoXdqzjr0xHmIdiuZenWYeFEKur3Q5hp36e-1RwnC7N1bz9cdlOoXGWGN3T*v5UkY-IW7iVyolK*2SpYaz2hOn8yxf&new=1"
        },
        {
          title: "疫情的阴影会持续到2021,但我不怕了",
          url:
            "https://mp.weixin.qq.com/s?src=11&timestamp=1611212216&ver=2841&signature=owZYWnaAi7KGYV98*2dTfB20xL2yMIdcOrmEQxkoIJGHNhhwcaxJBOc2yoepbzH*JsMafl-NCyg65IIDKQGe6X*trJDdbRQ4YoeHTdMDHb5MZvavX56zOzchpKKAbld1&new=1"
        },
        {
          title: "新工联的小伙伴们!请收好这份疫情防控指南!",
          url:
            "https://weixin.sogou.com/link?url=dn9a_-gY295K0Rci_xozVXfdMkSQTLW6cwJThYulHEtVjXrGTiVgSynbYPw3ZIyVW8FHPhKYhgByg_af_zZlclqXa8Fplpd9sp2AIeOYPFdcSyopOuvo7jwwTaiUHlu3QTDnCHam8hc44El3T44FJ9GkzZIOCQdHJ4jIzWQ7GG1quHrm9FOGskYf5XUQJPUpHaRMDfJhzoieTpOWWDTH6ZRhF4_SgdPnRT98UQwg5qvrhABTTY1DCej0hNzC0EYBomhbpoT30H_RtmyIGw2VAg..&type=2&query=yiqing&token=67B04AF73891B3A79C9925FF0856CAE49C48BFE5600925B7"
        },
        {
          title: "抗击疫情,春鹏电气在行动!",
          url:
            "https://mp.weixin.qq.com/s?src=11&timestamp=1611212216&ver=2841&signature=H*pow75rKKXa-V7JgsC2Jb43WPnkwO*JSWl*ldJuGogJQ0CpgAD86PJB28YQtxjoxAhHCaYumfTFZ9ii6so7Cmo67w7efEYI9vIS-1LGdU58e6oqej4WiWe9WGZhFx3a&new=1"
        }
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
          `http://api.tianapi.com/txapi/wxsearch/index?key=4428d8e64916b6207baf857dac31f424&word=${this.wxsearch}`
        )
        .then(response => {
          const result = response.data.newslist;
          console.log("我已成功取得微信文章数据");
          this.resultList = result;
          console.log("微信文章数据为:" + this.resultList);
          console.log(this.resultList[0].title, this.resultList[1].title);
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
  padding-bottom: 20px;
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
    margin: 10px 0px 0px 20px;
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
        padding: 6px 0;
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
          margin-left: 10px;
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
