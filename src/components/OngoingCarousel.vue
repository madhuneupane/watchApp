<template>
  <section id="recommendationSec">
    <div class="carouselContainer" v-if="carouselKey">
      <div class="headContainer">
        <h2>Keep Up! You are almost there!</h2>
        <a class="seeMoreBtn" @click.prevent="gotoOngoingPage">See All</a>
      </div>
      <vueper-slides :arrows="true" :infinite="false" :bullets="true" :visible-slides="4" :slide-multiple="2" :gap="2"
        :slide-ratio="1 / 3.5" :dragging-distance="300" :breakpoints="breakpoints" autoplay :duration="3000">
        <vueper-slide v-for="movie in slides" :key="movie" :image="movie.image" :title="movie.title" />
        <div class="card-gradient" @click.prevent="createChallenge" style="cursor: pointer">
          <img src="../assets/icons/plus-button-challenge.svg" />
          <h2>Create Your Own Challenge!</h2>
        </div>
      </vueper-slides>
    </div>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import axios from "axios";
import { db } from "@/firebase";
import { query, collection, getDocs } from "firebase/firestore";

export default {
  name: "OngoingCarousel",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      recommendationMovieList: [],
      slides: [],

      breakpoints: {
        1024: { visibleSlides: 4, slideMultiple: 2, slideRatio: 1 / 3 },
      },
      carouselKey: false,
    };
  },

  created() {
    this.recommendationMovieList = axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=8ec942643846f64d66eed102868455f3&language=en-US&page=1&region=US"
      )
      .then((info) => {
        this.recommendationMovieList = info.data.results;
      })
      .then(() => {
        this.recommendationMovieList = JSON.parse(
          JSON.stringify(this.recommendationMovieList)
        );
        this.forceRerender();
      });
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
        };
        this.slides.push(newChallenge);
      }
    });
  },
  methods: {
    forceRerender() {
      this.carouselKey += 1;
    },
    gotoOngoingPage() {
      this.$router.push("/ongoing-challenges");
    },
    createChallenge() {
      this.$router.push("/create-challenge");
    },
  },
};
</script>