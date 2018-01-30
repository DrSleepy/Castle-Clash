<template>
<div class="component-layout" @click="clicked">
  <h1 class="card-title"> {{card.title}} </h1>
  <img class="card-icon" :src="card.img">
  <p class="card-question"> {{card.question}} </p>
  <p class="card-info"> {{card.info}} </p>
</div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  methods: {
    clicked(){
      this.$router.push(this.card.push);
    }
  }
}
</script>

<style scoped>
.component-layout{
  display: grid;
  padding: 10px 30px;
  width: max-content;
  height: 320px;
  background-color: #F7F6F6;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 3px;
  transition: 0.3s;
  justify-items: center;
}
.component-layout:hover{
  cursor: pointer;
  margin-top: -10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.card-title{
  padding: 30px 50px;
  color: #3C4C6C;
  font-family: 'Poppins';
  font-size: 23px;
  border-bottom: solid 1px #DCD5D5;
  letter-spacing: 1px;
}
.card-icon{
  margin-top: -25px;
  background-color: #F7F6F6;
  width: 30px;
  padding: 10px;
}
.card-question{
  padding: 20px;
  color: #61697A;
  font-weight: 500;
}

.card-info{
  padding: 10px 15px 60px;
  width: 250px;
  text-align: center;
  color: #61697A;
  font-size: 15px;
}

</style>
