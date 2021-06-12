<template>
  <div id="robot">
    <div class="header">
      <img src="./robot.jpeg" alt="404 not found" title="小白" />
      <p>愚蠢的机器人小白</p>
      <div class="share">分享到：<i class="iconfont icon-weixin"></i></div>
      <div class="clear">
        <span class="clearBtn">清除聊天</span>
      </div>
      <div class="control">
        <i class="iconfont icon-zuixiaohua"></i>
        <i class="iconfont icon-close"></i>
        <i class="iconfont icon-zuidahua"></i>
      </div>
    </div>
    <div class="main">
      <div class="wrapper">
        <div class="talkList clearfix"></div>
      </div>
    </div>
    <div class="footer">
      <input type="text" placeholder="快来和我聊天吧" maxlength="20" />
      <i class="iconfont icon-fasong"></i>
    </div>
  </div>
</template>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

<script>
$(function() {
  // 0.进入网页后等待1秒钟机器人自动回复
  setTimeout(function() {
    $(`<p class="left">你好呀,有什么不懂的问题可以来问我</p>`).appendTo(".talkList");
  }, 1000);
  // 1.清除聊天
  $(".clearBtn").click(function() {
    $(".talkList p").remove();
  });
  // 2.点击按钮发送请求并呈现在屏幕上
  $(".icon-fasong").on("click", sendMessage);
  // 3.在输入框处于焦点状态时按回车发送请求
  $("input").on("keyup", function(e) {
    if (e.keyCode == 13) {
      if ($("input").val() !== "") {
        $(".deleteP").remove();
        // 获取输入框中的文字
        var askText = $("input").val();
        $(`<p class="right">${askText}</p>`).appendTo(".talkList");
        let str = $("input").val();
        // 清除输入框
        $("input").val("");
        /* 重点:创建一个虚拟元素占位 */
        $('<p class="deleteP right" style="visibility:hidden"></p>').appendTo(".talkList");
        $(".main").scrollTop($(".talkList")[0].scrollHeight);
        try {
          axios({
            method: "GET",
            url: `http://www.tuling123.com/openapi/api?key=fef25662f0d442a9bc94ce5bd83f776b&info=${str}`
          }).then(response => {
            $(".deleteP").remove();
            $(`<p class="left">${response.data.text}</p>`).appendTo(".talkList");
            $('<p class="deleteP right" style="visibility:hidden"></p>').appendTo(".talkList");
            // 重点:设置滚动条每次都在最新消息的底部
            $(".main").scrollTop($(".talkList")[0].scrollHeight + 100);
          });
        } catch (error) {}
        // var talkList = document.querySelector('.talkList');
        // console.log(talkList.scrollHeight);
        // console.log($('.talkList')[0].scrollHeight);
      }
    }
  });
  // 4.点击右上角的关闭按钮
  $(".icon-close").click(function() {
    $("#ZMXRobot").hide(300);
  });
  // 5.点击右上角的最小化按钮
  $(".icon-zuixiaohua").click(() => {
    $("#ZMXRobot").css("bottom", "-560px");
    $(".clear").hide();
    $(".share").hide();
    $(".icon-zuixiaohua").hide();
    $(".icon-zuidahua").show();
  });
  // 6.点击右上角的最大化按钮
  $(".icon-zuidahua").click(() => {
    $("#ZMXRobot").css("bottom", "0px");
    $(".clear").toggle(1000);
    $(".share").toggle(1000);
    $(".icon-zuixiaohua").toggle();
    $(".icon-zuidahua").toggle();
  });
  // 封装函数
  function sendMessage() {
    if ($("input").val() !== "") {
      // 获取输入框中的文字
      var askText = $("input").val();
      $(`<p class="right">${askText}</p>`).appendTo(".talkList");
      let str = $("input").val();
      // 清除输入框
      $("input").val("");
      axios({
        method: "GET",
        url: `http://www.tuling123.com/openapi/api?key=fef25662f0d442a9bc94ce5bd83f776b&info=${str}`
      }).then(response => {
        let result = response.data.text;
        $(`<p class="left">${result}</p>`).appendTo(".talkList");
      });
    }
  }
});
</script>
<style scoped></style>
