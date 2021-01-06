<template>
  <div id="search">
    <div class="buttonList">
      <ul>
        <li
          v-for="item in searchNameList"
          :key="item.id"
          @click="activeFn(item.id)"
          :class="{ active: active == item.id }"
        >
          <img :src="item.imgUrl" alt="" class="imgIcon" />
          <span class="searchButton">{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="searchMain">
      <input type="text" placeholder="请输入搜索内容" v-model="searchContent" />
      <button @click="search(active, searchContent)">
        搜索
      </button>
    </div>
    <!-- 火狐狸css特效 -->
    <div class="firefox">

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchNameList: [
        { name: "百度", id: "0", imgUrl: "https://static.iiter.cn/baidu.ico" },
        { name: "Github", id: "1", imgUrl: "https://static.iiter.cn/github.ico" },
        { name: "谷歌", id: "2", imgUrl: "https://static.iiter.cn/google.png" },
        { name: "CSDN", id: "3", imgUrl: "https://static.iiter.cn/csdn.ico" },
        { name: "开源中国", id: "4", imgUrl: "https://static.iiter.cn/oschina.ico" },
        { name: "掘金", id: "5", imgUrl: "https://static.iiter.cn/gold.png" },
        { name: "知乎", id: "6", imgUrl: "https://static.iiter.cn/zhihu.ico" },
        { name: "必应", id: "7", imgUrl: "https://static.iiter.cn/biying.ico" },
        { name: "思否", id: "8", imgUrl: "https://static.iiter.cn/segmentfault.png" }
      ],
      active: "0",
      searchContent: ""
    };
  },
  methods: {
    activeFn(id) {
      console.log(id);
      this.active = id;
    },
    search(index, searchContent) {
      console.log(index, searchContent);
      switch (index) {
        case "0":
          window.open(`https://www.baidu.com/s?wd=${searchContent}`, "_blank");
          break;
        case "1":
          window.open(`https://github.com/search?q=${searchContent}`, "_blank");
          break;
        case "2":
          window.open(`https://www.google.com/search?q=${searchContent}`, "_blank");
          break;
        case "3":
          window.open(`https://so.csdn.net/so/search/s.do?q=${searchContent}`, "_blank");
          break;
        case "4":
          window.open(`https://www.oschina.net/search?scope=all&q=${searchContent}`, "_blank");
          break;
        case "5":
          window.open(`https://juejin.cn/search?query=${searchContent}`, "_blank");
          break;
        case "6":
          window.open(`https://www.zhihu.com/search?q=${searchContent}`, "_blank");
          break;
        case "7":
          window.open(`https://cn.bing.com/search?q=${searchContent}`, "_blank");
          break;
        case "8":
          window.open(`https://segmentfault.com/search?q=${searchContent}`, "_blank");
          break;
      }
      this.searchContent = "";
    }
  }
};
</script>
<style scoped lang="less">
@defaultColor: #007fff;
#search {
  /* 测试 */
  // border: 1px dashed blue;
  // background: linear-gradient(180deg, #fff, #fafafa);
  padding: 40px 0px 30px 0px;
  position:relative;
  border:2px solid blue;
  width:1200px;
  margin:0 autol
  .buttonList {
    ul {
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: center;
      li {
        color: #666;
        font-family: "微软雅黑";
        font-size: 14px;
        /* 文字渐变色 */
       
        margin-left: 2px;
        box-shadow: 1px 1px 0.5px rgba(129, 196, 255, 0.5);
        background-color: #fff;
        user-select: none;
        .imgIcon {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          margin-right: 2px;
        }
        .searchButton {
          white-space: nowrap;
          display: inline-block;
          padding: 0 18px 0 0;
          list-style: none;
          padding-left: 2px;
        }
      }
      li.active {
        // color: #fff;
        // color: #333;
        color: #409eee;
        background: linear-gradient(to right, red, #409eee);
        -webkit-background-clip: text;
        background-clip:text;
        color: transparent;
        // background-color: rgba(129, 196, 255, 1);
        // background-color: rgba(#007FFF, 1);
        // background-color: rgba(#007fff, 0.8);
        box-shadow: 0 0 2px 3px rgba(99, 93, 253, 0.3);
      }
      li:hover {
        // color: #fff;
        // color: #409eee;
         background: linear-gradient(to right, red, #409eee);
        -webkit-background-clip: text;
        background-clip:text;
        color: transparent;
        // background-color: rgba(129, 196, 255, 1);
        // background-color: rgba(#4fc7ff, 1);
        box-shadow: 0 0 1px 3px rgba(99, 93, 253, 0.3);
      }
    }
    ul > li {
      padding-left: 10px;
      border-radius: 25px 0 25px 0;
      height: 25px;
      text-align: center;
      line-height: 25px;
      display: flex;
      align-items: center;
      cursor: pointer;
      border: 1px solid #e3e3e3;
      transition: all 0.2s;
      margin-right: -2px;
    }
  }
  .searchMain {
    margin-top: 25px;
    margin-left: 50px;
    vertical-align: bottom;
    display: flex;
    justify-content: center;
    input {
      width: 320px;
      height: 35px;
      border: 1px solid #007fff;
      border-right: none;
      border-radius: 25px 0 0 25px;
      padding: 0 20px;
      box-sizing: border-box;
      outline: none;
      box-sizing: border-box;
      font-size: 14.5px;
      background-color: #fff;
      // box-shadow: 0px 2px 0.5px #005efe;
    }
    button {
      // box-shadow: 0px 1px 0.5px #409eee;
      box-sizing: border-box;
      height: 35px;
      line-height: 35px;
      border: none;
      width: 80px;
      border-radius: 0 35px 35px 0;
      background-color: #007fff;
      color: #fff;
      outline: none;
      font-family: "华文中宋";
      // font-family: "微软雅黑";
      font-size: 15px;
      letter-spacing: 1px;
    }
    button:hover {
      background-color: #0876e4;
    }
    // button:active {
    //   padding: 3px 6px 2px 8px;
    //   border: 0.5px inset;
    //   line-height: 22px;
    //   height: 36px;
    //   text-align: center;
    //   display: inline-block;
    // }
  }
  /* 火狐狸CSS3特效 */
  .firefox{
    width:156px;
		height:156px;
		margin:100px auto;
		background:url(images/foxtail.png) no-repeat 0 0;
    animation:animate-tail 3.75s steps(44) infinite;
    position: fixed;
    right:5%; 
    bottom:0%; 
  }
  @keyframes animate-tail{
		0%{background-position:-6864px 0;}
		100%{background-position:0 0;}
	}
}
</style>
