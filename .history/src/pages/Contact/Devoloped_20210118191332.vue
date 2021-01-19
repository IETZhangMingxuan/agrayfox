<template>
  <div class="devoloped">
    <div class="line"></div>
    <div class="title">发展历程</div>
    <div id="block">
      <div class="radio">
        排序：
        <el-radio-group v-model="reverse">
          <el-radio :label="true">倒序</el-radio>
          <el-radio :label="false">正序</el-radio>
        </el-radio-group>
      </div>
    </div>
    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "配置服务器和域名",
          timestamp: "2020-07-15"
        },
        {
          content: "网站通过审核",
          timestamp: "2020-08-01"
        },
        {
          content: "前端页面的初步设计",
          timestamp: "2020-08-05"
        },
        {
          content: "配置后端接口",
          timestamp: "2020-08-20"
        },
        {
          content: "配置路由和Axios",
          timestamp: "2020-08-23"
        },
        {
          content: "配置MySQL数据库",
          timestamp: "2020-08-25"
        },
        {
          content: "完成首页开发",
          timestamp: "2020-09-01"
        },
        {
          content: "完成新闻页面开发",
          timestamp: "2020-09-07"
        },
        {
          content: "完成留言板模块的开发",
          timestamp: "2020-09-23"
        },
        {
          content: "1.0版本上线",
          timestamp: "2020-09-25"
        },
        {
          content: "完成短视频页面开发",
          timestamp: "2020-10-30"
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
  height: 500px;
  border: 1px solid blue;
  margin-top: 25px;
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
    .radio {
      border: 1px solid red;
      padding-top: 40px;
      font-family: "Microsoft Yahei";
      font-size: 14px;
      font-weight: 300;
      color: #666;
    }
  }
}
.devoloped:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.6);
}
</style>
