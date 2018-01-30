import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import firebase from "./firebase.js"
import { routes } from "./routes.js"
import { store } from "./store/store.js"

import Features from "./component-registration/features.js"
import Home from "./component-registration/home.js"
import Guilds from "./component-registration/guilds.js"
import Players from "./component-registration/players.js"
import Heroes from "./component-registration/heroes.js"
import adminPanel from "./component-registration/adminPanel.js"
import edit from "./component-registration/edit.js"

// Directives
import Away from "./custom-directives/away.js"
import Drag from "./custom-directives/drag.js"
import selected from "./custom-directives/selected.js"

import Chatroom from "./components/Chatroom.vue"
Vue.component("app-chatroom", Chatroom)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
