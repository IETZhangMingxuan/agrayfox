<template>
  <div id="articles">
    <div class="aplayer">
      <aplayer
        autoplay
        :music="{
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'http://music.163.com/song/media/outer/url?id=447925558.mp3',
          pic: 'https://p9-dy-cdn.byteimg.com/iesmusic-cn-local/v1/tt-obj/image/eca059eac590183e3a13784f09dc3ed4.jpeg~100x100.jpeg?x-expires=1609351887&x-signature=9ksWFCtUGOh3Pv1DacPyNL871HE%3D'
        }"
        float
        list
        showLrc
        theme
      />
    </div>
  </div>
</template>
<script>
import Aplayer from "vue-aplayer";
export default {
  data(){
    return {
      list:[
        {}
      ]
    }
  },
  components: { Aplayer }
};
</script>
<style scoped lang="less">
#articles {
  border: 1px dashed blue;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
  .aplayer {
    width:500px;
    height:1000px;
  }
}
</style>
