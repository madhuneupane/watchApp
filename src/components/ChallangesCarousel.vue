<template>
  <section id="challangeCarousel">
    <div v-if="carouselKey">
      <vueper-slides fade :touchable="false" :arrows="true" :slide-ratio="1 / 4" :breakpoints="breakpoints">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title"
          :content="slide.content" @click.prevent="gotoChallengesPage" />
      </vueper-slides>
    </div>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import axios from "axios";
import { db } from "@/firebase";
import { query, collection, getDocs } from "firebase/firestore";
export default {
  name: "ChallangesCarousel",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      recommendationMovieList: [],
      breakpoints: {
        1024: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 3, arrows: false }
      },
      carouselKey: false,
      slides: [],
      // {
      //   title: "Christmas Challenge 1",
      //   content: "Christmas is coming!",
      //   image: require("@/assets/challangePic.png"),
      // },
      // {
      //   title: "Christmas Challenge 2",
      //   content: "Christmas is coming!",
      //   image: require("@/assets/challangePic.png"),
      // },
      // {
      //   title: "Christmas Challenge 3",
      //   content: "Christmas is coming!",
      //   image: require("@/assets/challangePic.png"),
      // },
      // ],
    };
  },
  async mounted() {
    const querySnap = await getDocs(query(collection(db, "challenge")));
    querySnap.forEach((doc) => {
      const challengeType = doc.data().adminChallenge;
      if (challengeType == true) {
        let newChallenge = {
          title: doc.data().chalName,
          image: doc.data().image,
          content: doc.data().description,
        };
        this.slides.push(newChallenge);
      }
    });
  },

  created() {
    this.recommendationMovieList = axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=8ec942643846f64d66eed102868455f3&language=en-US&page=1&region=US"
      )
      .then((info) => {
        this.recommendationMovieList = info.data.results;
      })
      .then(() => {
        this.recommendationMovieList = JSON.parse(
          JSON.stringify(this.recommendationMovieList)
        );
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
    gotoChallengesPage() {
      this.$router.push("/challenge-main");
    },
  },
};
</script>
