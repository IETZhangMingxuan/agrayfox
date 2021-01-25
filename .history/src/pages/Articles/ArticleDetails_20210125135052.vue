<template>
  <!-- 博客详情 -->
  <div id="articleDetails">
    <div class="details">
      <div class="blank" style="color:red">123</div>
      博客详情
      <h2>{{ BlogDetailsList[this.$route.params.id - 1].title }}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil cum similique dolores facere
        accusantium odit corporis nisi architecto aliquam ipsam illum molestias porro, magnam
        repudiandae, minus quibusdam consequuntur nemo laborum totam maiores iste ducimus velit
        perspiciatis doloribus. Pariatur nesciunt fugiat alias quod consequuntur at quam autem, sunt
        minima nam, voluptatum amet ut deserunt beatae sapiente assumenda maxime quia cumque. Labore
        tempore facilis magnam similique harum reiciendis saepe voluptatum iste numquam nihil sed,
        totam hic officia, ad eum accusamus doloribus quidem delectus mollitia optio soluta?
        Voluptatibus asperiores qui, rerum non, eius tempora ipsa impedit quo nesciunt tenetur
        voluptatum earum quam perspiciatis!
      </p>
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
          title: "我是第一篇博客的标题",
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
          id: 2,
          title: "我是第二篇博客的标题",
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
      num: "0"
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
#articleDetails {
  padding-top: 80px;

  .details {
    height: 300px;
    padding-top: 80px;
    .blank{
        height:220px !important;
        background-color: red;
        color:blue;
    }
  }
}
</style>
