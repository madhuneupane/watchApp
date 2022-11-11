<template>
  <NavigationBar />
  <section class="pastChalOverview">
    <h1>Past Challenges</h1>
    <h2>You've achieved this much!</h2>
    <BackButton title="Back to Challenges" @click.prevent="goToHome" />
  </section>

  <!-- Review this. Not matching with the mockup -->

  <section class="pastChalDetail">
    <h1>{{ challengeName }}</h1>
    <div class="mainContent">
      <h2>{{ challengeDuration }}</h2>
      <h3>Completed: {{ challengeEnd }}</h3>
      <img v-bind:src="imageSource" style="width: 100%; height: 35rem" />
      <p style="margin-top: 1rem">{{ movieDetails }}</p>
      <hr style="
        height: 3px;
        border-width: 0;
        color: gray;
        background-color: white;
        margin-top: 1rem;
        margin-bottom: 1rem;
      " />
      <div class="movieList">
        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage" />
          <h2>
            Finished On <br />
            2022.09.05
          </h2>
          <h3>Movie</h3>
        </div>

        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage" />
          <h2>
            Finished On <br />
            2022.09.05
          </h2>
          <h3>Movie</h3>
        </div>

        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage" />
          <h2>
            Finished On <br />
            2022.09.05
          </h2>
          <h3>Movie</h3>
        </div>

        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage" />
          <h2>
            Finished On <br />
            2022.09.05
          </h2>
          <h3>Movie</h3>
        </div>
      </div>
      <BackButton title="Back to List" />
    </div>
  </section>
  <FooterBar />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "PastChallenge",
  components: {
    NavigationBar,
    FooterBar,
    BackButton
  },
  data() {
    return {
      challengeName: "Back to School",
      challengeDuration: "2022.09.01 - 2022.09.15",
      challengeEnd: "2022.09.12",
      imageSource:
        "https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
      movieDetails:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, provident. Doloremque vel reiciendis eaque veritatis officia tempore, rerum optio tenetur laborum sunt quae. Explicabo eos accusamus libero itaque recusandae corrupti maxime repellendus, eveniet veniam facere, beatae quos excepturi voluptatum maiores perspiciatis, error placeat earum laborum inventore est iste aperiam. Saepe.",
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/challenge-main");
    }
  }
};
</script>
<style>
.mainContent {
  margin: 15px;
}

.movieList {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 1.125rem;
  margin-bottom: 3.75rem;

  @media only screen and (min-width: $media-desktop) {
    padding: 0 2.5rem;
  }
}

.movieList .movieItem {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 1.125rem;
  cursor: pointer;

  text-align: center;
  color: black;
}

.movieList .movieItem img {
  align-items: center;
  width: 25rem;
  height: 25rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border-radius: 0.625rem;
  opacity: 0.8;
}

.movieList .movieItem h3 {
  left: 50%;
}

.movieList .movieItem h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  color: black;
  transform: translate(-50%, -50%);
}
</style>
