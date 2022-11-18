<template>
    <section id="recommendationSec">
        <div class="carouselContainer" v-if="carouselKey">
            <div class="headContainer">
                <h2>You've achieved this much!</h2>
                <a class="seeMoreBtn" @click.prevent="gotoPastPage">See All</a>
            </div>
            <vueper-slides :arrows="true" :infinite="false" :bullets="true" :visible-slides="2" :slide-multiple="2"
                :gap="2" :slide-ratio="1 / 7" :dragging-distance="300" :breakpoints="breakpoints">
                <vueper-slide v-for="movie in slides" :key="movie" :image="movie.image" :title="movie.title" />
            </vueper-slides>
        </div>
    </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import axios from "axios";

import { db } from "@/firebase";
import { query, collection, getDocs } from "firebase/firestore";


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
            slides: [],

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
            this.$router.push("/past-challenge");
        },
    },
    async mounted() {
        const querySnap = await getDocs(query(collection(db, "challenge")));
        querySnap.forEach((doc) => {
            const uid = sessionStorage.getItem("uid");
            let flag = 0;
            const userId = doc.data().uid;
            if (userId == uid) {
                //  console.log(doc.data().selectedMovies.length);
                for (let i = 0; i < doc.data().selectedMovies.length; i++) {
                    if (doc.data().selectedMovies[i].review) {
                        flag = flag + 1;
                    }
                }
                console.log(flag);
                if (flag == doc.data().selectedMovies.length) {
                    let newChallenge = {
                        title: doc.data().chalName,
                        image: doc.data().image,
                        content: doc.data().description,
                    };
                    this.slides.push(newChallenge);
                }
            }
        });
    },
}

</script>