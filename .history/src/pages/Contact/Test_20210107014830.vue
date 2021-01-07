<template>
  <div id="ajax">
    <form action="https://formspree.io/f/myyblyqp" method="POST" id="my-form">
      <input type="text" name="name" placeholder="请输入昵称" autocomplete="off" />
      <input type="email" name="_replyto" placeholder="请输入邮箱" autocomplete="off" />
      <input type="text" name="main" placeholder="在此处输入留言内容" />
      <button id="my-form-button" @click="sendEmail">提交评论</button>
      <p
        id="my-form-status"
        style="background:#eaeaea;margin-top:20px;margin-bottom:20px;padding:10px;"
      >
        待发送
      </p>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
