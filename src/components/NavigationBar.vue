<template>
  <div class="navbar navbar-gradient">
    <img id="logo" src="../assets/icons/whitelogo.svg" alt="watchapp" />
    <div class="navbar-items">
      <div>
        <div class="nav-link" id="home" @click.prevent="goToHome">Home</div>
        <DropdownMenu v-if="isSignedIn && imageSource" title="Challenges" />
      </div>
      <!-- v-if="user" -->
      <div
        v-if="!isSignedOut"
        class="nav-link"
        id="login"
        @click.prevent="goToLogin"
      >
        Login
      </div>
      <img
        v-if="isSignedIn && imageSource"
        id="userIcon"
        :src="imageSource"
        alt="userPic"
        @click.prevent="profile"
      />
      <button
        v-if="isSignedIn && imageSource"
        @click.prevent="signingOut"
        class="nav-link tertiaryBtn"
        id="signOut"
      >
        Sign Out
      </button>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { db } from "@/firebase";
import { query, collection, getDocs } from "firebase/firestore";
import DropdownMenu from "./DropdownMenu.vue";
export default {
  name: "NavigationBar",
  components: {
    DropdownMenu,
  },
  data() {
    return {
      isSignedIn: true,
      isSignedOut: false,
      imageSource: "",
      uid: "",
    };
  },
  async mounted() {
    const querySnap = await getDocs(query(collection(db, "user")));
    querySnap.forEach((doc) => {
      this.uid = sessionStorage.getItem("uid");
      //this.log = sessionStorage.getItem("log");
      const userId = doc.data().uid;
      if (userId == this.uid) {
        this.imageSource = doc.data().profilePicUrl;
        sessionStorage.setItem("nickname", doc.data().nickname);
      }
    });
  },
  methods: {
    profile() {
      this.$router.push("/profile-page");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToLogin() {
      this.$router.push("/login-page");
    },
    async signingOut() {
      signOut(auth)
        .then(() => {
          console.log("Sign out successful");
          sessionStorage.setItem("uid", 0);
          sessionStorage.setItem("nickname", "");
          this.isSignedOut = false;
          this.isSignedIn = false;
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>