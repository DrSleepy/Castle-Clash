<template lang="html">
  <div class="app-admin-add-talent-layout">
    <div class="handler">
      <input class="c-def-input" placeholder="nameID" v-model="talentAdd.nameID">
      <input class="c-def-input" placeholder="displayName" v-model="talentAdd.displayName">
      <button class="c-blue-btn" @click="addToDB"> Add Hero to DB </button>
    </div>
    <div class="result" v-if="talentAdd.img">
      <p>Talent Image</p>
      <img :src="talentAdd.img">
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data(){
    return{
      talentAdd: {
        nameID: 'revitalize',
        displayName: 'Revitalize',
        img: '',
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
    getImage(){
      return new Promise((resolve, reject) => {

        // Gets hero images from database
        let storage = firebase.storage();
        let img = storage.ref( 'talents/' + this.talentAdd.nameID + '.png');

        // Get hero full image from database
        let image = this.getMetadata(img).then((url) => {
          console.log("url", url);
          this.talentAdd.img = url[0];
          resolve();
        })
        .catch((error) => {
          console.log(error);
        });

      });
    },
    addToDB(){
      this.getImage()
        .then(() => { // Add hero object to data base after images retrieved
          firebase.database().ref('talents')
            .child(this.talentAdd.nameID)
              .set(this.talentAdd);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
}
</script>

<style lang="css" scoped>
.app-admin-add-talent-layout{
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-gap: 50px;
}
.result{
  color: white;
}
input{
  width: 200px;
}
</style>
