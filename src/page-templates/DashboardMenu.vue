<template>




    <!-- <div v-if="FirstSection" class="fSect"> -->
      <h1>Howdy, nickname!</h1>
      <h2>nickname</h2>
 
  
            
    <a @click="first">Favorite Genre</a>   
  

  <a @click="second">Watched Movies</a>

    <a @click="third">Badges</a>

  <a @click="fourth">Profile</a>

  <div v-if="firstPart" >
      <h1>Edit Your preferences</h1>
      <p>Select at least one genre</p>
      <div class="favoriteGenreSelection">
        <div>
          <input name="action" type="checkbox" value="28" />
          <label for="action">Action</label>
        </div>
        <div>
          <input name="adventure" type="checkbox" value="12" />
          <label for="adventure">Adventure</label>
        </div>
        <div>
          <input name="animation" type="checkbox" value="16" />
          <label for="animation">Animation</label>
        </div>
        <div>
          <input name="comedy" type="checkbox" value="35" />
          <label for="comedy">Comedy</label>
        </div>
        <div>
          <input name="crime" type="checkbox" value="80" />
          <label for="crime">Crime</label>
        </div>
        <div>
          <input name="documentary" type="checkbox" value="99" />
          <label for="documentary">Documentary</label>
        </div>
        <div>
          <input name="drama" type="checkbox" value="18" />
          <label for="drama">Drama</label>
        </div>
        <div>
          <input name="family" type="checkbox" value="10751" />
          <label for="family">Family</label>
        </div>
        <div>
          <input name="fantasy" type="checkbox" value="14" />
          <label for="fantasy">Fantasy</label>
        </div>
        <div>
          <input name="history" type="checkbox" value="36" />
          <label for="history">History</label>
        </div>
        <div>
          <input name="horror" type="checkbox" value="27" />
          <label for="horror">Horror</label>
        </div>
        <div>
          <input name="music" type="checkbox" value="10402" />
          <label for="music">Music</label>
        </div>
        <div>
          <input name="mystery" type="checkbox" value="9648" />
          <label for="mystery">Mystery</label>
        </div>
        <div>
          <input name="romance" type="checkbox" value="10749" />
          <label for="romance">Romance</label>
        </div>
        <div>
          <input name="sceincefiction" type="checkbox" value="878" />
          <label for="sceincefiction">Science Fiction</label>
        </div>
        <div>
          <input name="tvmovie" type="checkbox" value="10770" />
          <label for="tvmovie">TV Movie</label>
        </div>
        <div>
          <input name="thriller" type="checkbox" value="53" />
          <label for="thriller">Thriller</label>
        </div>
        <div>
          <input name="war" type="checkbox" value="1752" />
          <label for="war">War</label>
        </div>
        <div>
          <input name="western" type="checkbox" value="37" />
          <label for="western">Western</label>
        </div>
      </div>
      
      
      <button type="cancel" class="secondaryBtn" @click="fourth">
			Cancel
		</button>
    <button type="save" class="primaryBtn" @click="fourth">
			Save
		</button>
  </div>

  <div v-if="secondPart">
        <h1>Movies you've watched</h1>
      <p>Here are the list of movies you've seen from the challenges</p>
      <a href="#">See All</a>

    </div>

    <div v-if="thirdPart">
      <h1>Here are your badges!</h1>
      <h2>Total of movie you've watched so far:</h2>
      <h1>108</h1>
      <p>You have 22 movies left to unlock the next badge</p>
      <div class="btnContainer">
      <button type="save" class="primaryBtn" @click="badgesPopup">
			Badges
		</button>
    <button type="save" class="primaryBtn" @click="sharedBadgesPopup">
			Shared Badges
		</button>
    <badgesPopup @close="badgesPopupToggle" :popupActive="badgeActive">
        <div class="badgesContent">
          <h1 class="badgesHeading">PopCorn</h1>
          <img src="#" alt="#">
          <h3 class="badgesText">20th movie milestone</h3>
          <button @click="redirect" type="button" class="secondaryBtn">Share Badge</button>
        </div>
      </badgesPopup>
      <sharedBadgesPopup @close="sharedPopup" :popupActive="sharedActive">
        <div class="sharedBadgesContent">
          <h1 class="sharedHeading">Unlock at 130th movie</h1>
          <img src="#" alt="#">
          <h3 class="badgesText">Watched more movies to unlock this badge</h3>
          <button @click="redirect" type="button" class="secondaryBtn">Watch more movies</button>
        </div>
      </sharedBadgesPopup>
  </div>

  </div>

  <div v-if="fourthPart" class="accountProfile">
    <h1>
				Your Account
			</h1>
			<section style="list-style-type:none;">
				<span>Name:</span>
        <span>John Doe</span>
        <br>
        <span>Nickname:</span>
        <span>John</span>
        <br>
        <span>Email:</span>
        <span>email@example.com</span>
      </section>  
			<button type="submit" class="primaryBtn" @click.prevent="resetPassword">
			Change Password
		</button>
  </div>

  
<!-- </div> -->
</template>

<script>
import { ref } from 'vue';
import BadgesPopup from '../components/BadgesPopup.vue';
import SharedBadgesPopup from '../components/SharedBadgesPopup.vue';
export default {
  setup() {
    const badgeActive = ref(false);
    const badgesPopupToggle = () => {
      badgeActive.value = !badgeActive.value;
    };
    const sharedActive = ref(false);
    const sharedPopup = () => {
      sharedActive.value = !sharedActive.value;
    };
    return { badgeActive, badgesPopupToggle, sharedActive, sharedPopup }
  },
  name: "DashboardMenu",
  components: {
    BadgesPopup,
    SharedBadgesPopup
  },
 
  data() {
    return {
      firstPart: false,
      secondPart: false,
      thirdPart: false,
      fourthPart: false,
    };
  },

  methods: {
    backToHome() {
      this.$router.push("/login");
    },
    first() {
      this.firstPart = true;
      this.secondPart = false;
      this.thirdPart = false;
      this.fourthPart = false;
    },
    second(){
      this.firstPart = false;
      this.secondPart = true;
      this.thirdPart = false;
      this.fourthPart = false;
    },
    third(){
      this.firstPart = false;
      this.secondPart = false;
      this.thirdPart = true;
      this.fourthPart = false;
    },
    fourth(){
      this.firstPart = false;
      this.secondPart = false;
      this.thirdPart = false;
      this.fourthPart = true;        
      },
      resetPassword(){
        this.$router.push("/reset-password");
      },
      async badgesPopup(){
        this.badgesPopupToggle();
      },
      async sharedBadgesPopup(){
        this.sharedPopup();
      }
      
  }
}

</script>

<style>

</style>