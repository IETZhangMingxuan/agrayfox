<template>
  <div id="contact">
    <!-- 左侧留言板 -->
    <div class="left">
      <!-- 发布留言区 -->
      <div class="publish">
        <div class="title">留言</div>
        <div class="line"></div>
        <!-- 提示 -->
        <div class="mention">
          <p>
            温馨提示：为了能够更好的留言交流，请务必填写正确的个人信息并文明发言。
          </p>
        </div>
        <!-- 主要表单 -->
        <form action="https://formspree.io/f/myyblyqp" method="POST" class="mainForm">
          <input type="text" name="name" class="name" placeholder="请输入昵称" />
          <input type="email" name="_replyto" class="replyTo" placeholder="请输入邮箱" />
          <input type="text" name="main" class="main" placeholder="请在此留言" />
          <input type="submit" value="提交" class="submit" />
        </form>
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
      // border: 1px dashed orangered;
      height: 300px;
      position: relative;
      .title {
        text-align: left;
        font-family: "微软雅黑";
        font-size: 18px;
        // color: #333;
        color: #409eff;
        text-shadow: 1px 1px 1px 1px;
        margin-left: 25px;
        margin-top: 5px;
        user-select: none;
        font-weight: bold;
      }
      .title:hover {
        color: rgba(0, 149, 255, 1);
      }
      .line {
        width: 70px;
        height: 3px;
        line-height: 22px;
        background-color: #409eef;
        // background-color: orangered;
        margin: 10px 0px 0px 10px;
        display: inline-block;
        position: absolute;
        left: 0px;
        top: 20px;
      }
      .mention {
        background-color: rgba(#e6f7ff);
        padding: 10px 0px 10px 20px;
        border: 1px solid #bae7ff;
        border-radius: 5px;
        margin-top: 20px;
        margin-left: 10px;
        font-family: "微软雅黑";
        font-size: 14px;
        text-align: left;
        color: #666;
      }
      .mainForm {
        // border: 1px solid black;
        margin-top: 10px;
        // display: flex;
        // justify-content: space-around;
        // flex-wrap: wrap;
        .name {
          outline: none;
          border: 1px solid #dcdfe6;
          height: 40px;
          line-height: 40px;
          border-radius: 5px;
          font-size: 14px;
          color: #333;
          font-family: "微软雅黑";
          padding-left: 10px;
          margin-left: 10px;
          width: 200px;
        }
        .name:focus {
          color: #666;
        }
        .replyTo {
          outline: none;
          outline: none;
          border: 1px solid #dcdfe6;
          height: 40px;
          line-height: 40px;
          border-radius: 5px;
          font-size: 14px;
          color: #eaeaea;
          font-family: "微软雅黑";
          padding-left: 10px;
          width: 550px;
          margin-left: 19px;
        }
        .replyTo:focus{
          color:#666;
        }
        .main {
          outline: none;
          outline: none;
          outline: none;
          border: 1px solid #dcdfe6;
          height: 40px;
          line-height: 40px;
          border-radius: 5px;
          font-size: 14px;
          color: #eaeaea;
          font-family: "微软雅黑";
          padding-left: 10px;
          width: 550px;
          margin-top:20px;
          margin-left:10px;
          width:100%;
          padding:0 10px;
        }
        .submit {
          outline: none;
        }
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
