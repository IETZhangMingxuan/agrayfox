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
              <div class="icon">图标项</div>
              <h4 class="blogTitle">{{item.title}}</h4>
              <img src="" alt="" title="博客图片" />
              <p class="details">博客详情</p>
              <span class="blogTime">博客发布时间</span>
              <span class="blogWatcher">博客浏览人数</span>
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
          title:""
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
      .blogListWrapper {
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
