<template>
  <NavigationBar />
  <ChallengesMenu :challengePage="'past'" v-if="windowSize < 1024" />
  <section v-if="firstPart" id="ongoingChalSec">
    <h1 v-if="windowSize > 1024">Past Challenges</h1>
    <h2>You've achieved this much!</h2>
    <div class="chalList">
      <div class="chalInfo" v-for="(challenge, index) in chalLoading" :key="index">
        <div class="challenge" v-bind:style="{ backgroundImage: 'url(' + challenge.image + ')' }"
          @click.prevent="challengeClicked(index)">
          <div class="chalDetailsContainer">
            <h3>{{ challenge.title }}</h3>
            <span id="ending">Ended on {{ challenge.endDate }}</span>
          </div>
        </div>
      </div>
    </div>
    <a class="seeMoreBtn link" @click.prevent="loadMore">Load More</a>
    <div class="btnContainer" v-if="windowSize > 1024">
      <BackButton title="Back to Challenges" @click.prevent="backChal" />
    </div>
  </section>
  <!-- <section id="upcomingPageSec">
    <div v-if="moviePart">
      <img :src="chalImage" alt="not displayed" style="height: 300px" />
      <h2>{{ chalName }}</h2>
      <h3>{{ startDate }}---{{ endDate }}</h3>
      <p>
        {{ description }}
      </p>
      <div class="movieList">
        <div v-for="(movies, i) in movie" :key="i">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie[i].poster_path"
          />
          <h3 v-if="movie[i].review">Congrats you watched this movie</h3>
        </div>
      </div>
      <BackButton title="Back to List" @click.prevent="backList"></BackButton>
    </div>
  </section> -->
  <section v-if="moviePart" id="chalDetailSection">
    <div class="chalDetailContainer">
      <div class="chalImgContainer" v-bind:style="{ backgroundImage: 'url(' + chalImage + ')' }"></div>
      <div class="chalDetailsInfo">
        <span class="chalTitle">{{ chalName }}</span>
        <span class="chalDates">{{ startDate }} ~ {{ endDate }}</span>
        <p class="chalDescription">{{ description }}</p>
      </div>
    </div>
    <div class="ongoingChalContainer">
      <div v-for="(movies, i) in movie" :key="i" class="ongoingChalItem">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie[i].poster_path"
          @click.prevent="movieClicked(movie[i], i)" />
        <!-- <h3>{{ movie[i].title }}</h3> -->
        <div class="movieWatched" v-if="movie[i].review">
          <span>Watched</span>
        </div>
      </div>
    </div>
    <div class="ongoingChlPageBottomBtnContainer">
      <BackButton class="backtoListBtn" title="Back to List" @click.prevent="backList" />
    </div>
  </section>
  <FooterBar style="width: 100%; bottom: 0; position: fixed" />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import BackButton from "../components/BackButton.vue";
import { db } from "@/firebase";
import { query, collection, getDocs } from "firebase/firestore";
import ChallengesMenu from "../components/ChallengesMenu.vue";

export default {
  name: "OngoingChallenges",
  components: {
    NavigationBar,
    FooterBar,
    BackButton,
    ChallengesMenu,
  },
  data() {
    return {
      length: 5,
      slides: [],
      moviePart: false,
      firstPart: true,
      chalImage: "",
      movie: [],
      chalName: "",
      startDate: "",
      endDate: "",
      description: "",
      windowSize: 0,
    };
  },

  async mounted() {
    const querySnap = await getDocs(query(collection(db, "challenge")));
    querySnap.forEach((doc) => {
      const uid = sessionStorage.getItem("uid");
      let flag = 0;
      const userId = doc.data().uid;
      if (userId == uid) {
        //  console.log(doc.data().selectedMovies.length);
        for (let i = 0; i < doc.data().selectedMovies.length; i++) {
          if (doc.data().selectedMovies[i].review) {
            flag = flag + 1;
          }
        }
        console.log(flag);
        if (flag == doc.data().selectedMovies.length) {
          let newChallenge = {
            title: doc.data().chalName,
            image: doc.data().image,
            content: doc.data().description,
            endDate: doc.data().endDate,
            selectedMovies: doc.data().selectedMovies,
            startDate: doc.data().startDate,
          };
          // console.log(newChallenge);
          this.slides.push(newChallenge);
        }
      }
    });
  },
  methods: {
    // movieClicked(movieArray, j) {
    //   // let movieData = movieArray.title;
    //   // console.log(movieData);
    //   sessionStorage.setItem("movieName", movieArray.title);
    //   sessionStorage.setItem("movieRelease", movieArray.release_date);
    //   sessionStorage.setItem("movieID", movieArray.genre_ids);
    //   sessionStorage.setItem("movieRating", movieArray.vote_average);
    //   sessionStorage.setItem("movieOverview", movieArray.overview);
    //   sessionStorage.setItem("moviePoster", movieArray.poster_path);
    //   sessionStorage.setItem("index", j);

    //   this.$router.push("/challenge-review");
    // },
    challengeClicked(index) {
      this.firstPart = false;
      this.moviePart = true;
      this.chalImage = this.slides[index].image;
      this.chalName = this.slides[index].title;
      sessionStorage.setItem("chalName", this.chalName);
      this.startDate = this.slides[index].startDate;
      this.endDate = this.slides[index].endDate;
      this.description = this.slides[index].content;
      // console.log(this.description);
      this.movie = this.slides[index].selectedMovies;
      // console.log(index);
    },
    backChal() {
      this.$router.push("/challenge-main");
    },
    loadMore() {
      if (this.length > this.slides.length) return;
      this.length = this.length + 5;
    },
    backList() {
      this.firstPart = true;
      this.moviePart = false;
    },
    handleResize() {
      this.windowSize = window.innerWidth;
    },
  },
  computed: {
    chalLoading() {
      return this.slides.slice(0, this.length);
    },
  },
  created() {
    this.windowSize = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>