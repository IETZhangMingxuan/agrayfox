<template>
  <!-- 博客详情 -->
  <div id="articleDetails">
    <Header />
    <div class="details">
      博客详情
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
     /*  BlogDetailsList: [
        {
          id: 1,
          title: `<h2 style="background-color: #eaeaea;">测试标题</h2>
        <h2 style="color:red">测试带样式的标题</h2>
        import Vue
        import VueClipboard from 'vue-clipboard2'
        Vue.use(VueClipboard)
        <p>测试文本</p>
&lt;template id="t"&gt;
&lt;div class="container"&gt;
&lt;input type="text" v-model="message"&gt;
&lt;button type="button"
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">Copy!&lt;/button&gt;
        &lt;/div>
        &lt;/template>
        &lt;script>
    new Vue({
    el: '#app',
    template: '#t',
    data: function () {
        return {
        message: 'Copy These Text'
        }
    },
    methods: {
        onCopy: function (e) {
        alert('You just copied: ' + e.text)
        },
        onError: function (e) {
        alert('Failed to copy texts')
        }
    }
    })
    &lt;/script>`
        }
      ] */
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
#articleDetails {
  .details {
    margin-top: 70px;
    height: 300px;
  }
}
</style>
