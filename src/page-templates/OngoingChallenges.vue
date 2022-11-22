<template>
  <button
    class="createChllgBtn"
    v-if="windowSize < 1024 && !moviePart"
    @click.prevent="createChallenge"
  ></button>
  <NavigationBar />
  <ChallengesMenu
    :challengePage="'ongoing'"
    v-if="windowSize < 1024 && !moviePart"
  />
  <section v-if="firstPart" id="ongoingChalSec">
    <h1 v-if="windowSize > 1024">Ongoing Challenges</h1>
    <h2>Keep up! You are almost there</h2>
    <div class="chalList">
      <div
        class="chalInfo"
        v-for="(challenge, index) in chalLoading"
        :key="index"
      >
        <div
          class="challenge"
          v-bind:style="{ backgroundImage: 'url(' + challenge.image + ')' }"
          @click.prevent="challengeClicked(index)"
        >
          <div class="chalDetailsContainer">
            <h3>{{ challenge.title }}</h3>
            <span id="ending">Ending on {{ challenge.endDate }}</span>
            <span id="qntWatched" v-if="windowSize > 1024">
              Watched {{ challenge.totalWatched }} out of
              {{ challenge.selectedMovies.length }} movies!
            </span>
          </div>
        </div>
        <!-- Implement bar -->
      </div>
      <div
        class="createChalCard"
        @click.prevent="createChallenge"
        v-if="windowSize > 1024"
      >
        <img src="../assets/icons/plus-button-challenge.svg" />
        <h3>Create Your Own Challenge!</h3>
        <!-- <button class="primaryBtn">Create a Challenge</button> -->
      </div>
    </div>
    <a class="seeMoreBtn link" @click.prevent="loadMore">Load More</a>
    <div class="btnContainer" v-if="windowSize > 1024">
      <BackButton title="Back to Challenge" @click.prevent="backChal" />
    </div>
  </section>

  <section v-if="moviePart" id="chalDetailSection">
    <div class="chalDetailContainer">
      <div
        class="chalImgContainer"
        v-bind:style="{ backgroundImage: 'url(' + chalImage + ')' }"
      ></div>
      <div class="chalDetailsInfo">
        <span class="chalTitle">{{ chalName }}</span>
        <span class="chalDates">{{ startDate }} ~ {{ endDate }}</span>
        <p class="chalDescription">{{ description }}</p>
      </div>
    </div>
    <div class="ongoingChalContainer">
      <div v-for="(movies, i) in movie" :key="i" class="ongoingChalItem">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie[i].poster_path"
          @click.prevent="movieClicked(movie[i], i)"
        />
        <!-- <h3>{{ movie[i].title }}</h3> -->
        <div class="movieWatched" v-if="movie[i].review">
          <span>Watched</span>
        </div>
      </div>
      <div>
        <BackButton title="Back to List" @click.prevent="backToList" />
        <a class="seeMoreBtn link" @click.prevent="quitChal">Quit Challenge</a>
      </div>
    </div>
  </section>
  <SimplePopup @close="togglePopup" :popupActive="popupActive">
    <div class="popupContent">
      <h1 class="popUpHeading">Quit?</h1>
      <h3 class="popUpText">
        If you quit the challenge,<br />you will lose all data.<br />Do you wish
        to continue?
      </h3>
      <button @click="redirect" type="button" class="secondaryBtn">
        Quit Challenge
      </button>
    </div>
  </SimplePopup>
  <FooterBar />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import BackButton from "../components/BackButton.vue";
import ChallengesMenu from "../components/ChallengesMenu.vue";
import { db } from "@/firebase";
import { query, collection, getDocs, deleteDoc, where, doc } from "firebase/firestore";

import SimplePopup from "../components/SimplePopup.vue";
import * as vue from "vue";

export default {
  name: "OngoingChallenges",
  components: {
    NavigationBar,
    FooterBar,
    BackButton,
    ChallengesMenu,
    SimplePopup,
  },
  data() {
    return {
      challengedb: [],
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
      totalWatched: 0,
      genreArray: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 16,
          name: "Animation",
        },
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 80,
          name: "Crime",
        },
        {
          id: 99,
          name: "Documentary",
        },
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 10751,
          name: "Family",
        },
        {
          id: 14,
          name: "Fantasy",
        },
        {
          id: 36,
          name: "History",
        },
        {
          id: 27,
          name: "Horror",
        },
        {
          id: 10402,
          name: "Music",
        },
        {
          id: 9648,
          name: "Mystery",
        },
        {
          id: 10749,
          name: "Romance",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
        {
          id: 10770,
          name: "TV Movie",
        },
        {
          id: 53,
          name: "Thriller",
        },
        {
          id: 10752,
          name: "War",
        },
        {
          id: 37,
          name: "Western",
        },
      ],

      // uid: ""
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
        this.totalWatched = flag;
        console.log(flag);
        if (flag != doc.data().selectedMovies.length) {
          let newChallenge = {
            title: doc.data().chalName,
            image: doc.data().image,
            content: doc.data().description,
            endDate: doc.data().endDate,
            selectedMovies: doc.data().selectedMovies,
            startDate: doc.data().startDate,
            totalWatched: this.totalWatched,
          };
          // console.log(newChallenge);
          this.slides.push(newChallenge);
        }
      }
    });
  },
  methods: {
    movieClicked(movieArray, j) {
      // let movieData = movieArray.title;
      // console.log(movieData);
      sessionStorage.setItem("movieName", movieArray.title);
      sessionStorage.setItem("movieRelease", movieArray.release_date);
      let genreName = "";
      for (let i = 0; i < this.genreArray.length; i++) {
        for (let j = 0; j < movieArray.genre_ids.length; j++) {
          if (
            Number(this.genreArray[i].id) == Number(movieArray.genre_ids[j])
          ) {
            genreName += this.genreArray[i].name + ", ";
          }
        }
      }
      genreName = genreName.slice(0, genreName.length - 2);

      sessionStorage.setItem("movieID", genreName);
      sessionStorage.setItem("movieRating", movieArray.vote_average);
      sessionStorage.setItem("movieOverview", movieArray.overview);
      sessionStorage.setItem("moviePoster", movieArray.poster_path);
      sessionStorage.setItem("index", j);
      // console.log("hello" + j);

      this.$router.push("/challenge-review");
    },
    challengeClicked(index) {
      this.firstPart = false;
      this.moviePart = true;
      this.chalImage = this.slides[index].image;
      this.chalName = this.slides[index].title;
      sessionStorage.setItem("chalName", this.chalName);
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
      this.length = this.length + 5;
    },
    handleResize() {
      this.windowSize = window.innerWidth;
    },
    backToList() {
      this.firstPart = true;
      this.moviePart = false;
    },
    quitChal() {
      this.togglePopup();
    },
    async redirect() {
      const querySnap = await getDocs(query(collection(db, "challenge"), where("chalName", "==", this.chalName, true)));
      querySnap.forEach((doc1) => {
        // const uid = sessionStorage.getItem("uid");
        // const userId = doc.data().uid;
        if (doc1.data().adminChallenge == false) {
          this.chalID = doc1.id;
          const docRef = doc(db, "challenge", this.chalID);
          console.log(docRef);
          deleteDoc(docRef)
            .then(() => {
              console.log("Deleted");
              this.$router.push("/ongoing-challenges");
            })
            .catch((error) => {
              console.log(error);
            })
        }
      });
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
  setup() {
    const popupActive = vue.ref(false);
    const togglePopup = () => {
      popupActive.value = !popupActive.value;
    };
    return { popupActive, togglePopup };
  },
};
</script>