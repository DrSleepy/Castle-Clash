<template>
<div>
  <br>
  <input class="form-control" placeholder="Enter new chatroom name" v-model="chatroomDetails.name">
  <br>
  <button class="btn btn-success" @click="createChatroom"> Create </button>
  <hr>
  <h3>Current chatrooms</h3>
  <br>
  <li class="list-group-item" v-for="(chatroom, current) in chatroomsArray" @click="join(chatroom)" :key="current"> {{chatroom.name}} </li>
  <div v-if="joined">
    <h3>In room {{inRoom.name}}</h3>
  </div>
</div>
</template>

<script>
import axios from "axios";
// Initialize Firebase
let config = {
  apiKey: "AIzaSyAovTzG90orXBwHjqchPxZk_zyLPEV02dk",
  authDomain: "test-project-8c184.firebaseapp.com",
  databaseURL: "https://test-project-8c184.firebaseio.com",
  projectId: "test-project-8c184",
  storageBucket: "test-project-8c184.appspot.com",
  messagingSenderId: "165512895303"
};
firebase.initializeApp(config);

export default {
  data() {
    return {
      chatroomDetails: {
        name: "",
        members: ["jim", "bob"]
      },
      chatroomsArray: [],
      inRoom: {},
      joined: false
    };
  },
  methods: {
    createChatroom() {
      axios
        .put(
          `https://test-project-8c184.firebaseio.com/chatrooms/${this
            .chatroomDetails.name}.json`,
          this.chatroomDetails
        )
        .then(response => {
          console.log("Chatroom created");
        })
        .catch(error => {
          console.log(error);
        });
    },
    join(chatroom) {
      this.inRoom = chatroom;
      this.joined = true;
    }
  },
  created() {
    let chatroomPath = firebase.database().ref("chatrooms/");
    chatroomPath.on(
      "value",
      data => {
        let chatrooms = data.val();
        this.chatroomsArray = chatrooms;
      },
      error => {
        console.log(`Error: ${error.code}`);
      }
    );
  }
};
</script>
