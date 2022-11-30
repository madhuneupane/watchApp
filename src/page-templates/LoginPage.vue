<template>
  <NavigationBar />
  <section class="cssFooterAdjustment">
    <div id="loginPage">
      <h2>Login</h2>
      <p class="error">{{ fillMessage }}</p>
      <div class="formContainer">
        <form @submit.prevent="doLogin" class="formLogin">
          <div class="emailContainer">
            <label class="emailAddressLabel"
              >Email Address <span class="req">*</span></label
            >
            <input
              v-model="email"
              type="email"
              class="inputArea"
              placeholder="email@gmail.com"
            />
            <p class="error">{{ errorMessage }}</p>
          </div>
          <div class="passwordContainer">
            <label class="passwordLabel"
              >Password <span class="req">*</span></label
            >
            <input
              class="inputArea"
              v-model="password"
              type="password"
              placeholder="***********"
            />
            <p class="error">{{ pwdError }}</p>
          </div>
          <button type="submit" class="primaryBtn">Login</button>
          <SimplePopup @close="togglePopup" :popupActive="popupActive">
            <h1>Login Successful!</h1>
            <!-- <h3>Welcome {{ sessionStorage.getItem("nickname") }}</h3> -->
          </SimplePopup>
          <!-- @click.prevent="addUser" -->
        </form>
        <button type="submit" class="createAccBtn" @click.prevent="gotoAccount">
          Create Account
        </button>
        <div class="linksContainer">
          <router-link to="/reset-password" class="link"
            >Forgot Password? Click Here.</router-link
          >
          <router-link to="/forgot-email" class="link"
            >Forgot Email? Click Here.</router-link
          >
        </div>
      </div>
    </div>
  </section>
  <FooterBar style="width: 100%; bottom: 0; position: fixed" />
</template>

<script>
// import { db } from "@/firebase";
// import { query, collection, getDocs } from "firebase/firestore";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import SimplePopup from "@/components/SimplePopup.vue";

export default {
  name: "LoginPage",
  components: {
    NavigationBar,
    FooterBar,
    SimplePopup,
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      pwdError: "",
      fillMessage: "",
      userID: "",
      nickname: "",
    };
  },

  methods: {
    gotoAccount() {
      console.log("Hello");
      this.$router.push("/create-account");
    },
    // Auth testing
    async doLogin() {
      this.errorMessage = "";
      this.pwdError = "";
      this.fillMessage = "";
      if (this.email == "") {
        this.errorMessage = "Please input a valid email address";
        this.fillMessage = "Please fill in the required information below";
      } else if (this.password == "") {
        this.pwdError = "Please input a valid password";
        this.fillMessage = "Please fill in the required information below";
      } else {
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const uid = userCredential.user.uid;
            this.userID = uid;
            // alert("Login Successfully");
            //console.log(uid);
            sessionStorage.setItem("uid", uid);
            this.$router.push("/");
            // this.togglePopup();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Sorry, username and password missmatch");
            console.log(errorCode);
            console.log(errorMessage);
          });
        this.email = "";
        this.password = "";
      }
    },
    setup() {
      const popupActive = ref(false);
      const togglePopup = () => {
        popupActive.value = !popupActive.value;
      };
      return { popupActive, togglePopup };
    },
  },
};
</script>
