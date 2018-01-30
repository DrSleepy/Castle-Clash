<template>
  <div class="header-info">
    <div class="might">
      <img src="../../pics/might.png">
      <p>156K</p>
    </div>
    <div class="line">
      <img src="../../pics/line.png">
      <p>LazyMisted</p>
    </div>
    <div class="discord">
      <img src="../../pics/discord.png">
      <p>None</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.header-info {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  font-size: 20px;
  grid-gap: 30px;
  padding: 0 40px;
  justify-content: end;
}
.header-info>div{
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  grid-gap: 10px;
}
.header-info img{
  width: 25px;
  image-rendering: auto;
}
.line img{
  width: 30px;
}
.discord img{
  width: 35px;
}
</style>
