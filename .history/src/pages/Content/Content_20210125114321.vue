<template>
  <div id="content">
    <h3 id="test">正在开发中...预计2021年12月上线</h3>
    <pre>
      {{list[0].details}}
    </pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[{
        id:1,
        details:`<h2 style="background-color: #eaeaea;">测试标题</h2>
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
      }]
    };
  }
};
</script>
<style scoped lang="less">
#content {
  // border: 1px solid blue;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  width: 1200px;
  #test {
    color: #666;
    font-family: "Microsoft Yahei";
    margin-top: 50px;
  }
}
</style>
