import { createRouter, createWebHistory } from "vue-router";
import UpcomingMoviesPage from "./page-templates/UpcomingMoviesPage.vue";
import RecommendationMoviesPage from "./page-templates/RecommendationMoviesPage.vue";
import MainPage from "./page-templates/MainPage.vue";
import CreateAccount from "./components/CreateAccount.vue";
import LoginPage from "./components/LoginPage.vue";
import ChallengeMain from "./page-templates/ChallengeMain.vue";
import CreateChallenges from "./page-templates/CreateChallenges.vue";
import CMovieSelect from "./page-templates/CMovieSelect.vue";
import CChallengeDescription from "./page-templates/CChallengeDescription.vue";
// import TestTest from "./page-templates/TestTest.vue";


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
  // {
  //   name: "TestTest",
  //   path: "/",
  //   component: TestTest,
  // },
  {
    name: "CreateAccount",
    path: "/CreateAccount",
    component: CreateAccount,
  },
  {
    name: "LoginPage",
    path: "/LoginPage",
    component: LoginPage,
  },
  {
    name: "ChallengeMain",
    path: "/ChallengeMain",
    component: ChallengeMain,
  },
  {
    name: "CreateChallenges",
    path: "/CreateChallenges",
    component: CreateChallenges,
  },
  {
    name: "CMovieSelect",
    path: "/CMovieSelect",
    component: CMovieSelect,
  },
  {
    name: "CChallengeDescription",
    path: "/CChallengeDescription",
    component: CChallengeDescription,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
