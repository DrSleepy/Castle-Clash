<template>
<div class="component-layout">
  <p class="header">Need Lava Team</p>
  <div class="full-section">
    <label>
      <input type="checkbox">
      <span>Yes</span>
    </label>
    <label>
      <input type="checkbox">
      <span>No</span>
    </label>
  </div>
</div>
</template>

<style scoped>
.component-layout{
  display: grid;
  width: 100%;
  height: max-content;
  color: #585B7B;
}
.header{
  font-weight: 500;
  padding: 7px 10px;
  font-size: 14px;
  border-top: solid 1px #E8E8E8;
  border-bottom: solid 1px #E8E8E8;
  background-color: #F8F8F8;
}
.full-section{
  display: grid;
  grid-template-columns: repeat(2, max-content);
  padding: 15px;
  justify-content: space-around;
  font-size: 15px;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + span:before {
  content: '\f096';
  font-family: "FontAwesome";
  width: 1em;
  margin-right: 7px;
  display: inline-grid;
  color: #BABABA;
}
input[type="checkbox"]:checked + span:before {
  content: '\f046';
  color: #18ACF1;
}
span{
  font-weight: 500;
}
</style>

<script>
export default {
}
</script>
