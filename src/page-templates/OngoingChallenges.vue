<template>
  <NavigationBar />
  <section v-if="firstPart" id="ongoingChalSec">
    <h1>Ongoing Challenges</h1>
    <h2>Keep up! You are almost there</h2>
    <div class="chalList">
      <div class="chalInfo" v-for="(challenge, index) in chalLoading" :key="index">
        {{ challenge.title }}
        <img :src="challenge.image" id="chalImage" @click.prevent="challengeClicked(index)" />
        <!-- <h2 id="chalName">TEST</h2> -->
        <p id="ending">Ending on {{ challenge.endDate }}</p>
        <p id="qntWatched">Watched # out of # movies!</p>
        <!-- Implement bar -->
      </div>
      <div class="card-gradient">
        <img src="../assets/icons/plus-button-challenge.svg" @click.prevent="createChallenge" />
        <h2>Create Your Own Challenge!</h2>
      </div>
      <a class="seeMoreBtn" @click.prevent="loadMore">Load More</a>
    </div>
    <div class="btnContainer">
      <BackButton title="Back to Challenge" @click.prevent="backChal" />
    </div>

  </section>

  <div v-if="moviePart">
    <img :src="chalImage" alt="not displayed" style="height: 300px" />
    <h2>{{ chalName }}</h2>
    <h3>{{ startDate }}---{{ endDate }}</h3>
    <p>
      {{ description }}
    </p>
    <div v-for="(movies, i) in movie" :key="i">
      <img :src="'https://image.tmdb.org/t/p/w500' + movie[i].poster_path" @click.prevent="movieClicked(movie[i])" />
      <h3>{{ movie[i].title }}</h3>
    </div>
  </div>
  <FooterBar />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import BackButton from "../components/BackButton.vue";
import { db } from "@/firebase";
import { query, collection, getDocs } from "firebase/firestore";

export default {
  name: "OngoingChallenges",
  components: {
    NavigationBar,
    FooterBar,
    BackButton,
  },
  data() {
    return {
      challengedb: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      length: 4,
      slides: [],
      moviePart: false,
      firstPart: true,
      chalImage: "",
      movie: [],
      chalName: "",
      startDate: "",
      endDate: "",
      description: "",
    };
  },

  async mounted() {
    const querySnap = await getDocs(query(collection(db, "challenge")));
    querySnap.forEach((doc) => {
      const uid = sessionStorage.getItem("uid");

      const userId = doc.data().uid;
      if (userId == uid) {
        sessionStorage.setItem("chalName", doc.data().chalName);
        let newChallenge = {
          title: doc.data().chalName,
          image: doc.data().image,
          content: doc.data().description,
          endDate: doc.data().endDate,
          selectedMovies: doc.data().selectedMovies,
          startDate: doc.data().startDate,
        };
        this.slides.push(newChallenge);
      }
    });
  },
  methods: {
    movieClicked(movieArray) {
      // let movieData = movieArray.title;
      // console.log(movieData);
      sessionStorage.setItem("movieName", movieArray.title);
      sessionStorage.setItem("movieRelease", movieArray.release_date);
      sessionStorage.setItem("movieID", movieArray.genre_ids);
      sessionStorage.setItem("movieRating", movieArray.vote_average);
      sessionStorage.setItem("movieOverview", movieArray.overview);
      sessionStorage.setItem("moviePoster", movieArray.poster_path);

      this.$router.push("/challenge-review");
    },
    challengeClicked(index) {
      this.firstPart = false;
      this.moviePart = true;
      this.chalImage = this.slides[index].image;
      this.chalName = this.slides[index].title;
      this.startDate = this.slides[index].startDate;
      this.endDate = this.slides[index].endDate;
      this.description = this.slides[index].content;
      console.log(this.description);
      this.movie = this.slides[index].selectedMovies;
      console.log(index);
    },
    createChallenge() {
      this.$router.push("/create-challenge");
    },
    backChal() {
      this.$router.push("/challenge-main");
    },
    loadMore() {
      if (this.length > this.challengedb.length) return;
      this.length = this.length + 4;
    },
  },
  computed: {
    chalLoading() {
      return this.slides.slice(0, this.length);
    },
  },
};
</script>