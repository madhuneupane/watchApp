<template>
    <section id="recommendationSec">
        <div class="carouselContainer" v-if="carouselKey">
            <div class="headContainer">
                <h2>Keep Up! You are almost there!</h2>
                <a class="seeMoreBtn" @click.prevent="gotoOngoingPage">See All</a>
            </div>
            <vueper-slides :arrows="false" :infinite="false" :bullets="false" :visible-slides="4" :slide-multiple="2"
                :gap="2" :slide-ratio="1 / 3.5" :dragging-distance="300" :breakpoints="breakpoints">
                <vueper-slide v-for="movie in recommendationMovieList" :key="movie"
                    :image="'https://image.tmdb.org/t/p/w500' + movie.poster_path" />
                <div class="card-gradient">
                    <img src="../assets/icons/plus-button-challenge.svg" @click.prevent="createChallenge">
                    <h2>Create Your Own Challenge!</h2>
                </div>
            </vueper-slides>
        </div>
    </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import axios from "axios";

export default {
    name: "OngoingCarousel",
    components: {
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            recommendationMovieList: [],
            breakpoints: {
                1023: { visibleSlides: 4, slideMultiple: 2, slideRatio: 1 / 3 }
            },
            carouselKey: false,
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
        gotoOngoingPage() {
            this.$router.push("/ongoing-challenges");
        },
    }
}

</script>