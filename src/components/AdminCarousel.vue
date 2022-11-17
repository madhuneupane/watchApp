<template>
  <section id="recommendationSec">
    <div class="carouselContainer" v-if="carouselKey">
      <div class="headContainer">
        <h2>Try beating WatchApp!</h2>
        <a class="seeMoreBtn" @click.prevent="gotoAdminPage">See All</a>
      </div>
      <vueper-slides :arrows="true" :infinite="false" :bullets="true" :visible-slides="2" :slide-multiple="2" :gap="2"
        :slide-ratio="1 / 3.5" :dragging-distance="100" :breakpoints="breakpoints" autoplay :duration='3000'>
        <vueper-slide v-for="movie in slides" :key="movie" :image="movie.image" :title="movie.title"
          :content="movie.startDate + ' to ' + movie.endDate" />
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
  name: "AdminCarousel",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      slides: [],
      i: 0,
      breakpoints: {
        1023: { visibleSlides: 2, slideMultiple: 2, slideRatio: 1 / 3, arrows: false },
      },
      carouselKey: false,
    };
  },
  async mounted() {
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
        };
        this.slides.push(newChallenge);
      }
    });
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

  methods: {
    forceRerender() {
      this.carouselKey += 1;
    },
    gotoAdminPage() {
      this.$router.push("/admin-challenge");
    },
  },
};
</script>