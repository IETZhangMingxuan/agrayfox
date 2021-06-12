<template>
  <div id="bloglist">
    <div class="bloglist-nav">
      <ul>
        <li
          v-for="(item, index) in blogNavList"
          :key="index"
          @click="setIndex(index)"
          :class="activeIndex == index ? 'active' : ''"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="bloglist-body">
      <div class="bloglist-left">
        <div class="bloglist-main">
          <ul>
            <li v-for="news in newsList" :key="news.id">
              <router-link :to="/blog/ + news.id">{{ news.title }}</router-link>
              <router-link class="want-look" :to="/blog/ + news.id">想看</router-link>
              <!-- <button class="want-look">想看</button> -->
              <button class="hate-look" @click="deleteBlog(news.id)">不想看</button>
              <!-- <div class="tags">
                <span v-for="(item, index) in tagObj" :key="index">{{
                  item
                }}</span>
              </div> -->
            </li>
          </ul>
          <button class="getmore" v-if="this.newsList[0] !== undefined">加载更多</button>
          <div class="loading" v-else>正在加载中...</div>
        </div>
      </div>
      <div class="bloglist-right">
        <div class="server-recommend">
          <ServerRecommend />
        </div>
        <div class="hot-articles">
          <ReadRecommend />
        </div>
        <div class="cloud-tags">
          <BlogTags />
        </div>
      </div>
    </div>

    <router-link to="/blog/1">指定博文</router-link>
    <router-link to="/blog/2">指定博文</router-link>
    <div class="shows">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ServerRecommend from "./ServerRecommand";
import ReadRecommend from "./ReadRecommend";
// import BlogTags from "./BlogTags.vue";
export default {
  name: "bloglist",
  components: {
    ServerRecommend,
    ReadRecommend
    // BlogTags
  },
  data() {
    return {
      blogNavList: ["推荐", "生活", "随笔", "前端", "后端"],
      activeIndex: "0",
      newsList: [],
      tagObj: {}
    };
  },
  methods: {
    setIndex(index) {
      this.activeIndex = index;
    },
    deleteBlog(index) {
      if(this.newsList.length )
      this.newsList = this.newsList.filter(item => {
        return item.id !== index;
      });
    }
  },
  async mounted() {
    let result = await axios({
      method: "GET",
      url: "http://59.110.242.49:8080/getBlogs"
    }).then(response => {
      return response.data;
    });
    this.newsList = result;
    // console.log(this.newsList[2]);
    // console.log(typeof this.newsList[1].tags)
    // console.log(this.newsList[2].tags, typeof this.newsList[2].tags);
    // let a = this.newsList[2].tags.split(" ");
    // console.log(a, typeof a);
    // this.tagObj = a;
    // console.log(this.tagObj);
  }
};
</script>
<style scoped lang="less">
#bloglist {
  background-color: #f4f4f4;
  width: 1240px;
  padding: 20px;
  margin-top: -120px;
  .bloglist-nav {
    margin-top: 120px;
    background-color: #fff;
    border-radius: 10px;
    ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      list-style: none;
      li {
        padding: 10px 20px;
        color: #555666;
        cursor: pointer;
        font: 16px "Microsoft Yahei";
        font-weight: 700;
        &.active {
          color: #409eef;
        }
        &:hover {
          color: #409eef;
        }
      }
    }
  }
  .bloglist-body {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    .bloglist-left {
      width: 840px;
      .bloglist-main {
        background-color: #fff;
        border-radius: 10px;
        margin-top: 20px;
        padding: 20px;
        ul {
          list-style: none;
          li {
            position: relative;
            height: 50px;
            line-height: 50px;
            padding: 2px 20px;
            margin-bottom: 20px;
            border-radius: 10px;
            box-shadow: 2px 3px 1px 1px #eaeaea;
            color: #555666;
            background-color: #f4f4f4;
            font-size: 15px;
            font-weight: 700;
            // .tags {
            //   position: absolute;
            //   left: 20px;
            //   bottom: -10px;
            //   font-size: 12px;
            //   font-weight: 300;
            //   span {
            //     font-family: "consolas";
            //     margin-right: 10px;
            //     padding: 2px 10px;
            //     border-radius: 5px;
            //     background-color: #fff;
            //   }
            // }
            a {
              text-decoration: none !important;
              color: #555;
              font-family: "Microsoft Yahei";
              letter-spacing: 1px;
              font-weight: 700;
              &:hover {
                color: #409eff;
              }
            }
            &:hover {
              cursor: pointer;
            }
            .want-look,
            .hate-look {
              position: absolute;
              top: 12px;
              display: none;
              outline: none;
              padding: 8px 12px;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              color: #fff;
              font: 12px "microsoft yahei";
              letter-spacing: 1px;
              box-shadow: 2px 3px 1px 1px #eaeaea;
            }
            .want-look {
              background-color: #38e174;
              right: 100px;
            }
            .hate-look {
              background-color: rgba(255, 0, 0, 0.7);
              right: 20px;
            }
            &:hover .want-look {
              display: block;
              color: #fff;
            }
            &:hover .hate-look {
              display: block;
            }
          }
        }
      }
      .getmore {
        display: block;
        width: 120px;
        height: 35px;
        line-height: 35px;
        margin: 0 auto;
        margin-bottom: -5px;
        outline: none;
        cursor: pointer;
        border: none;
        border-radius: 20px;
        color: #fff;
        background: linear-gradient(to right, #38e174, rgb(14, 205, 14));
        font-family: "microsoft yahei";
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 1px;
      }
      .loading {
        width: 100%;
        height: 400px;
        text-align: center;
        font-family: "Microsoft Yahei";
        font-size: 22px;
        line-height: 400px;
        color: #555666;
      }
    }
    .bloglist-right {
      width: 380px;
      .server-recommend {
        margin-top: 20px;
      }
    }
  }
}
</style>
