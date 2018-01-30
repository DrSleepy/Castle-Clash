<template lang="html">
  <div class="app-admin-add-hero-layout">
    <div class="handler">
      <input class="c-def-input" placeholder="nameID" v-model="heroAdd.nameID">
      <input class="c-def-input" placeholder="displayName" v-model="heroAdd.displayName">
      <input class="c-def-input" placeholder="tier (number)" v-model="heroAdd.tier">
      <button class="c-blue-btn" @click="addToDB"> Add hero to DB </button>
    </div>
    <div class="images" v-if="heroAdd.heroImg">
      <div class="hero">
        <p>Hero Full Image</p>
        <img :src="heroAdd.heroImg">
      </div>
      <div class="head">
        <p>Hero Head Image</p>
        <img :src="heroAdd.headImg">
      </div>
      <div class="skill">
        <p>Hero Full Image</p>
        <img :src="heroAdd.skillImg">
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data(){
    return{
      heroAdd: {
        nameID: 'dryad',
        displayName: 'Dryad',
        heroImg: '',
        headImg: '',
        skillImg: '',
        tier: 0,
      }
    }
  },
  methods: {
    getMetadata(imgPath){
      return new Promise((resolve, reject) => {
        imgPath.getMetadata()
          .then((metadata) => {
            resolve(metadata.downloadURLs);
          })
          .catch((err) => {
            reject(err);
        });
      })
    },
    getHeroImages(){
      return new Promise((resolve, reject) => {

        // Gets hero images from database
        let storage = firebase.storage();
        let shortPath = 'heroes/' + this.heroAdd.nameID;
        let fullImg = storage.ref( shortPath + '/full.png');
        let headImg = storage.ref( shortPath + '/head.png');
        let skillImg = storage.ref( shortPath + '/skill.png');

        // Get hero full image from database
        let fullPromise = this.getMetadata(fullImg).then((url) => {
          this.heroAdd.heroImg = url[0];
        });

        // Get hero head image from database
        let headPromise = this.getMetadata(headImg).then((url) => {
          this.heroAdd.headImg = url[0];
        });

        // Get skill image from database
        let skillPromise = this.getMetadata(skillImg).then((url) => {
          this.heroAdd.skillImg = url[0];
        })

        Promise.all([fullPromise, headPromise, skillPromise]).then(() => {
          resolve();
        })
        .catch((error) => {
          console.log(error);
        });

      });
    },
    addToDB(){
      this.getHeroImages()
        .then(() => { // Add hero object to data base after images retrieved
          firebase.database().ref('heroes')
            .child(this.heroAdd.nameID)
              .set(this.heroAdd);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
}
</script>

<style lang="css" scoped>
.app-admin-add-hero-layout{
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-gap: 50px;
}
.images{
  display: grid;
  grid-template-columns: max-content  max-content 1fr;
  width: max-content;
  color: white;
  font-size: 15px;
}
.images>*{
  display: grid;
  height: 100%;
  grid-template-rows: max-content 1fr;
  align-items: center;
  justify-items: center;
}
input{
  width: 200px;
}
</style>
