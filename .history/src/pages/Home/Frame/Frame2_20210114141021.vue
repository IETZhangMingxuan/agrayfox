<template>
  <div id="frame" class="animate__animated animate__slideInLeft">
    <div class="header">
      <div class="line"></div>
      <span class="title">生活</span>
    </div>
    <ul class="frameList">
      <li class="single" v-for="(item, index) in frameList" :key="index">
        <img :src="item.imgUrl" alt="" />
        <a :href="item.url" target="_blank">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      frameList: [
        {
          id: 0,
          name: "淘宝",
          imgUrl: "https://img.alicdn.com/tfs/TB14aHpkeH2gK0jSZJnXXaT1FXa-16-16.ico",
          url: "https://www.taobao.com/"
        },
        {
          id: 1,
          name: "百度",
          imgUrl: "https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/qiusuo_icon/5a6639075515a8e27e0b1336db2300c1.ico",
          url: "https://www.baidu.com/"
        },
        {
          id: 2,
          name: "网易",
          imgUrl: "https://dgss0.bdstatic.com/5bVSsj_p_tVS5dKfpU_Y_D3/qiusuo_icon/0243171b97e12fd795285d6603b199bb.ico",
          url: "https://www.163.com/"
        },
        {
          id: 3,
          name: "京东",
          imgUrl: "https://dgss2.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/qiusuo_icon/aa0448bf686b54f648b869155388d64e.ico",
          url: "https://jd.com/"
        },
        {
          id: 4,
          name: "知乎",
          imgUrl: "https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2019-08-16/3c8835ab2cb0db921a8879952df3cac9.png",
          url: "https://www.zhihu.com/"
        },
        {
          id: 5,
          name: "优酷",
          imgUrl: "https://dgss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/defaultIcon1229.png",
          url: "http://www.youku.com"
        },
        {
          id: 6,
          name: "爱奇艺",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/qiusuo_icon/24c7e207a280974a518b1290a25bce4e.png",
          url: "http://www.iqiyi.com/"
        },
        {
          id: 7,
          name: "苹果",
          imgUrl: "https://dgss0.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/urlicon/7617.png",
          url: "https://www.apple.com/cn/"
        },
        {
          id: 8,
          name: "凤凰网",
          imgUrl: "https://dgss0.bdstatic.com/5bVSsj_p_tVS5dKfpU_Y_D3/qiusuo_icon/d7fd0fcc2e428773bf1c105caa851de0.ico",
          url: "https://www.ifeng.com/"
        },
        {
          id: 9,
          name: "好看视频",
          imgUrl: "https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2019-07-01/3a117368c5bcfaf958ee74b0aec56287.png",
          url: "https://haokan.baidu.com/"
        },
        {
          id: 10,
          name: "12306",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/hcp20180906.png",
          url: "https://www.12306.cn/"
        },
        {
          id: 11,
          name: "联通",
          imgUrl: "https://dgss0.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/urlicon/7151.png",
          url: "http://www.10010.com"
        },
        {
          id: 12,
          name: "移动",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/2.png",
          url: "http://www.10086.cn"
        },
        {
          id: 13,
          name: "阿里巴巴",
          imgUrl: "https://dgss0.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/urlicon/115.png",
          url: "http://www.1688.com"
        },
        {
          id: 14,
          name: "豆瓣",
          imgUrl: "https://dgss0.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/urlicon/8215.png",
          url: "http://www.douban.com"
        },
        {
          id: 15,
          name: "智联招聘",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/10668.png",
          url: "http://www.zhaopin.com"
        },
        {
          id: 16,
          name: "果壳",
          imgUrl: "https://dgss0.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/urlicon/8541.png",
          url: "http://www.guokr.com"
        },
        {
          id: 17,
          name: "36氪",
          imgUrl: "https://dgss0.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/urlicon/7293.png",
          url: "http://36kr.com"
        },
        {
          id: 18,
          name: "人民网",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/0.1214.png",
          url: "http://www.people.com.cn"
        },
        {
          id: 19,
          name: "网易云音乐",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/10.469.png",
          url: "http://music.163.com"
        },
        {
          id: 20,
          name: "哔哩哔哩",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/0.4201.png",
          url: "http://www.bilibili.com"
        },
        {
          id: 21,
          name: "科学网",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/9784.png",
          url: "http://www.sciencenet.cn"
        },
        {
          id: 22,
          name: "腾讯视频",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/14.341.png",
          url: "http://v.qq.com"
        },
        {
          id: 23,
          name: "微信网页版",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/14.417.png",
          url: "https://wx.qq.com"
        },
        {
          id: 24,
          name: "今日头条",
          imgUrl: "https://hao1.qhimg.com/t01f2b671978d27099f.jpg",
          url: "https://kankan.eastday.com/?qid=01451"
        },
        {
          id: 25,
          name: "携程旅行",
          imgUrl: "https://hao1.qhimg.com/t0129c967204b40b4c9.png",
          url: "https://www.ctrip.com/?allianceid=1328&sid=1643"
        },
        {
          id: 26,
          name: "环球网",
          imgUrl: "https://dgss0.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/urlicon/8785.png",
          url: "http://www.huanqiu.com"
        },
        {
          id: 27,
          name: "堆糖",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/80342.png",
          url: "http://www.duitang.com"
        },
        {
          id: 28,
          name: "飞猪",
          imgUrl: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/8.8119fdf95d07c3aae33736c7136bad16.png",
          url: "https://www.alitrip.com"
        },
        {
          id: 29,
          name: "新浪",
          imgUrl: "https://image.uc.cn/s/nav/g/olps/2018/1/7acd48ffc680bd15675c23e352b6429a",
          url: "https://sina.cn/?vt=4&wm=4007_0010"
        },
        {
          id: 30,
          name: "谷歌翻译",
          imgUrl: "https://www.jianfast.com/static/home/images/siteimg/i7.png",
          url: "https://translate.google.cn/"
        },
        {
          id: 31,
          name: "NGA论坛",
          imgUrl: "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/7acb0a46f21fbe0973b2d0a36c600c338644ad9c.jpg",
          url: "https://bbs.nga.cn/"
        },
        {
          id: 32,
          name: "Youtube",
          imgUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991196816,3411021651&fm=11&gp=0.jpg",
          url: "https://youtube.com/"
        },
        {
          id: 33,
          name: "Gmail",
          imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4209462011,231200626&fm=26&gp=0.jpg",
          url: "https://mail.google.com/"
        },
        {
          id: 34,
          name: "qq邮箱",
          imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4129618925,2151891735&fm=26&gp=0.jpg",
          url: "https://mail.qq.com/"
        },
        {
          id: 35,
          name: "Underscor",
          imgUrl: "https://static.iiter.cn/underscore.ico",
          url: "https://www.underscorejs.com.cn/"
        },
        {
          id: 36,
          name: "Sass",
          imgUrl: "https://static.iiter.cn/sass.png",
          url: "https://sass.bootcss.com/"
        },
        {
          id: 37,
          name: "Less",
          imgUrl: "https://static.iiter.cn/less.png",
          url: "https://less.bootcss.com/"
        },
        {
          id: 38,
          name: "Stylus",
          imgUrl: "https://static.iiter.cn/stylus.png",
          url: "https://stylus-lang.com/"
        },
        {
          id: 39,
          name: "ES6",
          imgUrl: "https://static.iiter.cn/es6.ico",
          url: "https://es6.ruanyifeng.com/"
        },
        {
          id: 40,
          name: "NodeJS",
          imgUrl: "https://static.iiter.cn/nodejs.png",
          url: "http://nodejs.cn/api/"
        },
        {
          id: 41,
          name: "Iconfont",
          imgUrl: "https://static.iiter.cn/iconfont.ico",
          url: "https://www.iconfont.cn/"
        },
        {
          id: 42,
          name: "Easyicon",
          imgUrl: "https://static.iiter.cn/easyicon.ico",
          url: "https://www.easyicon.net/"
        },
        {
          id: 43,
          name: "Html",
          imgUrl: "https://static.iiter.cn/html.png",
          url: "https://www.runoob.com/html/html-tutorial.html"
        },
        {
          id: 44,
          name: "Css",
          imgUrl: "https://static.iiter.cn/css.png",
          url: "https://www.runoob.com/css/css-tutorial.html"
        },
        {
          id: 45,
          name: "TypeScript",
          imgUrl: "https://static.iiter.cn/typescript.png",
          url: "https://www.tslang.cn/"
        },
        {
          id: 46,
          name: "前端导航",
          imgUrl: "http://www.alloyteam.com/nav/static/images/html5dw-favicon.png",
          url: "http://www.alloyteam.com/nav/"
        },
        {
          id: 47,
          name: "更多导航",
          imgUrl: "http://www.alloyteam.com/nav/static/images/w3ctech-favicon.jpg",
          url: "https://kim.plopco.com/"
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
#frame {
  //   border: 1px solid blue;
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.1);
  width: 70%;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  margin-left: 20px;
  .header {
    // border: 1px dashed red;
    position: relative;
    .line {
      width: 3px;
      height: 20px;
      line-height: 20px;
      background-color: deeppink;
      margin: 25px 0px 0px 30px;
      display: inline-block;
    }
    .title {
      font-family: "微软雅黑";
      font-size: 16px;
      margin-left: 20px;
      color: #333;
      position: absolute;
      top: 22.5px;
      user-select: none;
    }
  }
  .frameList {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-left: 10px;
    margin-bottom: 2px;
    // border: 1px solid red;
    .single {
      //   border: 1px solid blue;
      box-sizing: border-box;
      width: 15%;
      padding: 10px;
      background-color: #fff;
      text-align: left;
      border-radius: 8px;
      vertical-align: center;
      overflow: hidden;
      height: 40px !important;
      margin: 2px;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      a {
        vertical-align: middle;
        text-decoration: none;
        color: #999;
        font-family: "微软雅黑";
        font-size: 14px;
        margin-left: 10px;
        user-select: none;
      }
      a:hover {
        color: purple;
      }
    }
  }
}
#frame:hover {
  box-shadow: 0 0 20px hsla(0, 0%, 40%, 0.3);
}
</style>
