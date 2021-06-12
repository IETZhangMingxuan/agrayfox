<template>
  <div class="server-recommand">
    <div class="line"></div>
    <h4>云服务器配置</h4>
    <img src="../public/images/aliyun.jpg" alt="" class="aliyun" />
    <p>
      腾讯云
      <a
        href="https://cloud.tencent.com/act/618go?cps_key=3ab87cdb18ffd38bd8c94bfbf9d84d07&fromSource=gwzcw.1293314"
      >
        https://cloud.tencent.com</a
      >
    </p>
    <p>配置:1核2G 99元/年</p>
    <p>
      阿里云
      <a href="https://www.aliyun.com/minisite/goods?userCode=56gyhchh">
        https://www.aliyun.com</a
      >
    </p>
    <p>配置:1核2G 95元/年</p>
    <p>每天8点更新库存，阿里云最低95/年云服务器。</p>
    <p>服务器相关理论知识是 前端开发进阶 必经之道。</p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.server-recommand {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
  color: #777;
  font-family: "Microsoft Yahei";
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.server-recommand .line {
  position: absolute;
  left: 20px;
  top: 19px;
  width: 3px;
  height: 21px;
  background-color: orangered;
}

.server-recommand h4 {
  height: 25px;
  line-height: 22px;
  padding: 8px 0px 8px 25px;
  color: #333;
  font-size: 16px;
  font-weight: 400;
}

.server-recommand .aliyun {
  display: block;
  width: 340px;
  margin: 5px 0px 5px 10px;
  border-radius: 5px;
}

.server-recommand p {
  padding: 5px 10px;
  font-weight: 400;

}

.server-recommand a {
  text-decoration: none;
  color: #409eff;
  display:inline-block;
}
</style>
