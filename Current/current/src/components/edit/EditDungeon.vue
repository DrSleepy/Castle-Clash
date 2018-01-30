<template lang="html">
<div class="app-edit-dungeon">
  <div class="options" v-selected:options>
    <p>Expert</p>
    <p>Insane</p>
  </div>
  <div class="dungeon-set">
    <p>Dungeon Set:</p>
    <input class="c-def-input" placeholder="1 - 8">
  </div>
  <div class="dungeon-level">
    <p>Dungeon Level:</p>
    <input class="c-def-input" placeholder="1 - 10">
  </div>
</div>
</template>

<style lang="css" scoped>
.app-edit-dungeon{
  display: grid;
  grid-template-rows: max-content 1fr 1fr;
}
.options{
  color: #637B8A;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: solid 1px #F4F4F4;
}
.options>*{
  display: grid;
  justify-content: center;
  padding: 15px;
}
.dungeon-set, .dungeon-level{
  color: #637B8A;
  display: grid;
  grid-template-columns: 105px 1fr;
  align-items: center;
  grid-gap: 10px;
}
.dungeon-set{
  padding: 20px 20px 10px 20px;
}
.dungeon-level{
  padding: 10px 20px 20px 20px;
}
input{
  padding: 8px;
}
</style>

<script>
export default {}
</script>
