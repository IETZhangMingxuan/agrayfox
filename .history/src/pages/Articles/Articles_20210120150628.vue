<template>
  <div id="articles">
    <h3 id="test">正在开发中...预计2021年2月上线</h3>
    <div id="aplayerWrapper">
      <aplayer
        autoplay
        :music="{
          title: '测试用歌曲',
          artist: audio[0].artist,
          src: 'http://music.163.com/song/media/outer/url?id=392605.mp3',
          pic: 'http://p3.music.126.net/pWb12X9wqFw2rvKyFFJrCA==/36283883730804.jpg'
        }"
        :list="audio"
        showLrc="true"
        float="true"
        listFolded
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
          lrc:'[00:00:05] 模拟歌词'
        },
        {
          title: "雅俗共赏",
          artist: "许嵩",
          url: "http://music.163.com/song/media/outer/url?id=411214279.mp3",
          pic: "http://p3.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
        },
        {
          title: "城南花已开",
          artist: "三亩地",
          url: "http://music.163.com/song/media/outer/url?id=468176711.mp3",
          pic: 'http://p3.music.126.net/i-7ktILRPImJ0NwiH8DABg==/109951162885959979.jpg', // prettier-ignore
        },
        {
          title: "可乐",
          artist: "赵紫骅",
          url: "http://music.163.com/song/media/outer/url?id=29759733.mp3",
          pic: 'http://p3.music.126.net/qOfVT6izV4mBe4IyQn489Q==/18190320370401891.jpg', // prettier-ignore
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
    // 测试
    margin-top:20px;
    width: 800px;
    height: 700px;
    // border: 2px dashed blue;
    .aplayer {
      width: 400px;
      height: 500px;
      border: 1px dashed red;
      // 歌曲标题字体设置
      color: #444;
      font-size: 16px;
      font-family: "Microsoft Yahei";
      font-weight: 400;
    }
  }
}
</style>
