<template>
  <div id="contact">
    <!-- 左侧留言板 -->
    <div class="left">
      <!-- 发布留言区 -->
      <div class="publish animate__animated infinite animate__slideInLeft">
        <i class="iconfont icon-bianji"></i>
        <div class="title">
          <span>评论</span>
        </div>
        <!-- <div class="line"></div> -->
        <!-- 提示 -->
        <div class="mention">
          <i class="iconfont icon-tishi"></i>
          <span>温馨提示：为了能够更好的留言交流，请务必填写正确的个人信息并文明发言。</span>
        </div>
        <!-- 主要表单 -->
        <form action="https://formspree.io/f/myyblyqp" method="POST" class="mainForm" id="my-form">
          <div class="nameInput">
            <i class="iconfont icon-xingming"></i>
            <input
              type="text"
              name="name"
              class="name"
              placeholder="请输入昵称"
              autocomplete="off"
              v-model="myName"
            />
          </div>
          <div class="emailInput">
            <i class="iconfont icon-youxiang"></i>
            <input
              type="email"
              name="_replyto"
              class="replyTo"
              placeholder="请输入邮箱"
              autocomplete="off"
              v-model="myEmail"
            />
          </div>

          <textarea
            type="text"
            name="main"
            class="main"
            placeholder="在此处输入留言内容"
            v-model="myMessage"
          />
          <!-- 验证码功能 -->
          <div class="verticalNum">
            <i class="iconfont icon-yanzhengma2"></i>
            <input
              type="text"
              placeholder="请输入验证码(区分大小写)"
              v-model="verticalNum"
              class="verticalInput"
            />
            <div class="verticalImg">
              <VerificationCode :changeCode.sync="identifyCode"></VerificationCode>
            </div>
          </div>
          <!-- 验证码功能结束 -->

          <input type="button" value="清空" class="clearAll" @click="clearAllContents" />
          <input
            type="submit"
            value="发布评论"
            class="submit"
            @click="sendEmail"
            v-model="submitText"
            ref="submitBtn"
          />
          <!-- <p id="my-form-status" style="background:#eaeaea;margin-top:20px;padding:10px;">待发送</p> -->
        </form>
      </div>
      <!-- 广告区 -->
      <!-- <div class="ads">
        <a href="https://www.aliyun.com/minisite/goods?userCode=l1qstn8f" target="_blank"
          ><img src="https://codelin.site/uploads/15826091071529725468246.png" alt=""
        /></a>
      </div> -->
      <!-- 留言板区 -->
      <div class="allContents animate__animated infinite animate__slideInLeft">
        <i class="iconfont icon-liuyan2"></i>
        <div class="title">
          <span>留言板</span>
          <span class="allNums">({{ contentsList.length }})</span>
        </div>
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
              <div class="answerHim" v-show="item.answerHim">
                <span class="zhanzhang">站长</span>
                <span class="zhanZhangSays"
                  >灰狐: {{ item.answerWhat }}
                  <!-- <div class="replyZhanZhang">回复</div> -->
                  <!-- <div class="reportZhanZhang">举报</div> -->
                </span>
                <div class="othersAnswer"></div>
              </div>
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
      <div class="myself animate__animated infinite animate__jackInTheBox">
        <div class="line"></div>
        <div class="title">关于站长</div>
        <img src="./images/cherry.jpg" alt="" class="myPhoto" />
        <div class="basicInfo">
          <p class="hi">昵称</p>
          <p class="myName">GrayFox</p>
          <p class="hi">邮箱</p>
          <p class="myEmail">IETZhangMingxuan@gmail.com</p>
          <p class="hi">微信</p>
          <p class="myEmail">musixiong321</p>
          <p class="hi">个人主页</p>
          <p class="myWebsite">http://www.agrayfox.com</p>
        </div>
        <div class="horizon"></div>
        <div class="intro">
          <p class="first">
            你好,这里是灰狐,欢迎访问我的个人主页.博主是一名前端码农,设计爱好者,中文名是张明轩,英文名是GrayFox
          </p>
          <p class="second">
            我目前在魔都一家互联网公司供职,平时的爱好比较广泛,喜欢研究一些有趣的新技术,喜欢读书写字写Bug,旅游运动养奶喵。如你所见,这是我的个人博客主页,整个前端界面由我独自设计和开发,当前是Version
            1.0版本,后续会慢慢对网站进行定期更新,也会开发该网站的小程序版本。随时欢迎大家来逛逛,如果需要在网站里添加哪些功能或者提供一些建议都可以在左边评论区给我留言,如果急需联系本人,也可以通过上方的联系方式立刻与我联系.我还可以帮忙给需要的人自助建站,配置服务器环境.
          </p>
        </div>
        <div class="qq" style="margin-top:-10px;padding-bottom:10px;">
          <a
            href="https://api.66mz8.com/api/qq.talk.php?qq=1628029199"
            style="text-decoration:none;"
          >
            <i class="iconfont icon-QQ1" style="font-size:1.8em;color:#666;padding-bottom:5px;"></i>
          </a>
        </div>
      </div>
      <!-- 网站发展历程 -->
      <div>
        <Devoloped />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      contentsList: [
        {
          id: 14,
          name: "测试人员小D",
          content: `测试留言板后台接口`,
          imgUrl:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2956599290,3127157258&fm=26&gp=0.jpg",
          isvip: true,
          vip: "测试组",
          time: "2021年1月7日 16:45分",
          color: "#00A4FF",
          answerHim: true,
          answerWhat: "测试成功"
        },
        {
          id: 13,
          name: "奈奈",
          content: `嘻嘻,终于上线啦~`,
          imgUrl: "https://t1.hxzdhn.com/uploads/tu/201805/9999/4a4431c8fa.jpg",
          isvip: true,
          vip: "会员",
          time: "2021年1月6日 19:02分",
          color: "orange",
          answerHim: true,
          answerWhat: "嗯呐~"
        },
        {
          id: 12,
          name: "余鑫睿",
          content: `这个博客我喜欢`,
          imgUrl:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1186877255,688740697&fm=11&gp=0.jpg",
          isvip: false,
          vip: "测试组",
          time: "2021年1月6日 18:34分",
          answerHim: true,
          answerWhat: "谢谢,我也喜欢"
        },
        {
          id: 11,
          name: "测试人员小D",
          content: `测试分页器`,
          imgUrl:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2956599290,3127157258&fm=26&gp=0.jpg",
          isvip: true,
          vip: "测试组",
          time: "2021年1月6日 16:52分",
          color: "#00A4FF",
          answerHim: true,
          answerWhat: "测试成功"
        },
        {
          id: 10,
          name: "灰狐",
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
          time: "2021年1月6日 14:53分",
          answerHim: true,
          answerWhat: "Hello World"
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
          color: "#00A4FF",
          answerHim: true,
          answerWhat: "测试成功"
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
          color: "#00A4FF",
          answerHim: true,
          answerWhat: "测试成功"
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
          color: "red",
          answerHim: true,
          answerWhat: "这是一段回复文本"
        },
        {
          id: 5,
          name: "路人甲",
          content: "路过来打个酱油",
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp3.ssl.cdn.btime.com%2Ft01471ac02248e506c6.jpg%3Fsize%3D640x613&refer=http%3A%2F%2Fp3.ssl.cdn.btime.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613237828&t=310c45a13c39c4824ce53e1644cfafa1",
          isvip: false,
          vip: "",
          time: "2021年1月5日 22:40分",
          answerHim: true,
          answerWhat: "好"
        },
        {
          id: 1,
          name: "灰狐",
          content: "大家好,欢迎来到我的网站,欢迎各位踊跃发言!",
          imgUrl:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1341188422,709637882&fm=26&gp=0.jpg",
          isvip: true,
          vip: "站长",
          time: "2020年10月01日 10:03分",
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
      /* 下面是留言板所需数据,修改前务必想清楚 */
      myEmail: "",
      myMessage: "",
      myName: "",
      submitText: "提交评论",
      /* 验证码数据 */
      identifyCode: "",
      verticalNum: ""
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
    // 提交评论事件,使用了Formspree用于后台管理
    async sendEmail(ev) {
      // console.log("准备发送邮件");
      ev.preventDefault();
      // console.log("默认发送方式被取消了");
      // console.log("准备手动发送");
      this.submitText = "发送中...";
      this.$refs.submitBtn.style.background = "orange";
      // 合法性校验
      if (!this.myName || this.myName.length < 1) {
        //不合格
        this.$message({
          message: "用户名不能为空",
          type: "error",
          duration: 0,
          duration: 1500,
          offset: "275",
          showClose: true,
          customClass: "nonono",
          center: true
        });
        this.submitText = "重新提交";
        this.$refs.submitBtn.style.background = "#ff7171";
      } else if (!this.myEmail || this.myEmail.length < 1) {
        //不合格
        this.$message({
          message: "邮箱地址不能为空",
          type: "error",
          duration: 1500,
          offset: "275",
          showClose: true,
          customClass: "nonono",
          center: true
        });
        this.submitText = "重新提交";
        this.$refs.submitBtn.style.background = "#ff7171";
      } else if (!this.myMessage || this.myMessage.length < 1) {
        //不合格
        this.$message({
          message: "评论内容不能为空",
          type: "error",
          duration: 1500,
          offset: "275",
          showClose: true,
          customClass: "nonono",
          center: true
        });
        this.submitText = "重新提交";
        this.$refs.submitBtn.style.background = "#ff7171";
      } else if (this.verticalNum !== this.identifyCode) {
        this.$message({
          message: "验证码不正确,请重新输入",
          type: "error",
          duration: 1500,
          offset: "275",
          showClose: true,
          customClass: "nonono",
          center: true
        });
        // this.drawPic();
        this.submitText = "重新提交";
        this.$refs.submitBtn.style.background = "#ff7171";
      } else {
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
              offset: "275",
              duration: 2500,
              showClose: true
            });
            this.$refs.submitBtn.style.background = "#409eef";
            this.myEmail = "";
            this.myMessage = "";
            this.myName = "";
            this.submitText = "提交评论";
            this.verticalNum = "";
          })
          .catch(error => {
            console.log(error);
            this.$message({
              message: "发送失败,请检查邮箱格式是否正确",
              type: "error",
              duration: 1500,
              offset: "275",
              showClose: true,
              customClass: "nonono",
              center: true
            });
            this.$refs.submitBtn.style.background = "#ff7171";
            this.submitText = "请修改后再次提交评论";
          });
      }
    },
    // 清除评论事件
    clearAllContents() {
      this.submitText = "提交评论";
      this.$refs.submitBtn.style.background = "#409eef";
      setTimeout(() => {
        this.myMessage = "";
        this.myEmail = "";
        this.myName = "";
      }, 300);
    }
  }
};
</script>
<style lang="less">
html {
  body {
    position: relative;
    #contact {
      box-sizing: border-box;
      // border: 2px dashed rgb(75, 17, 192);
      margin: 0 auto;
      text-align: center;
      margin-top: 5px;
      width: 1200px;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      // 左侧留言模块
      .left {
        width: 800px;
        padding: 10px 10px;
        // 提交留言模块(评论模块)
        .publish {
          // border: 1px dashed orangered;
          background-color: #fff;
          border-radius: 10px;
          position: relative;
          padding: 15px 25px 23px 15px;
          box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.3);
          .icon-bianji {
            font-size: 1.2em;
            position: absolute;
            left: 27px;
            top: 20px;
            color: hsl(210, 100%, 50%);
            font-weight: 300;
          }
          // 标题:评论
          .title {
            text-align: left;
            font-family: "微软雅黑";
            font-size: 16px;
            // color: #999;
            color: #007fff;
            text-shadow: 1px 1px 1px 1px;
            margin-left: 40px;
            margin-top: 3px;
            user-select: none;
            font-weight: 700;
            letter-spacing: 1px;
            // text-shadow: 1px 1px 1px #eaeaea;
          }
          // 提示区
          .mention {
            background-color: rgba(#e6a23c, 0.2);
            height: 10px;
            line-height: 10px;
            padding: 10px 0px 10px 10px;
            border-radius: 7px;
            margin-top: 15px;
            margin-left: 10px;
            font-family: "微软雅黑";
            font-size: 13px;
            text-align: center;
            color: rgba(#e6a23c);
            user-select: none;
            position: relative;
            .icon-tishi {
              position: absolute;
              top: 10px;
              left: 80px;
            }
          }
          .mainForm {
            // border: 1px solid black;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .iconName {
              background: #eaeaea;
              width: 50px;
              height: 50px;
              border: 2px solid red;
              .icon-username {
                color: #fff;
              }
            }
            // 输入昵称
            .nameInput {
              position: relative;
              .icon-xingming {
                color: rgba(#0876e4, 0.7);
                // color: rgba(#333,0.7);
                font-size: 1.3em;
                position: absolute;
                left: 20px;
                top: 34%;
              }
              .name {
                outline: none;
                border: 1px solid #dcdfe6;
                height: 35px;
                line-height: 35px;
                border-radius: 5px;
                font-size: 14px;
                // color: #0876e4;
                // color: #333;
                color: #666;
                font-family: "微软雅黑";
                padding-left: 35px;
                margin-left: 10px;
                width: 270px;
                margin-top: 8px;
                cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
              }
              .name:focus {
                color: #666;
                border: 1px solid rgba(#0876e4, 0.5);
              }
            }
            // 输入邮箱
            .emailInput {
              position: relative;
              .icon-youxiang {
                color: rgba(#0876e4, 0.7);
                // color: rgba(#333,0.7);
                font-size: 1.3em;
                position: absolute;
                left: 14px;
                top: 34%;
              }
              .replyTo {
                outline: none;
                outline: none;
                border: 1px solid #dcdfe6;
                height: 35px;
                line-height: 35px;
                border-radius: 5px;
                font-size: 14px;
                color: #333;
                font-family: "微软雅黑";
                padding-left: 45px;
                width: 380px;
                margin-top: 8px;
                cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
              }
              .replyTo:focus {
                color: #666;
                border: 1px solid rgba(#0876e4, 0.5);
              }
            }
            // 输入评论
            .main {
              outline: none;
              border: 1px solid #dcdfe6;
              height: 100px !important;
              border-radius: 5px;
              font-size: 14px;
              color: #666;
              font-family: "微软雅黑";
              padding-left: 10px;
              width: 780px !important;
              margin-top: 15px;
              margin-left: 10px;
              padding: 10px 15px;
              text-align: top;
              cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
            }
            .main:focus {
              color: #666;
              border: 1px solid rgba(#0876e4, 0.5);
            }
            // 输入验证码
            .verticalNum {
              position: relative;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              // icon图标
              .icon-yanzhengma2 {
                color: rgba(#0876e4, 0.7);
                // color: rgba(#333,0.7);
                font-size: 1.3em;
                position: absolute;
                left: 20px;
                top: 20px;
              }
              // input输入框
              .verticalInput {
                outline: none;
                border: 1px solid #dcdfe6;
                border-right: none;
                height: 35px;
                line-height: 35px;
                border-radius: 5px 0px 0px 5px;
                font-size: 14px;
                // color: #0876e4;
                // color: #333;
                color: #666;
                font-family: "微软雅黑";
                padding-left: 35px;
                margin-left: 10px;
                width: 170px;
                margin-top: 15px;
                cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
              }
              // 验证码组件包裹元素
              .verticalImg {
                // border:1px dashed blue;
                width: 100px;
                height: 35px;
                line-height: 35px;
                margin-top: 15px;
                // border: 1px solid #dcdfe6;
                border-left: none;
              }
            }
            // 清空按钮
            .clearAll {
              outline: none;
              background-color: rgba(#409eef);
              color: #fff;
              font-family: "微软雅黑";
              font-size: 14.5px;
              text-align: center;
              // width: 780px !important;
              height: 35px;
              line-height: 35px;
              border: none;
              border-radius: 5px;
              // width: 98.5% !important;
              width: 150px;
              margin-top: 15px;
              margin-left: 15px;
              letter-spacing: 2px;
            }
            .clearAll:hover {
              cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
              background-color: #0876e4;
            }
            // 提交按钮
            .submit {
              outline: none;
              background-color: rgba(#409eef);
              color: #fff;
              font-family: "微软雅黑";
              font-size: 14.5px;
              text-align: center;
              // width: 780px !important;
              height: 35px;
              line-height: 35px;
              border: none;
              border-radius: 5px;
              // width: 98.5% !important;
              width: 260px;
              margin-top: 15px;
              margin-left: 15px;
              letter-spacing: 1px;
            }
            .submit:hover {
              cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
              background-color: #0876e4;
            }
          }
        }
        .publish:hover {
          box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.4);
        }
        // 广告区
        .ads {
          img {
            width: 690px;
            height: 150px;
            padding: 0px;
            margin-top: 25px;
            margin-left: 5px;
            // border: 2px solid blue;
            border-radius: 10px;
            box-shadow: 1px 1px 2px #eaeaea;
          }
        }
        // 全部留言
        .allContents {
          padding: 20px 25px 23px 15px;
          box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.3);
          border-radius: 10px;
          // border: 1px dashed blue;
          margin-top: 25px;
          position: relative;
          .icon-liuyan2 {
            font-size: 1.7em;
            position: absolute;
            left: 20px;
            top: 17.5px;
            color: #007fff;
            font-weight: 400;
          }
          .title {
            text-align: left;
            font-family: "微软雅黑";
            font-size: 16px;
            // color: #333;
            color: #007fff;
            text-shadow: 1px 1px 1px 1px;
            margin-left: 40px;
            user-select: none;
            font-weight: 700;
            .allNums {
              font-family: consolas;
              font-size: 1.1em;
              margin-left: 5px;
            }
          }

          .contents {
            .contentsList {
              list-style-type: none;
              margin-top: 20px;
              margin-bottom: 0px;
              // border: 1px solid red;
              li {
                // border: 1px solid blue;
                // background: linear-gradient(45deg, #fafafa, #fff);
                font-family: "微软雅黑";
                margin-top: 10px;
                // border-left: 3px solid rgba(#409eef, 0.8);
                // border-right: 2px solid #fafafa;
                border-top: 1px solid #eaeaea;
                // border-bottom: 1px solid #eaeaea;
                position: relative;
                // box-shadow: 2px 2px 2px #eaeaea;
                // box-shadow: 2px 2px 2px #f9f9f9;
                // border:1px solid blue;
                img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  position: absolute;
                  top: 12px;
                  left: 12px;
                }
                img:hover {
                  opacity: 0.8;
                  // transform: scale(1.1);
                }
                .name {
                  position: absolute;
                  top: 12px;
                  left: 65px;
                  color: #333;
                  font-weight: 600;
                  letter-spacing: 1px;
                  font-size: 15px;
                  .vip {
                    vertical-align: bottom;
                    display: inline-block;
                    color: #fff;
                    // background-color: #409eff;
                    background-color: #00a4ff;
                    padding: 2px 4px;
                    text-align: center;
                    // border: 1px solid #eaeaea;
                    border-radius: 5px;
                    font-family: "微软雅黑";
                    font-weight: 500;
                    font-size: 2px;
                    margin-left: 10px;
                  }
                }
                .time {
                  position: absolute;
                  top: 38px;
                  left: 65px;
                  color: #666;
                  font-family: "consolas";
                  font-size: 14px;
                }
                .content {
                  color: #333;
                  font-weight: 400;
                  font-size: 16px;
                  width: 650px;
                  text-align: left;
                  padding: 8px 10px;
                  margin: 60px 0px 10px 60px;
                  margin-bottom: 5px;
                  margin-left: 55px;
                  font-family: "consolas";
                  line-height: 20px;
                  letter-spacing: 1px;
                  // border:1px solid blue;
                }

                .floor {
                  position: absolute;
                  top: 15px;
                  right: 10px;
                  font-size: 14px;
                  color: #666;
                  font-family: "Times New Roman", Times, serif;
                  font-weight: 400;
                }

                .answerHim {
                  // border: 2px solid blue;
                  position: relative;
                  background-color: rgba(#f4f4f4, 0.5);
                  padding: 5px 0px 5px 10px;
                  text-align: left;
                  margin-left: 65px;
                  margin-bottom: 20px;
                  font-size: 14px;
                  font-weight: 400;
                  font-family: "微软雅黑";
                  font-family: "consolas";
                  width: 500px;
                  height: 25px;
                  line-height: 25px;
                  color: #333;
                  border-left: 3px solid #888;

                  .zhanzhang {
                    margin-left: 0px;
                    background-color: orange;
                    color: #fff;
                    padding: 3px 4px;
                    border-radius: 4px;
                    font-size: 13px;
                    font-weight: 300;
                    letter-spacing: 1px;
                  }
                  .zhanZhangSays {
                    position: relative;
                    margin-left: 5px;
                    font-size: 15px;
                    color: #666;
                    .replyZhanZhang {
                      position: absolute;
                      right: -40px;
                      top: -0.5px;
                      font-size: 13px;
                      color: #5893c2;
                      // border: 2px solid red;
                      height: 20px;
                      line-height: 20px;
                    }
                    :hover {
                      color: red;
                      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur),
                        auto !important;
                    }
                    .reportZhanZhang {
                      position: absolute;
                      right: -70px;
                      top: -0.5px;
                      font-size: 13px;
                      color: #5893c2;
                      // border: 2px solid red;
                      height: 20px;
                      line-height: 20px;
                    }
                    :hover {
                      color: red;
                      cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur),
                        auto !important;
                    }
                  }
                }
              }
              li:first-child {
                margin-top: 0px;
              }
              // li:hover {
              //   // transform: translateX(-5px);
              //   // box-shadow: 1px 1px 2px #999;
              //   // border-left: 3px solid rgba(#409eef, 0.8);
              // }
            }
            .contentsList:first-child {
              border-color: transparent;
            }
          }
        }
        .allContents:hover {
          box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.4);
        }
        // 分页器
        .pagination {
          box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.3);
          border-radius: 10px;
          padding: 15px 25px;
          // border:1px solid blue;
          margin-bottom: 130px;
          margin-top: 15px;
          font-family: "Microsoft Yahei,", sans-serif;
          .elementUIPagination {
            font-weight: 400;
            transform: scale(1.1);
            .el-pager {
              li {
                font-family: "consolas";
                font-size: 14px;
                button {
                  cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/default.cur), auto !important;
                  .el-icon-arrow-right {
                    cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/default.cur), auto !important;
                  }
                }
              }
              li.active {
                color: #fff;
                background-color: #0876e4;
              }
            }
            .el-input__inner {
              font-family: "consolas";
              font-size: 14px;
            }
            .el-pagination__total {
              // color: red !important;
              font-family: "consolas";
              font-size: 13px;
            }
          }
        }
      }
      // 右侧站长信息模块
      .right {
        // width: 38%;
        width: 360px;
        // border: 1px solid blue;
        padding: 0px;
        margin-top: 10px;
        .myself {
          // border: 1px dashed red;
          background-color: #fff;
          box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.3);
          border-radius: 10px;
          position: relative;
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
          .myPhoto {
            position: absolute;
            top: 60px;
            left: 150px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
          .basicInfo {
            // border: 1px solid blue;
            font-family: "Microsoft Yahei";
            padding: 140px 25px;
            text-align: left;
            .hi {
              color: #666;
              font-size: 14px;
              font-weight: 300;
              margin-top: 5px;
              letter-spacing: 1px;
            }
            .myName,
            .myEmail,
            .myWebsite {
              color: #555;
              font-size: 14.5px;
              font-weight: 600;
              // font-family: "consolas";
              font-family:"Microsoft Yahei";
              padding: 2px 0px 5px 0px;
              height: 20px;
              line-height: 20px;
            }
          }
          .horizon {
            background-color: #eaeaea;
            width: 90%;
            height: 1px;
            margin: -115px auto;
          }
          .intro {
            // border: 1px solid blue;
            margin-top: 120px;
            font-family: "Microsoft Yahei";
            font-weight: 400;
            text-align: left;
            color: #777;
            font-size: 13.5px;
            padding: 20px 20px;
            line-height: 22px;
            letter-spacing: 1px;
            .first {
              // text-indent: 25px;
              margin-top: 5px;
            }
            :hover {
              color: #007fff;
            }
            .second {
              // text-indent: 25px;
              margin-top: 10px;
            }
            .third {
              // text-indent: 25px;
              margin-top: 10px;
            }
          }
        }
        .myself:hover {
          box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.6);
        }
        // 网站发展历程
        // 已封装成组件
      }
    }
    /* element-ui的message样式自定义更改 */
    .el-message {
      padding: 10px 0px;
    }
    .el-message--error,
    .el-message--success {
      // background-color: rgba(red, 0.1);
      border-radius: 8px;
      // top: 315px;
      min-width: 300px;
    }
    .el-icon-error,
    .el-icon-success {
      // color: rgba(red,0.8) !important;
      padding: 2px 10px !important;
      margin-right: 0px;
    }
    .el-message__content {
      font-size: 14px;
      font-family: "微软雅黑";
      font-weight: 300;
      letter-spacing: 1px;
      // color: rgba(red,0.8) !important;
    }
  }
}
</style>
