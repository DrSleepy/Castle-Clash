<template lang="html">
<div class="app-edit-card">
  <p class="card-title"> {{content.title}} </p>
  <slot></slot>
</div>
</template>

<style lang="css" scoped>
.app-edit-card {
  display: grid;
  grid-template-rows: max-content 1fr;
  font-size: 13px;
  background-color: white;
  border: solid 1px #e7e7e7;
  border-radius: 5px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.1);
  user-select: none;
  cursor: default;
}
.card-title {
  color: #384b58;
  font-size: 15px;
  padding: 25px;
  background-color: #fbfbfc;
  letter-spacing: 0.5px;
  border-radius: 5px 5px 0 0;
  border-bottom: solid 1px #e7e7e7;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>

<script>
export default {
  props: {
    content: Object
  }
};
</script>
