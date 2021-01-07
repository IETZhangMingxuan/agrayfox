<template>
  <div id="ajax">
    <form action="https://formspree.io/f/myyblyqp" method="POST" id="my-form" ref="formX">
      <input type="text" name="name" placeholder="请输入昵称" autocomplete="off" />
      <input type="email" name="_replyto" placeholder="请输入邮箱" autocomplete="off" />
      <input type="text" name="main" placeholder="在此处输入留言内容" />
      <button id="my-form-button" @click="sendEmail">提交评论</button>
      <p
        id="my-form-status"
        style="background:#eaeaea;margin-top:20px;margin-bottom:20px;padding:10px;"
        ref="statusX"
      >
        待发送
      </p>
    </form>
  </div>
</template>
<script>
    window.addEventListener("DOMContentLoaded", function () {
        var button = document.querySelector("#my-form-button");
        var status = document.querySelector("#my-form-status");

        function success() {
            this.$refs.formX.reset();
            this.$refs.statusX.innerHTML = "提交成功!待审核后显示!"
        }

        function error() {
            this.$refs.statusX.innerHTML = "出错了!请检查一下邮箱格式是否正确";
        }
        this.$refs.formX.addEventListener("submit", function (ev) {
            ev.preventDefault();
            var data = new FormData(this.$refs.formX);
            ajax(this.$refs.formX.method, this.$refs.formX.action, data, success, error);
        });
    });

    function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }
</script>
<script>
export default {};
</script>
<style></style>
