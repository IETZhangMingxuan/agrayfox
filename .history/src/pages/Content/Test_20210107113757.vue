<template>
  <div>
    <h2 style="font-family:'微软雅黑';color:#409fff">测试formspree用的组件</h2>
    <form id="my-form" action="https://formspree.io/f/myyblyqp" method="POST">
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Name:</label>
      <input type="text" name="username" />
      <label>Message:</label>
      <input type="text" name="message" />
      <button id="my-form-button">Submit</button>
      <p id="my-form-status"></p>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
