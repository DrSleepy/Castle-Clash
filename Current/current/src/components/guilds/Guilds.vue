<template>
<div class="page-layout">
  <div class="header-panel">
    <h1 class="guilds-title">GUILDS</h1>
    <div class="right-section">
      <!-- copter animation glitches MouseEnter/leave on dropdown -->
      <img class="big" src="../../pics/copter.png">
      <img class="medium" src="../../pics/copter.png">
      <img class="small" src="../../pics/copter.png">
      <div class="search-sort">
        <app-search-bar :searchBarProps="searchBarProps"></app-search-bar>
        <app-sort-by :sortByProps="sortByProps"></app-sort-by>
      </div>
      <button class="c-def-btn guild-btn"> Create Guild</button>
    </div>
  </div>
  <app-table :tableProps="tableProps"></app-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      // START OF CSS PROPS
      tableProps: {
        header: [
          { name: "Name", dropdown: true},
          { name: "Recruiting", dropdown: true},
          { name: "Platform"},
        ],
        headerStyle: {
          gridTemplateColumns: '1fr 110px 110px',
          backgroundColor: '#DF19EC',
        },
        push: '/Guild/Grafters',
        rows: {
          player: [
            {username: "Ala"},
            {guild: "No", icon: 'fa fa-times', iconColor: 'red'},
            {url: "http://mossegalapoma.cat/imatges/amazon_icon_512x_512.png"}
          ],
          player2: [
            {username: "Suraya"},
            {guild: "Yes", icon: 'fa fa-check', iconColor: '#0DD425'},
            {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"}
          ],
          player3: [
            {username: "LazyMisted"},
            {guild: "Yes", icon: 'fa fa-check', iconColor: '#0DD425'},
            {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"}
          ]
        },
      },
      searchBarProps: {
        input: {
          placeholder: 'Search guild name...',
          borderRadius: '3px 0 0 3px',
        },
        icon: {
          borderLeft: 'none',
        }
      },
      sortByProps: {
        button: {
          borderRadius: '0 3px 3px 0',
          borderLeft: 'none',
        },
        dropdownOptions: [
          "Alphabet - A-Z",
          "Alphabet - Z-A",
          "Recruiting - Yes",
          "Platform - Amazon",
          "Platform - Android",
          "Platform - Apple",
          "Platform - Windows",
        ],
      },
      // END OF CSS PROPS

      // START OF VARIABLES
    }
  },
}
</script>

<style scoped>
.page-layout {
  display: grid;
  grid-row-gap: 10px;
}
.header-panel {
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  position: relative;
}
.guilds-title {
  color: white;
  font-family: 'Rubik';
  font-size: 60px;
  font-weight: 400;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.right-section {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  position: relative;
  align-self: end;
  grid-gap: 10px;
}
.search-sort{
  display: grid;
  grid-template-columns: 300px max-content;
  box-shadow: 0 3px 4px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.guild-btn{
  padding: 10px;
}

/*FLOATING ANIMATION*/
.big, .medium, .small{
  position: absolute;
}
.big {
  top: -20px;
  left: -70px;
  width: 60px;
  /*animation: float infinite ease-in-out;*/
  animation-duration: 9s;
  transform: scaleX(-1);
}
.medium {
  top: -30px;
  left: -110px;
  width: 40px;
  /*animation: float infinite ease-in-out;*/
  animation-duration: 7s;
  transform: scaleX(-1);
}
.small {
  top: 10px;
  left: -150px;
  width: 50px;
  z-index: 1;
  /*animation: float-flipped infinite ease-in-out;*/
  animation-duration: 5s;
}
@keyframes float{
  from {
    transform: translate(0, 0px) scaleX(-1);
  }
  50% {
    transform:translate(0, 7px) scaleX(-1);
  }
  to {
    transform: translate(0, 0px) scaleX(-1);
  }
}

@keyframes float-flipped{
    from {
      transform: translate(0, 0px);
    }
    50% {
      transform:translate(0, 7px);
    }
    to {
      transform: translate(0, 0px);
    }
}
</style>
