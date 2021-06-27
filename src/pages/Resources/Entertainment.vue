<template>
  <div id="entertainment">
    <CommonHot
      :list="GameSkyGameList"
      :titleName="`游民星空热点`"
      :logo="`http://so.gamersky.com/favicon.ico`"
      :href="`http://so.gamersky.com/?s=`"
    />
    <CommonHot
      :list="SteamList"
      :titleName="`STEAM热门游戏`"
      :logo="`https://store.steampowered.com/favicon.ico`"
      :href="`https://store.steampowered.com/search/?term=`"
    />
    <CommonHot
      :list="MaoYanList"
      :titleName="`猫眼热门电影`"
      :logo="`https://maoyan.com/favicon.ico`"
      :href="`https://maoyan.com/query?kw=`"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      GameSkyGameList: state => state.anyknow.GameSkyGameList,
      SteamList: state => state.anyknow.SteamList,
      MaoYanList: state => state.anyknow.MaoYanList
    })
  }
};
</script>
<style scoped lang="less">
#entertainment {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
