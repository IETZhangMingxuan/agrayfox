<template>
  <div id="kuaishouSearchUsers">
    <ul class="user-list" v-if="kuaiShouSearchUsers.visionSearchUser">
      <li v-for="(item, index) in kuaiShouSearchUsers.visionSearchUser.users" :key="index">
        <img :src="item.headurl" alt="" style="width:20px;height:20px" />
        <router-link
          :to="`/douyin/kuaiShouSearch/KuaiShouSearchUsers/${item.user_id}?num=${index}`"
          class="user-name"
          >{{ item.user_name }}</router-link
        >
        <span class="user-info">{{ item.user_text }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      kuaiShouSearchUsers: state => state.myKuaiShou.kuaiShouSearchUsers
    })
  }
};
</script>
<style scoped lang="less">
#kuaishouSearchUsers {
  height: 527px;
  padding: 5px 20px;
  background-color: #fff;
  border-radius: 30px;
  overflow: auto;
  .user-list {
    overflow: scroll;
    list-style: none;
    font-family: "Microsoft Yahei";
    font-weight: 300;
    li {
      padding: 5px;
      position: relative;
      background-color: #f4f4f4;
      border-radius: 10px;
      margin: 10px auto;
      height: 50px;
      img {
        width: 45px !important;
        height: 45px !important;
        border-radius: 50%;
        position: absolute;
        left: 20px;
        bottom: 7px;
      }
      .user-name {
        text-decoration: none;
        color: orangered;
        font-weight: 700;
        font-size: 14px;
        position: absolute;
        left: 75px;
        bottom: 32px;
      }
      .user-info {
        color: #555666;
        font-size: 13px;
        position: absolute;
        left: 75px;
        bottom: 9px;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        font-family: "microsoft yahei";
        padding: 0 5px 0 0;
        text-align: left;
      }
    }
  }
}
h1 {
  color: #fff;
}
</style>
