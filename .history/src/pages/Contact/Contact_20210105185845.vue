<template>
  <div id="contact">
    留言板组件
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
  border: 2px dashed rgb(75, 17, 192);
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
  #hotweibo {
    border: 1px solid blue;
    box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
    width: 30%;
    height: 400px;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 10px;
    .header {
      // border: 1px dashed red;
      margin-top: 20px;
      position: relative;
      .line {
        width: 3px;
        height: 20px;
        line-height: 20px;
        background-color: #409eef;
        margin: 25px 0px 0px 30px;
        display: inline-block;
      }
      .title {
        position: absolute;
        top: 22.5px;
        font-family: "华文中宋";
        font-size: 16px;
        font-weight: bold;
        margin-left: 20px;
        color: #666;
      }
      .change {
        font-family: "微软雅黑";
        font-size: 12px;
        margin-left: 30px;
        color: #666;
        position: absolute;
        top: 25px;
        right: 30px;
      }
    }
    .main {
      .hotWeiboList {
        list-style-type: none;
      }
    }
  }
}
</style>
