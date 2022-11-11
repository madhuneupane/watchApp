<template>
  <NavigationBar />
  <router-view />
  <h1>Login</h1>
  <p class="error">{{ fillMessage }}</p>
  <div style="margin: 10px !important">
    <form @submit.prevent="doLogin" class="formLogin">
      <div>
        <label>Email Address <span class="req">*</span></label>
        <input v-model="email" type="email" class="inputArea" placeholder="email@gmail.com" />
        <p class="error">{{ errorMessage }}</p>
      </div>
      <div>
        <label>Password <span class="req">*</span></label>
        <input class="inputArea" v-model="password" type="password" />
        <p class="error">{{ pwdError }}</p>
      </div>
      <button type="submit" class="primaryBtn">
        Login
      </button>
      <!-- @click.prevent="addUser" -->

    </form>
    <button type="submit" class="secondaryBtn" @click.prevent="gotoAccount">
      Create Account
    </button>
    <router-link to="/reset-password">Forgot Password? Click Here.</router-link>
    <router-link to="/forgot-email">Forgot Email? Click Here.</router-link>
  </div>
  <FooterBar />
</template>
<style>

</style>

<script>
// import { db } from "@/firebase";
// import { query, collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
  name: "LoginPage",
  components: {
    NavigationBar,
    FooterBar
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      pwdError: "",
      fillMessage: "",
    };
  },

  methods: {
    gotoAccount() {
      console.log("Hello");
      this.$router.push("/create-account");
    },
    // async addUser() {
    //   this.errorMessage = "";
    //   this.pwdError = "";
    //   this.fillMessage = "";
    //   if (this.email == "") {
    //     this.errorMessage = "Please input a valid email address";
    //     this.fillMessage = "Please fill in the required information below";
    //   }
    //   if (this.password == "") {
    //     this.pwdError = "Please input a valid password";
    //     this.fillMessage = "Please fill in the required information below";
    //   }
    //   if (this.email && this.password) {
    //     const querySnap = await getDocs(query(collection(db, "user")));
    //     let i = 0;

    //     querySnap.forEach((doc) => {
    //       const dbEmail = doc.data().email;
    //       const dbPassword = doc.data().password;

    //       if (dbEmail == this.email) {
    //         if (dbPassword == this.password) {
    //           i = 1;
    //           console.log(doc.id);
    //           alert("Login Successfully");
    //         }
    //       }
    //     });
    //     if (i == 0) {
    //       alert("Sorry username and password missmatch");
    //     }
    //     this.email = "";
    //     this.password = "";
    //     //Working
    //   }
    // },

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
            const user = userCredential.user;
            alert("Login Successfully");
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Sorry, username and password missmatch");
            console.log(errorCode);
            console.log(errorMessage);
          })
        this.email = "";
        this.password = "";
      }
    }
    // Working
  },
};
</script>
