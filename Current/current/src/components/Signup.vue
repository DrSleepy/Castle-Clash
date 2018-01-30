<template>
<div class="NEEDED">
  <div class="container">
    <div class="middle">
      <img src="http://cc.forum.igg.com/img/default/cc/cc_pc_logo.png" class="logo">
      <section class="left-panel center">
        <form class="login-form" v-on:submit.prevent>
          <p class="sub-title">Log In</p>
          <input class="form-control" placeholder="Email">
          <input class="form-control" placeholder="password">
          <button class="login-btn" type="submit"> Enter </button>
        </form>
      </section>
      <section class="right-panel center">
        <form class="signup-form" v-on:submit.prevent>
          <p class="sub-title">Sign Up</p>
          <input class="firstname form-control" placeholder="Firstname">
          <input class="lastname form-control" placeholder="Lastname">
          <input class="form-control" placeholder="Username">
          <input class="form-control" placeholder="Email">
          <input class="form-control" placeholder="password">
          <input class="form-control" placeholder="Confirm password">
          <button class="signup-btn" type="submit"> Register</button>
        </form>
      </section>
    </div>
    <div class="terms center">
      <small class="TnC">By registering, you agree to our <span class="TnC-link">Terms & Conditions</span></small>
    </div>
  </div>
</div>
</template>

<style scoped>
/*MIDDLE SECTION*/
.middle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2px 0 30px 0;
  margin-top: 100px;
  border-radius: 5px;
  -webkit-box-shadow: 0.3px 0 40px 1px rgba(220, 220, 220, 220);
  box-shadow: 0.1px 0 3px 1px rgba(220, 220, 220, 220);
  background-color: white;
}

/*TOP PANEL*/
.logo {
  grid-column: 1 / 3;
  padding: 10px;
  width: 200px;
  display: grid;
  justify-self: center;
  margin-left: 10px;
}

.logo {
  margin-right: 10px
}
.chabu {
  background: linear-gradient(to bottom right, #1AE08F, #00C1FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-weight: 800;
  font-size: 40px;
  padding: 10px 0px;
  margin-left: -10px;
}

/*LEFT PANEL*/
.login-form {
  display: grid;
  justify-items: center;
  height: max-content;
  padding: 25px 15px;
  grid-gap: 10px;
}
.login-btn {
  background-color: #09A9FF;
}
.login-btn:hover {
  background-color: #067EE1;
}

/*RIGHT PANEL*/
.right-panel {
  border-left: solid 1px #F4F4F4;
}
.signup-form {
  display: grid;
  justify-items: center;
  padding: 25px 15px;
  height: max-content;
  grid-gap: 10px;
}
.firstname {
  grid-column: 1 / 2;
}
.lastname {
  grid-column: 2 / 3;
}
.signup-btn {
  background-color: #19C82B;
}
.signup-btn:hover {
  background-color: #0BAC52;
}
/*BOTTOM PANEL*/
.terms {
  padding: 20px;
}
.TnC {
  color: #8B8B8B;
}
.TnC-link {
  color: #3BD5FF;
}

/*GLOBAL*/
.sub-title {
  font-weight: bold;
  font-size: 22px;
  grid-column: 1 / 3;
}

form {
  width: 350px;
}
button {
  grid-column: 1 / 3;
  color: white;
  padding: 7px;
  border: none;
  border-radius: 5px;
  width: 200px;
  transition: 0.2s;
}
input {
  grid-column: 1 / 3;
  padding: 7px;
  border-bottom: solid 1px #E8E8E8;
}

/*-------------------- TABLETS 768px --------------------*/
@media only screen and (max-width: 768px) {
  .container {
    margin: 0;
    padding: 0;
    min-width: 100%;
  }

  /*MIDDLE SECTION*/
  .middle {
    margin-top: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1f;
    grid-template-areas: "top-panel" "left-panel" "right-panel" "bottom-panel";
  }

  /*TOP SECTION*/
  .top-panel {
    display: none;
  }

  /*LEFT SECTION*/
  .left-panel {
    grid-area: left-panel;
    border-bottom: solid 1px #F4F4F4;
  }

  /*RIGHT SECTION*/
  .right-panel {
    grid-area: right-panel;
  }

  /*BOTTOM SECTION*/
  .bottom-panel {
    grid-area: bottom-panel;
  }

  /*GLOBAL SECTION*/
  form {
    min-width: 200px;
  }
}


/*-------------------- PHONES 480px --------------------*/

@media only screen and (max-width: 480px) {
  .container {
    margin: 0;
    padding: 0;
  }
  .middle {
    margin: 0;
  }
  .top-panel {
    padding: 0;
    display: none;
  }
  .login-form {
    padding: 20px 5px;
  }
  .signup-form {
    padding: 20px 5px;
  }
}
</style>

<script>
export default {}
</script>
