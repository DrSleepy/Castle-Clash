<template>
<div>
  <app-edit-overlay v-if="showEdit">
    <app-player-edit></app-player-edit>
  </app-edit-overlay>

  <div class="app-player-profile">
    <div class="profile-header-panel">
      <h1 class="header-title">LazyMisted</h1>
      <app-player-social></app-player-social>
      <img class="platform" src="../../pics/android.png">
      <div class="global-edit" @click="showEdit = true">
        <span> Edit </span>
        <i class="fa fa-pencil-square-o"></i>
      </div>
    </div>
    <div>
      <div class="subtitle">
        <h1>Progress</h1>
      </div>
      <app-profile-details :profileDetails="progress"></app-profile-details>
    </div>
    <div class="subtitle hero">
      <h1>Heroes</h1>
      <div class="icons">
        <span class="new-hero-button c-def-btn" @click="newHero = !newHero">
          <i class="fa fa-plus"></i>
          <p>New Hero</p>
        </span>
        <i class="fa fa-th" @click="show = 'round'"></i>
        <i class="fa fa-bars" @click="show = 'rectangle'"></i>
      </div>
    </div>
    <div class="hero-panel">
      <app-new-hero v-if="newHero"></app-new-hero>
      <div class="round-heroes" v-if="show == 'round'">
        <app-round-hero v-for="(x, i) in players" :key="i"></app-round-hero>
      </div>
      <div class="rectangle-heroes" v-if="show == 'rectangle'">
        <app-rectangle-hero v-for="(x, i) in players" :key="i"></app-rectangle-hero>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.app-player-profile {
  display: grid;
  grid-template-rows: repeat(3, max-content) 1fr;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

/*HEADER PANEL*/
.profile-header-panel {
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
  font-size: 27px;
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
.subtitle>h1 {
  font-weight: 400;
  font-size: 21px;
}

/*HEROES BAR*/
.subtitle.hero {
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
}
.icons {
  justify-content: end;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 10px;
  align-items: center;
}
.icons>*:hover {
  cursor: pointer;
}
.new-hero-button {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 10px;
  align-items: center;
  margin-right: 10px;
  justify-content: end;
}

/*HERO PANEL*/
.hero-panel {
  background-color: white;
  border-radius: 0 0 5px 5px;
}
/*round-heroes NEEDS MOBILE FRIENDLY REVISION*/
.round-heroes {
  box-sizing: border-box;
  display: grid;
  grid-gap: 5px;
  padding: 5px;
  grid-template-columns: repeat(auto-fit, 222px);
  justify-content: space-between;
}
.rectangle-heroes{
  border-top: solid 1px #EEEEEE;
}
</style>

<script>
export default {
  data() {
    return {
      showEdit: false,
      progress: {
        layout: 'repeat(6, 1fr)',
        sections: [{
            img: require('../../pics/dungeons.png'),
            subtitle: 'Dungeons',
            text: '6/10'
          },
          {
            img: require('../../pics/hbm.png'),
            subtitle: 'Here Be Monsters',
            text: 'AE',
            width: '45px'
          },
          {
            img: require('../../pics/guild.png'),
            subtitle: 'In Guild',
            text: 'Yes'
          },
          {
            img: require('../../pics/lava-head.png'),
            subtitle: 'Need Lava Team',
            text: 'No',
            width: '47px'
          },
          {
            img: require('../../pics/lbf.png'),
            subtitle: 'Lost Battlefield',
            text: '1,000 - 1,499'
          },
          {
            img: require('../../pics/shards.png'),
            subtitle: 'Current Shards',
            text: '189,000'
          }
        ]
      },
      newHero: false,
      show: 'round',
      players: [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ]
    }
  },
}
</script>
