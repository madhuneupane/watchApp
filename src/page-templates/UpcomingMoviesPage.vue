<template>
  <NavigationBar />
  <section id="upcomingPageSec">
    <h2>Upcoming Movies</h2>
    <PopupModal :popupActive="popupActive" :popupTitle="popupTitle" :popupPoster="popupPoster"
      :popupGenreIDs="popupGenreIDs" :popupReleaseDate="popupReleaseDate" :popupAvarage="popupAvarage"
      :popupOverview="popupOverview" v-on:closeClicked="closePopup" />
    <div class="movieList">
      <div class="movieItem" :key="movie" v-for="movie in upcomingMovieList">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          alt="{{ movie.original_title }} + ' Movie Poster'" @click="
  togglePopup(
    movie.poster_path,
    movie.original_title,
    movie.genre_ids,
    movie.release_date,
    movie.vote_average,
    movie.overview,
    movie
  )
          " />
      </div>
    </div>
  </section>
  <FooterBar />
</template>

<script>
import axios from "axios";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import PopupModal from "../components/PopupModal.vue";

export default {
  name: "UpcomingMoviesPage",
  components: {
    NavigationBar,
    FooterBar,
    PopupModal,
  },
  data() {
    return {
      upcomingMovieList: [],
      imgPreURL: "https://image.tmdb.org/t/p/w500",
      //For popups
      popupTitle: "",
      popupPoster: "",
      popupGenreIDs: "",
      popupReleaseDate: "",
      popupAvarage: "",
      popupOverview: "",
      popupActive: false,
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
    togglePopup(
      posterPath,
      originalTitle,
      genreids,
      releaseDate,
      voteAverage,
      overview,
      movie
    ) {
      this.popupPoster = posterPath;
      this.popupTitle = originalTitle;

      this.popupReleaseDate = releaseDate;
      this.popupAvarage = voteAverage;
      this.popupOverview = overview;
      this.popupActive = true;
      //console.log(movie);
      //movie.genre_ids
      let genreName = "";
      for (let i = 0; i < this.genreArray.length; i++) {
        for (let j = 0; j < movie.genre_ids.length; j++) {
          if (Number(this.genreArray[i].id) == Number(movie.genre_ids[j])) {
            genreName += this.genreArray[i].name + ", ";
          }
        }
      }
      this.popupGenreIDs = genreName.slice(0, genreName.length - 2);
    },
    closePopup() {
      this.popupActive = false;
    },
  },
};
</script>
