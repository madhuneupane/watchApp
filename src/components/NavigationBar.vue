<template>
  <div class="navbar navbar-gradient">
    <img id="logo" src="../assets/icons/whitelogo.svg" alt="watchapp" />
    <div class="navbar-items">
      <div>
        <div class="nav-link" id="home" @click.prevent="goToHome">Home</div>
        <DropdownMenu v-if="isSignedIn" title="Challenges" />
      </div>
      <!-- v-if="user" -->
      <div v-if="!isSignedIn" class="nav-link" id="login" @click.prevent="goToLogin">
        Login
      </div>
      <img v-if="isSignedIn" id="userIcon" :src="imageSource" alt="userPic" @click.prevent="profile" />
      <button v-if="isSignedIn" @click.prevent="signingOut" class="nav-link tertiaryBtn" id="signOut">
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
      imageSource: "",
    };
  },
  async mounted() {
    const querySnap = await getDocs(query(collection(db, "user")));
    querySnap.forEach((doc) => {
      const uid = sessionStorage.getItem("uid");

      const userId = doc.data().uid;
      if (userId == uid) {
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

<style>
.navbar {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

@media only screen and (min-width: 1024px) {
  .navbar {
    flex-direction: row;
  }
}

#userIcon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  cursor: pointer;
}

.navbar-items {
  display: inline-flex;
  align-items: center;
  padding: 5px;
}

.nav-link {
  margin-left: 40px;
  margin-right: 40px;
}

.icon {
  width: 20px;
  padding-left: 5px;
}

#logo {
  padding-left: 20px;
}

#home,
#login {
  cursor: pointer;
}
</style>

