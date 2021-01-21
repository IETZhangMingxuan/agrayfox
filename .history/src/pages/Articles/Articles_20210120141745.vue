<template>
  <div id="articles">
    <h3 id="test">正在开发中...预计2021年2月上线</h3>
    <div class="aplayer">
      <aplayer
        autoplay
        :music="{
          title: 'secret base~君がくれたもの~',
          artist: 'Silent Siren',
          src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        }"
        :mini="true"
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
  .aplayer{
    width:500px;
    height:200px;
    border:1px dashed blue;
  }
}
</style>
