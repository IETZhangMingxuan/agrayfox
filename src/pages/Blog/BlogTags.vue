<template>
  <div class="blog-tags">
    <div class="line"></div>
    <h4>标签云搜索</h4>
    <input type="text" placeholder="请输入要搜索的内容" />
    <div class="tags">
      <a href="javascript:;">Vue</a>
      <a href="javascript:;">Nodejs</a>
      <a href="javascript:;">React</a>
      <a href="javascript:;">Javascript</a>
      <a href="javascript:;">Git</a>
      <a href="javascript:;">element UI</a>
      <a href="javascript:;">Promise</a>
      <a href="javascript:;">CSS3</a>
      <a href="javascript:;">HTML5</a>
      <a href="javascript:;">Canvas</a>
      <a href="javascript:;">Axios</a>
      <a href="javascript:;">Vant</a>
      <a href="javascript:;">TypeScript</a>
      <a href="javascript:;">小程序</a>
      <a href="javascript:;">npm包管理工具</a>
      <a href="javascript:;">MySQL</a>
      <a href="javascript:;">ECS</a>
      <a href="javascript:;">Flex布局</a>
      <a href="javascript:;">yum</a>
      <a href="javascript:;">Linux</a>
      <a href="javascript:;">PHP</a>
      <a href="javascript:;">api</a>
      <a href="javascript:;">优化</a>
      <a href="javascript:;">CommonJS</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* 标签云 */
.blog-tags {
  background-color: #fff;
  position: relative;
  margin-bottom: 20px;
  padding: 20px 20px 10px;
  border-radius: 10px;
}

.blog-tags .line {
  position: absolute;
  left: 20px;
  top: 19px;
  width: 3px;
  height: 21px;
  background-color: orangered;
}

.blog-tags h4 {
  height: 25px;
  line-height: 6px;
  padding: 6px 0px 0px 15px;
  color: #333;
  font-family: "Microsoft Yahei";
  font-size: 16px;
  font-weight: 400;
}

.blog-tags input {
  width: 90%;
  height: 20px;
  margin-top: 5px;
  border-radius: 20px;
  padding: 5px 12px;
  outline: none;
  border: 1px solid #999;
  font-family: "Microsoft Yahei";
  font-weight: 300;
  font-size: 14px;
  color: #333;
  letter-spacing: 0.5px;
}

.blog-tags input:focus {
  border: 1px solid #333;
}

.blog-tags .tags {
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.blog-tags .tags a {
  margin-top: 10px;
  margin-right: 10px;
  padding: 5px 8px;
  text-decoration: none;
  background-color: rgba(64, 158, 239, 0.8);
  border-radius: 10px;
  font-family: "Microsoft Yahei";
  font-weight: 400;
  color: #fff;
  font-size: 14px;
}

.blog-tags .tags a:hover {
  background-color: rgba(64, 158, 239, 1);
}
</style>
