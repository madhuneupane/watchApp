import { createRouter, createWebHistory } from "vue-router";
import UpcomingMoviesPage from "./page-templates/UpcomingMoviesPage.vue";
import RecommendationMoviesPage from "./page-templates/RecommendationMoviesPage.vue";
import MainPage from "./page-templates/MainPage.vue";

const routes = [
  {
    name: "RecommendationMoviesPage",
    path: "/recommendations-page",
    component: RecommendationMoviesPage,
  },
  {
    name: "UpcomingMoviesPage",
    path: "/upcomings-page",
    component: UpcomingMoviesPage,
  },
  {
    name: "MainPage",
    path: "/",
    component: MainPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
