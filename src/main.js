import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import router from "./routes";
import './registerServiceWorker';
import vue3StarRatings from "vue3-star-ratings";

// import mitt from 'mitt';
// const emitter = mitt();

const app = createApp(App);

// app.config.globalProperties.emitter = emitter;
app.use(router).mount("#app");
app.component("vue3-star-ratings", vue3StarRatings);