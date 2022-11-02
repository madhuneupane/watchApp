import { createRouter, createWebHistory } from "vue-router";
import createAccount from "./components/createAccount.vue";
import loginPage from "./components/login.vue";
import NavBarTest from "./components/NavBarTest.vue";

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
    name: "NavBarTest",
    path: "/navbar",

    component: NavBarTest,
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
