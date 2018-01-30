<template>
<div class="page-layout">
  <div class="title-container">
    <h1 class="home-title">WELCOME</h1>
    <p class="home-text">This is a centralised space for all Castle Clash players wanting to keep track of their progress, recruit players or find a lava group</p>
    <img class="pet floating" src="../../pics/bubble.png">
  </div>
  <div class="cards">
    <app-card :card="playerCard"></app-card>
    <app-card :card="guildCard"></app-card>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      playerCard: {
        title: "PLAYERS",
        img: require("../../pics/sword.png"),
        question: "Looking to recruit?",
        info:
          "Here you will find all signed up players listed along with their platform, might and guild as well as lava avavilability",
        push: "/Players"
      },
      guildCard: {
        title: "GUILDS",
        img: require("../../pics/shield.png"),
        question: "Looking for a guild?",
        info:
          "In this section, you'll find registered and recruiting guilds along side their platform and requirements",
        push: "/Guilds"
      }
    };
  }
};
</script>

<style scoped>
.page-layout {
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-gap: 150px;
}

.title-container {
  display: grid;
  justify-items: center;
  grid-template-rows: max-content max-content;
  grid-gap: 30px;
  color: white;
  position: relative;
}

.home-title {
  font-size: 80px;
  margin-top: 70px;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.home-text {
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
  text-align: center;
  width: 550px;
}

.pet {
  position: absolute;
  right: 0;
  transform: scaleX(-1);
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  padding: 0 180px;
}

/*FLOATING ANIMATION*/

.floating {
  -webkit-animation-name: Floating;
  -webkit-animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
}

@keyframes Floating {
  from {
    -webkit-transform: translate(0, 0px) scaleX(-1);
  }
  50% {
    -webkit-transform: translate(0, 7px) scaleX(-1);
  }
  to {
    -webkit-transform: translate(0, 0px) scaleX(-1);
  }
}
</style>
