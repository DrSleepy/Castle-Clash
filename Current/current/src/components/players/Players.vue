<template>
<div class="page-layout">
  <div class="header-panel">
    <h1 class="players-title">PLAYERS</h1>
    <div class="right-section">
      <!-- stone animation glitches MouseEnter/leave on dropdown -->
      <img class="big" src="../../pics/stone.png">
      <img class="medium" src="../../pics/stone.png">
      <img class="small" src="../../pics/stone.png">
      <app-search-bar :searchBarProps="searchBarProps"></app-search-bar>
      <app-filter :filterProps="filterProps">
        <app-platform-filter></app-platform-filter>
        <app-lava-filter></app-lava-filter>
        <app-need-guild-filter></app-need-guild-filter>
      </app-filter>
      <app-sort-by :sortByProps="sortByProps"></app-sort-by>
    </div>
  </div>
  <app-table :tableProps="tableProps"></app-table>
</div>
</template>

<style scoped>
.page-layout {
  display: grid;
  grid-row-gap: 10px;
}

.header-panel {
  display: grid;
  grid-template-columns: 1fr max-content;
}

.players-title {
  color: white;
  font-family: 'Rubik';
  font-size: 60px;
  font-weight: 400;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.right-section {
  display: grid;
  grid-template-columns: 300px repeat(2, max-content);
  position: relative;
  align-self: end;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}


/*FLOATING ANIMATION*/

.big, .medium, .small {
  position: absolute;
  /*'KEYFRAME' (NOT ANIMATION) CAUSES DORPDOWN TO FLICKER*/
  /*animation: float infinite ease-in-out;*/
  transform: rotate(-41deg);
}

.big {
  left: -120px;
  width: 60px;
  animation-duration: 9s;
}

.medium {
  top: 15px;
  left: -65px;
  width: 40px;
  z-index: -1;
  animation-duration: 7s;
}

.small {
  left: -70px;
  width: 20px;
  animation-duration: 5s;
}

@keyframes float {
  from {
    transform: translate(0, 0px) rotate(-41deg);
  }
  50% {
    transform: translate(0px, 7px) rotate(-41deg);
  }
  to {
    transform: translate(0, 0px) rotate(-41deg);
  }
}
</style>

<script>
export default {
  data() {
    return {
      // START OF CSS PROPS
      tableProps: {
        header: [{
            name: "Username",
            dropdown: true
          },
          {
            name: "Might"
          },
          {
            name: "Need Lava Group",
            dropdown: true
          },
          {
            name: "Need Guild",
            dropdown: true
          },
          {
            name: "Platform"
          },
        ],
        headerStyle: {
          gridTemplateColumns: '1fr 90px 160px 120px 110px',
          backgroundColor: '#DF19EC',
        },
        push: '/User/50',
        rows: {
          player: [{
              username: "Ala"
            },
            {
              might: "263K"
            },
            {
              lava: "No",
              icon: 'fa fa-times',
              iconColor: 'red'
            },
            {
              guild: "No",
              icon: 'fa fa-times',
              iconColor: 'red'
            },
            {
              url: "http://mossegalapoma.cat/imatges/amazon_icon_512x_512.png"
            }
          ],
          player2: [{
              username: "Suraya"
            },
            {
              might: "245K"
            },
            {
              lava: "No",
              icon: 'fa fa-times',
              iconColor: 'red'
            },
            {
              guild: "Yes",
              icon: 'fa fa-check',
              iconColor: '#0DD425'
            },
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"
            }
          ],
          player3: [{
              username: "LazyMisted"
            },
            {
              might: "245K"
            },
            {
              lava: "No",
              icon: 'fa fa-times',
              iconColor: 'red'
            },
            {
              guild: "Yes",
              icon: 'fa fa-check',
              iconColor: '#0DD425'
            },
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"
            }
          ],
          player4: [{
              username: "Ala"
            },
            {
              might: "263K"
            },
            {
              lava: "No",
              icon: 'fa fa-times',
              iconColor: 'red'
            },
            {
              guild: "No",
              icon: 'fa fa-times',
              iconColor: 'red'
            },
            {
              url: "http://mossegalapoma.cat/imatges/amazon_icon_512x_512.png"
            }
          ],
          player5: [{
              username: "Suraya"
            },
            {
              might: "245K"
            },
            {
              lava: "No",
              icon: 'fa fa-times',
              iconColor: 'red'
            },
            {
              guild: "Yes",
              icon: 'fa fa-check',
              iconColor: '#0DD425'
            },
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"
            }
          ],
          player6: [{
              username: "LazyMisted"
            },
            {
              might: "245K"
            },
            {
              lava: "No",
              icon: 'fa fa-times',
              iconColor: 'red'
            },
            {
              guild: "Yes",
              icon: 'fa fa-check',
              iconColor: '#0DD425'
            },
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"
            }
          ]
        },
      },
      searchBarProps: {
        input: {
          placeholder: 'Search username...',
          borderRadius: '3px 0 0 3px',
        },
      },
      filterProps: {
        button: {
          borderRadius: '0',
          borderLeft: 'none',
        },
      },
      sortByProps: {
        button: {
          borderRadius: '0 3px 3px 0',
          borderLeft: 'none',
        },
        dropdownOptions: [
          "New",
          "Alphabet - A-Z",
          "Alphabet - Z-A",
          "Need Lava Team - Yes",
          "Need Guild - Yes",
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
