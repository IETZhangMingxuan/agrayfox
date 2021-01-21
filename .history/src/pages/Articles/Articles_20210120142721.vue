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
      />
    </div>
  </div>
</template>
<script>
import aplayer from "vue-aplayer";
export default {
  data() {
    return {};
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
      color:#666;
      font-size:14.5px;
      font-family: "Microsoft Yahei";
      font-weight: 300;
    }
  }
}
</style>
