<template>
  <h1>Sign Up</h1>
  <p>Please fill the required details below</p>
  <p class="error">{{ fillMessage }}</p>
  <div style="margin: 10px !important">
    <div>
      <label>Email Address <span class="req">*</span></label>
      <input
        v-model="email"
        type="email"
        class="inputArea"
        placeholder="email@gmail.com"
      />
    </div>
    <div style="float: left">
      <label>First Name <span class="req">*</span></label>
      <input v-model="fname" type="text" class="inputArea" />
    </div>
    <div style="float: left; margin-left: 30px !important">
      <label>Last Name <span class="req">*</span></label>
      <input v-model="lname" type="text" class="inputArea" />
    </div>
    <div style="clear: both"></div>
    <div>
      <label>Password <span class="req">*</span></label>
      <input class="inputArea" v-model="password" type="password" />
    </div>
    <div>
      <label>Confirm Password <span class="req">*</span></label>
      <input class="inputArea" v-model="cpassword" type="password" />
    </div>
    <button type="submit" class="primaryBtn" @click.prevent="newAccount">
      Create Account
    </button>
  </div>
  <a>Back to Login Page</a>
</template>
<script>
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
export default {
  name: "createAccount",
  data() {
    return {
      email: "",
      fname: "",
      lname: "",
      password: "",
      cpassword: "",
      fillMessage: "",
    };
  },
  methods: {
    newAccount() {
      this.fillMessage = "";
      if (
        this.email == "" ||
        this.password == "" ||
        this.cpassword == "" ||
        this.fname == "" ||
        this.lname == ""
      ) {
        this.fillMessage = "Please fill in all the information";
      } else if (this.password !== this.cpassword) {
        alert("Password and confirm password are not matched");
      } else {
        try {
          const docRef = addDoc(collection(db, "user"), {
            email: this.email,
            password: this.password,
            fname: this.fname,
            lname: this.lname,
          });

          alert("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
      this.email = "";
      this.password = "";
      this.cpassword = "";
      this.fname = "";
      this.lname = "";
    },
  },
};
</script>
