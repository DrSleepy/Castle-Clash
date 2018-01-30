<template>
<div class="guild-details">
  <div class="info">
    <div>
      <p class="title">Leaders</p>
      <p>Dav9</p>
      <p>Pinchmeistro</p>
      <p>Sigtran</p>
    </div>
    <div>
      <p class="title">Boss Time</p>
      <p>Boss 3: 14:00 (Game Time)</p>
      <p>Boss 5: 14:10 (Game Time)</p>
    </div>
    <div>
      <p class="title">Fortress Feud Time</p>
      <p>18:00 (Game Time)</p>
    </div>
    <div>
      <p class="title">Max Torches</p>
      <p>Often</p>
    </div>
    <div>
      <p class="title">Guild Communication</p>
      <p>LINE</p>
      <p>Discord</p>
      <p>Reddit</p>
    </div>
  </div>
  <div class="message">
    <p class="title">More info</p>
    <textarea class="c-def-input" placeholder="Enter more info here"></textarea>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
/*GUILD DETAILS PANEL*/
.guild-details{
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-gap: 50px;
}
.info{
  display: grid;
  justify-content: space-between;
  grid-column: 1/6;
}
.info > div {
  grid-row: 1;
  font-size: 16px;
}

.title {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
  grid-row: 1;
  padding: 10px 0;
  border-bottom: solid 1px #F8F8F8;
  height: max-content;
}

.message {
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-column: 1/6;
}
</style>
