<template>
    <NavigationBar />
    <section id="recommendPageSec">
        <h2>You will like this!</h2>
        <PopupModal
        :popupActive=popupActive
        :popupTitle=popupTitle
        :popupPoster=popupPoster
        :popupGenreIDs=popupGenreIDs
        :popupReleaseDate=popupReleaseDate
        :popupAvarage=popupAvarage
        :popupOverview=popupOverview
        v-on:closeClicked="closePopup"
        />
        <div class="movieList">
            <div class="movieItem" :key="movie" v-for="movie in recommendationMovieList" >
                <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                    alt="{{ movie.original_title }} + ' Movie Poster'" 
                    @click="togglePopup(movie.poster_path, movie.original_title, movie.genre_ids, movie.release_date, movie.vote_average, movie.overview)">
            </div>
        </div>
    </section>
    <!-- <PopupModal @close="togglePopup" :popupActive="popupActive" :key="movie" v-for="movie in recommendationMovieList">
        <div class="popupContent">
            <img class="movieImg" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                alt="{{ movie.original_title }} + ' Movie Poster'">
            <h1>{{ movie.original_title }}</h1>
            <p>{{ movie.genre_ids }}</p>
            <p><strong>Release Date: </strong> {{ movie.release_date }}</p>
            <p><strong>TMDB Rating: </strong> {{ movie.vote_average }}/10</p>
            <br>
            <p><strong>Overview</strong></p>
            <p class="movieOverview">{{ movie.overview }}</p>
        </div>
    </PopupModal> -->
    <FooterBar />
</template>

<script>
import axios from "axios";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import PopupModal from "../components/PopupModal.vue";
/* import { ref } from 'vue'; */

export default {
    name: 'RecommendationMoviesPage',
    components: {
        NavigationBar,
        FooterBar,
        PopupModal
    },
    data() {
        return {
            recommendationMovieList: [],
            imgPreURL: 'https://image.tmdb.org/t/p/w500',
            //For popups
            popupTitle: "",
            popupPoster: "",
            popupGenreIDs: "",
            popupReleaseDate: "",
            popupAvarage: "",
            popupOverview: "",
            popupActive: false,
        }
    },

    created() {
        this.recommendationMovieList = axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8ec942643846f64d66eed102868455f3&language=en-US&page=1&region=US")
            .then((info) => {
                this.recommendationMovieList = info.data.results;
            })
            .then(() => {
                this.recommendationMovieList = JSON.parse(JSON.stringify(this.recommendationMovieList))
                this.forceRerender();
            });
    },

    methods: {
        forceRerender() {
            this.carouselKey += 1;
        },
        togglePopup(posterPath, originalTitle, genreids, releaseDate, voteAverage, overview) {
            this.popupPoster = posterPath;
            this.popupTitle = originalTitle;
            this.popupGenreIDs = genreids;
            this.popupReleaseDate = releaseDate;
            this.popupAvarage = voteAverage;
            this.popupOverview = overview;
            this.popupActive = true;
        },
        closePopup() {
            this.popupActive = false;
        }
    },
    /* setup() {
        const popupActive = ref(false);
        const togglePopup = () => {
            // sessionStorage.setItem("movieArray", this.recommendationMovieList);
            popupActive.value = !popupActive.value;
        }
        return { popupActive, togglePopup };
    }, */

    // mounted() {
    //     this.movieArray = sessionStorage.getItem("movieArray");
    // }
};
</script>
