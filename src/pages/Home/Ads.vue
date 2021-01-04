<template>
  <div id="ads">
    <div id="three-container"></div>
    <div id="instructions">
      click and drag to control the animation
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#ads {
  margin: 0;
  overflow: hidden;
}
canvas {
  background-image: radial-gradient(#666, #333);
}
#instructions {
  position: absolute;
  color: #fff;
  bottom: 0;
  padding-bottom: 6px;
  font-family: sans-serif;
  width: 100%;
  text-align: center;
  pointer-events: none;
}
</style>
