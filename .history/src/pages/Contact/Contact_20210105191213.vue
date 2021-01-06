<template>
  <div id="contact">
    <!-- 左侧留言板 -->
    <div class="left">
      <!-- 发布留言区 -->
      <div class="publish">
        <div class="line"></div>
        <span class="title">留言</span>
      </div>
      <!-- 所有留言区 -->
      <div class="allContents"></div>
    </div>
    <!-- 右侧站长信息及广告等  -->
    <div class="right">
      <!-- 站长信息 -->
      <div class="myself"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contentList: [
        {
          name: "测试人员1",
          time: "2021.01.01 10:00",
          content: "测试用留言1",
          imgUrl: "http://localhost:8084/img/agrayfox.917e6bcc.jpg"
        },
        {
          name: "测试人员2",
          time: "2021.01.01 11:00",
          content: "测试用留言2",
          imgUrl: "http://localhost:8084/img/agrayfox.917e6bcc.jpg"
        },
        {
          name: "测试人员3",
          time: "2021.01.01 12:00",
          content: "测试用留言3",
          imgUrl: "http://localhost:8084/img/agrayfox.917e6bcc.jpg"
        },
        {
          name: "测试人员4",
          time: "2021.01.01 13:00",
          content: "测试用留言4",
          imgUrl: "http://localhost:8084/img/agrayfox.917e6bcc.jpg"
        }
      ],
      mainContent: ""
    };
  }
};
</script>
<style scoped lang="less">
#contact {
  box-sizing: border-box;
  // border: 2px dashed rgb(75, 17, 192);
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
  display: flex;
  justify-content: space-between;

  .left {
    width: 70%;
    border: 1px solid red;
    height: 700px;
    padding: 5px 10px;
    .publish {
      border: 1px dashed orangered;
      height: 300px;
      position: relative;
      .line {
        width: 3px;
        height: 20px;
        line-height: 20px;
        background-color: blue;
        // background-color: orangered;
        margin: 25px 0px 0px 30px;
        display: inline-block;
      }
      .title {
        font-family: "微软雅黑";
        font-size: 18px;
        margin-left: 20px;
        color: #333;
        position: absolute;
        top: 22.5px;
        user-select: none;
        font-weight: bold;
      }
    }
    .allContents {
      border: 1px dashed blue;
      min-height: 400px;
      margin-top: 20px;
    }
  }
  .right {
    width: 30%;
    border: 1px solid blue;
    height: 500px;
    padding: 5px 10px;
    .myself {
      border: 1px dashed red;
      min-height: 400px;
    }
  }
}
</style>
