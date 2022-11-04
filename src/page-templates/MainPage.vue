<template>
    <router-view />
    <NavigationBar />
    <UpcomingMovies />
    <RecommendationMovies />
  </template>
  
  <script>
  import UpcomingMovies from '../components/UpcomingMovies';
  import RecommendationMovies from '../components/RecommendationMovies.vue';
  import NavigationBar from '../components/NavigationBar.vue'; 
  
  export default {
    name: "MainPage",
  
    components: {
      UpcomingMovies,
      RecommendationMovies,
      NavigationBar
    }
  }
  </script>
  