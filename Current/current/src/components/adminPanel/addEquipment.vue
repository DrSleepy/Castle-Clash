<template lang="html">
  <div class="app-admin-add-talent-layout">
    <div class="handler">
      <input class="c-def-input" placeholder="nameID" v-model="equipmentAdd.nameID">
      <input class="c-def-input" placeholder="displayName" v-model="equipmentAdd.displayName">
      <button class="c-blue-btn" @click="addToDB"> Add Equipment to DB </button>
    </div>
    <div class="result" v-if="equipmentAdd.img">
      <p>Equipment Image</p>
      <img :src="equipmentAdd.img">
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      equipmentAdd: {
        nameID: "",
        displayName: "",
        img: ""
      }
    };
  },
  methods: {
    getMetadata(imgPath) {
      return new Promise((resolve, reject) => {
        imgPath
          .getMetadata()
          .then(metadata => {
            resolve(metadata.downloadURLs);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getImage() {
      return new Promise((resolve, reject) => {
        // Gets hero images from database
        let storage = firebase.storage();
        let img = storage.ref(`equipments/${this.equipmentAdd.nameID}.png`);

        // Get hero full image from database
        let image = this.getMetadata(img)
          .then(url => {
            console.log("url", url);
            this.equipmentAdd.img = url[0];
            resolve();
          })
          .catch(error => {
            console.log(error);
          });
      });
    },
    addToDB() {
      this.getImage()
        .then(() => {
          // Add hero object to data base after images retrieved
          firebase
            .database()
            .ref("equipments")
            .child(this.equipmentAdd.nameID)
            .set(this.equipmentAdd);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="css" scoped>
.app-admin-add-talent-layout {
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-gap: 50px;
}
.result {
  color: white;
}
input {
  width: 200px;
}
</style>
