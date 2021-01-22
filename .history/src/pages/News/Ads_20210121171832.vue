<template>
  <div id="ads">
    <div class="block">
      <el-carousel
        trigger="click"
        height="500px"
        autoplay:true
        interval:4000
        arrow="never"
      >
        <el-carousel-item v-for="(p, index) in NewsAdsList" :key="index">
          <div class="picItem">
            <a :href="p.url" target="_blank"><img :src="p.picUrl"/></a>
            <span class="title">{{ p.title }}</span>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      NewsAdsList: [
        {
          id: 1,
          picUrl:
            "https://cms-bucket.ws.126.net/2020/0930/a50f7ea2p00qhgcnt001hc0007s00c4c.png?imageView&thumbnail=280y436&type=webp",
          title: "成功秘诀在于设定正确目标"
        },
        {
          id: 2,
          picUrl:
            "https://cms-bucket.ws.126.net/2020/0923/b6d2676cp00qh3e8k0049c0007s00c4c.png?imageView&thumbnail=280y436&type=webp",
          title: "学校如何扼杀创造力"
        },
        {
          id: 3,
          picUrl:
            "https://cms-bucket.ws.126.net/2020/1105/23a7fff0p00qjbpdt0063c0007s00c4c.png?imageView&thumbnail=280y436&type=webp",
          title: "身体和灵魂的幸福"
        },
        {
          id: 4,
          picUrl:
            "https://cms-bucket.ws.126.net/2020/1110/14059296j00qjkxgm0030c0007s00c4c.jpg?imageView&thumbnail=280y436&type=webp",
          title: "和老年痴呆症说再见"
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
#ads {
  // border: 1px solid blue;
  width:320px;
  margin-top: 20px;
  box-shadow: 0 0 10px hsla(0, 0%, 40%, 0.2);
  border-radius: 5px;
  // height: 520px;
  // overflow: hidden;
  .block {
    .el-carousel__arrow {
      border-radius: 0px !important;
    }
    .picItem {
      position: relative;
      img {
        width: 320px;
        height:500px;
      }
      .title {
        // border:1px solid red;
        color: #fff;
        position: absolute;
        left: 0px;
        bottom: 0px;
        // height: 42px;
        padding: 5px;
        text-align: center;
        font-family: "Microsoft Yahei";
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 2px;
        // background-color: rgba(black, 0.3);
        // border:1px solid blue;
        width: 100%;
        height:60px;
        line-height: 30px;
      }
    }
  }
  .textNews {
    .newsList {
      list-style-type: none;
      li {
        position: relative;
        border-bottom: 1px dotted #eaeaea;
        // border: 1px solid blue;
        padding: 0px !important;
        padding: 5px;
        height: 35px;
        line-height: 35px;
        overflow: hidden;
        text-align: left;
        margin-left: 5px;
        a {
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0px;
          display: inline-block;
          color: #666;
          font-family: "Microsoft Yahei";
        }
        a:hover {
          color: #222;
        }
      }
      :last-child {
        border-bottom: none;
      }
    }
    .newsHiddenList {
      list-style-type: none;
      font-family: "Microsoft Yahei";
      li {
        position: relative;
        border-bottom: 1px dotted #eaeaea;
        // border: 1px solid blue;
        padding: 0px !important;
        padding: 5px;
        height: 35px;
        line-height: 35px;
        overflow: hidden;
        text-align: left;
        margin-left: 5px;
        a {
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0px;
          display: inline-block;
          color: #666;
          font-family: "Microsoft Yahei";
        }
        a:hover {
          color: #222;
        }
      }
    }
    .item-enter {
      opacity: 0 !important;
      height: 0 !important;
    }
    .item-enter-to {
      opacity: 1 !important;
      height: 460px !important;
    }
    .item-enter-active {
      transition: all 0.2s linear !important;
    }
    .item-leave-active {
      transition: all 0.1s linear !important;
    }
    .item-leave-to {
      opacity: 0 !important;
      height: 0px !important;
    }
    .item-leave {
      opacity: 0 !important;
      height: 460px !important;
    }
    .seeMoreOrNot {
      background-color: rgba(#007eee, 0.7);
      padding: 2px 5px;
      border-radius: 5px;
      outline: none;
      border: none;
      color: #fff;
      font-family: "Microsoft Yahei";
    }
    .seeMoreOrNot:hover {
      background-color: #0876e4;
    }
  }
}
</style>
