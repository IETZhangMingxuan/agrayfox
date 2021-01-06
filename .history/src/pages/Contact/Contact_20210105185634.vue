<template>
  <div id="contact">
    留言板组件
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactList: [
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
  },
  
};
</script>
<style scoped lang="less">
#contact {
  box-sizing:border-box;
  border: 2px solid rgb(75, 17, 192);
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
}
</style>
