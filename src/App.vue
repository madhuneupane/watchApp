<template>
  <section id="upcomingSec">
    <div class="carouselContainer">
      <div class="headContainer">
        <h2>Upcoming Movies</h2>
        <a href="#" class="seeMoreBtn">See All</a>
      </div>

      <div class="moviesDisplay">
        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage">
          <span>Movie</span>
        </div>

        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage">
          <span>Movie</span>
        </div>

        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage">
          <span>Movie</span>
        </div>

        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage">
          <span>Movie</span>
        </div>
      </div>
    </div>
    
  </section>

  <section id="recommendation">
    <div class="carouselContainer">
      <div class="headContainer">
        <h2>You will like this!</h2>
        <a href="#" class="seeMoreBtn">See All</a>
      </div>

      <div class="moviesDisplay">
        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage">
          <span>Movie</span>
        </div>

        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage">
          <span>Movie</span>
        </div>

        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage">
          <span>Movie</span>
        </div>

        <div class="movieItem">
          <img src="https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg" alt="posterImage">
          <span>Movie</span>
        </div>
      </div>
    </div>
  </section>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  <div style="width: 100%; display: flex; justify-content: space-around;">
    <img class="icon" src="./assets/icons/burger-menu.svg">
    <img class="icon" src="./assets/icons/check-icon.svg">
    <img class="icon" src="./assets/icons/unchecked.svg">
    <img class="icon" src="./assets/icons/close.svg">
    <img class="icon" src="./assets/icons/profile.svg">
    <img class="icon" src="./assets/icons/edit.svg">
    <img class="icon" src="./assets/icons/edit--selected.svg">
    <img class="icon" src="./assets/icons/share.svg">
    <img class="icon" src="./assets/icons/dropdown.svg">
    <img class="icon" src="./assets/icons/star.svg">
    <img class="icon" src="./assets/icons/left-arrow.svg">
    <img class="icon" src="./assets/icons/right-arrow.svg">
    <img class="icon" src="./assets/icons/up-arrow.svg">
    <img class="icon" src="./assets/icons/down-arrow.svg">
  </div>
  <FooterWatchapp />
  <ButtonSample />
</template>

<script>
import FooterWatchapp from './components/footer.vue';
import ButtonSample from './samples/buttons/buttons.vue'

export default {
  components: {
    FooterWatchapp,
    ButtonSample,
  }
}

</script>
