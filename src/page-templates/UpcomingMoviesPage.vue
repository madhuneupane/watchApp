<template>
    <NavigationBar />
    <section id="upcomingPageSec">
        <h2>Upcoming Movies</h2>
        <div class="movieList">
            <div class="movieItem" @click="togglePopup" :key="movie" v-for="movie in upcomingMovieList">
                <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                    alt="{{ movie.original_title }} + ' Movie Poster'">
            </div>
        </div>
    </section>
    <PopupModal @close="togglePopup" :popupActive="popupActive" :key="movie" v-for="movie in upcomingMovieList">
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
    </PopupModal>
    <FooterBar />
</template>

<script>
import axios from "axios";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import PopupModal from "../components/PopupModal.vue";
import { ref } from 'vue';

export default {
    name: 'UpcomingMoviesPage',
    components: {
        NavigationBar,
        FooterBar,
        PopupModal
    },
    data() {
        return {
            upcomingMovieList: [],
            imgPreURL: 'https://image.tmdb.org/t/p/w500',
        }
    },

    created() {
        this.upcomingMovieList = axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=8ec942643846f64d66eed102868455f3&language=en-US&region=US&page=1")
            .then((info) => {
                this.upcomingMovieList = info.data.results;
            })
            .then(() => {
                this.upcomingMovieList = JSON.parse(JSON.stringify(this.upcomingMovieList))
                this.forceRerender();
            });
    },

    methods: {
        forceRerender() {
            this.carouselKey += 1;
        }
    },

    setup() {
        const popupActive = ref(false);
        const togglePopup = () => {
            // sessionStorage.setItem("movieArray", this.recommendationMovieList);
            popupActive.value = !popupActive.value;
        }
        return { popupActive, togglePopup };
    },
};
</script>
