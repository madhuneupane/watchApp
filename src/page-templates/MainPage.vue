<template>
  <router-view />
  <NavigationBar />
  <UpcomingMovies />
  <RecommendationMovies />
  <h2>Interested in Challenges?</h2>
  <!-- Call challenges from db -->
  <FooterBar />
</template>
  
<script>
import UpcomingMovies from '../components/UpcomingMovies';
import RecommendationMovies from '../components/RecommendationMovies.vue';
import NavigationBar from '../components/NavigationBar.vue';
import FooterBar from "../components/FooterBar.vue";

export default {
  name: "MainPage",

  components: {
    UpcomingMovies,
    RecommendationMovies,
    NavigationBar,
    FooterBar
  }
}
</script>
