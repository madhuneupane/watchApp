<template>
  <NavigationBar />
  <!-- <img src="https://images.pexels.com/photos/10313368/pexels-photo-10313368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="testing"> -->
  <section id="movieReviewPage">
    <div class="movieInfoContainer">
      <img :src="'https://image.tmdb.org/t/p/w500' + moviePoster" />
      <div class="movieInfo">
        <span class="movieInfo__name">{{ movieName }}</span>
        <span class="movieInfo__id">{{ movieID }}</span>
        <span class="movieInfo__releaseDate"
          >Release Date:<br />{{ movieRelease }}</span
        >
        <span class="movieInfo__rating">Rating: {{ movieRating }}/10</span>
      </div>
    </div>
    <div class="overviewContainer">
      <h3>Overview</h3>
      <p>{{ movieOverview }}</p>
    </div>
    <h3>What do you think of this movie?</h3>

    <label>Rating<span class="req">*</span></label>
    <!-- <input v-model="userRating" type="number" name="userRating" id="userRating" /> -->
    <vue3starRatings
      v-model="userRating"
      class="ratingStars"
      starColor="#ffffff"
      starSize="25"
      controlBg="#00002A"
    />

    <div class="userReviewContainer">
      <label for="userReview">Review<span class="req">*</span></label>
      <textarea
        v-model="userReview"
        id="userReview"
        cols="30"
        rows="10"
        placeholder="Leave your review here!"
      ></textarea>
    </div>

    <p class="error">{{ fillMessage }}</p>

    <div class="btnContainer">
      <SaveButton @click.prevent="saveReview" />
      <BackButton @click.prevent="goBack" title="Back" />
    </div>
    <SimplePopup @close="togglePopup" :popupActive="popupActive">
      <div class="popupContent">
        <h1>Your review has been saved!</h1>
        <p>For retrieving this information, please visit your profile</p>
        <button @click="redirect" type="button" class="secondaryBtn">
          Done
        </button>
      </div>
    </SimplePopup>
  </section>

  <FooterBar />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
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

// import { defineComponent } from "vue";
import vue3starRatings from "vue3-star-ratings";
import SimplePopup from "@/components/SimplePopup.vue";

export default {
  name: "ChallengeReview",
  components: {
    NavigationBar,
    FooterBar,
    SaveButton,
    BackButton,
    vue3starRatings,
    SimplePopup,
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
      moviePoster: "",
      movieList: [],
    };
  },
  setup() {
    const popupActive = ref(false);
    const togglePopup = () => {
      popupActive.value = !popupActive.value;
    };
    return { popupActive, togglePopup };
  },
  async mounted() {
    this.movieName = sessionStorage.getItem("movieName");
    this.movieID = sessionStorage.getItem("movieID");
    this.movieRelease = sessionStorage.getItem("movieRelease");
    this.movieRating = sessionStorage.getItem("movieRating");
    this.movieOverview = sessionStorage.getItem("movieOverview");
    this.moviePoster = sessionStorage.getItem("moviePoster");
    const uid = sessionStorage.getItem("uid");
    let chalName = sessionStorage.getItem("chalName");

    const querySnap = await getDocs(query(collection(db, "challenge")));
    querySnap.forEach((doc) => {
      const userId = doc.data().uid;
      if (userId == uid) {
        if (chalName == doc.data().chalName) {
          // console.log(doc.data().chalName);
          this.movieList = doc.data().selectedMovies;
        }
      }
    });
    // console.log(i);
    //console.log(this.movieList[i]);
    // this.movieList[i].review = "hello there";
    // console.log(this.movieList[i]);
    // console.log(test);
    // console.log(this.movieArray);
  },
  methods: {
    async saveReview() {
      this.fillMessage = "";
      if (this.userRating == "" || this.userReview == "") {
        this.fillMessage = "Don't forget to write your review!";
      } else {
        this.togglePopup();
        let i = sessionStorage.getItem("index");
        // console.log(i);
        this.movieList[i].review = this.userReview;
        this.movieList[i].rating = this.userRating;
        let chalName = sessionStorage.getItem("chalName");

        const test = await getDocs(
          query(
            collection(db, "challenge"),
            where("chalName", "==", chalName, true)
          )
        );
        test.forEach((doc) => {
          this.chalID = doc.id;
          // console.log(doc.data().endDate);
        });
        //let review = this.movieName + "userReview";
        updateDoc(doc(db, "challenge", this.chalID), {
          selectedMovies: this.movieList,
        });
      }
      // We need to update db using the challenge title

      // UPDATE - USER REVIEW NOT WORKING
    },
    goBack() {
      this.$router.push("/ongoing-challenges");
    },
    redirect() {
      this.$router.push("/ongoing-challenges");
    },
  },
};
</script>