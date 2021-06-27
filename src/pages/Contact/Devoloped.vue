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
      reverse: false,
      timeLineList: [
        {
          id: 1,
          title: "完成主页开发",
          color: "#409EEF"
        },
        {
          id: 2,
          title: "完成新闻页开发",
          color: "#409EEF"
        },
        {
          id: 3,
          title: "完成站长页开发",
          color: "#409EEF"
        },
        {
          id: 4,
          title: "1.0版本上线",
          color: "#409EEF"
        },
        {
          id: 5,
          title: "完成短视频页面开发",
          color: "#409EEF",
          desc: "接入了快手,开眼,抖音的部分接口"
        },
        {
          id: 6,
          title: "完成热点页开发",
          color: "#409EEF",
          desc: "整合热门网站热搜榜单,让你迅速了解当前最新的时事新闻热点"
        },
        {
          id: 7,
          title: "完成博客页开发",
          color: "#409EEF",
          desc: ""
        },
        {
          id: 8,
          title: "主页添加智能对话机器人",
          color: "#409EEF",
          desc: "接口每天有次数限制,且行且珍惜"
        },
        {
          id: 9,
          title: "新闻页添加天气模块",
          color: "#409EEF"
        },
        {
          id: 10,
          title: "优化了短视频看快手功能",
          color: "#409EEF"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.devoloped {
  background-color: #fff;
  box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.3);
  border-radius: 10px;
  position: relative;
  //   border: 1px solid blue;
  margin-top: 30px;
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
        font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
          sans-serif;
        font-size: 14.5px;
        padding: 5px;
        color: #333;
        letter-spacing: 1px;
        font-weight: 400;
        .el-timeline-item__tail {
          left: 6.5px;
        }
        .el-timeline-item__node--normal {
          left: 2.5px !important;
          width: 10px;
          height: 10px;
        }
        .el-timeline-item__wrapper {
          width: 240px !important;

          .el-card__body {
            padding: 5px 0px !important;
            p {
              padding: 2px 0px;
              color: #666 !important;
              font-size: 14px;
              font-weight: 400;
              text-align: left;
              padding-left: 20px;
            }
            .desc {
              font-size: 12px;
              margin-top: 5px;
              color: #999 !important;
              text-align: left;
              padding: 0px 10px 0px 0px;
              font-weight: 400;
              padding-left: 20px;
            }
          }
          .el-card__body:hover {
            box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.6);
          }
        }

        .el-timeline-item__wrapper {
          .is-top {
            font-family: "Times New Roman", Times, serif !important;
            // font-family: "Microsoft Yahei" !important;
            font-size: 14px;
            margin-top: -5px;
          }
        }
      }
    }
  }
}
.devoloped:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.6);
}
</style>
