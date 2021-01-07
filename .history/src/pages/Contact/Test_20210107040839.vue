<template>
  <div id="ajax">
    <iframe :src="iframeSrc" frameborder="0" class="wudi" scrolling=no></iframe>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        iframeSrc:`./delete.html`
    };
  }
};
</script>
<style scoped lang="less">
#ajax{
    .wudi{
        width:1200px;
                
    }
}
</style>
