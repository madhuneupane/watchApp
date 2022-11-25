<template>
  <button class="createChllgBtn" v-if="windowSize < 1024" @click.prevent="createChallenge"></button>
  <NavigationBar />
  <ChallengesMenu :challengePage="'defyUs'" v-if="windowSize < 1024" />
  <section v-if="firstPart" id="ongoingChalSec">
    <h1 v-if="windowSize > 1024">Admin Challenges</h1>
    <h2>Keep up! You are almost there</h2>
    <div class="chalList">
      <div class="chalInfo" v-for="(challenge, index) in chalLoading" :key="index">
        <div class="challenge" v-bind:style="{ backgroundImage: 'url(' + challenge.image + ')' }"
          @click.prevent="challengeClicked(index)">
          <div class="chalDetailsContainer">
            <h3>{{ challenge.title }}</h3>
            <span id="ending">Ending on {{ challenge.endDate }}</span>
          </div>
        </div>
        <!-- Implement bar -->
      </div>
    </div>
    <a class="seeMoreBtn link" @click.prevent="loadMore">Load More</a>
    <div class="btnContainer" v-if="windowSize > 1024">
      <BackButton v-if="userID" title="Back to Challenge" @click.prevent="backChal" />
    </div>
  </section>

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
        <img :src="'https://image.tmdb.org/t/p/w500' + movie[i].poster_path" />
        <!-- <h3>{{ movie[i].title }}</h3> -->
        <div class="movieWatched" v-if="movie[i].review">
          <span>Watched</span>
        </div>
      </div>
    </div>
    <div class="ongoingChlPageBottomBtnContainer">
      <div class="ongoingChlPageBottomBtnContainer" v-if="userID">
        <button class="primaryBtn joinChlgBtn" @click.prevent="joinChallenge">
          Join Challenge
        </button>
      </div>
      <BackButton class="backtoListBtn" title="Back to List" @click.prevent="backList" />
    </div>
  </section>
  <FooterBar />
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import BackButton from "../components/BackButton.vue";
import { db } from "@/firebase";
import { query, collection, getDocs, addDoc } from "firebase/firestore";
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
      fButton: true,
      sButton: false,
      chalBrief: true,
      chalDetail: false,
      slides: [],
      firstPart: true,
      moviePart: false,
      chalName: "",
      startDate: "",
      endDate: "",
      description: "",
      chalImage: "",
      windowSize: 0,
      totalWatched: 0,
      chalDocument: {},
      userID: "",
    };
  },
  async mounted() {
    this.userID = sessionStorage.getItem("uid");
    const querySnap = await getDocs(query(collection(db, "challenge")));
    querySnap.forEach((doc) => {
      const challengeType = doc.data().adminChallenge;
      if (challengeType == true) {
        this.i = this.i + 1;
        let newChallenge = {
          title: doc.data().chalName,
          image: doc.data().image,
          content: doc.data().description,
          startDate: doc.data().startDate,
          endDate: doc.data().endDate,
          selectedMovies: doc.data().selectedMovies,
        };

        this.slides.push(newChallenge);
      }
    });
  },
  methods: {
    challengeClicked(index) {
      this.firstPart = false;
      this.moviePart = true;
      this.chalImage = this.slides[index].image;
      this.chalName = this.slides[index].title;
      sessionStorage.setItem("chalName", this.chalName);
      this.startDate = this.slides[index].startDate;
      this.endDate = this.slides[index].endDate;
      this.description = this.slides[index].content;

      this.movie = this.slides[index].selectedMovies;
    },
    createChallenge() {
      this.$router.push("/create-challenge");
    },
    backChal() {
      this.$router.push("/challenge-main");
    },
    backList() {
      this.firstPart = true;
      this.moviePart = false;
    },
    loadMore() {
      if (this.length > this.slides.length) return;
      this.length = this.length + 5;
    },
    acceptChal() {
      this.fButton = false;
      this.sButton = true;
    },
    backToList() {
      this.chalDetail = false;
      this.chalBrief = true;
    },
    chalDetailCall() {
      this.chalBrief = false;
      this.chalDetail = true;
    },
    //
    selectItem(event) {
      event.target.classList.toggle("active");
    },
    async joinChallenge() {
      const uid = sessionStorage.getItem("uid");
      const querySnap = await getDocs(query(collection(db, "challenge")));
      querySnap.forEach((doc) => {
        const challengeName = doc.data().chalName;
        if (challengeName == this.chalName) {
          this.chalDocument = doc.data();
        }
      });
      this.chalDocument.userChallenge = true;
      this.chalDocument.adminChallenge = false;
      this.chalDocument.uid = uid;
      console.log(this.chalDocument.userChallenge);
      const docRef = addDoc(collection(db, "challenge"), this.chalDocument);
      this.$router.push("/admin-challenge");
      console.log(docRef);
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

<style>
.active {
  background-color: yellow;
}
</style>