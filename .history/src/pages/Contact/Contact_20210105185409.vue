<template>
  <div id="contact">
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
  methods: {
    submit(mainContent,contactList) {
      let newContent = {name:"开发人员",time:`${new Date()}`,content:"",imgUrl:"https://static.iiter.cn/vue.png"};
      console.log(mainContent);
      newContent.content = this.mainContent;
      this.mainContent = "";
      console.log(newContent);
      contactList.push(newContent);
      console.log(contactList);
    }
  }
};
</script>
<style scoped lang="less">
#contact {
  // border: 1px solid blue;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
  .input {
    width:30%;
    textarea {
      padding: 5px;
      width: 100%;
      margin: 10px auto;
      font-size: 1.2em;
      font-family: "微软雅黑";
      color: #409eef;
      border: 1px solid blue;
      outline: none;
    }
  }
  .submit {
    display: flex;
    justify-content: flex-start;
    button {
      width: 120px;
      height: 60px;
      font-size: 1.2em;
      font-family: "微软雅黑";
      color: blue;
      outline: none;
      border: 1px solid blue;
      background-color: #fafafa;
    }
    :hover {
      background-color: #eaeaea;
    }
  }
  .visible {
    border: 1px solid #eaeaea;
    ul {
      list-style-type: none;
      li {
        width:40%;
        padding:5px 10px;
        border:1px solid green;
        margin-top:10px;
        position: relative;
        height:90px;
        .wrapper {
          img {
            width: 80px;
            height: 60px;
            position:absolute;
            top:5px;
            left:5px;
          }
          .author{
            position:absolute;
            top:65px;
            left:10px;
          }
          .time{
            position:absolute;
            bottom:5px;
            right:5px;
          }
        }
      }
    }
  }
}
</style>
