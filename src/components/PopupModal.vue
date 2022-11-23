<template>
  <transition name="popupAnimation">
    <div v-if="popupActive" class="popup">
      <transition name="popupAnimationInner">
        <div class="popupInner">
          <img src="../assets/icons/close.svg" alt="close" id="closePopup"
            @click="(click) => this.$emit('closeClicked', click)" />
          <div class="popupContent">
            <img class="movieImg" :src="'https://image.tmdb.org/t/p/w500' + popupPoster"
              alt="{{ popupTitle }} + ' Movie Poster'" />
            <div class="infoArea">
              <h3>{{ popupTitle }}</h3>
              <p>{{ popupGenreIDs }}</p>
              <div class="dateRatingContainer">
                <p><strong>Release Date: </strong> {{ popupReleaseDate }}</p>
                <p><strong>TMDB Rating: </strong> {{ popupAvarage }}/10</p>
              </div>
              <br />
              <p><strong>Overview</strong></p>
              <p class="movieOverview">{{ popupOverview }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    popupTitle: String,
    popupPoster: String,
    popupGenreIDs: String,
    popupReleaseDate: String,
    popupAvarage: String,
    popupOverview: String,
    popupActive: Boolean,
  },
}
</script>

