<template>
    <NavigationBar />
    <section id="recommendPageSec">
        <h2>You will like this!</h2>
        <div class="movieList">
            <div class="movieItem" :key="movie" v-for="movie in recommendationMovieList">
                <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                    alt="{{ movie.original_title }} + ' Movie Poster'">
            </div>
        </div>
    </section>
    <FooterBar />
</template>

<script>
import axios from "axios";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
    name: 'RecommendationMoviesPage',
    components: {
        NavigationBar,
        FooterBar
    },
    data() {
        return {
            recommendationMovieList: [],
            imgPreURL: 'https://image.tmdb.org/t/p/w500',
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
        }
    }
};
</script>
