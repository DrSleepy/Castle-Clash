<template>
  <div class="component-layout">
    <input :style="searchBarProps.input" :placeholder="searchBarProps.input.placeholder">
    <i class="fa fa-search" :style="searchBarProps.icon"></i>
  </div>
</template>

<style scoped>
.component-layout{
  display: grid;
  grid-template-columns: 1fr max-content;
  height: 100%;
}
.component-layout>*{
  padding: 10px;
  background-color: white;
  border: solid 1px #E5E5E5;
}
input{
  border-right: none !important;
}
i{
  font-size: 14px;
  border-left: none;
  transition: 0.3s;
  display: grid;
  align-content: center;
}
i:hover{
  border: solid 1px #C9C9C9;
  background-color: #EFEFEF;
  cursor: pointer;
}
</style>

<script>
export default {
  props: {
    // searchBarProps .input .icon
    searchBarProps: Object,
  },
}
</script>
