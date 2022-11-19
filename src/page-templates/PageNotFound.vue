<template>
  <NavigationBar />
  <div class="pageNotFound">
    <h1>Oops!</h1>
    <h2>We can't seem to find the page you are looking for.</h2>
    <p class="usefulLinks">Don't worry! You can try these useful links instead:</p>
    <div class="btnContainer">
      <button type="submit" class="secondaryBtn" @click.prevent="home">
        Home
      </button>
      <button type="submit" class="primaryBtn" @click.prevent="goChallenge">
        Challenges
      </button>
    </div>
  </div>
  <FooterBar />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
  name: "PageNotFound",
  components: {
    NavigationBar,
    FooterBar
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    goChallenge() {
      this.$router.push("/challenge-main");
      // Necessary to check how to go back to the page that generated the error.
    }
  }
}
</script>