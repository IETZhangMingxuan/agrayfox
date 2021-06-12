<template>
    <div class="blog-header" id="blognews">
      <div class="blog-header-news">
        <i class="iconfont icon-speaker"></i>
        <ul class="blog-header-newslist">
          <li>在使用过程中有问题,可以在留言板中留下你宝贵的意见</li>
          <li>在使用过程中有问题,可以在留言板中留下你宝贵的意见2</li>
          <li>在使用过程中有问题,可以在留言板中留下你宝贵的意见3</li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
  /* 博客头组件 */
  .blog-header {
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    box-sizing: content-box;
    /* border: 1px solid red; */
    border-radius: 10px;
    background-color: #fff !important;
    font: 14px "Microsoft Yahei";
    font-weight: 400;
    color: #999;
    letter-spacing: 0.5px;
  }

  .blog-header-news {
    display: flex;
  }

  .icon-speaker {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    color: #409eff;
    font-size: 14px;
  }

  .blog-header-newslist {
    list-style-type: none;
    background-color: transparent;
    /* border: 1px solid red; */
  }

  .blog-header-newslist li {
    height: 30px;
    line-height: 30px;
    padding: 5px 10px;
    /* border: 1px solid blue; */
    background-color: #fff;
    color: #888;
    user-select: none;
    cursor: pointer;
  }
</style>
