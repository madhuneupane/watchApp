<template>
    <section id="challangeCarousel">
        <div v-if="carouselKey">
            <vueper-slides fade :touchable="false">
                <vueper-slide
                    v-for="(slide, i) in slides"
                    :key="i"
                    :image="slide.image"
                    :title="slide.title"
                    :content="slide.content" />
            </vueper-slides>
        </div>
    </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import axios from "axios";

export default {
    name: 'ChallangesCarousel',
    components: {
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            recommendationMovieList: [],
            /* breakpoints: {
                1024: { visibleSlides: 1, slideMultiple: 2, slideRatio: 1 / 3 }
            }, */
            carouselKey: false,
            slides: [
                {
                    title: 'Christmas Challenge 1',
                    content: 'Christmas is coming!',
                    image: require('@/assets/challangePic.png')
                },
                {
                    title: 'Christmas Challenge 2',
                    content: 'Christmas is coming!',
                    image: require('@/assets/challangePic.png')
                },
                {
                    title: 'Christmas Challenge 3',
                    content: 'Christmas is coming!',
                    image: require('@/assets/challangePic.png')
                },
            ]
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
        gotoRecommendationsPage() {
            this.$router.push("/recommendations-page");
        },
    }
};
</script>
