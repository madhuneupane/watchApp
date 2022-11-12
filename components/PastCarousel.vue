<template>
    <section id="recommendationSec">
        <div class="carouselContainer" v-if="carouselKey">
            <div class="headContainer">
                <h2>You've achieved this much!</h2>
                <a class="seeMoreBtn" @click.prevent="gotoPastPage">See All</a>
            </div>
            <vueper-slides :arrows="false" :infinite="false" :bullets="false" :visible-slides="2" :slide-multiple="2"
                :gap="2" :slide-ratio="1 / 7" :dragging-distance="300" :breakpoints="breakpoints">
                <vueper-slide v-for="movie in recommendationMovieList" :key="movie"
                    :image="'https://image.tmdb.org/t/p/w500' + movie.poster_path" />
            </vueper-slides>
        </div>
    </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import axios from "axios";

export default {
    name: "PastCarousel",
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
        gotoPastPage() {
            this.$router.push("/past-challenges");
        },
    }
}

</script>