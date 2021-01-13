<template>
  <div id="articles">
    <aplayer
      autoplay
      :music="{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
        src: 'http://music.163.com/song/media/outer/url?id=447925558.mp3',
        pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
      }"
    />
  </div>
</template>
<script>
import Aplayer from "vue-aplayer";
export default {
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
}
</style>
