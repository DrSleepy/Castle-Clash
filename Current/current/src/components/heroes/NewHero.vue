<template>
  <form class="new-hero-layout">
    <div class="cards">
      <app-add-hero-cards :content="hero"></app-add-hero-cards>
      <app-add-hero-cards :content="skill"></app-add-hero-cards>
      <app-add-hero-cards :content="talent"></app-add-hero-cards>
      <app-add-hero-cards :content="evolution"></app-add-hero-cards>
      <app-add-hero-cards :content="inscription"></app-add-hero-cards>
      <app-add-hero-cards :content="equipment"></app-add-hero-cards>
    </div>
    <div class="buttons">
      <button class="c-blue-btn" type="submit" name="button"> Save </button>
      <button class="c-def-btn" type="button"> Cancel </button>
      <button class="c-red-btn" type="button"> Delete </button>
    </div>
  </form>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      carvedObjects: [],
      hero: {
        title: "Hero",
        left: {
          img: require("../../pics/trixie.png"),
          dropdownIcon: true
        },
        right: {
          input: true,
          altText: "Enter hero Level here",
          max: 200,
          text: "/ 200",
          dropdownIcon: false
        },
        dropdown: "left",
        dropdownToggler: false,
        dropdownStyle: {
          outer: {
            height: "500px",
            overflowY: "scroll"
          }
        },
        dropdownOptions: [] /*Populated through setDropdown method*/
      },
      skill: {
        title: "Skill",
        left: {
          img: require("../../pics/skill.png"),
          dropdownIcon: false
        },
        right: {
          input: true,
          altText: "Enter skill Level here",
          max: 10,
          text: "/ 10",
          dropdownIcon: false
        }
      },
      talent: {
        title: "Talent",
        left: {
          img: require("../../pics/talent.png"),
          dropdownIcon: true
        },
        right: {
          input: true,
          altText: "Enter talent Level here",
          max: 8,
          text: "/ 8",
          dropdownIcon: false
        },
        dropdown: "left",
        dropdownToggler: false,
        dropdownStyle: {
          outer: {
            height: "500px",
            overflowY: "scroll"
          }
        },
        dropdownOptions: []
      },
      evolution: {
        title: "Evolution",
        left: {
          hideLeft: true,
          img: require("../../pics/star.png"),
          dropdownIcon: false
        },
        right: {
          text: "Not Evolved",
          dropdownIcon: true
        },
        dropdown: "right",
        dropdownToggler: false,
        dropdownStyle: {
          inner: {
            gridTemplateColumns: "1fr"
          }
        },
        dropdownOptions: []
      },
      inscription: {
        title: "Inscription",
        left: {
          img: require("../../pics/inscription.png"),
          dropdownIcon: false
        },
        right: {
          input: true,
          altText: "Enter inscription Level here",
          max: 100,
          text: "/ 100",
          dropdownIcon: false
        }
      },
      equipment: {
        title: "Equipment",
        left: {
          img: require("../../pics/augment.png"),
          dropdownIcon: true
        },
        right: {
          input: true,
          altText: "Enter equipment Level here",
          max: 5,
          text: "/ 5",
          dropdownIcon: false
        },
        dropdown: "left",
        dropdownToggler: false,
        dropdownStyle: {
          outer: {
            height: "500px",
            overflowY: "scroll"
          }
        },
        dropdownOptions: []
      }
    };
  },
  methods: {
    // Function job: Gets data from database and saves to array
    // dbPath - Equals name of child node from database
    getData(dbPath) {
      return new Promise((resolve, reject) => {
        let database = firebase.database();
        let data = database.ref(dbPath);
        let arrayOfObjects = [];

        data.on("value", snapshot => {
          snapshot.forEach(childSnapshot => {
            arrayOfObjects.push(childSnapshot.val());
          });
          resolve(arrayOfObjects);
        });
      });
    },

    // Function job: Cleans up given array and spits back a better defined array of objects
    // arr - Is an array of objects
    // dbImgName - Equals to image property name (not value) in database
    carveObject(arr, dbImgName) {
      let arrayOfObjects = [];
      arr.forEach(current => {
        let obj = {
          nameID: current.nameID,
          displayName: current.displayName,
          img: current[dbImgName],
          tier: current.tier
        };
        arrayOfObjects.push(obj);
      });
      this.carvedObjects = arrayOfObjects;
    },

    // Function job: Sorts array by given parameter
    // arr - Is an array of objects
    // sortBy - Equals object property in database
    // sortDirection - Sort in ascending/descending
    quicksort(arr, sortBy, sortDirection) {
      if (arr.length <= 1) {
        return arr;
      }

      // Needed to order an array with length of 3, so no null pivots are retrieved
      let pivotPosition;
      if (arr.length > 1 && arr.length < 4) {
        pivotPosition = arr.length - 1;
      } else {
        pivotPosition = Math.floor(arr.length / 2);
      }

      let pivot = arr[pivotPosition][sortBy];
      let same = [],
        less = [],
        more = [];

      arr.forEach(current => {
        if (current[sortBy] === pivot) {
          same.push(current);
        } else if (current[sortBy] < pivot) {
          less.push(current);
        } else {
          more.push(current);
        }
      });

      if (sortDirection === "ascend") {
        return this.quicksort(more).concat(same, this.quicksort(less));
      } else {
        return this.quicksort(less).concat(same, this.quicksort(more));
      }
    },

    // Function job:
    // 1. Calls funtion ('getData') to get data with given path from database
    // 2. takes result and models it ('carveObject') for generic use
    // 3. Orders carvedObject
    // 4. Give carvedObject to Vue
    // dbPath - Equals name of child node from database
    // dbImgName - Equals to image property name (not value) in database
    // vueObjName - Equals object in Vue data
    // sortBy - Equals object property in database
    // sortDirection - Sort in ascending/descending
    setDropdown(dbNode, dbImgName, vueObjName, sortBy, sortDirection) {
      this.getData(dbNode).then(result => {
        this.carveObject(result, dbImgName);
        let sort = this.quicksort(this.carvedObjects, sortBy, sortDirection);
        this[vueObjName].dropdownOptions = sort;
      });
    },
    cards() {
      this.setDropdown("heroes", "headImg", "hero", "tier", "ascend");
      this.setDropdown("talents", "img", "talent", "displayName", "");
      this.setDropdown("evolution", "", "evolution", "tier", "ascend");
      this.setDropdown("equipments", "img", "equipment", "displayName", "");
    }
  },
  mounted() {
    this.cards();
  }
};
</script>

<style scoped>
.new-hero-layout {
  padding: 10px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr max-content;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
}
.buttons {
  display: grid;
  align-content: center;
  grid-row-gap: 15px;
  padding: 20px;
  grid-template-columns: 100px;
}
</style>
