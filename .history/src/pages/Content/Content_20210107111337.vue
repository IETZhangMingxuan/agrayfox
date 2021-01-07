<template>
  <div id="content">
    <iframe :src="url" frameborder="0" scrolling="no" width="1200px" height="800px" class="myIframe"></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:'http://www.baidu.com'
    }
  },
};
</script>
<style scoped lang="less">
#content {
  border: 1px solid blue;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
  .myIframe{
  }
}
</style>
