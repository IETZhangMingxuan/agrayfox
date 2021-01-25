<template>
  <div id="articles">
    <!-- 博客分类导航 -->
    <div class="navListWrapper">
      <ul class="navList">
        <li>全部</li>
        <li>Javascript</li>
        <li>Vue</li>
        <li>React</li>
        <li>小程序</li>
        <li>MySQL</li>
        <li>Bug</li>
        <li>杂谈</li>
        <li>其他</li>
      </ul>
    </div>
    <!-- 博客主体 -->
    <div class="blogMain">
      <!-- 博客左边栏 -->
      <div class="blogLeft">
        <div class="blogListWrapper">
          <ul class="blogList">
            <li v-for="item in BlogList" :key="item.id">
              <h4 class="blogTitle">{{ item.title }}</h4>
              <img :src="item.imgUrl" alt="" title="博客图片" />
              <p class="details">{{ item.details }}</p>
              <span class="blogTime">{{ item.time }}</span>
              <span class="blogWatcher">浏览:{{ item.watcher }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 博客右边栏 -->
      <div class="blogRight"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      BlogList: [
        {
          id: 1,
          title: "vue利用vue-clipboard2实现剪切板的功能",
          imgUrl: "https://www.nut666.com/uploads/201908/13/190813022023132.jpg",
          details:
            "之前写过这个小功能看了网上一些文档，都写的比较繁琐，所以今天整理出一些简单的代码，摆出来，留以后使用。",
          time: "1年前",
          watcher: "1541"
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
#articles {
  // border: 1px dashed blue;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
  #test {
    color: #666;
    font-family: "Microsoft Yahei";
    margin-top: 50px;
  }
  // 博客页总导航
  .navListWrapper {
    font-family: "Microsoft Yahei";
    font-size: 16px;
    font-weight: 600;
    color: #666;
    .navList {
      // border: 1px solid blue;
      list-style: none;
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      li {
        padding: 10px 20px;
        user-select: none;
      }
      :hover {
        background-color: #eaeaea;
      }
    }
  }
  .blogMain {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    // 博客左边栏
    .blogLeft {
      border: 1px solid blue;
      width: 70%;
      height: 800px;
      // 博客列表包裹块
      @basicPositionLeft: 10px;
      .blogListWrapper {
        .blogList {
          li {
            font-family: "Microsoft Yahei", serif;
            font-weight: 600;
            font-size: 16px;
            color: #333;
            position: relative;
            height: 150px;
            border-left: 3px solid #409eef;
            // 博客标题
            .blogTitle {
              position: absolute;
              left: @basicPositionLeft;
              top: 20px;
            }
            // 博客详情
            .details {
              font-weight: 400;
              position: absolute;
              left: @basicPositionLeft;
              top: 80px;
            }
            // 发布时间
            .time {
              position: absolute;
              left: @basicPositionLeft;
              bottom: 20px;
            }
            // 浏览人数
            .watcher {
              position: absolute;
              left: @basicPositionLeft;
              bottom: 2px;
            }
            // 博客图片
            img {
              width: 140px;
              height: 80px;
              position: absolute;
              right: 10px;
              top: 30px;
            }
          }
        }
      }
    } // 博客右边栏
    .blogRight {
      border: 1px solid blue;
      width: 30%;
      height: 800px;
    }
  }
}
</style>
