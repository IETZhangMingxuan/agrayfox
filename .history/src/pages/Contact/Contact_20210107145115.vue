<template>
  <div id="contact">
    <!-- 左侧留言板 -->
    <div class="left">
      <!-- 发布留言区 -->
      <div class="publish">
        <div class="title">评论</div>
        <div class="line"></div>
        <!-- 提示 -->
        <div class="mention">
          <p>
            <i class="iconfont icon-tishi"></i>
            温馨提示：为了能够更好的留言交流，请务必填写正确的个人信息并文明发言。
          </p>
        </div>
        <!-- 主要表单 -->
        <form action="https://formspree.io/f/myyblyqp" method="POST" class="mainForm" id="my-form">
          <input type="text" name="name" class="name" placeholder="请输入昵称" autocomplete="off" v-model="myName"/>
          <input
            type="email"
            name="_replyto"
            class="replyTo"
            placeholder="请输入邮箱"
            autocomplete="off"
            v-model="myEmail"
          />
          <textarea type="text" name="main" class="main" placeholder="在此处输入留言内容" v-model="myMessage"/>
          <!-- <button id="my-form-button" class="submit" @click="sendEmail">提交评论</button> -->
          <input type="submit" value="提交评论" class="submit" @click="sendEmail" v-model="submitText"/>
          <!-- <p id="my-form-status" style="background:#eaeaea;margin-top:20px;padding:10px;">待发送</p> -->
        </form>
      </div>
      <!-- 所有留言区 -->
      <div class="allContents">
        <div class="title">全部留言 ({{ contentsList.length }})</div>
        <div class="line"></div>
        <div class="contents">
          <ul class="contentsList">
            <li
              v-for="(item, index) in contentsList.slice(currentIndex, currentIndex + pageSize)"
              :key="index"
            >
              <img :src="item.imgUrl" alt="" />
              <p class="name">
                {{ item.name
                }}<span v-show="item.isvip" class="vip" :style="`background-color:${item.color}`">{{
                  item.vip
                }}</span>
              </p>
              <span class="time">{{ item.time }}</span>
              <pre class="content">{{ item.content }}</pre>
              <span class="floor">{{ item.id }}楼</span>
              <span class="reply">回复</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 添加分页器 -->
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next,sizes,total"
          :total="contentsList.length"
          class="elementUIPagination"
          :page-sizes="[2, 3, 4, 5, 10]"
          :page-size="pageSize"
          :current-page="this.currentPage"
          @current-change="currentPageChange"
          @size-change="sizeChange"
        ></el-pagination>
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
import axios from 'axios'
export default {
  data() {
    return {
      contentsList: [
        {
          id: 13,
          name: "陈欣欣",
          content: `嘻嘻,终于上线啦~`,
          imgUrl: "https://t1.hxzdhn.com/uploads/tu/201805/9999/4a4431c8fa.jpg",
          isvip: true,
          vip: "小仙女",
          time: "2021年1月6日 19:02分",
          color: "orange"
        },
        {
          id: 12,
          name: "余鑫睿",
          content: `这个博客我喜欢~`,
          imgUrl:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1186877255,688740697&fm=11&gp=0.jpg",
          isvip: false,
          vip: "测试组",
          time: "2021年1月6日 18:34分"
        },
        {
          id: 11,
          name: "测试人员小D",
          content: `测试分页器`,
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F69%2F80%2F595f67c2aff1e_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612487556&t=11c946602a69f40b7f16d8dd388ad884",
          isvip: true,
          vip: "测试组",
          time: "2021年1月6日 16:52分",
          color: "#00A4FF"
        },
        {
          id: 10,
          name: "张明明",
          content: `新年快乐`,
          imgUrl:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1341188422,709637882&fm=26&gp=0.jpg",
          isvip: true,
          vip: "站长",
          time: "2021年1月6日 15:49分",
          color: "orange"
        },
        {
          id: 9,
          name: "手机用户Ada",
          content: `Hello World`,
          imgUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2861149065,2862383187&fm=26&gp=0.jpg",
          isvip: false,
          vip: "",
          time: "2021年1月6日 14:53分"
        },
        {
          id: 8,
          name: "测试人员小C",
          content: `数字英文特殊符号测试\r\n!@#$%^&*()_+1234567890qwertyuiopasdfghjklzxcvbnm`,
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F69%2F80%2F595f67c2aff1e_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612487556&t=11c946602a69f40b7f16d8dd388ad884",
          isvip: true,
          vip: "测试组",
          time: "2021年1月6日 13:20分",
          color: "#00A4FF"
        },
        {
          id: 7,
          name: "测试人员小B",
          content: `测试专用................\r\n测试专用................\r\n测试专用................\r\n测试专用...............\r\n测试专用................`,
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F69%2F80%2F595f67c2aff1e_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612487556&t=11c946602a69f40b7f16d8dd388ad884",
          isvip: true,
          vip: "测试组",
          time: "2021年1月6日 10:44分",
          color: "#00A4FF"
        },
        {
          id: 6,
          name: "测试人员小A",
          content: "这是一段测试文本....\r\nThis is a test text....",
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F69%2F80%2F595f67c2aff1e_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612487556&t=11c946602a69f40b7f16d8dd388ad884",
          isvip: true,
          vip: "测试组组长",
          time: "2021年1月6日 09:13分",
          color: "red"
        },
        {
          id: 5,
          name: "路人甲",
          content: "路过来打个酱油",
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20130624%2F20130624134512-82321674.jpg&refer=http%3A%2F%2Fpic.baike.soso.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612469463&t=3dbe0ff61ab7d3a3947c5b56a9034497",
          isvip: false,
          vip: "",
          time: "2021年1月5日 22:40分"
        },
        {
          id: 4,
          name: "玛法里奥·怒风",
          time: "2021.01.05 21:00",
          content: "...zzZ...zzZ...zzZ",
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2570888551,3866070349&fm=26&gp=0.jpg",
          isvip: true,
          vip: "大德鲁伊",
          time: "2021年1月5日 22:13分",
          color: "#00A4FF"
        },
        {
          id: 3,
          name: "卡德加",
          time: "2021.01.03 14:00",
          content: "为了艾泽拉斯!",
          imgUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3341890544,1435051804&fm=26&gp=0.jpg",
          isvip: true,
          vip: "三修大法师",
          time: "2021年1月4日 14:26分",
          color: "#00A4FF"
        },
        {
          id: 2,
          name: "萨尔",
          time: "2021.01.02 12:00",
          content: "为了部落!",
          imgUrl:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3380940217,696179768&fm=26&gp=0.jpg",
          isvip: true,
          vip: "前部落大酋长",
          time: "2021年1月4日 10:52分",
          color: "#00A4FF"
        },
        {
          id: 1,
          name: "张明明",
          time: "2021.01.01 17:00",
          content: "大家好,欢迎来到我的网站,欢迎各位踊跃发言,一起进步!",
          imgUrl:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1341188422,709637882&fm=26&gp=0.jpg",
          isvip: true,
          vip: "站长",
          time: "2021年1月3日 20:00分",
          color: "orange"
        }
      ],
      /* 初始显示的首个索引:可修改,但不建议 */
      currentIndex: 0,
      /* 返回的总条数:不可修改 */
      totalSize: "",
      /* 每页显示条数:可修改 */
      pageSize: 10,
      /* 当前显示页:可修改,但不建议 */
      currentPage: 1,
      myEmail: "",
      myMessage: "",
      myName: "",
      myStatus: "",
      submitText:"提交评论"

    };
  },
  methods: {
    // 分页器事件:当前页发生改变后触发
    currentPageChange(index, currentPage) {
      this.currentPage = index;
      console.log(this.currentPage);
      if (this.currentPage === 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = this.pageSize * (index - 1);
      }
    },
    // 分页器事件:当前页显示数量发生改变时触发
    sizeChange(size) {
      this.pageSize = size;
    },
    // 提交评论事件
    async sendEmail(ev) {
      console.log("准备发送邮件");
      ev.preventDefault();
      console.log("默认发送方式被取消了");
      console.log("准备手动发送");
      this.submitText = "发送中"
      //   this.myStatus = "发送中...";
      // await this.$message({
      //   message: "发送中...请等待...",
      //   type: "warning",
      //   offset: "100",
      //   duration: "4000"
      // });
      var data = new FormData(this.$refs.formX);
      console.log(data);
      // await Message.closeAll();
      await axios({
        url: "https://formspree.io/f/myyblyqp",
        method: "post",
        headers: {
          Accept: "application/json"
        },
        data: {
          email: this.myEmail,
          message: this.myMessage,
          name: this.myName
        }
      })
        .then(response => {
          console.log(response);
          console.log("已发送邮件");
          this.$message({
            message: "发送成功,待站长审核后显示",
            type: "success",
            duration: "3000",
            offset: "300",
            showClose: true
          });
          //   this.myStatus = "发送完毕...";
          this.myEmail = "";
          this.myMessage = "";
          this.myName = "";
        })
        .catch(error => {
          console.log(error);
          this.$message({
            message: "发送失败,请检查信息是否正确",
            type: "error",
            duration: "3000",
            offset: "300",
            showClose: true
          });
          //   this.myStatus = "发送失败,请检查邮箱是否正确";
          //   this.myEmail = "";
          //   this.myMessage = "";
          //   this.myName = "";
        });
    }
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
  // 左侧留言模块
  .left {
    width: 70%;
    padding: 5px 10px;
    // 提交留言
    .publish {
      // border: 1px dashed orangered;
      height: 300px;
      position: relative;
      .title {
        text-align: left;
        font-family: "微软雅黑";
        font-size: 16px;
        // color: #333;
        color: #007fff;
        text-shadow: 1px 1px 1px 1px;
        margin-left: 25px;
        margin-top: 5px;
        user-select: none;
        font-weight: bold;
      }
      .line {
        width: 60px;
        height: 2px;
        line-height: 22px;
        background-color: #409eef;
        // background-color: orangered;
        margin: 10px 0px 0px 10px;
        display: inline-block;
        position: absolute;
        left: 0px;
        top: 18px;
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
        .iconName {
          background: #eaeaea;
          width: 50px;
          height: 50px;
          .icon-username {
            color: #fff;
          }
        }
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
          background-color: #0876e4;
        }
      }
    }
    // 全部留言
    .allContents {
      // border: 1px dashed blue;
      margin-top: 100px;
      position: relative;
      .title {
        text-align: left;
        font-family: "微软雅黑";
        font-size: 16px;
        // color: #333;
        color: #007fff;
        text-shadow: 1px 1px 1px 1px;
        margin-left: 15px;
        margin-top: 5px;
        user-select: none;
        font-weight: bold;
      }
      .line {
        width: 108px;
        height: 3px;
        line-height: 22px;
        background-color: #007fff;
        margin: 10px 0px 0px 10px;
        display: inline-block;
        position: absolute;
        left: 0px;
        top: 20px;
      }
      .contents {
        .contentsList {
          list-style-type: none;
          margin-top: 30px;
          margin-bottom: 20px;
          // border: 1px solid red;
          li {
            // background: linear-gradient(45deg, #fafafa, #fff);
            font-family: "微软雅黑";
            margin-top: 12px;
            border-left: 3px solid rgba(#409eef, 0.5);
            border-right: 2px solid #fafafa;
            border-top: 1px solid transparent;
            border-bottom: 1px solid #eaeaea;
            position: relative;
            // box-shadow: 2px 2px 2px #eaeaea;
            box-shadow: 2px 2px 2px #f9f9f9;
            img {
              width: 45px;
              height: 45px;
              border-radius: 50%;
              position: absolute;
              top: 10px;
              left: 15px;
            }
            img:hover {
              opacity: 0.8;
              transform: scale(1.1);
            }
            .name {
              position: absolute;
              top: 10px;
              left: 70px;
              color: #333;
              font-weight: 700;
              letter-spacing: 1px;
              font-size: 15px;
              .vip {
                vertical-align: bottom;
                display: inline-block;
                color: #fff;
                // background-color: #409eff;
                background-color: #00a4ff;
                padding: 1px 4px;
                text-align: center;
                // border: 1px solid #eaeaea;
                border-radius: 5px;
                font-family: "微软雅黑";
                font-weight: 500;
                font-size: 1px;
                margin-left: 10px;
                margin-bottom: 0.5px;
              }
            }
            .time {
              position: absolute;
              top: 36px;
              left: 70px;
              color: #666;
              font-family: "consolas";
              font-size: 14px;
            }

            .content {
              color: #333;
              font-weight: 300;
              font-size: 15px;
              width: 650px;
              text-align: left;
              padding: 8px 10px;
              margin: 60px 0px 10px 60px;
              margin-bottom: 10px;
              margin-left: 60px;
              font-family: "Microsoft Yahei";
              line-height: 20px;
              letter-spacing: 1px;
              // border:1px solid blue;
            }

            .floor {
              position: absolute;
              top: 5px;
              right: 12px;
              font-size: 14px;
              color: #999;
            }
            .reply {
              box-sizing: border-box;
              font-size: 12px;
              font-family: "Microsoft Yahei";
              background-color: #999;
              color: #fff;
              padding: 3px 6px;
              border-radius: 4px;
              position: absolute;
              right: 10px;
              bottom: 10px;
              cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/default.cur), auto !important;
            }
            .reply:hover {
              background-color: #666;
              background-color: #f53333;
              color: #fff;
              box-sizing: border-box;
            }
          }
          li:first-child {
            margin-top: 0px;
          }
          li:hover {
            transform: translateX(-10px);
            box-shadow: 1px 1px 2px #eaeaea;
          }
        }
      }
    }
    // 分页器
    .pagination {
      // border:1px solid blue;
      margin-bottom: 130px;
      font-family: "Microsoft Yahei,", sans-serif;
      .elementUIPagination {
        font-weight: 400;
        transform: scale(1.1);
        .el-pager {
          li {
            background-color: red !important;
            button {
              cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/default.cur), auto !important;
              .el-icon-arrow-right {
                cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/default.cur), auto !important;
              }
            }
          }
        }
      }
    }
  }
  // 右侧站长信息模块
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
