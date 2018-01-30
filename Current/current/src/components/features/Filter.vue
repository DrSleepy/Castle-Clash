<template>
  <!-- 'KEYFRAME' (NOT ANIMATION) CAUSES DORPDOWN TO FLICKER*/ -->
<div class="component-layout" @mouseenter="dropdown = true" @mouseleave="dropdown = false">
  <div class="component-button c-def-btn" :style="filterProps.button">
    <p class="filter-text" :style="filterProps.text">Filters</p>
    <i class="fa fa-filter" :style="filterProps.icon"></i>
  </div>
  <transition name="fade">
    <div class="dropdown" v-if="dropdown">
      <slot></slot>
      <button class="apply"> Apply </button>
    </div>
  </transition>
</div>
</template>

<style scoped>
.component-layout{
  height: 100%;
  user-select: none;
}
.component-button{
  box-sizing: border-box; /*BOX-SIZING WILL STOP HEIGHT OVERGROWTH - IMPORTANT*/
  height: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 7px;
  width: max-content;
  align-items: center;
  background: white;
  transition: 0.3s;
  border: solid 1px #E5E5E5;
  cursor: default;
}
.component-button>i{
  font-size: 13px;
}
.component-button:hover{
  background-color: #EFEFEF;
  opacity: 1;
}
.filter-text{
  font-size: 14px;
  letter-spacing: 0.5px;
}
.dropdown{
  background-color: white;
  width: max-content;
  height: max-content;
  position: absolute;
  display: grid;
  grid-template-rows: repeat(4, max-content); /*DELETE THIS AFTER FIXING STUPID GLITCHING DROPDOWN*/
  border-radius: 0 3px 3px 3px;
  z-index: 1;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.apply{
  background-color: #DF19EC;
  padding: 13px;
  color: white;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 1px;
  border: none;
  border-radius: 0 0 3px 3px;
  transition: 0.3s;
}
.apply:hover{
  background-color: #C116CC;
}

/*TRANSITIONS*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .15s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
<script>
export default {
  props:{
    // filterProps .text .icon
    filterProps: Object,
  },
  data(){
    return{
      dropdown: false,
    }
  },
}
</script>
