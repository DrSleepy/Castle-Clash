<template>
<div class="wrapper">
  <div class="profile-header-panel">
    <h1 class="header-title">Grafters</h1>
    <img class="platform" src="http://mossegalapoma.cat/imatges/amazon_icon_512x_512.png">
    <div class="global-edit">
      <span> Edit </span>
      <i class="fa fa-pencil-square-o"></i>
    </div>
  </div>
  <div class="subtitle">
    <h1>Requirements</h1>
  </div>
  <app-profile-details :profileDetails="guildRequirements"></app-profile-details>
  <div class="subtitle">
    <h1>Details</h1>
  </div>
  <div class="details">
    <app-guild-details></app-guild-details>
    <div class="buttons">
      <button class="c-def-btn"> Cancel </button>
      <button class="c-blue-btn"> Save </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      guildRequirements: {
        layout: 'repeat(4, 1fr)',
        sections: [
          { img: require('../../pics/might.png'), subtitle: 'Might', text: '300,000'},
          { img: require('../../pics/guild-war.png'), subtitle: 'Min Guild War Score', text: '2,000'},
          { img: 'https://vignette2.wikia.nocookie.net/castle-clash/images/1/18/Shard.png/revision/latest?cb=20140204181335', subtitle: 'Shard Donations', text: '200'},
          { img: 'https://vignette2.wikia.nocookie.net/castle-clash/images/3/30/Fire.png/revision/latest?cb=20140423112010', subtitle: 'Torch Participation', text: 'No'}
        ]
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-rows: repeat(4, max-content) 1fr;
  border-radius: 5px;
  font-family: 'Roboto Condensed';
  background-color: white;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

/*HEADER PANEL*/
.profile-header-panel{
  grid-template-columns: 1fr max-content;
  grid-template-columns: max-content 1fr max-content;
  background-color: #03AAF9;
  display: grid;
  align-items: center;
  padding: 30px 70px 30px 40px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: white;
  position: relative;
}
.header-title {
  font-size: 32px;
  letter-spacing: 1px;
  font-family: 'Roboto Condensed';
  font-weight: 400;
}
.platform {
  width: 50px;
  display: grid;
  justify-self: end;
  align-self: center;
  image-rendering: auto;
}

/*SUBTITLE BARS*/
.subtitle {
  padding: 15px 40px;
  background-color: #F8F8F8;
  color: black;
  border-top: solid 1px #ECECEC;
  border-bottom: solid 1px #ECECEC;
}
.subtitle>h1{
  font-weight: 400;
  font-size: 21px;
}

/*DETAILS PANEL*/
.details{
  display: grid;
  grid-template-rows: 1fr max-content;
  padding: 20px 40px;
}

/*BUTTONS*/
.buttons{
  display: grid;
  grid-template-columns: repeat(2, 100px);
  width: max-content;
  grid-gap: 10px;
  margin-top: 30px;
  justify-self: end;
}
</style>
