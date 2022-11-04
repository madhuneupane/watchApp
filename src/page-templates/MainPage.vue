<template>
    <router-view />
    <UpcomingMovies />
    <RecommendationMovies />
  </template>
  
  <script>
  import UpcomingMovies from '../components/UpcomingMovies';
  import RecommendationMovies from '../components/RecommendationMovies.vue'; 
  
  export default {
    name: "MainPage",
  
    components: {
      UpcomingMovies,
      RecommendationMovies,
    }
  }
  </script>
  