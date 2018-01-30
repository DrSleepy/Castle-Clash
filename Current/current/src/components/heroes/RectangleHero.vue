<template>
<div class="component-layout">
  <div class="hero-panel">
    <div class="left-panel">
      <img src="https://vignette4.wikia.nocookie.net/castle-clash/images/2/26/Anubis.png/revision/latest?cb=20170309113605">
    </div>
    <div class="middle-panel">
      <p class="hero-name">Anubis</p>
      <p class="level-text">Level</p>
      <div class="progress-level-outer">
        <div class="progress-level-inner"><p>1/200</p></div>
      </div>
    </div>
    <div class="right-panel">
      <img src="https://vignette2.wikia.nocookie.net/castle-clash/images/2/2e/Star.png/revision/latest?cb=20140206093905">
      <img src="https://vignette3.wikia.nocookie.net/castle-clash/images/0/0e/Skill_Horror_Show.png/revision/latest?cb=20170309113610">
      <img src="https://vignette4.wikia.nocookie.net/castle-clash/images/8/8b/Talent_War_God.png/revision/latest?cb=20160717082220">
      <img src="https://vignette4.wikia.nocookie.net/castle-clash/images/1/1c/Inscription_icon.png/revision/latest?cb=20141208144550">
      <img src="https://vignette.wikia.nocookie.net/castle-clash/images/a/a7/Enchantment_Forest_Ward.png/revision/latest?cb=20170814092643">
      <p>None</p>
      <p>9/10</p>
      <p>8/8</p>
      <p>100</p>
      <p>5/5</p>
    </div>
  </div>
</div>
</template>

<style scoped>
.component-layout{
  transition: 0.2s;
  color: #384b58;
}
.hero-panel{
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  transition: 0.2s;
}
.hero-panel:hover{
  background-color: #F9F9F9;
}
.hero-panel>div {
  border: solid 1px #EEEEEE;
  border-top: none;
}

/*LEFT PANEL*/
.left-panel, .middle-panel, .right-panel{
  padding: 10px 20px;
}
.left-panel img {
  height: 90px;
}

/*MIDDLE PANEL*/
.middle-panel {
  display: grid;
  grid-template-rows: 1fr max-content max-content;
}
.middle-panel div {
  border-radius: 2px;
}
.hero-name {
  font-size: 26px;
}
.level-text {
  padding-bottom: 2px;
}
.progress-level-outer {
  background-color: #E8E8E8;
  -webkit-box-shadow: 0.3px 0 10px 0px rgba(216, 216, 216, 216);
  box-shadow: 0px 0px 1px 1px rgba(216, 216, 216, 216);
}
.progress-level-inner {
  padding: 5px;
  width: 30%;
  color: white;
  background: linear-gradient(to top left, #16DFEC, #16ABEC);
  display: grid;
  justify-items: center;
}
.top-div:hover:hover .progress-level-inner{
  background: linear-gradient(to top left, #14E9F0, #17C7EE);
}

/*RIGHT PANEL*/
.right-panel {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-column-gap: 10px;
  justify-items: center;
  align-content: center;
  font-size: 15px;
  grid-row-gap: 20px;
}
.right-panel>img {
  width: 35px;
}
</style>

<script>
export default {}
</script>
