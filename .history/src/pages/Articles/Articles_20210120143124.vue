<template>
  <div id="articles">
    <h3 id="test">正在开发中...预计2021年2月上线</h3>
    <div id="aplayerWrapper">
      <aplayer
        autoplay
        :music="{
          title: '测试用歌曲',
          artist: 'Gray Fox',
          src: 'http://music.163.com/song/media/outer/url?id=392605.mp3',
          pic: 'http://p3.music.126.net/pWb12X9wqFw2rvKyFFJrCA==/36283883730804.jpg'
        }"
        :list="audio"
      />
    </div>
  </div>
</template>
<script>
import aplayer from "vue-aplayer";
export default {
  data() {
    return {
      // 音频列表
      audio: [
        {
          title: "好想爱这个世界啊",
          artist: "华晨宇",
          url:
            "http://p4.music.126.net/3-y4J1CayZI0k2NkNkTmDw==/109951164525748216.jpg",
          pic:
            "http://p4.music.126.net/3-y4J1CayZI0k2NkNkTmDw==/109951164525748216.jpg",
          lrc: "[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh"
        },
        {
          title: "蒲空英的约定",
          artist: "黄叶",
          url:
            "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E8%92%B2%E5%85%AC%E8%8B%B1%E7%9A%84%E7%BA%A6%E5%AE%9A.m4a",
          pic:
            "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720200713203148.jpg",
          lrc: "[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh"
        },
        {
          title: "无畏",
          artist: "马頔",
          url:
            "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E9%A9%AC%E9%A0%94%20-%20%E6%97%A0%E7%95%8F.flac",
          pic: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E4%BB%A5%E5%AE%B6%E4%B9%8B%E5%90%8D.jpg', // prettier-ignore
          lrc: "[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词"
        },
        {
          title: "蓝乐",
          artist: "白纸",
          url:
            "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E8%93%9D%E4%B9%90%20-%20%E7%99%BD%E7%BA%B8.flac",
          pic: "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/-1992181439.jpg",
          lrc: "[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词"
        }
      ]
    };
  },
  components: { aplayer }
};
</script>
<style scoped lang="less">
#articles {
  // border: 1px dashed blue;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
  #test {
    color: #666;
    font-family: "Microsoft Yahei";
    margin-top: 50px;
  }
  #aplayerWrapper {
    width: 500px;
    height: 200px;
    border: 2px dashed blue;
    .aplayer {
      width: 400px;
      height: 100px;
      border: 2px dashed red;
      // 歌曲标题字体设置
      color: #444;
      font-size: 16px;
      font-family: "Microsoft Yahei";
      font-weight: 400;
    }
  }
}
</style>
