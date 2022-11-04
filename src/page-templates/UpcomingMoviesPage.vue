<template>
    <section id="upcomingPageSec">
        <h2>Upcoming Movies</h2>
        <div class="movieList">
            <div class="movieItem" :key="movie" v-for="movie in upcomingMovieList">
                <img :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" alt="{{ movie.original_title }} + ' Movie Poster'">
                <span>{{ movie.original_title }}</span>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: 'UpcomingMoviesPage',
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
    }
};
</script>
