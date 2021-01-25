<template>
  <div id="content">
    <h3 id="test">正在开发中...预计2021年2月上线</h3>
    <!-- <a href="../../../public/1.html">跳转到1.html</a> -->
    <!-- <button @click="jumpHtml">跳转到1.html</button> -->
    <!-- <pre class="delete">
      {{list[0].details}}
    </pre>
    <div>
      {{list[1].details}}
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[{
        id:1,
        details:`
import Vue
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
<p style="color:red">测试文本</p>;
<template id="t"&gt;
<div class="container"&gt;
<input type="text" v-model="message"&gt;
<button type="button"
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
      },{
        id:2,
        details:`
import Vue
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
<h2 style="color:red">测试文本</h2>;
<template id="t"&gt;
<div class="container"&gt;
<input type="text" v-model="message"&gt;
<button type="button"
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
  },
  methods: {
    jumpHtml(){
      window.location.href="../../../public/1.html"
    }
  },
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
    height:1000px;
    .delete{
      text-align: left;
    }
  }
}
</style>
