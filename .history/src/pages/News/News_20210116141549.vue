<template>
  <div id="news">
    <div class="navbar">
      <ul class="newsList animate__animated animate__slideInDown" @click="changeVisible">
        <li
          v-for="(item, index) in newsNavbarList"
          :key="index"
          :data-path-name="item.pathName"
          :class="{ active: selectIndex === index }"
          @click="liClick(index)"
        >
          <!-- <div class="swiperBlock" :data-path-name="item.pathName"></div> -->
          <router-link
            :to="`/news/${item.routerName}`"
            class="singleLink"
            :data-path-name="item.pathName"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
    </div>
    <div class="newsContent">
      <router-view></router-view>
    </div>
    <div class="recommend">
      <!-- 实时疫情模块 -->
      <div class="virusReport animate__animated animate__lightSpeedInRight">
        <div class="line"></div>
        <div class="title">全国疫情数据(含港澳台)</div>
        <div class="main">
          <ul class="virusNavList">
            <li v-for="(item, index) in virusNav" :key="index" class="virusNav">
              <h4 style="{ color:#333 }" class="liName">{{ item.name }}</h4>
              <p :style="{ color: item.color }" class="total">{{ item.total }}</p>
              <p :style="{ color: item.color }" class="thanYesterday">
                <span style="color:#666">较昨日:</span>
                +{{ item.thanYesterday }}
              </p>
            </li>
          </ul>
          <div class="time">
            <span>截止至:</span>
            {{ virusData.data.overseaLastUpdateTime }}
          </div>
        </div>
        <div class="virusNews">
          <div class="newsLine"></div>
          <div class="newsTitle">
            最新疫情新闻
          </div>
          <div class="newsMain">
            <ul class="virusNewsList">
              <li v-for="(p, index) in VirusNumList[0].news" :key="index">
                <a :href="p.sourceUrl" target="_blank">{{ p.title }}</a>
                <p class="time">{{ p.pubDateStr }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- echarts地图模块 -->
      <div></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      newsNavbarList: [
        {
          id: 1,
          name: "今日头条",
          routerName: "TodaysTopNews",
          pathName: "/news/TodaysTopNews"
        },
        {
          id: 2,
          name: "网易新闻",
          routerName: "WYNews",
          pathName: "/news/WYNews"
        },
        {
          id: 3,
          name: "综合新闻",
          routerName: "ZongHeNews",
          pathName: "/news/ZongHeNews"
        },

        {
          id: 4,
          name: "国内新闻",
          routerName: "ChinaNews",
          pathName: "/news/ChinaNews"
        },
        {
          id: 5,
          name: "国际新闻",
          routerName: "InternationalNews",
          pathName: "/news/InternationalNews"
        },
        {
          id: 6,
          name: "苹果新闻",
          routerName: "AppleNews",
          pathName: "/news/AppleNews"
        },
        {
          id: 7,
          name: "区块链新闻",
          routerName: "BlockChainNews",
          pathName: "/news/BlockChainNews"
        }
      ],
      isActive: false,
      selectIndex: 0,
      // 疫情最新数据(每日更新)
      virusData: {
        reqId: 16106977185519547,
        code: 10000,
        msg: "成功",
        data: {
          chinaTotal: {
            today: {
              // 累计确诊较昨日增加人数
              confirm: 169,
              suspect: null,
              // 累计治愈较昨日增加人数
              heal: 81,
              dead: 0,
              severe: null,
              storeConfirm: 98,
              // 境外输入较昨日增加人数
              input: 15
            },
            total: {
              // 累计确诊人数
              confirm: 98459,
              suspect: 0,
              // 累计治愈人数
              heal: 91841,
              // 累计死亡人数
              dead: 4803,
              severe: 0,
              // 境外输入人数
              input: 4489
            },
            // 无症状感染者
            extData: {
              // 累计
              noSymptom: 670,
              // 较昨日
              incrNoSymptom: 79
            }
          },
          lastUpdateTime: "2021-01-16 08:27:08",
          overseaLastUpdateTime: "2021-01-16 08:27:08"
        },
        timestamp: 1610697718551
      },
      virusNav: [
        {
          id: 1,
          name: "境外输入",
          thanYesterday: "15",
          total: "4489",
          color: "#FFA352"
        },
        {
          id: 2,
          name: "无症状感染者",
          thanYesterday: "79",
          total: "670",
          color: "#791618"
        },
        {
          id: 3,
          name: "现有确诊",
          thanYesterday: "88",
          total: "1815",
          color: "#E44A3D"
        },
        {
          id: 4,
          name: "累计确诊",
          thanYesterday: "169",
          total: "98459",
          color: "#A31D13"
        },
        {
          id: 5,
          name: "累计死亡",
          thanYesterday: "0",
          total: "4803",
          color: "#333"
        },
        {
          id: 6,
          name: "累计治愈",
          thanYesterday: "81",
          total: "94841",
          color: "#34AA70"
        }
      ]
    };
  },
  methods: {
    // load() {
    //   this.count += 2;
    // }
    changeVisible(e) {
      // this.isVisible = true;
      const { pathName } = e.target.dataset;
      console.log(pathName);
      console.log(this.$route.path);
      if (pathName === this.$route.path) {
        // this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    },
    liClick(index) {
      this.selectIndex = index;
      // console.log(index, this.selectIndex);
    }
  },
  computed: {
    ...mapState({
      VirusNumList: state => state.tianxingApi.VirusNumList
    })
  }
};
</script>
<style scoped lang="less">
#news {
  // border: 1px dashed blue;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  min-height: 800px;
  /* 竖向导航列表 */
  .navbar {
    display: flex;
    justify-content: space-between;
    .newsList {
      list-style-type: none;
      font-size: 16px;
      font-weight: 300;
      font-family: "Microsoft Yahei";
      color: #666;
      // border: 1px solid #eaeaea;
      width: 150px;
      position: relative;
      box-sizing: border-box;

      li {
        padding: 0px 0px;
        width: 150px !important;
        border: 0.5px dashed transparent;
        // margin-top:10px;
        position: relative;

        a {
          text-decoration: none;
          color: #666;
          padding: 8px 0px;
          display: inline-block;
          width: 100%;
        }
      }
      li.active {
        width: 150px !important;
        box-sizing: border-box;
        background-color: rgba(#eaeaea, 0.2);
        font-weight: 700;
        border-left: 3px solid #007fff;
      }
      li.active .singleLink {
        color: #007fff;
      }

      li:hover {
        box-sizing: border-box;
        background-color: rgba(#eaeaea, 0.5);
        border-left: 3px solid #007fff;
        // width:150px !important;
      }
      li:hover a {
        color: #007fff;
        font-weight: 700;
      }
      li:first-child {
        margin-top: 0px;
      }
    }
  }
  /* 新闻列表 */
  .newsContent {
    // border: 1px solid #409eef;
    width: 600px;
    margin-left: 30px;
    margin-top: -10px;
    .infinite-list {
      li {
        padding: 5px 10px;
        height: 80px;
        line-height: 80px;
        // border-bottom: 1px solid #333;
      }
    }
  }
  /* 右侧推荐栏 */
  .recommend {
    // border: 1px solid green;
    margin-left: 100px;
    width: 450px !important;
    // 实时疫情模块
    .virusReport {
      box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.2);
      border-radius: 5px;
      font-family: "微软雅黑";
      font-size: 22px;
      font-weight: 400;
      position: relative;
      .line {
        width: 3px;
        height: 22px;
        line-height: 22px;
        // background-color: #409eef;
        background-color: #333;
        position: absolute;
        top: 15px;
        left: 20px;
      }
      .title {
        font-family: "微软雅黑";
        font-size: 16px;
        margin-left: 20px;
        color: #333;
        position: absolute;
        top: 15px;
        user-select: none;
        left: 15px;
      }
      .main {
        margin-top: 0px;
        padding-top: 40px;
        .virusNavList {
          padding-bottom: 15px;
          list-style-type: none;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 100%;
          .virusNav {
            box-sizing: border-box;
            margin-top: 20px;
            // border: 1px solid blue;
            width: 33.3%;
            .liName {
              font-size: 15px;
            }
            .total {
              font-size: 24px;
              font-weight: 700;
              margin-top: 20px;
            }
            .thanYesterday {
              font-size: 12px;
              margin-top: 20px;
              span {
                font-size: 12px;
              }
            }
          }
        }
        .time {
          font-size: 12px;
          color: #666;
          text-align: left;
          margin-left: 16px;
          padding-bottom: 15px;
        }
      }
      // 实时疫情新闻模块
      .virusNews {
        border: 1px solid blue;
        font-family: "Microsoft Yahei";
        padding: 0px;
        text-align: left;
        position: relative;
        height: 400px;
        padding-left:15px;
        .newsLine {
          width: 3px;
          height: 22px;
          line-height: 22px;
          // background-color: #409eef;
          background-color: #333;
          position: absolute;
          top: 0px;
          left: 20px;
        }
        .newsTitle {
          font-family: "微软雅黑";
          font-size: 16px;
          margin-left: 20px;
          color: #333;
          position: absolute;
          top: 0px;
          user-select: none;
          left: 15px;
        }
        .newsMain {
          // border: 1px solid red;
          margin-top: 20px;
          padding: 0px;
          .virusNewsList {
            list-style: none;
            li {
              position: relative;
              margin-top: 10px;
              border-bottom: 1px solid #eaeaea;
              // border: 1px solid blue;
              padding:0px !important;
              a {
                text-decoration: none;
                font-size: 14.5px;
                font-weight: 400;
                letter-spacing: 0px;
                height: 40px;
                display: inline-block;
                color: #333;
              }
              a:hover {
                color: #0007ff;
              }
              .time {
                font-size: 12px;
                color: #333;
                border:1px solid green;
              }
            }
          }
        }
      }
    }
    .virusReport:hover {
      box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.6);
    }
  }
}
</style>
