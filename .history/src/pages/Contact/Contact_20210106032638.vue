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
            <i class="iconfont icon-tishi"></i>
            温馨提示：为了能够更好的留言交流，请务必填写正确的个人信息并文明发言。
          </p>
        </div>
        <!-- 主要表单 -->
        <form action="https://formspree.io/f/myyblyqp" method="POST" class="mainForm">
          <input type="text" name="name" class="name" placeholder="请输入昵称" autocomplete="off" />
          <input
            type="email"
            name="_replyto"
            class="replyTo"
            placeholder="请输入邮箱"
            autocomplete="off"
          />
          <textarea type="text" name="main" class="main" placeholder="在此处输入留言内容" />
          <input type="submit" value="提交留言" class="submit" />
        </form>
      </div>
      <!-- 所有留言区 -->
      <div class="allContents">
        <div class="title">最新留言</div>
        <div class="line"></div>
        <div class="contents">
          <ul class="contentsList">
            <li v-for="(item, index) in contentsList" :key="index">
              <img :src="item.imgUrl" alt="" />
              <p class="name">
                {{ item.name }}<span v-show="item.isvip" class="vip">{{ item.vip }}</span>
              </p>
              <span class="time">{{ item.time }}</span>
              <p class="content">{{ item.content }}</p>
              <span class="reply">回复</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 右侧站长信息及广告等  -->
    <div class="right">
      <!-- 站长信息 -->
      <div class="myself">站长信息模块</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contentsList: [
        {
          name: "测试员小D",
          time: "2021.01.05 21:00",
          content: "测试用留言4",
          imgUrl: "http://localhost:8081/img/agrayfox.917e6bcc.jpg",
          isvip: true,
          vip: "开发组",
          time: "2021年1月5日 22:13分"
        },
        {
          name: "测试员小C",
          time: "2021.01.03 14:00",
          content: "测试用留言3",
          imgUrl: "http://localhost:8081/img/agrayfox.917e6bcc.jpg",
          isvip: true,
          vip: "测试组",
          time: "2021年1月4日 14:26分"
        },
        {
          name: "测试员小B",
          time: "2021.01.02 12:00",
          content: "测试用留言2",
          imgUrl: "http://localhost:8081/img/agrayfox.917e6bcc.jpg",
          isvip: true,
          vip: "野生德鲁伊",
          time: "2021年1月4日 10:52分"
        },
        {
          name: "张明明",
          time: "2021.01.01 17:00",
          content: "大家好,欢迎来到我的网站,欢迎各位踊跃发言,一起进步!",
          imgUrl: "http://localhost:8081/img/agrayfox.917e6bcc.jpg",
          isvip: true,
          vip: "站长",
          time: "2021年1月3日 20:00分"
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
        color: #007fff;
        text-shadow: 1px 1px 1px 1px;
        margin-left: 25px;
        margin-top: 5px;
        user-select: none;
        font-weight: bold;
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
        padding: 10px 0px 10px 10px;
        border: 1px solid #bae7ff;
        border-radius: 5px;
        margin-top: 30px;
        margin-left: 10px;
        font-family: "微软雅黑";
        font-size: 14px;
        text-align: left;
        color: #666;
        user-select: none;
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
          margin-top: 10px;
          cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
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
          color: #333;
          font-family: "微软雅黑";
          padding-left: 10px;
          width: 550px;
          margin-left: 25px;
          cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
        }
        .replyTo:focus {
          color: #666;
        }
        .main {
          outline: none;
          border: 1px solid #dcdfe6;
          height: 100px !important;
          border-radius: 5px;
          font-size: 14px;
          color: #333;
          font-family: "微软雅黑";
          padding-left: 10px;
          width: 780px !important;
          margin-top: 20px;
          margin-left: 10px;
          padding: 10px 10px;
          text-align: top;
          cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
        }
        .main:focus {
          color: #666;
        }
        .submit {
          outline: none;
          background-color: rgba(#409eef);
          color: #fff;
          font-family: "微软雅黑";
          font-size: 16px;
          text-align: center;
          height: 40px;
          line-height: 40px;
          border: none;
          border-radius: 5px;
          width: 98.5% !important;
          margin-top: 10px;
          margin-left: 10px;
        }
        .submit:hover {
          cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
        }
      }
    }
    .allContents {
      // border: 1px dashed blue;
      margin-top: 70px;
      position: relative;
      min-height: 1200px;
      .title {
        text-align: left;
        font-family: "微软雅黑";
        font-size: 18px;
        // color: #333;
        color: #007fff;
        text-shadow: 1px 1px 1px 1px;
        margin-left: 25px;
        margin-top: 5px;
        user-select: none;
        font-weight: bold;
      }

      .line {
        width: 100px;
        height: 3px;
        line-height: 22px;
        background-color: #007fff;
        // background-color: orangered;
        margin: 10px 0px 0px 10px;
        display: inline-block;
        position: absolute;
        left: 0px;
        top: 25px;
      }
      .contents {
        .contentsList {
          list-style-type: none;
          height: 100px;
          margin-top: 30px;
          li {
            background-color: #fafafa;
            border: 1px solid blue;
            font-family: "微软雅黑";
            position: relative;
            min-height: 200px;
            img {
              width: 100px;
              height: 70px;
              position: absolute;
              top: 10px;
              left: 8px;
            }
            .name {
              position: absolute;
              top: 20px;
              left: 100px;
              color: #333;
              .vip {
                vertical-align: bottom;
                display: inline-block;
                color: #fff;
                background-color: #409eff;
                padding: 1px 5px;
                border: 1px solid #eaeaea;
                border-radius: 5px;
                font-family: "微软雅黑";
                font-size: 12px;
                margin-left: 10px;
                height: 15px;
                line-height: 15px;
              }
            }
            .time {
              position: absolute;
              top: 45px;
              left: 100px;
              color: #666;
              font-family: "consolas";
            }

            .content {
              position: absolute;
              top:90px;
              left:30px;
              color:#333;
            }
            .reply{
              font-size:12px;
              font-family: "Microsoft Yahei";
              background-color: #444;
              color:#fff;
            }
          }
        }
      }
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
