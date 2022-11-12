<template>
  <NavigationBar />
  <div v-if="firstPart">
    <h1>Sign Up</h1>
    <p>Please fill the required details below</p>
    <p class="error">{{ fillMessage }}</p>
    <form>
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
          <input
            v-model="fname"
            type="text"
            class="inputArea"
            placeholder="John"
          />
        </div>
        <div style="float: left; margin-left: 30px !important">
          <label>Last Name <span class="req">*</span></label>
          <input
            v-model="lname"
            type="text"
            class="inputArea"
            placeholder="Doe"
          />
        </div>
        <div style="clear: both"></div>
        <div>
          <label>Password <span class="req">*</span></label>
          <input
            class="inputArea"
            v-model="password"
            type="password"
            placeholder="***********"
          />
        </div>
        <div>
          <label>Confirm Password <span class="req">*</span></label>
          <input
            class="inputArea"
            v-model="cpassword"
            type="password"
            placeholder="***********"
          />
        </div>
        <button type="submit" class="primaryBtn" @click.prevent="newAccount">
          Create Account
        </button>
      </div>
    </form>
    <router-link to="/login-page">Back to Login Page</router-link>
  </div>

  <div v-if="secondPart" style="margin: 10px !important">
    <h1>Howdy</h1>
    <p>Can you tell about yourself more?</p>
    <!-- <router-link to="/join-sign-up" class="routerLink" @click.prevent="displayImage">Add your profile photo
    </router-link> -->
    <!-- Necessary to check this -->
    <!-- <input type="file" id="imgInput" name="img" accept="image/*" v-bind:style="cssData" /> -->
    <p>Please input your nickname</p>
    <input v-model="nickname" type="text" placeholder="Nickname" />
    <NextButton @click.prevent="genreSelection" />
  </div>
  <FooterBar />
</template>

<script>
// import { emitter } from "../main";
import { addDoc, collection } from "firebase/firestore";
// getDoc, query, where, doc

import { db } from "@/firebase";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import NextButton from "../components/NextButton.vue";

export default {
  name: "CreateAccount",
  components: {
    NavigationBar,
    FooterBar,
    NextButton,
  },
  data() {
    return {
      email: "",
      fname: "",
      lname: "",
      password: "",
      cpassword: "",
      fillMessage: "",
      nickname: "",
      uid: "",
      firstPart: true,
      secondPart: false,
    };
  },
  methods: {
    async newAccount() {
      // console.log(this.email);
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
        alert("Password and confirm password missmatch");
      } else {
        sessionStorage.setItem("fname", this.fname);
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const uid = userCredential.user.uid;
            // console.log(uid);
            const docRef = addDoc(collection(db, "user"), {
              fname: this.fname,
              lname: this.lname,
              uid: uid,
            });
            console.log(docRef);
            this.secondPart = true;
            this.firstPart = false;
            this.email = "";
            this.password = "";
            this.cpassword = "";
            this.fname = "";
            this.lname = "";

            // this.emitter.emit("docRef", docRef);
            this.emitter.emit("uid", uid);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
      }
    },
    async genreSelection() {
      // CONSOLE PRESENTED -- Uncaught (in promise) FirebaseError: Invalid document reference. Document references must have an even number of segments, but user has 1.
      // const test = await query(doc(db, "user"), where("uid", "==", this.uid));
      // getDoc(test);
      // console.log(test.id, test.data());
      // CONSOLE PRESENTED -- Zc{converter: null, _query: Ze, type: 'query', firestore: $a
      // const querySnapshot = await getDocs(collection(db, "user"));
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id);
      // });
      // updateDoc(doc(db, "user", this.docRef.id), { nickname: this.nickname });
      // const userId = query(collection(db, "user"), where("uid", "==", this.uid));
      // console.log(userId);
      // getDoc(userId);
      // db.collection("user")
      //   .where("uid", "==", this.uid)
      //   .get()
      //   .then(snap => {
      //     return snap.docs[0].ref.update({
      //       nickname: this.nickname
      //     });
      //   })
      //   .then(() => {
      //     console.log("Successfully updated")
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    },
  },
};
</script>
