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
<script>
export default {};
</script>
<style scoped></style>
