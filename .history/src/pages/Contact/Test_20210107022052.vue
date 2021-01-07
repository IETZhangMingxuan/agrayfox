<template>
  <div id="ajax">
    <form id="my-form" action="https://formspree.io/f/myyblyqp" method="POST">
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Message:</label>
      <input type="text" name="message" />
      <button id="my-form-button">Submit</button>
      <p id="my-form-status">等待中</p>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    sendEmail() {}
  }
};
</script>
<style></style>
