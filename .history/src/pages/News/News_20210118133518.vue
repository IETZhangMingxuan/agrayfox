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
            <li>
              <h4 style="{ color:#333 }" class="liName">境外输入</h4>
              <p style="color: #FFA352" class="total">{{ VirusNumList[0].desc.suspectedCount }}</p>
              <p
                style="color: #FFA352"
                class="thanYesterday"
                v-show="VirusNumList[0].desc.suspectedIncr"
              >
                <span style="color:#666">较昨日:</span>
                +{{ VirusNumList[0].desc.suspectedIncr }}
              </p>
            </li>
            <li>
              <h4 style="{ color:#333 }" class="liName">无症状感染者</h4>
              <p style="color: #791618" class="total">{{ VirusNumList[0].desc.seriousCount }}</p>
              <p
                style="color: #791618"
                class="thanYesterday"
                v-show="VirusNumList[0].desc.suspectedIncr"
              >
                <span style="color:#666">较昨日:</span>
                +{{ VirusNumList[0].desc.seriousIncr }}
              </p>
            </li>
            <li>
              <h4 style="{ color:#333 }" class="liName">现有确诊</h4>
              <p style="color: #E44A3D" class="total">
                {{ VirusNumList[0].desc.currentConfirmedCount }}
              </p>
              <p
                style="color: #E44A3D"
                class="thanYesterday"
                v-show="VirusNumList[0].desc.suspectedIncr"
              >
                <span style="color:#666">较昨日:</span>
                +{{ VirusNumList[0].desc.currentConfirmedIncr }}
              </p>
            </li>
            <li>
              <h4 style="{ color:#333 }" class="liName">累计确诊</h4>
              <p style="color: #A31D13" class="total">{{ VirusNumList[0].desc.confirmedCount }}</p>
              <p
                style="color: #A31D13"
                class="thanYesterday"
                v-show="VirusNumList[0].desc.suspectedIncr"
              >
                <span style="color:#666">较昨日:</span>
                +{{ VirusNumList[0].desc.confirmedIncr }}
              </p>
            </li>
            <li>
              <h4 style="{ color:#333 }" class="liName">累计死亡</h4>
              <p style="color: #333" class="total">{{ VirusNumList[0].desc.deadCount }}</p>
              <p
                style="color: #333"
                class="thanYesterday"
                v-show="VirusNumList[0].desc.suspectedIncr"
              >
                <span style="color:#666">较昨日:</span>
                +{{ VirusNumList[0].desc.deadIncr }}
              </p>
            </li>
            <li>
              <h4 style="{ color:#333 }" class="liName">累计治愈</h4>
              <p style="color: #34AA70" class="total">{{ VirusNumList[0].desc.curedCount }}</p>
              <p
                style="color: #34AA70"
                class="thanYesterday"
                v-show="VirusNumList[0].desc.suspectedIncr"
              >
                <span style="color:#666">较昨日:</span>
                +{{ VirusNumList[0].desc.curedIncr }}
              </p>
            </li>
          </ul>
          <div class="time">
            <span>截止至:</span>
            {{ virusNumTime(VirusNumList) }}
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
      <!-- 轮播图新闻模块 -->
      <div class="carousel">
        <div class="block">
          <el-carousel
            trigger="click"
            height="200px"
            autoplay="true"
            interval="4000"
            arrow="hover"
            indicator-position="none"
          >
            <el-carousel-item v-for="(item, index) in SportsNewsList.slice(0, 4)" :key="index">
              <div class="picItem">
                <a :href="item.url" target="_blank"><img :src="item.picUrl"/></a>
                <span class="title">{{ item.title }}</span>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="textNews">
          <ul class="newsList">
            <li v-for="(item, index) in SportsNewsList.slice(5, 15)" :key="index">
              <a :href="item.url">{{ item.title }}</a>
            </li>
          </ul>
          <ul class="newsHiddenList" v-if="isSportsNewsShow === false">
            <li v-for="(item, index) in SportsNewsList.slice(15, 25)" :key="index">
              <a :href="item.url">{{ item.title }}</a>
            </li>
          </ul>
          <input @click="changeSportsNews" type="button" v-model="seeMoreOrNot"></input>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
/* 引入moment */
import moment from "moment";
// 配置moment环境为中文
moment.locale("zh-cn");
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
      isSportsNewsShow: true,
      seeMoreOrNot:"查看更多"
    };
  },
  computed: {
    ...mapState({
      VirusNumList: state => state.tianxingApi.VirusNumList,
      SportsNewsList: state => state.tianxingApi.SportsNewsList
    })
  },
  methods: {
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
    },
    virusNumTime(VirusNumList) {
      return moment(VirusNumList[0].desc.modifyTime).format("lll");
    },
    changeSportsNews(isSportsNewsShow){
      if(isSportsNewsShow){
        this.isSportsNewsShow === false;

      }
    }
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
          li {
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
        // border: 1px solid blue;
        font-family: "Microsoft Yahei";
        padding: 10px 0px;
        text-align: left;
        position: relative;
        padding-left: 15px;
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
              padding: 0px !important;
              padding: 10px;
              a {
                text-decoration: none;
                font-size: 14.5px;
                font-weight: 400;
                letter-spacing: 0px;
                display: inline-block;
                color: #333;
              }
              a:hover {
                color: #003af0;
              }
              .time {
                font-size: 12px;
                color: #333;
                margin-bottom: 10px;
                margin-top: 5px;
              }
            }
            :last-child {
              border-bottom: none;
            }
          }
        }
      }
    }
    .virusReport:hover {
      box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.6);
    }
    // 体育新闻/轮播图模块
    .carousel {
      // border: 1px solid blue;
      margin-top: 20px;
      padding: 8px 8px 5px 8px;
      box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.2);
      border-radius: 5px;
      // height: 520px;
      // overflow: hidden;
      .block {
        .picItem {
          position: relative;
          img {
            width: 310px;
            height: 210px;
          }
          .title {
            // border:1px solid red;
            color: #fff;
            position: absolute;
            left: 0px;
            bottom: 16px;
            // height: 42px;
            padding: 5px 5px 7px 10px;
            text-align: left;
            font-family: "Microsoft Yahei";
            font-size: 15px;
            font-weight: 600;
            letter-spacing: 2px;
            background-color: rgba(black, 0.5);
            // border:1px solid blue;
            width: 295px;
          }
        }
      }
      .textNews {
        .newsList {
          list-style-type: none;
          li {
            position: relative;
            border-bottom: 1px dotted #eaeaea;
            // border: 1px solid blue;
            padding: 0px !important;
            padding: 5px;
            height: 35px;
            line-height: 35px;
            overflow: hidden;
            text-align: left;
            margin-left: 5px;
            a {
              text-decoration: none;
              font-size: 14px;
              font-weight: 400;
              letter-spacing: 0px;
              display: inline-block;
              color: #666;
              font-family: "Microsoft Yahei";
            }
            a:hover {
              color: #222;
            }
          }
          :last-child {
            border-bottom: none;
          }
        }
        .newsHiddenList {
          list-style-type: none;
          li {
            position: relative;
            border-bottom: 1px dotted #eaeaea;
            // border: 1px solid blue;
            padding: 0px !important;
            padding: 5px;
            height: 35px;
            line-height: 35px;
            overflow: hidden;
            text-align: left;
            margin-left: 5px;
            a {
              text-decoration: none;
              font-size: 14px;
              font-weight: 400;
              letter-spacing: 0px;
              display: inline-block;
              color: #666;
              font-family: "Microsoft Yahei";
            }
            a:hover {
              color: #222;
            }
          }
        }
      }
    }
    .carousel:hover {
      box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.6);
    }
  }
}
</style>
