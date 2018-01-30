<template lang="html">
<div class="app-edit-guild-status" v-selected:app-edit-guild-status>
  <p>No</p>
  <p>Yes</p>
</div>
</template>

<style lang="css" scoped>
.app-edit-guild-status{
  color: #637B8A;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.app-edit-guild-status>*{
  padding: 15px;
  display: grid;
  justify-content: center;
  align-content: center;
}
</style>

<script>
export default {}
</script>
