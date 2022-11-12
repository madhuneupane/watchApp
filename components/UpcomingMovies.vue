<template>
  <section id="upcomingSec">
    <div class="carouselContainer" v-if="carouselKey">
      <div class="headContainer">
        <h2>Upcoming Movies</h2>
        <a class="seeMoreBtn" @click.prevent="gotoUpcomingsPage">See All</a>
      </div>
      <vueper-slides
        :arrows="false"
        :infinite="false"
        :bullets="false"
        :visible-slides="5"
        :slide-multiple="2"
        :gap="2"
        :slide-ratio="1 / 3.5"
        :dragging-distance="200"
        :breakpoints="breakpoints"
      >
        <vueper-slide
          v-for="movie in upcomingMovieList"
          :key="movie"
          :image="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        />
      </vueper-slides>
    </div>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import axios from "axios";

export default {
  name: "UpcomingMovies",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      upcomingMovieList: [],
      breakpoints: {
        1024: { visibleSlides: 4, slideMultiple: 2, slideRatio: 1 / 3 },
      },
      carouselKey: false,
    };
  },

  created() {
    this.upcomingMovieList = axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=8ec942643846f64d66eed102868455f3&language=en-US&region=US&page=1"
      )
      .then((info) => {
        this.upcomingMovieList = info.data.results;
      })
      .then(() => {
        this.upcomingMovieList = JSON.parse(
          JSON.stringify(this.upcomingMovieList)
        );
        this.forceRerender();
      });
  },

  methods: {
    forceRerender() {
      this.carouselKey += 1;
    },
    gotoUpcomingsPage() {
      this.$router.push("/upcomings-page");
    },
  },
};
</script>
