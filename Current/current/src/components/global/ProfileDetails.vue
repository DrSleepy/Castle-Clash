<template>
  <div class="component-layout" :style="{gridTemplateColumns: profileDetails.layout}">
    <div class="panels" v-for="info in profileDetails.sections">
      <img :src="info.img" :width="imageWidth(info.width)">
      <p class="subtitle"> {{info.subtitle}}</p>
      <p class="text">{{info.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profileDetails: Object,
  },
  methods: {
    imageWidth(width){
      if (width){
        return width;
      }else {
        return '35px';
      }
    }
  }
}
</script>

<style scoped>
.component-layout{
  display: grid;
  font-family: 'Roboto';
  background-color: white;
}
.panels{
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, max-content);
  height: 100%;
  padding: 10px;
  border: solid 1px #FAFAFA;
  transition: 0.2s;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-column-gap: 10px;
}
.panels:hover{
  border: solid 1px #F1F1F1;
  background-color: #F9F9F9;
}
img{
  grid-row: 1 / 3;
}
.subtitle{
  font-size: 15px;
  font-weight: 500;
  color: #434343;
}
.text{
  font-size: 14.5px;
  color: #585B7B;
}
</style>
