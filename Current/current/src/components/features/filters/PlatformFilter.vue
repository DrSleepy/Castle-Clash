<template>
<div class="component-layout">
  <p class="header">Platform</p>
  <div class="full-section">
    <label>
      <input type="checkbox">
      <span><img src="http://mossegalapoma.cat/imatges/amazon_icon_512x_512.png"></span>
    </label>
    <label>
      <input type="checkbox">
      <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"></span>
    </label>
    <label>
      <input type="checkbox">
      <span><img src="http://1000logos.net/wp-content/uploads/2017/02/iOS-Logo.png"></span>
    </label>
    <label>
      <input type="checkbox">
      <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"></span>
    </label>
  </div>
</div>
</template>

<style scoped>
.component-layout{
  display: grid;
  width: max-content;
  height: max-content;
}
.header{
  font-weight: 500;
  padding: 7px 10px;
  font-size: 14px;
  border-bottom: solid 1px #E8E8E8;
  color: #585B7B;
  background-color: #F8F8F8;
  border-top-right-radius: 3px;
}
.full-section{
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 10px 25px;
  padding: 15px 25px;
}
label{
  display: grid;
}
span{
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
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
img{
  width: 25px;
  image-rendering: auto;
}
</style>

<script>
export default {}
</script>
