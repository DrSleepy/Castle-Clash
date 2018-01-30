<template lang="html">
<div class="app-edit-lava-status" v-selected:app-edit-lava-status>
  <p>No</p>
  <p>Yes</p>
</div>
</template>

<style lang="css" scoped>
.app-edit-lava-status{
  color: #637B8A;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.app-edit-lava-status>*{
  padding: 15px;
  display: grid;
  justify-content: center;
  align-content: center;
}
</style>

<script>
export default {}
</script>
