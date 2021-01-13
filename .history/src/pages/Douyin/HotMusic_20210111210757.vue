<template>
  <div id="hotmusic">
    <div class="title">
      <ul class="titleList">
        <li class="titleNum">序号</li>
        <li class="singer">歌手</li>
        <li class="songsName">歌曲名</li>
        <li class="hotClick">热度</li>
      </ul>
    </div>
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="(i, index) in DouyinMusicList" class="list-item" :key="index" @click="openTips">
          <div class="musicImg">
            <span class="musicNum">{{ index + 1 }}</span
            ><img :src="i.img_url" alt="" />
          </div>
          <div class="musicAuthor">
            <span
              ><a
                :href="
                  `https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=${i.author}`
                "
                target="_blank"
                >{{ i.author }}</a
              ></span
            >
          </div>
          <div class="musicHref">
            <a
              :href="
                `https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=${i.title}`
              "
              target="_blank"
              >{{ i.title }}</a
            >
          </div>

          <div class="musicZan">
            <span>{{ i.value }}</span>
          </div>
        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      loading: false
    };
  },
  computed: {
    noMore() {
      return this.count >= 50;
    },
    disabled() {
      return this.loading || this.noMore;
    },
    ...mapState({
      DouyinMusicList: state => state.douyinMusic.DouyinMusicList
    })
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 5;
        this.loading = false;
      }, 2000);
    }
    /* openTips() {
      this.$notify({
        dangerouslyUseHTMLString: true,
        message:
          '<span style="color:#333;font-size:16px;font-family:"consolas";line-height:15px">请点击歌曲名听歌曲<br/><div style="margin-top:8px;margin-bottom:0px">或点击歌手名搜索歌手相关信息</div></span>',
        title: "提示：",
        offset: 250,
        showClose: false,
        type: "success"
      });
    } */
  }
};
</script>
<style scoped lang="less">
#hotmusic {
  color: #fff;
  .title {
    margin-top: 20px;
    font-size: 16px;
    font-family: "Microsoft Yahei";
    font-family: "华文中宋";
    .titleList {
      list-style: none;
      display: flex;
      justify-content: center;
      width: 800px;
      margin: 0 auto;
      .titleNum {
        width: 20%;
      }
      .singer {
        width: 15%;
      }
      .songsName {
        width: 50%;
      }
      .hotClick {
        width: 15%;
        text-align: left;
      }
    }
  }
  .infinite-list-wrapper {
    font-family: "consolas", serif;
    text-align: center;
    font-size: 16px;
    margin: 25px auto;
    height: 600px;
    /* ul列表 */
    .list {
      width: 800px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      overflow: scroll;
      margin: 0 auto;
      /* 每个li列表项 */
      .list-item {
        // border:1px solid blue;
        width: 90%;
        height: 50px;
        line-height: 50px;
        padding: 2px 0;
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        border-radius: 50px;
        .musicImg {
          .musicNum {
            display: inline-block;
            padding: 0 10px;
            width: 20px;
            vertical-align: middle;
            font-size: 16px;
            text-shadow: 0px 1px 1px #fff;
          }
          img {
            width: 35px;
            height: 35px;
            vertical-align: middle;
            margin-left: 10px;
          }
        }
        .musicAuthor {
          width: 150px;
          overflow: hidden;
          text-align: center;
          padding: 0 10px;
          span {
            padding-bottom: 2px;
            a {
              color: #fff;
              text-decoration: none;
            }
          }
        }
        .musicHref {
          width: 300px;
          padding: 0 20px;
          overflow: hidden;
          a {
            color: #fff;
            padding: 0 20px;
            text-decoration: none;
          }
        }
        .musicHref a:hover {
          // color: orangered;
          color: #fff;
        }

        .musicZan {
          width: 100px;
          text-align: center;
        }
      }
      .list-item:hover {
        // background-color: rgba(pink, 0.2);
        background: linear-gradient(45deg, orangered, orange);
      }
      :hover .musicHref {
        color: blue !important;
        text-decoration: underline;
      }
      :hover .musicAnthor {
        color: blue !important;
        text-decoration: underline;
      }
    }
    /* 设置滚动条样式 */
    ::-webkit-scrollbar {
      background-color: black;
    }
    :hover {
      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
    }
  }
}
</style>
