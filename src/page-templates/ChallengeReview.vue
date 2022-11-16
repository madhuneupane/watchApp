<template>
  <NavigationBar />
  <!-- <img src="https://images.pexels.com/photos/10313368/pexels-photo-10313368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="testing"> -->
  <h1>{{ movieName }}</h1>
  <h3>{{ movieID }}</h3>
  <p><strong>Release Date: </strong>{{ movieRelease }}</p>
  <p><strong>Rating: </strong>{{ movieRating }}/10</p>
  <h3>Overview</h3>
  <p>{{ movieOverview }}</p>
  <hr />
  <h3>What do you think of this movie?</h3>

  <label for="userRating">Rating<span class="req">*</span></label>
  <input v-model="userRating" type="number" name="userRating" id="userRating" />

  <label for="userReview">Review<span class="req">*</span></label>
  <textarea
    v-model="userReview"
    id="userReview"
    cols="30"
    rows="10"
    placeholder="Leave your review here!"
  ></textarea>

  <p class="error">{{ fillMessage }}</p>

  <SaveButton
    @click.prevent="
      saveReview();
      togglePopup();
    "
  />
  <BackButton @click.prevent="goBack" title="Back" />
  <PopupModal @close="togglePopup" :popupActive="popupActive">
    <div class="popupContent">
      <h1>Your review has been saved!</h1>
      <p>For retrieving this information,<br />please visit your profile</p>
      <button @click="redirect" type="button" class="secondaryBtn">Done</button>
    </div>
  </PopupModal>
  <FooterBar />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import PopupModal from "../components/PopupModal.vue";
import { ref } from "vue";
import SaveButton from "../components/SaveButton.vue";
import BackButton from "../components/BackButton.vue";
import { db } from "@/firebase";
import {
  query,
  collection,
  getDocs,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";

export default {
  name: "ChallengeReview",
  components: {
    NavigationBar,
    FooterBar,
    PopupModal,
    SaveButton,
    BackButton,
  },
  data() {
    return {
      fillMessage: "",
      userRating: "",
      userReview: "",
      movieName: "",
      movieID: "",
      movieRelease: "",
      movieRating: "",
      movieOverview: "",
      chalID: "",
    };
  },
  setup() {
    const popupActive = ref(false);
    const togglePopup = () => {
      popupActive.value = !popupActive.value;
    };
    return { popupActive, togglePopup };
  },
  mounted() {
    this.movieName = sessionStorage.getItem("movieName");
    this.movieID = sessionStorage.getItem("movieID");
    this.movieRelease = sessionStorage.getItem("movieRelease");
    this.movieRating = sessionStorage.getItem("movieRating");
    this.movieOverview = sessionStorage.getItem("movieOverview");

    // console.log(test);
    // console.log(this.movieArray);
  },
  methods: {
    async saveReview() {
      this.fillMessage = "";
      if (this.userRating == "" || this.userReview == "") {
        this.fillMessage = "Don't forget to write your review!";
      } else {
        let chalName = sessionStorage.getItem("chalName");
        const test = await getDocs(
          query(collection(db, "challenge"), where("chalName", "==", chalName))
        );
        test.forEach((doc) => {
          this.chalID = doc.id;
        });
        //let review = this.movieName + "userReview";
        updateDoc(doc(db, "challenge", this.chalID), {
          userReview: this.userReview,
          userRating: this.userRating,
        });
      }
      // We need to update db using the challenge title
    },
    goBack() {
      this.$router.push("/ongoing-challenges");
    },
    redirect() {
      this.$router.push("/");
    },
  },
};
</script>