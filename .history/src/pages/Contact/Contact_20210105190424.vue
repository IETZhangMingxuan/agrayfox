<template>
  <div id="contact">
    <!-- 左侧留言板 -->
    <div class="left">
      <!-- 发布留言区 -->
      <div class="publish">

      </div>
      <!-- 所有留言区 -->
      <div class="allContents">

      </div>
    </div>
    <!-- 右侧站长信息及广告等  -->
    <div class="right">
      
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
  display:flex;
  justify-content: space-between;

  .left{
    width:70%;
    border:1px solid red;
    height:700px;
    padding:5px 10px;
    .publish{

    }
    .allContents{
      
    }
  }
  .right{
    width:30%;
    border:1px solid blue;
    height:500px;
    padding:5px 10px;

  }
}
</style>
