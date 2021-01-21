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
          title: "祝你生日快乐",
          artist: "云雀合唱团",
          url: "http://music.163.com/song/media/outer/url?id=392605.mp3",
          pic: "http://p4.music.126.net/pWb12X9wqFw2rvKyFFJrCA==/36283883730804.jpg",
          lrc: "[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh"
        },
        {
          title: "雅俗共赏",
          artist: "许嵩",
          url: "http://music.163.com/song/media/outer/url?id=411214279.mp3",
          pic: "http://p3.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
          lrc: "[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh"
        },
        {
          title: "城南花已开",
          artist: "三亩地",
          url:
            "http://music.163.com/song/media/outer/url?id=468176711.mp3",
          pic: 'http://p3.music.126.net/i-7ktILRPImJ0NwiH8DABg==/109951162885959979.jpg', // prettier-ignore
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
