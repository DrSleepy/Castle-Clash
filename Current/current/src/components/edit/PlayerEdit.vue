<template lang="html">
<div class="app-player-edit-layout">

  <div class="top-section">
    <div class="top">
      <div class="display-name">
        <p> Display Name: </p>
        <input class="c-def-input">
      </div>
      <div class="platform">
        <p> Platform: </p>
        <input class="c-def-input">
      </div>
    </div>

    <div class="bottom">
      <div class="line">
        <p> LINE ID: </p>
        <input class="c-def-input">
      </div>
      <div class="might">
        <p> Might: </p>
        <input class="c-def-input">
        <p>K</p>
      </div>
    </div>
  </div>









  <div class="middle-section">
    <p class="subtitle"> Info </p>
    <div class="text-input">
      <textarea class="c-def-input" rows="5" cols="80"></textarea>
    </div>
  </div>





  <div class="bottom-section">
    <p class="subtitle"> Progress </p>
    <div class="progress-cards">

      <!-- CARDS GO HERE -->
      <app-edit-card :content="inGuild">
        <app-edit-guild-status></app-edit-guild-status>
      </app-edit-card>
      <app-edit-card :content="inLavaTeam">
        <app-edit-lava-status></app-edit-lava-status>
      </app-edit-card>
      <app-edit-card :content="shards">
        <app-edit-shards></app-edit-shards>
      </app-edit-card>

      <app-edit-card :content="dungeon">
        <app-edit-dungeon></app-edit-dungeon>
      </app-edit-card>
      <app-edit-card :content="hbm">
        <app-edit-hbm></app-edit-hbm>
      </app-edit-card>
      <app-edit-card :content="lbf">
        <app-edit-lbf></app-edit-lbf>
      </app-edit-card>






      <!-- CARDS GO HERE -->






    </div>
  </div>



  <div class="buttons">
    <button class="c-def-btn"> Cancel </button>
    <button class="c-blue-btn"> Save </button>
  </div>

</div>
</template>

<style lang="css" scoped>
/*END OF CARD TEST CSS*/

.app-player-edit-layout {
  background-color: white;
  width: max-content;
  height: max-content;
  border-radius: 5px;
  font-size: 17px;
  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.3), 0 -10px 100px rgba(0, 0, 0, 0.3);
}
/*TOP SECTION*/
.top,
.bottom {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  padding: 30px;
  color: #5a6978;

  justify-content: space-between;
  grid-column-gap: 30px;
}
.top > *,
.bottom > * {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  grid-column-gap: 10px;
}
.might {
  grid-template-columns: repeat(3, max-content);
}
.bottom {
  border-top: solid 1px #edeef0;
  background-color: #f6f8fd;
}

/*MIDDLE SECTION*/
.middle-section {
  background-color: #f6f8fd;
}
.subtitle {
  padding: 15px 20px;
  color: white;

  /*PICK COLOUR*/
  /*background: linear-gradient(90deg, #00ccff, #0055FF);*/
  background: linear-gradient(150deg, #ec008c, #fc6767);
  /*background: linear-gradient(90deg, #1EA1F3, #0055FF);*/
}
.text-input {
  padding: 20px;
}

/*BOTTOM*/

.progress-cards {
  padding: 20px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 240px);
  grid-template-rows: 120px 250px;
}

.buttons {
  padding: 30px;
  background-color: #f8f9fd;
  border-radius: 0 0 5px 5px;
  border-top: solid 1px #edeef0;
  display: grid;
  grid-template-columns: repeat(2, 130px);
  grid-column-gap: 10px;
  justify-content: end;
}
</style>

<script>
export default {
  data() {
    return {
      dungeon: {
        title: "Dungeon"
      },
      hbm: {
        title: "Here Be Monster"
      },
      lbf: {
        title: "Lost Battlefield"
      },
      inGuild: {
        title: "In Guild"
      },
      inLavaTeam: {
        title: "In Lava Team"
      },
      shards: {
        title: "Shards"
      }
    };
  }
};
</script>
