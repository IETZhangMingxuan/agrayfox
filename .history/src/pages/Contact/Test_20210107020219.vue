<template>
  <div id="ajax">
    <form onSubmit="{this.submitForm}" action="https://formspree.io/f/myyblyqp" method="POST">
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Message:</label>
      <input type="text" name="message" />
      {status === "SUCCESS" ?
      <p>Thanks!</p>
      : <button>Submit</button>} {status === "ERROR" &&
      <p>Ooops! There was an error.</p>
      }
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendEmail() {
      function success() {
        this.$refs.formX.reset();
        this.$refs.statusX.innerHTML = "提交成功!待审核后显示!";
      }

      function error() {
        this.$refs.statusX.innerHTML = "出错了!请检查一下邮箱格式是否正确";
      }
      this.$refs.formX.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(this.$refs.formX);
        ajax(this.$refs.formX.method, this.$refs.formX.action, data, success, error);
      });

      function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      }
    }
  }
};
</script>
<style></style>
