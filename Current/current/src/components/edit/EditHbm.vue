<template lang="html">
<div class="app-edit-hbm" v-selected:app-edit-hbm>
  <p>A</p>
  <p>B</p>
  <p>C</p>
  <p>D</p>
  <p>E</p>
  <p>F</p>
  <p>G</p>
  <p>H</p>
  <p>I</p>
  <p>J</p>
  <p>K</p>
  <p>L</p>
  <p>M</p>
  <p>N</p>
  <p>O</p>
  <p>P</p>
  <p>Q</p>
  <p>R</p>
  <p>S</p>
  <p>T</p>
  <p>U</p>
  <p>V</p>
  <p>W</p>
  <p>X</p>
  <p>Y</p>
  <p>Z</p>
  <p>AA</p>
  <p>AB</p>
  <p>AC</p>
  <p>AD</p>
  <p>AE</p>
  <p>AF</p>
  <p>AG</p>
</div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.app-edit-hbm{
  color: #637B8A;
  overflow: hidden;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.app-edit-hbm>*{
  padding: 15px;
  display: grid;
  justify-items: center;
  align-items: center;
}
</style>
