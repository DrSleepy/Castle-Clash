<template lang="html">
<div class="app-edit-overlay">
  <slot></slot>
</div>
</template>

<style lang="css" scoped>
.app-edit-overlay{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: grid;
  justify-content: center;
  overflow: auto;
  padding: 100px;
  box-sizing: border-box;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>

<script>
export default {
  mounted(){
    document.body.style.overflow = "hidden";
  },
  destroyed(){
    document.body.style.overflow = "visible";
  }
}
</script>
