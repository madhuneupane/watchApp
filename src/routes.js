import { createRouter, createWebHistory } from "vue-router";
import createAccount from "./components/CreateAccount.vue";
import loginPage from "./components/Login.vue";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

const routes = [
  {
    name: "createAccount",
    path: "/createAccount",
    component: createAccount,
  },
  {
    name: "login",
    path: "/",
    component: loginPage,
  },
  {
    name: "navigation",
    component: Navigation,
  },
  {
    name: "footer",
    component: Footer,
  },
  // {
  //   name: "login",
  //   path: "/",
  //   redirect: "/login",
  //   component: loginPage,
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
