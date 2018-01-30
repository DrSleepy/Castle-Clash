<template lang="html">
  <div class="add-hero-dropdown-layout" :style="content.dropdownStyle.outer">
    <div class="option" v-for="(option, current) in content.dropdownOptions" :style="content.dropdownStyle.inner" @click="clickedOption(option)">
      <div class="left" v-if="showOrNot()">
        <img :src="option.img" height="40">
      </div>
      <div class="right">
        <p class="dropdown-text">{{option.displayName}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.add-hero-dropdown-layout{
  position: absolute;
  background-color: white;
  width: 100%;
  top: 100%;
  z-index: 3;
  border: solid 1px #F1F1F1;
  border-radius: 4px;
  box-shadow: 3px 5px 5px rgba(0,0,0,0.2), -10px 15px 15px rgba(0,0,0,0.1);
}
.option{
  display: grid;
  grid-template-columns: 89px 1fr;
  border-bottom: solid 1px #f9fafc;
  color: #637184;
}
.option:hover{
  background-color: #f9fafc;
  cursor: pointer;
}
.left, .right{
  display: grid;
  align-items: center;
  padding: 10px 15px;
  justify-content: center;
  justify-items: center;
}
.left{
  grid-column-gap: 20px;
  border-right: solid 1px #f9fafc;
}
.right{
  font-size: 14px;
  grid-template-columns: 1fr max-content;
  grid-column-gap: 10px;
}
.dropdown-text{
  padding: 10px;
}
</style>
<script>
export default {
  props: {
    content: Object
  },
  methods: {
    showOrNot(){
      if(this.content.left.hideLeft){
        return false;
      }
      else {
        return true;
      }
    },
    clickedOption(option){
      console.log(option);
    }
  }
}
</script>
