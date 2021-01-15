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
      <div class="virusReport">
        <div class="line"></div>
        <div class="title">全国疫情数据(含港澳台)</div>
        <div class="main">
          <ul class="virusNavList">
            <li v-for="(item, index) in virusNav" :key="index" class="virusNav">
              <h4 :style="{ color: item.color }" class="liName">{{ item.name }}</h4>
              <p :style="{ color: item.color }" class="total">{{item.total}}</p>
              <p :style="{ color: item.color }" class="thanYesterday">
                <span style="color:#666">较昨日:</span>
                +{{ item.thanYesterday }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
              confirm: 173,
              suspect: null,
              // 累计治愈较昨日增加人数
              heal: 75,
              dead: 0,
              severe: null,
              storeConfirm: 98,
              // 境外输入较昨日增加人数
              input: 9
            },
            total: {
              // 累计确诊人数
              confirm: 98290,
              suspect: 0,
              // 累计治愈人数
              heal: 91760,
              // 累计死亡人数
              dead: 4803,
              severe: 0,
              // 境外输入人数
              input: 4474
            },
            // 无症状感染者
            extData: {
              // 累计
              noSymptom: 618,
              // 较昨日
              incrNoSymptom: 66
            }
          },
          lastUpdateTime: "2021-01-15 08:47:11",
          overseaLastUpdateTime: "2021-01-15 15:47:24"
        },
        timestamp: 1610697718551
      },
      virusNav: [
        {
          id: 1,
          name: "境外输入",
          thanYesterday: "9",
          total: "4474",
          color: "#FFA352"
        },
        {
          id: 2,
          name: "无症状感染者",
          thanYesterday: "66",
          total: "618",
          color: "#791618"
        },
        {
          id: 3,
          name: "现有确诊",
          thanYesterday: "90",
          total: "1719",
          color: "#E44A3D"
        },
        {
          id: 4,
          name: "累计确诊",
          thanYesterday: "173",
          total: "98290",
          color: "#A31D13"
        },
        {
          id: 5,
          name: "累计死亡",
          thanYesterday: "4803",
          total: "0",
          color: "#333"
        },
        {
          id: 6,
          name: "累计治愈",
          thanYesterday: "83",
          total: "91768",
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
    height: 2400px;
    width: 400px;
    .virusReport {
      font-family: "微软雅黑";
      font-size: 20px;
      font-weight: 400;
      border: 1px solid blue;
      height: 400px;
      .line{

      }
      .title{

      }
      .main{

      }
      .virusNavList{
        list-style-type: none;
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width:100%;
        .virusNav{
          border:1px solid blue;
          width:33%;
          .liName{

          }
          .total{

          }
          .thanYesterday{

          }
        }
      }
    }
  }
}
</style>
