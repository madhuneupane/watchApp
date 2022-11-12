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
    <div v-if="secondPartFirst">
      <img id="profilePicture" src="../assets/icons/profile.svg" alt="sorry" />
      <!-- <router-link to="/create-account" @click.prevent="displayImage"
        >Add your profile photo</router-link
      > -->
      <p style="text-decoration: underline" @click.prevent="clickImage">
        Add your profile photo
      </p>
    </div>
    <div v-if="secondPartSecond">
      <video autoplay class="feed"></video>

      <button class="secondaryBtn" @click.prevent="displayImage">Snap</button>
    </div>
    <p>Please input your nickname</p>
    <input v-model="nickname" type="text" placeholder="Nickname" />
    <NextButton @click.prevent="submitted" />
  </div>

  <div v-if="genrePart">
    <h1>Choose your genre</h1>
    <h3>Select atleast one</h3>
    <div>
      <input name="genre" type="checkbox" value="28" />
      <label for="genre">Action</label>
      <input name="genre" type="checkbox" value="12" />
      <label for="genre">Adventure</label>
    </div>

    <div>
      <input name="genre" type="checkbox" value="16" />
      <label for="genre">Animation</label>

      <input name="genre" type="checkbox" value="35" />
      <label for="genre">Comedy</label>
    </div>

    <div>
      <input name="genre" type="checkbox" value="80" />
      <label for="genre">Crime</label>

      <input name="genre" type="checkbox" value="99" />
      <label for="genre">Documentary</label>
    </div>

    <div>
      <input name="genre" type="checkbox" value="18" />
      <label for="genre">Drama</label>

      <input name="genre" type="checkbox" value="10751" />
      <label for="genre">Family</label>
    </div>

    <div>
      <input name="genre" type="checkbox" value="14" />
      <label for="genre">Fantasy</label>

      <input name="genre" type="checkbox" value="36" />
      <label for="genre">History</label>
    </div>

    <div>
      <input name="genre" type="checkbox" value="27" />
      <label for="genre">Horror</label>

      <input name="genre" type="checkbox" value="10402" />
      <label for="genre">Music</label>
    </div>

    <div>
      <input name="genre" type="checkbox" value="9648" />
      <label for="genre">Mystery</label>

      <input name="genre" type="checkbox" value="10749" />
      <label for="genre">Romance</label>
    </div>

    <div>
      <input name="genre" type="checkbox" value="878" />
      <label for="genre">Science Fiction</label>

      <input name="genre" type="checkbox" value="10770" />
      <label for="genre">TV Movie</label>
    </div>

    <div>
      <input name="genre" type="checkbox" value="53" />
      <label for="genre">Thriller</label>

      <input name="genre" type="checkbox" value="1752" />
      <label for="genre">War</label>
    </div>
    <div>
      <input name="genre" type="checkbox" value="37" />
      <label for="genre">Western</label>
    </div>
    <button class="primaryBtn" @click.prevent="genreSelection">
      Finish Setup
    </button>
  </div>
  <FooterBar />
</template>

<script>
// import { emitter } from "../main";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
      urlOfImage: "",
      genreArray: [],
      firstPart: true,
      secondPart: false,
      secondPartFirst: false,
      secondPartSecond: false,
      genrePart: false,
    };
  },
  methods: {
    submitted() {
      this.secondPart = false;
      this.genrePart = true;
    },
    async newAccount() {
      this.fillMessage = "";
      // this.email = "";
      // this.password = "";
      // this.cpassword = "";
      // this.fname = "";
      // this.lname = "";
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
        this.firstPart = false;
        // console.log(this.email);
        this.secondPart = true;
        this.secondPartFirst = true;
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
      let checkboxes = document.getElementsByName("genre");
      //let selected = [];
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          console.log(checkboxes[i].value);
          this.genreArray.push(checkboxes[i].value);
        }
      }
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const uid = userCredential.user.uid;
          // console.log(uid);
          const docRef = addDoc(collection(db, "user"), {
            fname: this.fname,
            lname: this.lname,
            uid: uid,
            nickname: this.nickname,
            profilePicUrl: this.urlOfImage,
            genre: this.genreArray,
          });
          console.log(docRef);

          // this.emitter.emit("docRef", docRef);
          this.emitter.emit("uid", uid);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });

      this.$router.push("/");
    },
    clickImage() {
      this.secondPartFirst = false;
      this.secondPartSecond = true;
      this.init();
    },

    displayImage() {
      const picture = document.createElement("canvas");
      const ctx = picture.getContext("2d");

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(
        document.querySelector("video"),
        0,
        0,
        picture.width,
        picture.height
      );

      // this.imageSource = picture.toDataURL();

      picture.toBlob((blob) => {
        const storage = getStorage();
        const storageRef = ref(storage, `images/${this.fname}`);
        uploadBytes(storageRef, blob).then(() => {
          getDownloadURL(storageRef).then((result) => {
            console.log(result);
            this.urlOfImage = result;
            let profilePhoto = document.getElementById("profilePicture");
            // console.log("this" + this.a);
            profilePhoto.src = result;
          });
        });
      });
      picture.remove();

      this.secondPartSecond = false;
      this.secondPartFirst = true;
    },
    init() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      } else {
        console.log("ok");
      }
    },
  },
};
</script>
<style>
.feed {
  display: block;
  margin: 0 auto;
  widows: 100%;
  max-width: 1200px;
  background-color: #171717;
  padding: 25px;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.2);
}
</style>
