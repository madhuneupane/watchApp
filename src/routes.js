import { createRouter, createWebHistory } from "vue-router";
import UpcomingMoviesPage from "./page-templates/UpcomingMoviesPage.vue";
import RecommendationMoviesPage from "./page-templates/RecommendationMoviesPage.vue";
import MainPage from "./page-templates/MainPage.vue";
import CreateAccount from "./page-templates/CreateAccount.vue";
import LoginPage from "./page-templates/LoginPage.vue";
import ResetPassword from "./page-templates/ResetPassword.vue";
import ForgotEmail from "./page-templates/ForgotEmail.vue";
import ChallengeMain from "./page-templates/ChallengeMain.vue";
import OngoingChallenges from "./page-templates/OngoingChallenges.vue";
import CreateChallenge from "./page-templates/CreateChallenge.vue";
import AboutUs from "./page-templates/AboutUs.vue";
import AdminChallenge from "./page-templates/AdminChallenge.vue";
import PageNotFound from "./page-templates/PageNotFound.vue";
import JoinSelection from "./page-templates/JoinSelection.vue";
import OfflinePage from "./page-templates/OfflinePage.vue";
import PastChallenge from "./page-templates/PastChallenge.vue";
import ContactUs from "./page-templates/ContactUs.vue";

// Test page just for testing things
import TestPage from "./TEST/TestPage.vue";

// Additional pages that will be consolidated into a single one.




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
  {
    name: "CreateAccount",
    path: "/create-account",
    component: CreateAccount,
  },
  {
    name: "LoginPage",
    path: "/login-page",
    component: LoginPage,
  },
  {
    name: "ResetPassword",
    path: "/reset-password",
    component: ResetPassword,
  },
  {
    name: "ForgotEmail",
    path: "/forgot-email",
    component: ForgotEmail,
  },
  {
    name: "ChallengeMain",
    path: "/challenge-main",
    component: ChallengeMain,
  },
  {
    name: "OngoingChallenges",
    path: "/ongoing-challenges",
    component: OngoingChallenges,
  },
  {
    name: "CreateChallenge",
    path: "/create-challenge",
    component: CreateChallenge,
  },
  {
    name: "AboutUs",
    path: "/about-us",
    component: AboutUs,
  },
  {
    name: "AdminChallenge",
    path: "/admin-challenge",
    component: AdminChallenge,
  },
  {
    name: "PageNotFound",
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },

  {
    name: "JoinSelection",
    path: "/join-selection",
    component: JoinSelection,
  },
  {
    name: "OfflinePage",
    path: "/offline-page",
    component: OfflinePage,
  },
  {
    name: "PastChallenge",
    path: "/past-challenge",
    component: PastChallenge,
  },
  {
    name: "ContactUs",
    path: "/contact-us",
    component: ContactUs,
  },

  // Test page just for testing things
  {
    name: "TestPage",
    path: "/test-page",
    component: TestPage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
