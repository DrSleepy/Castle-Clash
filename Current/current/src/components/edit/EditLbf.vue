<template lang="html">
<div class="app-edit-lbf" v-selected:app-edit-lbf>
 <p>0 - 999</p>
  <p>1,000 - 1,499</p>
  <p>1,500+</p>
</div>
</template>

<style lang="css" scoped>
.app-edit-lbf {
  color: #637b8a;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}
.app-edit-lbf > * {
  padding: 15px;
  display: grid;
  justify-content: center;
  align-content: center;
}
</style>

<script>
export default {};
</script>
