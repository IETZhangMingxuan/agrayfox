<template>
  <div class="read-recommand">
    <div class="line"></div>
    <h4>热门文章</h4>
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <router-link :to="/blog/ + news.id"
          >{{news.title}}</router-link>
      </li>
    </ul>
    <div class="pages">
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      newsList: ``
    };
  },
  async mounted() {
    let result = await axios({
      method: "GET",
      url: "http://59.110.242.49:8080/getBlogs"
    }).then(response => {
      return response.data;
    });
    this.newsList = result;
  }
};
</script>
<style scoped>
.read-recommand {
  position: relative;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px 20px 10px;
  border-radius: 10px;
  min-height: 300px;
}

.read-recommand .line {
  position: absolute;
  left: 20px;
  top: 19px;
  width: 3px;
  height: 21px;
  background-color: orangered;
}

.read-recommand h4 {
  height: 25px;
  line-height: 6px;
  padding: 6px 0px 0px 15px;
  color: #333;
  font-family: "Microsoft Yahei";
  font-size: 16px;
  font-weight: 400;
}

.read-recommand ul {
  list-style-type: none;
}

.read-recommand li {
  position: relative;
  width: 330px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  letter-spacing: 0.5px;
}

.read-recommand li a {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  color: #409eef;
  height: 20px;
  line-height: 20px;
  padding: 5px;
}

.read-recommand .pages {
  position: absolute;
  bottom:10px;
  right:170px;
  display: flex;
  justify-content: center;
  width: auto;
}

.read-recommand .point {
  width: 10px;
  height: 10px;
  margin: 8px 0px 5px 10px;
  border-radius: 50%;
  background-color: rgba(136, 136, 136, 0.3);
}

.read-recommand .point:hover {
  background-color: rgba(136, 136, 136, 1);
  cursor: pointer;
}
</style>
