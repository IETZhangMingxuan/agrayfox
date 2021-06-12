<template>
  <!-- 博客详情 -->
  <div class="articleDetails">
    <!-- 左边栏 -->
    <div class="left">
      <div class="blank">
        博客头部
      </div>
      <h2 class="title">{{ BlogDetailsList[num].title }}</h2>
      <p class="info">{{ BlogDetailsList[num].info }}</p>
      <pre class="article">
        {{ BlogDetailsList[num].details }}
      </pre>
      <hr />
    </div>
    <!-- 右边栏 -->
    <div class="right">
      <div class="commend">
        推荐栏
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      BlogDetailsList: [
        {
          id: 1,
          title: "vue利用vue-clipboard2实现剪切板的功能",
          info:
            "之前写过这个小功能看了网上一些文档，都写的比较繁琐，所以今天整理出一些简单的代码，摆出来，留以后使用。",
          details: `
直接简洁上代码

一、安装

npm install --save vue-clipboard2 or use dist/vue-clipboard.min.js 

二、检查

如果是npm，检查package.json是否安装成功。

三、启动

npm run dev

四、引入

main.js添加

import Vue
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

五、执行

<template id="t">
  <div class="container">
    <input type="text" v-model="message">
    <button type="button"
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">Copy!</button>
  </div>
</template>
`
        },
        {
          id: 2,
          title: "2020说说关于React的那些事",
          info:
            "React 已经诞生很久了，自从它诞生开始，围绕组件驱动形成了一个非常全面的生态，但是来自其他编程语言或者框架的开发人员很难找到要构建一个 React ...",
          details: `<h2 style="background-color: #eaeaea;">测试标题</h2>
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
        },
        {
          id: 3,
          title: "我是第三篇博客的标题",
          details: `<h2 style="background-color: #eaeaea;">测试标题</h2>
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
        },
        {
          id: 4,
          title: "我是第四篇博客的标题",
          details: `<h2 style="background-color: #eaeaea;">测试标题</h2>
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
        },
        {
          id: 5,
          title: "我是第五篇博客的标题",
          details: `<h2 style="background-color: #eaeaea;">测试标题</h2>
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
      ],
      num: this.$route.params.id - 1
    };
  },
  methods: {},
  created(num) {
    num = this.$route.params.id;
    console.log(num);
  }
};
</script>
<style lang="less" scoped>
.articleDetails {
  font-family: "Microsoft Yahei";
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  .left {
    // border: 1px solid blue;
    width: 70%;
    padding-right: 30px;
    .blank {
      @blankHeight: 50px;
      height: @blankHeight !important;
      line-height: @blankHeight;
      text-align: center;
      background-color: #eaeaea;
      color: blue;
    }
    .title {
      font-size: 22px;
      color: #333;
      line-height: 28px;
      font-weight: bold;
      padding: 30px 0px 5px 10px;
    }
    .info {
      text-align: left;
      width: 600px;
      font-size: 14px;
      color: #666;
      padding: 20px 10px;
      height: 40px;
    }
    .article {
      color: #666;
      padding: 2px 10px;
      font-size: 15px;
      font-family: "Microsoft Yahei";
      font-weight: 400;
      letter-spacing: 1px;
    }
  }
  .right {
    border: 1px solid red;
    width: 30%;
  }
}
</style>
