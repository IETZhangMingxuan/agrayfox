<template>
  <div id="contact" ref="testABC">
    <!-- 左侧留言板 -->
    <div class="left">
      <!-- 发布留言区 -->
      <div class="publish animate__animated infinite animate__slideInLeft">
        <!-- <i class="iconfont icon-bianji"></i> -->
        <svg class="icon icon-liuyan" aria-hidden="true">
          <use xlink:href="#icon-liuyan"></use>
        </svg>
        <div class="title">
          <span>评论</span>
        </div>
        <!-- <div class="line"></div> -->
        <!-- 提示 -->
        <div class="mention">
          <i class="iconfont icon-tishi"></i>
          <span
            >温馨提示：验证码需要区分大小写，如果无法识别请再次点击验证码图片生成新的验证码。</span
          >
        </div>
        <!-- 主要表单 -->
        <form action="https://formspree.io/f/myyblyqp" method="POST" class="mainForm" id="my-form">
          <!-- 操作判断提示框 -->
          <div
            class="formMention animate__animated animate__slideInDown"
            v-if="isMentionShow"
            :class="{
              mentionRed: isMentionRed,
              mentionGreen: isMentionGreen
            }"
          >
            <p class="mentionWrapper">{{ mention }}</p>
          </div>
          <div class="userInfo">
            <span v-if="!userInfo.userInfo" class="userName"
              >请先<span class="plzLogin" @click="$router.push('/login')">登录</span
              >后才可以评论哦</span
            >
            <span class="userName" v-else
              ><span>你好，</span><span class="welcomeUser">{{ userInfo.userInfo.username }}</span
              >！欢迎来到我的网站，有什么建议或者问题可以在下方给我留言哦，谢谢。</span
            >
          </div>
          <textarea
            type="text"
            name="main"
            class="main"
            placeholder="在此处输入留言内容"
            v-model.trim="myMessage"
          />
          <!-- 小狐狸svg -->
          <svg class="icon icon-huli" aria-hidden="true">
            <use xlink:href="#icon-huli"></use>
          </svg>
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
        <!-- <i class="iconfont icon-liuyan2"></i> -->
        <div class="title">
          <svg class="icon icon-xiezi" aria-hidden="true">
            <use xlink:href="#icon-xiezi"></use>
          </svg>
          <span>留言板</span>
          <span class="allNums">({{ reverseComments.length }})</span>
        </div>
        <div class="contents">
          <h3 v-if="!this.reverseComments[2]">正在加载中...</h3>
          <ul class="contentsList" v-else>
            <li
              v-for="(item, index) in reverseComments.slice(currentIndex, currentIndex + pageSize)"
              :key="index"
            >
              <img :src="item.profile" alt="" />
              <p class="name">
                {{ item.username }}
              </p>
              <span class="time">{{ item.time }}</span>
              <div class="content">
                <p>{{ item.content }}</p>
              </div>
              <span class="floor">{{ reverseComments.length - index - currentIndex }}楼</span>
              <div class="subComment" v-if="item.subcomment">
                <!-- 可以做优化循环遍历配合接口实现楼中楼评论功能 -->
                <div class="zhanZhangSays">
                  <span class="zhanZhang">张明明</span>
                  <span class="reply">回复</span>
                  <span class="replyWho">{{ item.username }}：</span>
                  <span class="zhanZhangComtent">{{ item.subcomment }}</span>
                  <!-- <a href="javascript:;" style="color:#5893c2;text-decoration:none;padding-left:5px" class="clickReply" v-if="userInfo.userInfo">回复</a> -->
                  <!-- <div class="test">
                    <textarea name="" id="" cols="30" rows="10" :placeholder="`回复：张明明 回复 ${item.username}`"></textarea>
                    <div class="subTest">
                      <span>还能输入xxx个字符</span>
                      <button>取消回复</button>
                      <button>发表评论</button>
                    </div>
                  </div> -->
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 添加分页器 -->
      <div class="pagination">
        <el-pagination
          layout="prev,pager,next,total,jumper"
          :total="allComments.length"
          class="elementUIPagination"
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
          <p class="myEmail">1628029199@qq.com</p>
          <p class="hi">微信</p>
          <p class="myEmail">musixiong321</p>
          <p class="hi">个人主页</p>
          <p class="myWebsite">http://www.agrayfox.com</p>
        </div>
        <div class="horizon"></div>
        <div class="intro">
          <p class="first">
            你好,这里是灰狐,欢迎访问我的个人主页。
          </p>
          <p>
            博主是一名前端码农,设计爱好者,中文名是张明明/张明轩,英文名是GrayFox
          </p>
          <p class="second">
            目前我在魔都一家互联网公司供职,平时的爱好比较广泛,喜欢研究一些有趣的新技术,喜欢读书写字写Bug,旅游运动养奶喵。如你所见,这是我的个人主页,开发本网站的原因是为了方便平时整合资料以及快速浏览热点新闻视频等,并且开发博客页用于记录技术上遇到的问题。整个前端界面和后端接口均由我独自设计和开发,当前是2.0版本,后续会慢慢对网站进行不定期更新,也会开发该网站的移动端版本。如果需要在网站里添加哪些功能或者提供一些建议都可以在左边评论区给我留言,需要自助建站或搭建服务器环境等,也可以通过下方的联系方式立刻与我联系.
          </p>
        </div>
        <div class="qq">
          <a href="https://api.sumt.cn/api/qq.talk.php?qq=1628029199" style="text-decoration:none;">
            <i class="iconfont icon-QQ1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      /* 初始显示的首个索引:可修改,但不建议 */
      currentIndex: 0,
      /* 返回的总条数:不可修改 */
      totalSize: "",
      /* 每页显示条数:可修改 */
      pageSize: 10,
      /* 当前显示页:可修改,但不建议 */
      currentPage: 1,
      /* 下面是留言板所需数据,修改前务必想清楚 */
      myMessage: "",
      submitText: "提交评论",
      /* 验证码数据 */
      identifyCode: "",
      verticalNum: "",
      mention: "测试文本",
      isMentionShow: false,
      isMentionRed: false,
      isMentionGreen: false,
      isCommentsReverse: false
    };
  },
  methods: {
    ...mapActions(["setComments"]),
    // 时间戳转化为时间的工具函数
    tranform(timestamp) {
      let date = new Date(timestamp);
      let Y = date.getFullYear() + "-";
      let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      let D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      let h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      let m = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
      let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    },
    // 分页器事件:当前页发生改变后触发
    currentPageChange(index) {
      this.currentPage = index;
      if (this.currentPage === 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = this.pageSize * (index - 1);
      }
      this.$refs.testABC.scrollTop = this.$refs.testABC.scrollHeight;
    },
    // 分页器事件:当前页显示数量发生改变时触发
    sizeChange(size) {
      this.pageSize = size;
    },
    // 提交评论事件
    async sendEmail(ev) {
      ev.preventDefault();
      this.submitText = "发送中...";
      this.$refs.submitBtn.style.background = "orange";
      // 合法性校验
      // 1.没有登录
      if (!this.userInfo.userInfo) {
        //不合格
        this.mention = "请先登录";
        this.isMentionShow = true;
        this.isMentionRed = true;
        setTimeout(() => {
          this.mention = "";
          this.isMentionShow = false;
          this.isMentionRed = false;
        }, 2000);
        this.submitText = "提交评论";
        this.$refs.submitBtn.style.background = "linear-gradient(45deg, #007fff, #4e6ef2)";
        // 2.评论为空
      } else if (!this.myMessage || this.myMessage.length < 1) {
        //不合格
        this.mention = "评论为空";
        this.isMentionShow = true;
        this.isMentionRed = true;
        setTimeout(() => {
          this.mention = "";
          this.isMentionShow = false;
          this.isMentionRed = false;
        }, 2000);
        this.submitText = "提交评论";
        this.$refs.submitBtn.style.background = "linear-gradient(45deg, #007fff, #4e6ef2)";
        // 3.验证码不对
      } else if (this.verticalNum !== this.identifyCode) {
        //不合格
        this.submitText = "提交评论";
        this.$refs.submitBtn.style.background = "linear-gradient(45deg, #007fff, #4e6ef2)";
        this.mention = "验证码错误";
        this.isMentionShow = true;
        this.isMentionRed = true;
        setTimeout(() => {
          this.mention = "";
          this.isMentionShow = false;
          this.isMentionRed = false;
        }, 2000);
        // this.drawPic();
      } else {
        // 成功发送axios请求到我的接口去添加评论并获得新的评论列表修改本地仓库数据后渲染到页面上
        // 获得当前时间戳并使用工具函数转化为时间格式与其他参数一起添加到json格式的请求体中发送ajax请求
        let time = this.tranform(new Date().getTime());
        // 获得返回值,setComments函数设置在login.js分仓库中,code为200代表成功,400代表失败
        const code = await this.setComments({
          username: this.userInfo.userInfo.username,
          profile: this.userInfo.userInfo.profile,
          content: this.myMessage,
          time: time
        });
        if (code === 200) {
          this.myMessage = "";
          this.verticalNum = "";
          this.submitText = "提交评论";
          this.$refs.submitBtn.style.background = "linear-gradient(45deg, #007fff, #4e6ef2)";
          this.isMentionShow = true;
          this.mention = "评论成功";
          this.isMentionGreen = true;
          await setTimeout(() => {
            this.isMentionShow = false;
            this.isMentionGreen = false;
          }, 3000);
        } else if (code === 400) {
          this.verticalNum = "";
          this.mention = "评论失败";
          this.isMentionShow = true;
          this.isMentionRed = true;
          setTimeout(() => {
            this.mention = "";
            this.isMentionShow = false;
            this.isMentionRed = false;
          }, 2000);
        } else {
          this.verticalNum = "";
          this.mention = "网络波动";
          this.isMentionShow = true;
          this.isMentionRed = true;
          setTimeout(() => {
            this.mention = "";
            this.isMentionShow = false;
            this.isMentionRed = false;
          }, 2000);
        }
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
  },
  computed: {
    ...mapState({
      allComments: state => state.login.allComments,
      userInfo: state => state.login.userInfo
    }),
    // 由于需要在留言板上渲染的数据顺序与数据库中的顺序颠倒,需要进行转换
    reverseComments() {
      if (!this.isCommentsReverse) {
        this.isCommentsReverse = true;
        let arr = this.allComments.reverse();
        return arr.reverse();
      } else {
        console.log(this.isCommentsReverse);
        let arr2 = this.allComments.reverse();
        return arr2;
      }
    }
  },
  async mounted() {
    this.isCommentsReverse = false;
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
      margin-top: 0px;
      width: 1200px;
      display: flex;
      justify-content: space-between;
      background-color: #f9f9f9;
      padding: 20px 15px 0px 20px;
      // 左侧留言模块
      .left {
        width: 780px;
        padding: 10px 10px;
        // 提交留言模块(评论模块)
        .publish {
          // border: 1px dashed orangered;
          background-color: #fff;
          border-radius: 10px;
          position: relative;
          padding: 15px 25px 23px 15px;
          box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.3);
          .icon-liuyan {
            font-size: 26px;
            position: absolute;
            left: 26px;
            top: 16px;
            color: hsl(210, 100%, 50%);
            font-weight: 300;
          }
          // 标题:评论
          .title {
            text-align: left;
            font-family: "Microsoft Yahei";
            font-size: 16px;
            // color: #999;
            color: #007fff;
            text-shadow: 1px 1px 1px 1px;
            margin-left: 45px;
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

            font-family: "Microsoft Yahei";

            font-size: 13px;
            text-align: center;
            color: rgba(#e6a23c);
            user-select: none;
            position: relative;
            .icon-tishi {
              position: absolute;
              top: 11px;
              left: 89px;
            }
          }
          .mainForm {
            // border: 1px solid black;
            position: relative;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .formMention {
              position: absolute;
              border-radius: 10px;
              height: 30px;
              line-height: 3 0px;
              font-family: "Microsoft Yahei";
              font-weight: 700;
              font-size: 18px;
              color: #fff;
              padding: 3px 45px;
              left: 280px;
              top: 35px;
              width: 90px !important;
              border: 1px solid transparent;
              user-select: none;
              z-index: 9999;
              .mentionWrapper {
                text-align: center;
                height: 30px;
                line-height: 30px;
                font-size: 15px;
                font-weight: 700;
                letter-spacing: 1px;
                overflow: hidden;
              }
            }
            .mentionRed {
              background-color: #f56c6c;
              color: #fff;
              border: 1px solid pink;
            }
            .mentionGreen {
              background-color: #67c23a;
              color: #fff;
              border: 1px solid lightgreen;
            }
            .userInfo {
              display: flex;
              flex-wrap: nowrap;
              justify-content: flex-start;
              font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
                "Microsoft YaHei", sans-serif;
              font-weight: 300;
              color: #555666;
              .userName {
                font-size: 15px;
                font-weight: 700;
                padding-left: 12px;
                letter-spacing: 0.5px;
                .plzLogin {
                  color: #409eef;
                  &:hover {
                    cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
                  }
                }
                .welcomeUser {
                  color: #409eef;
                }
              }
            }
            .iconName {
              background: #eaeaea;
              width: 50px;
              height: 50px;
              border: 2px solid red;
              .icon-username {
                color: #fff;
              }
            }
            // 输入评论
            .main {
              position: relative;
              outline: none;
              border: 1px solid #dcdfe6;
              height: 100px !important;
              border-radius: 5px;
              font-size: 14px;
              color: #666;
              font-family: "Microsoft Yahei";
              padding-left: 10px;
              width: 780px !important;
              margin-top: 15px;
              margin-left: 10px;
              padding: 10px 15px;
              text-align: top;
              cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
              // 清除textarea默认样式
              resize: none;
            }
            .main:focus {
              color: #666;
              border: 1px solid rgba(#0876e4, 0.5);
            }
            // 小狐狸
            .icon-huli {
              position: absolute;
              font-size: 25px;
              right: 15px;
              bottom: 65px;
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
                top: 22px;
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
                font-family: "Microsoft Yahei";
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
              background: linear-gradient(45deg, #007fff, #4e6ef2);
              color: #fff;
              font-family: "Microsoft Yahei";
              font-size: 14.5px;
              text-align: center;
              // width: 780px !important;
              height: 35px;
              line-height: 35px;
              border: none;
              border-radius: 20px;
              // width: 98.5% !important;
              width: 140px;
              margin-top: 15px;
              margin-left: 15px;
              letter-spacing: 2px;
            }
            .clearAll:hover {
              cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
            }
            // 提交按钮
            .submit {
              outline: none;
              background: linear-gradient(45deg, #007fff, #4e6ef2);
              color: #fff;
              font-family: "Microsoft Yahei";
              font-size: 14.5px;
              text-align: center;
              height: 35px;
              line-height: 35px;
              border: none;
              border-radius: 20px;
              width: 250px;
              margin-top: 15px;
              margin-left: 15px;
              letter-spacing: 1px;
            }
            .submit:hover {
              cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
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
          position: relative;
          padding: 20px 25px;
          margin-top: 30px;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.3);
          min-height: 800px;
          .icon-xiezi {
            font-size: 1.7em;
            position: absolute;
            left: 25px;
            top: 17.5px;
            color: #007fff;
            font-weight: 400;
          }
          .title {
            text-align: left;
            font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
              "Microsoft YaHei", sans-serif;
            font-size: 16px;
            color: #007fff;
            text-shadow: 1px 1px 1px 1px;
            margin-left: 35px;
            user-select: none;
            font-weight: 700;
            .allNums {
              font-family: "Microsoft Yahei";
              font-size: 1.1em;
              margin-left: 5px;
            }
          }
          .contents {
            // 加载时的文本
            h3 {
              font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
                "Microsoft YaHei", sans-serif;
              color: #409eef;
              margin-top: 50px;
            }
            .contentsList {
              list-style-type: none;
              margin-top: 20px;
              margin-bottom: 0px;
              li {
                position: relative;
                margin-top: 20px;
                border: 1px solid #eaeaea;
                background: linear-gradient(45deg, #fafafa, #fff);
                font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
                  "Microsoft YaHei", sans-serif;
                box-shadow: 3px 3px 3px #eaeaea;
                border-radius: 10px;
                img {
                  position: absolute;
                  top: 12px;
                  left: 15px;
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  &:hover {
                    opacity: 0.8;
                  }
                }
                .name {
                  display: inline-block;
                  position: absolute;
                  left: 65px;
                  height: 35px !important;
                  line-height: 48px;
                  color: #555;
                  letter-spacing: 1px;
                  vertical-align: top;
                  font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
                    "Microsoft YaHei", sans-serif;
                  font-size: 15px;
                  font-weight: 600;
                }
                .time {
                  position: absolute;
                  top: 37px;
                  left: 65px;
                  color: #999aaa;
                  font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
                    "Microsoft YaHei", sans-serif;
                  font-size: 14px;
                }
                .content {
                  color: #4d4d4d;
                  font-weight: 400;
                  font-size: 15px;
                  width: 650px;
                  line-height: 20px;
                  padding: 8px 10px;
                  margin: 53px 0px 10px 55px;
                  text-align: left;
                  font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
                    "Microsoft YaHei", sans-serif;
                  word-wrap: break-word;
                  outline: 0;
                  p {
                    line-height: 26px;
                  }
                }

                .floor {
                  position: absolute;
                  top: 10px;
                  right: 15px;
                  font-size: 13px;
                  color: #555666;
                  font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
                    "Microsoft YaHei", sans-serif;
                  font-weight: 400;
                }

                .subComment {
                  // border: 2px solid blue;
                  position: relative;
                  background-color: rgba(#f4f4f4, 0.7);
                  padding: 3px 0px 3px 5px;
                  text-align: left;
                  margin-left: 65px;
                  margin-bottom: 20px;
                  font-size: 14px;
                  font-weight: 400;
                  font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
                    "Microsoft YaHei", sans-serif;
                  font-family: "Microsoft Yahei";
                  width: 635px;
                  line-height: 25px;
                  color: #333;
                  border-left: 3px solid #eaeaea;
                  margin-top: -5px;
                  .zhanZhangSays {
                    position: relative;
                    margin-left: 5px;
                    color: #666;
                    font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
                      "Microsoft YaHei", sans-serif;
                    .zhanZhang {
                      font-size: 14px;
                      font-weight: 400;
                      color: #007fff;
                    }
                    .reply {
                      color: #999;
                      padding-left: 5px;
                    }
                    .replyWho {
                      padding-left: 5px;
                      color: #007fff;
                    }
                    .zhanZhangComtent {
                      font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
                        "Microsoft YaHei", sans-serif;
                    }
                  }
                }
              }
              // li:first-child {
              //   margin-top: 0px;
              //   border-color: transparent;
              // }
              // li:hover {
              //   // transform: translateX(-5px);
              //   // box-shadow: 1px 1px 2px #999;
              //   // border-left: 3px solid rgba(#409eef, 0.8);
              // }
            }
          }
        }
        .allContents:hover {
          box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.4);
        }
        // 分页器
        .pagination {
          border-radius: 10px;
          padding: 15px 25px 0px 25px;
          // border:1px solid blue;
          margin-top: 15px;
          font-family: "Microsoft Yahei,", sans-serif;
          .elementUIPagination {
            font-weight: 400;
            transform: scale(1.1);
            .el-pager {
              li {
                font-family: "Microsoft Yahei";
                font-size: 12px;
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
                border-radius: 15px;
              }
            }
            .el-input__inner {
              font-family: "Microsoft Yahei";
              font-size: 14px;
            }
            .el-pagination__total {
              font-family: "Microsoft Yahei";
              font-size: 13px;
            }
          }
        }
      }
      // 右侧站长信息模块
      .right {
        // width: 38%;
        width: 330px;
        // border: 1px solid blue;
        padding: 0px;
        margin-top: 10px;
        margin-right: 15px;
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
            font-family: "Microsoft Yahei";

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
            left: 130px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
          .basicInfo {
            font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
              "Microsoft YaHei", sans-serif;
            padding: 140px 25px;
            text-align: left;
            .hi {
              color: #666;
              font-size: 15px;
              font-weight: 700;
              margin-top: 5px;
              letter-spacing: 1px;
            }
            .myName,
            .myEmail,
            .myWebsite {
              color: #409eef;
              font-size: 15px;
              font-weight: 700;
              padding: 2px 0px 5px 0px;
              height: 20px;
              line-height: 20px;
            }
          }
          .horizon {
            background-color: #eaeaea;
            width: 90%;
            height: 1px;
            margin: -120px auto;
          }
          .intro {
            margin-top: 110px;
            font-family: "SF Pro Display", Arial, "PingFang SC", "Hiragino Sans GB",
              "Microsoft YaHei", sans-serif;
            font-weight: 400;
            text-align: left;
            color: #444555;
            font-size: 14px;
            padding: 20px 25px;
            line-height: 22px;
            letter-spacing: 0.5px;
            .first {
              margin-top: 5px;
              margin-bottom: 10px;
            }
            .second {
              margin-top: 10px;
            }
            .third {
              margin-top: 10px;
            }
          }
          .qq {
            margin-top: -10px;
            padding-bottom: 10px;
            .icon-QQ1 {
              color: #409eef;
              font-size: 1.5em;
              cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur), auto !important;
            }
            .icon-QQ1:hover {
              color: #409eef;
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

      font-family: "Microsoft Yahei";

      font-weight: 300;
      letter-spacing: 1px;
      // color: rgba(red,0.8) !important;
    }
  }
}
</style>
