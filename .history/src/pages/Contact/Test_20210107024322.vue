<template>
  <div id="ajax">
    <form action=`https://www.maildock.ink/state/send/mail?posId="12a7d180bfef4ba2976a3311936c9073` method="POST">
       <input type="text" name="name">
       <input type="email" name="email">
       <input type="submit" value="Send">
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
