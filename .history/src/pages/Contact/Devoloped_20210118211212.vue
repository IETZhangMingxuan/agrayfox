<template>
  <div class="devoloped">
    <div class="line"></div>
    <div class="title">更新记录</div>
    <div id="block">
      <div class="radio">
        <el-radio-group v-model="reverse">
          <el-radio :label="false">按时间顺序</el-radio>
          <el-radio :label="true">按时间倒序</el-radio>
        </el-radio-group>
      </div>
      <el-timeline class="blockList" :reverse="reverse">
        <el-timeline-item
          :timestamp="p.ctime"
          placement="top"
          class="blockSingle"
          v-for="(p, index) in timeLineList"
          :key="index"
          :color="p.color"
        >
          <el-card>
            <p>{{ p.title }}</p>
            <p v-if="p.desc" class="desc">{{ p.desc }}</p>
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
          ctime: "2020-07-15",
          color: "green",
          desc: "http://www.agrayfox.com 按Ctrl+D收藏"
        },
        {
          id: 2,
          title: "网站通过审核",
          ctime: "2020-08-01",
          color: "green"
        },
        {
          id: 3,
          title: "前端页面的初步设计",
          ctime: "2020-08-05",
          color: "green",
          desc:
            "采用了弹性盒布局和模块化设计,简洁轻便.由于时间关系,暂未做响应式开发,未来将以小程序替代"
        },
        {
          id: 4,
          title: "配置后端接口",
          ctime: "2020-08-20",
          color: "green"
        },
        {
          id: 5,
          title: "配置路由和Axios",
          ctime: "2020-08-23",
          color: "green"
        },
        {
          id: 6,
          title: "配置MySQL数据库",
          ctime: "2020-08-25",
          color: "green"
        },
        {
          id: 7,
          title: "完成首页开发",
          ctime: "2020-09-01",
          color: "green"
        },
        {
          id: 8,
          title: "完成新闻页面开发",
          ctime: "2020-09-05",
          color: "orangered"
        },
        {
          id: 9,
          title: "完成留言板模块的开发",
          ctime: "2020-09-18",
          color: "orangered"
        },
        {
          id: 10,
          title: "Version 1.0版本上线",
          ctime: "2020-09-30",
          color: "green"
        },
        {
          id: 11,
          title: "完成短视频页面开发",
          ctime: "2020-10-27",
          color: "orangered",
          desc: "接入了快手,开眼,抖音的部分接口。功能待完善"
        },
        {
          id: 12,
          title: "开发热点路由页中",
          ctime: "2021-01-18",
          color: "orangered"
        },
        {
          id: 12,
          title: "待开发功能",
          ctime: "????-??-??",
          color: "red",
          desc: "博客页\r\n商城页\r\n对话机器人模块\r\n电子钢琴模块"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.devoloped {
  background-color: fff;
  box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.3);
  border-radius: 10px;
  position: relative;
  //   border: 1px solid blue;
  margin-top: 25px;
  height: 600px;
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
      font-size: 14px;
      font-weight: 300;
      color: #666;
      padding-bottom: 10px;
      margin-top: -10px;
    }
    .blockList {
      overflow-y: scroll !important;
      height: 500px;
      .el-timeline-item {
        width: 300px;
        border: 1xp solid blue !important;
        font-family: "Microsoft Yahei";
        font-size: 14.5px;
        padding: 5px;
        color: #666;
        letter-spacing: 1px;
        font-weight: 400 !important;
        .el-timeline-item__tail {
          left: 6.5px;
        }
        .el-timeline-item__node--normal {
          left: 1px !important;
        }
        .el-card__body {
          padding: 5px 0px !important;
          p {
            padding: 2px 0px;
            color: #666 !important;
          }
          .desc {
            font-size: 14px;
            margin-top: 5px;
            color: #999 !important;
            text-align: left;
            padding: 0px 5px 0px 10px;
          }
        }
        .el-timeline-item__wrapper {
          .is-top {
            // font-family: "Times New Roman", Times, serif !important;
            font-family: "consolas" !important;
            font-size: 15px;
          }
        }
      }
      .el-timeline-item:hover {
        box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.6);
      }
    }
  }
}
.devoloped:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.6);
}
</style>
