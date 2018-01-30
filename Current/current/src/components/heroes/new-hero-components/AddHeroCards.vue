<template lang="html">
  <div class="add-hero-cards-layout">
    <p class="title-name">{{content.title}}</p>
    <div class="card" v-away="hideDropdown">
      <div class="left" :style="style(content.left.dropdownIcon)" @click="leftDropdown">
        <img :src="content.left.img" height="50">
        <i class="fa fa-caret-down" v-if="content.left.dropdownIcon"></i>
      </div>
      <div class="right" @click="rightDropdown">
        <span v-if="content.right.input">
          <input class="c-def-input" type="number" placeholder="Level" :max="content.right.max" :title="content.right.altText" required>
        </span>
        <p v-if="content.right.text">{{content.right.text}}</p>
        <i class="fa fa-caret-down" v-if="content.right.dropdownIcon"></i>
      </div>
      <app-add-hero-dropdown :content="content" v-if="content.dropdownToggler"></app-add-hero-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  },
  methods: {
    style(dropdown) {
      if (dropdown) {
        return 'grid-template-columns: repeat(2, max-content)'
      } else {
        return 'grid-template-columns: max-content'
      }
    },
    leftDropdown() {
      if (this.content.dropdown === 'left') {
        this.content.dropdownToggler = !this.content.dropdownToggler
      }
    },
    rightDropdown() {
      if (this.content.dropdown === 'right') {
        this.content.dropdownToggler = !this.content.dropdownToggler
      }
    },
    hideDropdown() {
      this.content.dropdownToggler = false
    }
  }
}
</script>

<style lang="css" scoped>
.add-hero-cards-layout {
  color: #384b58;
  border: solid 1px #f1f1f1;
  border-radius: 4px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.1);
}
.title-name {
  letter-spacing: 0.5px;
  font-size: 15px;
  background-color: #f9fafc;
  border-bottom: solid 1px #f1f1f1;
  border-radius: 4px 4px 0 0;
  display: grid;
  justify-content: center;
  font-weight: 500;
  padding: 15px;
}
.card {
  position: relative;
  background-color: white;
  border-radius: 4px;
  display: grid;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  grid-template-columns: 90px 1fr;
}
.left,
.right {
  display: grid;
  align-items: center;
  padding: 10px 15px;
  justify-content: center;
  justify-items: center;
}
.left {
  grid-column-gap: 20px;
  border-right: solid 1px #f1f1f1;
}
.right {
  font-size: 14px;
  grid-template-columns: 1fr max-content;
  grid-column-gap: 10px;
}
i {
  font-size: 14px;
  color: #555555;
}
</style>
