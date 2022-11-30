<template>
  <header>
    <div v-show="!mobile" class="desktopNav navbar navbar-gradient">
      <img id="logo" src="../assets/icons/whitelogo.svg" alt="watchapp" />
      <div class="navbar-items">
        <div>
          <div class="nav-link" id="home" @click.prevent="goToHome">Home</div>
          <DropdownMenu v-if="isSignedIn && imageSource" title="Challenges" />
        </div>
        <!-- v-if="user" -->
        <div v-if="!loggedIn" class="nav-link" id="login" @click.prevent="goToLogin">
          Login
        </div>
        <img v-if="isSignedIn && imageSource" id="userIcon" :src="imageSource" alt="userPic" @click.prevent="profile" />
        <button v-if="isSignedIn && imageSource" @click.prevent="signingOut" class="nav-link tertiaryBtn" id="signOut">
          Sign Out
        </button>
      </div>
    </div>
    <div class="logoIcon" v-show="mobile">
      <div class="icon">
        <img src="../assets/icons/burger-menu.svg" @click="toggleMobileNav" class="mobileNav"
          :class="{ 'icon-active': mobileNav }" />
      </div>
      <div class="logo">
        <img id="logo" src="../assets/icons/colored-logo.svg" alt="watchapp" />
      </div>
    </div>
    <transition name="mobileNav">
      <div v-show="mobileNav" class="dropdownNav">
        <div class="navbar-items">
          <img v-if="isSignedIn && imageSource" id="userIcon" :src="imageSource" alt="userPic"
            @click.prevent="profile" />
          <div>
            <div class="nav-link" id="home" @click.prevent="goToHome">Home</div>
            <DropdownMenu v-if="isSignedIn && imageSource" title="Challenges" />
          </div>
          <!-- v-if="user" -->
          <div v-if="!loggedIn" class="nav-link" id="login" @click.prevent="goToLogin">
            Login
          </div>
          <div v-if="isSignedIn && imageSource" @click.prevent="signingOut" class="nav-link" id="signOut">
            Sign Out
          </div>
        </div>
      </div>
    </transition>
  </header>
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
      loggedIn: false,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    };
  },
  async mounted() {
    const querySnap = await getDocs(query(collection(db, "user")));
    querySnap.forEach((doc) => {
      this.uid = sessionStorage.getItem("uid");
      if (typeof this.uid === "string") {
        this.loggedIn = true;
      }
      //this.log = sessionStorage.getItem("log");
      const userId = doc.data().uid;
      if (userId == this.uid) {
        this.imageSource = doc.data().profilePicUrl;
        sessionStorage.setItem("nickname", doc.data().nickname);
        sessionStorage.setItem("fname", doc.data().fname);
        sessionStorage.setItem("lname", doc.data().lname);
        sessionStorage.setItem("profilePic", this.imageSource);
      }
    });

    const navbar = document.querySelector('.logoIcon');
    const navbarHeight = navbar.getBoundingClientRect().height;

    document.addEventListener('scroll', () => {
      if (window.scrollY > navbarHeight / 10) {
        navbar.classList.add('navbar--fixed');
      } else {
        navbar.classList.remove('navbar--fixed');
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
          this.loggedIn = false;
          sessionStorage.clear();
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 1024) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  }
};
</script>