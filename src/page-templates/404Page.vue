<template>
  <NavigationBar />
  <div class="404">
    <h1>Oops!</h1>
    <h2>We can't seem to find the page you are looking for.</h2>
    <p>Don't worry! You can try these useful links instead:</p>
    <button type="submit" class="secondaryBtn" @click.prevent="home">
      Home
    </button>
    <button type="submit" class="primaryBtn" @click.prevent="goBack">
      Go Back
    </button>
  </div>
  <FooterBar />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
  name: "ErrorPage",
  components: {
    NavigationBar,
    FooterBar
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    goBack() {
      this.$router.push("/");
      // Necessary to check how to go back to the page that generated the error.
    }
  }
}
</script>