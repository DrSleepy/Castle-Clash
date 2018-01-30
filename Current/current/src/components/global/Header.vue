<template>
  <div class="component-layout">
    <div class="left-panel">
      <span class="reddit"><img src="../../pics/reddit.png"><p> REDDIT</p></span>
      <span><p>FORUMS</p></span>
      <router-link to="/Guilds" tag="span" active-class="active"><p>GUILDS</p></router-link>
      <router-link to="/Players" tag="span" active-class="active"><p>PLAYERS</p></router-link>
      <router-link to="/Home" tag="span" active-class="active"><p>HOME</p></router-link>
    </div>
    <div class="right-panel">
      <router-link to="/AdminMain" tag="p">ADMIN</router-link>
      <p>LOG IN</p>
      <p class="c-blue-btn signup-btn">SIGN UP</p>
    </div>
  </div>
</template>

<style scoped>
.component-layout{
  display: grid;
  grid-template-columns: 1fr max-content;
  padding: 30px 40px;
  user-select: none;
}

/*BOTH PANELS*/
.right-panel, .left-panel {
  display: grid;
  align-items: center;
}
.right-panel>*, .left-panel>* {
  color: white;
  letter-spacing: 1px;
  margin: 0 5px;
  padding: 15px;
  font-size: 13px;
}

/*LEFT PANELS*/
.left-panel{
  display: grid;
  grid-template-columns: repeat(5, max-content);
}
.left-panel>span{
  transition: 0.2s;
}
.left-panel>span:hover{
  color: rgba(240, 240, 240, 1);
  cursor: pointer;
}
.reddit{
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  grid-gap: 5px;
}
.reddit>img{
  width: 25px;
  border-radius: 50%;
  image-rendering: auto;
}
.active{
  border-bottom: solid 1px rgba(240, 240, 240, 0.7);
}

/*RIGHT PANELS*/
.right-panel{
  display: grid;
  grid-template-columns: repeat(3, max-content);
}
.signup-btn{
  background-color: #03AAF9;
  border-radius: 3px
}
.signup-btn:hover{
  background-color: #03A0F9;
}
</style>




























<script>
export default {
  data() {
    return {
      showLogin: false,
      loggedIn: false,
      detailsIncorrect: false,
      email: null,
      password: null,
      username: '',
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        var thix = this;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(firebaseUser => {
            thix.loggedIn = true;
            this.$router.push('/Profile');
            // INCLUDE 'done()' FUNCTION TO SAY AYNC FUNCTION IS DONE
          })
          .catch(function(error) {
            console.log(error);
            thix.detailsIncorrect = true;
          });
      } else {
        this.showLogin = !this.showLogin;
        this.detailsIncorrect = false;
      }
    },
    logout() {
      firebase.auth().signOut();
      this.loggedIn = false;
      this.email = null;
      this.password = null;
    },
  },
}
</script>
