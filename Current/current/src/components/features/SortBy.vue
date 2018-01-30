<template>
<div class="component-layout" @mouseover="sortBy = true" @mouseleave="sortBy = false">
  <div class="component-button c-def-btn" :style="sortByProps.button" >
    <p class="text" :style="sortByProps.text">Sort By</p>
    <i class="fa fa-arrows-v" :style="sortByProps.icon"></i>
  </div>
  <transition name="fade">
    <div class="dropdown" v-if="sortBy">
      <div v-for="current in sortByProps.dropdownOptions">
        <p>{{current}}</p>
      </div>
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
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 7px;
  align-items: center;
  cursor: default;
}
.component-button>i{
  font-size: 13px;
}
.dropdown{
  background-color: white;
  width: max-content;
  border-radius: 0 3px 3px 3px;
  position: absolute;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  z-index: 1;
  font-size: 13px;
  color: #585B7B;
}
.dropdown>div{
  padding: 15px 20px;
  transition: 0.3s;
  cursor: pointer;
}
.dropdown>div:last-child{
  border-radius: 0 0 3px 3px;
}
.dropdown>div:hover{
  background-color: #F4F4F4;
  cursor: pointer;
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
    // sortByProps .text .icon
    sortByProps: Object,
  },
  data(){
    return{
      sortBy: false,
    }
  },
}
</script>
