<template>
  <div class="component-layout">
    <section class="header">
      <span class="username"><p>Username</p><i class="fa fa-caret-down"></i></span>
      <span><p>Might</p></i></span>
      <span><p>Need Lava Team</p><i class="fa fa-caret-down"></i></span>
      <span><p>Need Guild</p><i class="fa fa-caret-down"></i></span>
      <span><p>Platform</p></span>
    </section>
    <section>
      <div class="players" v-for="player in players" @click="playerSelected">
        <span class="username"><p>{{player.username}}</p></span>
        <span><p>{{player.might}}</p></span>
        <span class="lava"><p>No</p><i class="fa fa-times"></i></span>
        <span class="guild"><p>Yes</p><i class="fa fa-check"></i></span>
        <span><img :src="player.platform"></span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.lava, .guild{
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  grid-gap: 15px;
}
.fa-times{
  color: red;
  opacity: 0.5;
}
.fa-check{
  color: #0DD425;
  opacity: 0.5;
}





.component-layout{
  display: grid;
  grid-gap: 10px;
}

/*HEADER & ROWS PANEL*/
.header, .players{
  display: grid;
  grid-template-columns: 1fr 90px 160px 120px 110px;
  letter-spacing: 0.5px;
}
.header>span, .players>span{
  display: grid;
  justify-content: center;
  align-content: center;
}
.header .username, .players .username{
  display: grid;
  justify-content: start;
  padding-left: 30px;
}

/*HEADER PANEL*/
.header{
  font-size: 14px;
  color: white;
  background-color: #DF19EC;
  border-radius: 3px;
  font-weight: 500;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.header>span{
  padding: 20px;
  border-right: solid 1px #CB15D6;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  grid-gap: 5px;
}
.header i{
  font-size: 10px;
  opacity: 0.8;
}
.header>span:last-child{
  border-right: none;
}

/*ROWS PANEL*/
.players{
  padding: 20px 0;
  font-size: 13px;
  transition: 0.3s;
  background-color: white;
  border-bottom: solid 1px #F7F7F7;
  color: #585B7B;
}
.players>span{
  border-right: solid 1px #F8F8F8;
}
.players>span:last-child{
  border-right: none;
}
.players:first-child{
  border-radius: 3px 3px 0 0;
}
.players:last-child{
  border-radius: 0 0 3px 3px;
}
.players:hover{
  background-color: #F8F8F8;
}
.players .username{
  font-weight: 500;
  color: black;
}

/*GLOBAL*/
img {
  width: 25px;
  image-rendering: auto;
}

</style>




















<script>
export default {
  methods: {
    playerSelected(){
      this.$router.push('/PlayerProfile');
    },
  },
  data() {
    return {
      players: [{
          username: "LazyMisted",
          might: "165K",
          lava: "Yes",
          platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"
        },
        {
            username: "LazyMisted",
            might: "165K",
            lava: "Yes",
            platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"
          },
        {
          username: "Suraya",
          might: "189K",
          lava: "No",
          platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"
        },
        {
            username: "LazyMisted",
            might: "165K",
            lava: "Yes",
            platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"
          },
        {
          username: "DrYoshiro",
          might: "132K",
          lava: "Yes",
          platform: "http://1000logos.net/wp-content/uploads/2017/02/iOS-Logo.png"
        },
        {
          username: "Snerzka",
          might: "189K",
          lava: "No",
          platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"
        },
        {
            username: "LazyMisted",
            might: "165K",
            lava: "Yes",
            platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"
          },
          {
              username: "LazyMisted",
              might: "165K",
              lava: "Yes",
              platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"
            },
        {
          username: "DrYoshiro",
          might: "132K",
          lava: "Yes",
          platform: "http://1000logos.net/wp-content/uploads/2017/02/iOS-Logo.png"
        },
        {
          username: "Snerzka",
          might: "189K",
          lava: "No",
          platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"
        },
        {
          username: "DrYoshiro",
          might: "132K",
          lava: "Yes",
          platform: "http://1000logos.net/wp-content/uploads/2017/02/iOS-Logo.png"
        },
        {
          username: "Snerzka",
          might: "189K",
          lava: "No",
          platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"
        },
        {
          username: "DrYoshiro",
          might: "132K",
          lava: "Yes",
          platform: "http://1000logos.net/wp-content/uploads/2017/02/iOS-Logo.png"
        },
        {
            username: "LazyMisted",
            might: "165K",
            lava: "Yes",
            platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"
          },
        {
          username: "Suraya",
          might: "189K",
          lava: "No",
          platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"
        },
        {
            username: "LazyMisted",
            might: "165K",
            lava: "Yes",
            platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"
          },
        {
          username: "DrYoshiro",
          might: "132K",
          lava: "Yes",
          platform: "http://1000logos.net/wp-content/uploads/2017/02/iOS-Logo.png"
        },
        {
          username: "Snerzka",
          might: "189K",
          lava: "No",
          platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"
        },
        {
            username: "LazyMisted",
            might: "165K",
            lava: "Yes",
            platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"
          },
          {
              username: "LazyMisted",
              might: "165K",
              lava: "Yes",
              platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/2000px-Windows_logo_-_2012_derivative.svg.png"
            },
        {
          username: "DrYoshiro",
          might: "132K",
          lava: "Yes",
          platform: "http://1000logos.net/wp-content/uploads/2017/02/iOS-Logo.png"
        },
        {
          username: "Snerzka",
          might: "189K",
          lava: "No",
          platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"
        },
        {
          username: "DrYoshiro",
          might: "132K",
          lava: "Yes",
          platform: "http://1000logos.net/wp-content/uploads/2017/02/iOS-Logo.png"
        },
        {
          username: "Snerzka",
          might: "189K",
          lava: "No",
          platform: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png"
        },
        {
          username: "DrYoshiro",
          might: "132K",
          lava: "Yes",
          platform: "http://1000logos.net/wp-content/uploads/2017/02/iOS-Logo.png"
        },
      ]
    }
  },
}
</script>
