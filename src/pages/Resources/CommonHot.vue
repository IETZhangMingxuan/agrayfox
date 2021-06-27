<template>
  <div id="commonhot" class="animate__animated animate__bounceIn">
    <!-- 头部 -->
    <div class="commonhot-header">
      <!-- 头部Logo -->
      <div class="titleImg">
        <img :src="logo" alt="图片加载失败" style="width:25px;height:25px" class="commonHotLogo" />
      </div>
      <!-- 头部标题 -->
      <span class="titleName">{{ titleName }}</span>
      <!-- 仓库中数据的时间戳配合过滤器可完成更新时间,待优化 -->
      <!-- <span>{{ 1624602146 * 1000 | dateParse }}</span> -->
    </div>
    <!-- 内容部分 -->
    <div class="commonhot-main">
      <!-- 加载样式 -->
      <h3 v-if="!list.site" class="loading">请稍后，正在加载中...</h3>
      <!-- 内容列表 -->
      <ul class="commonHotList" v-if="list.site">
        <li
          v-for="(item, index) in list.site.subs[0].items.slice(
            currentIndex,
            currentIndex + pageSize
          )"
          :key="index"
        >
          <!-- 列表项序号 -->
          <span class="indexBlock">{{ index + 1 + currentIndex }}</span>
          <!-- 列表项内容 -->
          <span class="singleMain">
            <a :href="href + item.title" target="_blank" :title="item.title">{{ item.title }}</a>
          </span>
          <span class="hotClick">{{ item.more }}</span>
        </li>
      </ul>
    </div>
    <!-- 尾部 -->
    <div class="commonhot-footer">
      <!-- 尾部图标块 -->
      <div class="tags">
        <span @click="changeIndex(1, currentIndex, totalSize, pageSize)" class="prev-tag">
          <i class="iconfont icon-zuojiantou1"></i>
          <span class="prev-text">上一页</span>
        </span>
        <span class="next-tag">
          <span @click="changeIndex(2, currentIndex, totalSize, pageSize)" class="next-text"
            >下一页</span
          >
          <i class="iconfont icon-youjiantou1"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  /**
   * 从外部设置的参数:
   * list:需要遍历的数组
   * name:头部标题
   * logo:头部Logo
   * href:a标签查询功能跳转的基地址
   * pageSize:每页显示条数,默认值为10
   * totalSize:数据总条数,默认值为50
   * currentIndex:当前页起始索引数,默认值为0
   * **/
  // props: ["list", "name", "logo", "href", "pageSize", "totalSize", "currentIndex"],
  props: {
    list: { required: true },
    titleName: {},
    logo: {},
    href: { required: true },
    pageSize: { default: 10 },
    totalSize: { default: 50 },
    currentIndex: { default: 0 }
  },
  methods: {
    changeIndex(type, currentIndex, totalSize, pageSize) {
      // 点击下一页
      if (type === 2) {
        if (currentIndex < totalSize - pageSize) {
          this.currentIndex = currentIndex + pageSize;
        } else {
          this.currentIndex = 0;
        }
      } else if (type === 1) {
        if (currentIndex === 0) {
          this.currentIndex = totalSize - pageSize;
        } else {
          this.currentIndex = currentIndex - pageSize;
        }
      }
    }
  }
};
</script>
<style scoped lang="less">
/* 热点通用独立模块 */
#commonhot {
  position: relative;
  width: 32%;
  height: 380px !important;
  margin-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
  // 头部
  .commonhot-header {
    position: relative;
    height: 50px;
    width: 85%;
    overflow: hidden;
    // 头部Logo
    .titleImg {
      position: absolute;
      top: 16px;
      left: 20px;
      .commonHotLogo {
        width: 30px !important;
        height: 30px !important;
      }
    }
    // 头部标题
    .titleName {
      font-family: "Microsoft Yahei";
      font-size: 17px;
      margin-left: 66px;
      color: #333;
      position: absolute;
      top: 19px;
      left: -5px;
      font-weight: 700;
      user-select: none;
      height: 25px !important;
      line-height: 25px;
      overflow: hidden;
    }
  }
  // 内容
  .commonhot-main {
    position: relative;
    margin: 0px 0px 0px 20px;
    // 加载样式
    .loading {
      color: #555666;
      text-align: center;
      font-family: "Microsoft Yahei";
      font-size: 16px;
      font-weight: 400;
      height:320px;
      line-height: 320px;
    }
    // 内容列表
    .commonHotList {
      list-style: none;
      height: 320px;
      // 列表项
      li {
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        position: relative;
        overflow: hidden;
        height: 20px;
        line-height: 20px;
        padding: 6px 0;
        // 热点序号
        .indexBlock {
          width: 32px !important;
          height: 20px !important;
          line-height: 20px !important;
          border-radius: 5px;
          text-align: center;
          background-color: #f4f4f4;
          color: #777;
          user-select: none;
          font-family: "Microsoft Yahei";
          font-size: 12px;
        }
        // 具体内容
        .singleMain {
          height: 20px;
          line-height: 20px;
          a {
            display: inline-block;
            overflow: hidden;
            max-width: 262px;
            height: 20px;
            line-height: 20px;
            margin-left: 10px;
            color: #555;
            text-decoration: none;
            font-family: "Microsoft Yahei";
            font-size: 14px;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-break: break-all;
            &:hover {
              color: orangered;
            }
          }
        }
        // 热度
        .hotClick {
          text-align: right;
          color: #888;
          font-size: 12px;
          font-family: "Microsoft Yahei";
          position: absolute;
          right: 15px;
          top: 6px;
        }
      }
    }
  }
  // 尾部
  .commonhot-footer {
    .tags {
      display: flex;
      justify-content: center;
      margin-top: 2px;
      color: #555666;
      font-family: "Microsoft Yahei";
      font-size: 12px;
      font-weight: 400;
      user-select: none;
      .prev-tag,
      .next-tag {
        padding: 2px 10px;
        position: relative;
        height: 15px;
        line-height: 15px;
      }
      .icon-zuojiantou1 {
        position: absolute;
        left: -12px;
        top: 2px;
        font-size: 18px;
        color: #409eef;
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
      .icon-youjiantou1 {
        position: absolute;
        right: -12px;
        font-size: 18px;
        top: 2px;
        color: #409eef;
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
      }
      .prev-text,
      .next-text {
        cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
        color: #409eef;
      }
    }
  }
}
#commonhot:hover {
  box-shadow: 0 10px 20px hsla(0, 0%, 40%, 0.3);
}
</style>
