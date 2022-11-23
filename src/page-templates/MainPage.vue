<template>
  <NavigationBar />
  <ChallangesCarousel />
  <h1 v-if="nickName" class="mainPageUserNickName">Hello, {{ nickName }}</h1>
  <UpcomingMovies />
  <RecommendationMovies />
  <AdminCarousel />
  <FooterBar />
</template>
  
<script>
import ChallangesCarousel from "../components/ChallangesCarousel";
import UpcomingMovies from "../components/UpcomingMovies";
import RecommendationMovies from "../components/RecommendationMovies.vue";
import AdminCarousel from "../components/AdminCarousel.vue";
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import { db } from "@/firebase";
import { query, collection, getDocs } from "firebase/firestore";
export default {
  name: "MainPage",

  components: {
    ChallangesCarousel,
    UpcomingMovies,
    RecommendationMovies,
    AdminCarousel,
    NavigationBar,
    FooterBar,
  },
  data() {
    return {
      nickName: "",
      genreConverter: [],
    };
  },

  async mounted() {
    const querySnap = await getDocs(query(collection(db, "user")));
    querySnap.forEach((doc) => {
      this.uid = sessionStorage.getItem("uid");
      const userId = doc.data().uid;
      if (userId == this.uid) {
        this.nickName = doc.data().nickname;
      }
    });
  },
};
</script>
