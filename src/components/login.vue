<template>
  <router-view />
  <h1>Login</h1>
  <p class="error">{{ fillMessage }}</p>
  <div style="margin: 10px !important">
    <form>
      <div>
        <label>Email Address <span class="req">*</span></label>
        <input
          v-model="email"
          type="email"
          class="inputArea"
          placeholder="email@gmail.com"
        />
        <p class="error">{{ errorMessage }}</p>
      </div>
      <div>
        <label>Password <span class="req">*</span></label>
        <input class="inputArea" v-model="password" type="password" />
        <p class="error">{{ pwdError }}</p>
      </div>
      <button type="submit" class="primaryBtn" @click.prevent="addUser">
        Login
      </button>
    </form>
    <button type="submit" class="secondaryBtn" @click.prevent="gotoAccount">
      Create Account
    </button>

    <a> Forgot Password? Click Here. </a><br />
    <a>Forgot Email? Click Here.</a>
  </div>
</template>
<style>
</style>

<script>
// import FooterWatchapp from "./components/footer.vue";
// import ButtonSample from "./samples/buttons/buttons.vue";

//export default {
// components: {
//   FooterWatchapp,
//   ButtonSample,
// },
import { db } from "@/firebase";
import { query, collection, getDocs } from "firebase/firestore";
export default {
  name: "loginPage",

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
      this.$router.push("/createAccount");
    },
    async addUser() {
      this.errorMessage = "";
      this.pwdError = "";
      this.fillMessage = "";
      if (this.email == "") {
        this.errorMessage = "Please input a valid email address";
        this.fillMessage = "Please fill in the required information below";
      }
      if (this.password == "") {
        this.pwdError = "Please input a valid password";
        this.fillMessage = "Please fill in the required information below";
      }
      if (this.email && this.password) {
        const querySnap = await getDocs(query(collection(db, "user")));
        let i = 0;
        // add each doc to 'countries' array
        querySnap.forEach((doc) => {
          const dbEmail = doc.data().email;
          const dbPassword = doc.data().password;
          if (dbEmail == this.email) {
            if (dbPassword == this.password) {
              i = 1;
              alert("Login Successfully");
            }
          }
        });
        if (i == 0) {
          alert("Sorry username and password missmatch");
        }
        this.email = "";
        this.password = "";
        //Working
      }
    },
  },
};
</script>
