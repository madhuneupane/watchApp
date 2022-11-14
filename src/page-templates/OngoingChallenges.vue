<template>
  <NavigationBar />
  <section v-if="firstPart" id="ongoingChalSec">
    <h1>Ongoing Challenges</h1>
    <h2>Keep up! You are almost there</h2>
    <div class="chalList">
      <div
        class="chalInfo"
        v-for="(challenge, index) in chalLoading"
        :key="index"
      >
        {{ challenge.title }}
        <img
          :src="challenge.image"
          id="chalImage"
          @click.prevent="challengeClicked(index)"
        />
        <!-- <h2 id="chalName">TEST</h2> -->
        <p id="ending">Ending on {{ challenge.endDate }}</p>
        <p id="qntWatched">Watched # out of # movies!</p>
        <!-- Implement bar -->
      </div>
      <div class="card-gradient">
        <img
          src="../assets/icons/plus-button-challenge.svg"
          @click.prevent="createChallenge"
        />
        <h2>Create Your Own Challenge!</h2>
      </div>
      <button @click.prevent="loadMore">Load More</button>
    </div>
    <BackButton title="Back to Challenge" @click.prevent="backChal" />
  </section>

  <div v-if="moviePart"></div>
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
    };
  },

  async mounted() {
    const querySnap = await getDocs(query(collection(db, "challenge")));
    querySnap.forEach((doc) => {
      const uid = sessionStorage.getItem("uid");

      const userId = doc.data().uid;
      if (userId == uid) {
        let newChallenge = {
          title: doc.data().chalName,
          image: doc.data().image,
          content: doc.data().description,
          endDate: doc.data().endDate,
        };
        this.slides.push(newChallenge);
      }
    });
  },
  methods: {
    challengeClicked(index) {
      this.firstPart = false;
      this.moviePart = true;
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