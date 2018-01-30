<!--
TO DO:
1. Fix jumping scrollbar when visible. Done for now.
2. DO NOT LOAD ALL PLAYERS AT ONCE. Only 20 a time. 20 more once user reaches end of page.
3. LAZY LOAD COMPONENTS (NETWORK TAB)
4. Add image titles
5. Clean URL navigation
6. Load icon on api call
7. IMAGE OPTIMISATION
8. Create vuex modules to store global user details. Test sign up.

Completed Pages/Components:
1. Header
2. Footer
3. Login/Signup
4. Profile (displays progress and heros)
5. Players/GUILDS (NEED TO INCLUDE FILTERS)

Mobile Friendly Pages:
1.

Ideas:
1. Two range sliders (filters) for might on Players component
2. Add sorting by NEW
3. Add 'Lava Teams' button on Guild Profile. This should show each team for lava in that guild. Guild members can add themselves by having password set by guild creator
4. Youtube/Twitter page displaying latest videos by Castle clash youtubers and offical tweets from IGG

INCLUDE 'done()' FUNCTION TO SAY AYNC FUNCTION IS DONE
-->

<template>
  <div class="main">
    <app-header></app-header>
    <div>
      <!-- Needed to keep container from going off screen -->
      <div class="container">
        <transition name="page" mode="out-in" type="animation">
          <router-view></router-view>
        </transition>
        <!-- <app-player-edit></app-player-edit> -->
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {}
</script>

<!-- SCOPED STYLES  -->
<style scoped>
.main {
  display: grid;
  grid-template-rows: max-content 1fr;
  height: 100%;
  position: relative;
}

/*TRANSITIONS*/
.page-enter {
  opacity: 0;
}
.page-enter-active {
  animation: slide-in 0.07s ease-out forwards;
  transition: opacity 0.07s;
}
.page-leave-active {
  animation: slide-out 0.07s ease-out forwards;
  transition: opacity 0.07s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(30px);
  }
}
</style>

<!-- GLOBAL STYLES  -->
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Roboto+Condensed|Rubik:500|Poppins:400,500');
html {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
body {
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto';
  height: 100%;
  width: 100%;
  background: linear-gradient(
      160deg,
      rgba(98, 47, 200, 0.9),
      rgba(200, 17, 212, 0.9)
    ),
    url('./pics/background.png');
  background-attachment: fixed;
}
h1 {
  margin: 0;
}
p {
  margin: 0;
}
img {
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
}
button {
  transition: 0.2s;
}
textarea {
  resize: vertical;
  font-size: 15px;
  font-family: 'Roboto';
}

/*START OF BOOTSTRAP IMPORTS*/
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  height: 100%;
}
@media (min-width: 576px) {
  .container {
    width: 540px;
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .container {
    width: 720px;
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .container {
    width: 960px;
    max-width: 100%;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1140px;
    max-width: 100%;
  }
}
/*END OF BOOTSTRAP IMPORTS*/

/*MY GLOBAL CLASSES*/
.global-edit {
  position: absolute;
  right: 0;
  font-size: 17px;
  padding: 10px;
  cursor: pointer;
}
.global-edit i {
  font-size: 16px;
}

/*All Buttons*/
.c-def-btn,
.c-blue-btn,
.c-red-btn {
  font-family: 'Roboto';
  color: white;
  transition: 0.2s;
  padding: 15px 25px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 1.5px 1px rgba(0, 0, 0, 0.23);
}
/*All Buttons Hover*/
.c-def-btn:hover,
.c-blue-btn:hover,
.c-red-btn:hover {
  cursor: pointer;
}
/*Def Button*/
.c-def-btn {
  border: solid 1px #e7e7e7;
  background-color: white;
  color: #637b8a;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.1);
}
.c-def-btn:hover {
  background-color: #f4f4f4;
}
/*Blue Button*/
.c-blue-btn {
  background-color: #03c5f9;
}
.c-blue-btn:hover {
  background-color: #03b2f9;
}
/*Red Button*/
.c-red-btn {
  background-color: #e80927;
}
.c-red-btn:hover {
  background-color: #d40a1c;
}

/*Input*/
.c-def-input {
  padding: 10px;
  border-radius: 3px;
  border: solid 1px #d2d2d2;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.03), 0 1px 1px rgba(0, 0, 0, 0.03);
}
.c-def-input:focus {
  color: #495057;
  border-color: #80bdff;
  outline: none;
}

.c-def-input::placeholder {
  color: #868e96;
  opacity: 1;
}

.selected {
  background: linear-gradient(200deg, #ec008c, #fc6767);
  color: white;
  border-radius: 2px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
