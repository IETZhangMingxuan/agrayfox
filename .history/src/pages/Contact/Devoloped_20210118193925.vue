<template>
  <div class="devoloped">
    <div class="line"></div>
    <div class="title">发展历程</div>
    <div id="block">
      <el-timeline class="blockList">
        <el-timeline-item
          :timestamp="p.ctime"
          placement="top"
          class="blockSingle"
          v-for="(p, index) in timeLineList"
          :key="index"
        >
          <el-card>
            <h4>{{ p.title }}</h4>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reverse: true,
      timeLineList: [
        {
          id: 1,
          title: "配置服务器和域名",
          ctime: "2020-07-15"
        },
        {
          id: 2,
          title: "网站通过审核",
          ctime: "2020-08-01"
        },
        {
          id: 3,
          title: "前端页面的初步设计",
          ctime: "2020-08-05"
        },
        {
          id: 4,
          title: "配置后端接口",
          ctime: "2020-08-20"
        },
        {
          id: 5,
          title: "配置路由和Axios",
          ctime: "2020-08-23"
        },
        {
          id: 6,
          title: "配置MySQL数据库",
          ctime: "2020-08-25"
        },
        {
          id: 7,
          title: "完成首页开发",
          ctime: "2020-09-01"
        },
        {
          id: 8,
          title: "完成新闻页面开发",
          ctime: "2020-09-05"
        },
        {
          id: 9,
          title: "完成留言板模块的开发",
          ctime: "2020-09-18"
        },
        {
          id: 10,
          title: "1.0版本上线",
          ctime: "2020-09-30"
        },
        {
          id: 11,
          title: "完成短视频页面开发",
          ctime: "2020-10-27"
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
.devoloped {
  background-color: fff;
  box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.3);
  border-radius: 10px;
  position: relative;
//   border: 1px solid blue;
  margin-top: 25px;
  height:600px;
  overflow: hidden;
   .line {
    width: 3px;
    height: 22px;
    line-height: 20px;
    background-color: #409eef;
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 25px;
  }
  .title {
    font-family: "微软雅黑";
    font-size: 16px;
    margin-left: 40px;
    color: #409eef;
    position: absolute;
    top: 18px;
    user-select: none;
    font-weight: 700;
  }
  #block {
    padding: 70px 20px 20px;
    font-family: "Microsoft Yahei";
    .radio {
      border: 1px solid red;
      padding-top: 60px;
      font-size: 14px;
      font-weight: 300;
      color: #666;
    }
    .blockList {
      .blockSingle {
        width: 300px;
        border: 1xp solid blue !important;
        font-family: "Microsoft Yahei";
        font-size:15px;
        color: #666;
        letter-spacing: 1px;
        font-weight:300px !important;
      }
    }
  }
}
.devoloped:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.6);
}
</style>
