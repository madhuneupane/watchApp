<template>
  <NavigationBar />
  <div v-if="!isOnLine">
    <OfflinePage />
  </div>
  <div v-else>
    <ChallangesCarousel />
    <h1 v-if="nickName" class="mainPageUserNickName">Hello, {{ nickName }}</h1>
    <UpcomingMovies />
    <RecommendationMovies />
    <AdminCarousel />
  </div>
  <FooterBar />
</template>
  
<script>
import ChallangesCarousel from "../components/ChallangesCarousel";
import UpcomingMovies from "../components/UpcomingMovies";
import RecommendationMovies from "../components/RecommendationMovies.vue";
import AdminCarousel from "../components/AdminCarousel.vue";
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import OfflinePage from "../page-templates/OfflinePage.vue";
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
    OfflinePage,
  },
  data() {
    return {
      nickName: "",
      genreConverter: [],
      isOnLine: true,
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

    window.addEventListener('online', () => { this.isOnLine = true });
    window.addEventListener('offline', () => { this.isOnLine = false });
  },
};
</script>
