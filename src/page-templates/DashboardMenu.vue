<template>




    <!-- <div v-if="FirstSection" class="fSect"> -->
      <h1>Howdy, nickname!</h1>
      <h2>nickname</h2>
 
  
            
    <a @click="First">Favorite Genre</a>   
  

  <a @click="Second">Watched Movies</a>

    <a @click="Third">Badges</a>

  <a @click="Fourth">Profile</a>

  <div v-if="FirstPart" >
      <h1>Edit Your preferences</h1>
      <p>Select at least one genre</p>
      <div class="genreSelectionContainer">
        <div>
          <input name="genre" type="checkbox" value="28" />
          <label for="genre">Action</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="12" />
          <label for="genre">Adventure</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="16" />
          <label for="genre">Animation</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="35" />
          <label for="genre">Comedy</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="80" />
          <label for="genre">Crime</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="99" />
          <label for="genre">Documentary</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="18" />
          <label for="genre">Drama</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="10751" />
          <label for="genre">Family</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="14" />
          <label for="genre">Fantasy</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="36" />
          <label for="genre">History</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="27" />
          <label for="genre">Horror</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="10402" />
          <label for="genre">Music</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="9648" />
          <label for="genre">Mystery</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="10749" />
          <label for="genre">Romance</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="878" />
          <label for="genre">Science Fiction</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="10770" />
          <label for="genre">TV Movie</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="53" />
          <label for="genre">Thriller</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="1752" />
          <label for="genre">War</label>
        </div>
        <div>
          <input name="genre" type="checkbox" value="37" />
          <label for="genre">Western</label>
        </div>
      </div>
      
      
      <button type="cancel" class="secondaryBtn" @click="Fourth">
			Cancel
		</button>
    <button type="save" class="primaryBtn" @click="Fourth">
			Save
		</button>
  </div>

  <div v-if="SecondPart">
        <h1>Movies you've watched</h1>
      <p>Here are the list of movies you've seen from the challenges</p>
      <a href="">See All</a>

    </div>

    <div v-if="ThirdPart">
      <h1>Here are your badges!</h1>
      <h2>Total of movie you've watched so far:</h2>
      <h1>108</h1>
      <p>You have 22 movies left to unlock the next badge</p>
      <div class="btnContainer">
      <button type="save" class="primaryBtn" @click="BadgesPopup">
			Badges
		</button>
    <button type="save" class="primaryBtn" @click="SharedBadgesPopup">
			Shared Badges
		</button>
    <BadgesPopup @close="FirstTogglePopup" :popupActive="FirstpopupActive">
        <div class="popupContent">
          <h1 class="popUpHeading">PopCorn</h1>
          <img src="#" alt="#">
          <h3 class="popUpText">20th movie milestone</h3>
          <button @click="redirect" type="button" class="secondaryBtn">Share Badge</button>
        </div>
      </BadgesPopup>
      <SharedBadgesPopup @close="SecondTogglePopup" :popupActive="SecondpopupActive">
        <div class="popupSecondContent">
          <h1 class="popUpHeading">Unlock at 130th movie</h1>
          <img src="#" alt="#">
          <h3 class="popUpText">Watched more movies to unlock this badge</h3>
          <button @click="redirect" type="button" class="secondaryBtn">Watch more movies</button>
        </div>
      </SharedBadgesPopup>
  </div>

  </div>

  <div v-if="FourthPart" class="accountProfile">
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
import BadgesPopup from './BadgesPopup.vue';
import SharedBadgesPopup from './SharedBadgesPopup.vue';
export default {
  setup() {
    const FirstpopupActive = ref(false);
    const FirstTogglePopup = () => {
      FirstpopupActive.value = !FirstpopupActive.value;
    };
    const SecondpopupActive = ref(false);
    const SecondTogglePopup = () => {
      SecondpopupActive.value = !SecondpopupActive.value;
    };
    return { FirstpopupActive, FirstTogglePopup, SecondpopupActive, SecondTogglePopup }
  },
  name: "DashboardMenu",
  components: {
    BadgesPopup,
    SharedBadgesPopup
  },
 
  data() {
    return {
      FirstPart: false,
      SecondPart: false,
      ThirdPart: false,
      FourthPart: false,
    };
  },

  methods: {
    backToHome() {
      this.$router.push("/login");
    },
    First() {
      this.FirstPart = true;
      this.SecondPart = false;
      this.ThirdPart = false;
      this.FourthPart = false;
    },
    Second(){
      this.FirstPart = false;
      this.SecondPart = true;
      this.ThirdPart = false;
      this.FourthPart = false;
    },
    Third(){
      this.FirstPart = false;
      this.SecondPart = false;
      this.ThirdPart = true;
      this.FourthPart = false;
    },
    Fourth(){
      this.FirstPart = false;
      this.SecondPart = false;
      this.ThirdPart = false;
      this.FourthPart = true;        
      },
      resetPassword(){
        this.$router.push("/reset-password");
      },
      async BadgesPopup(){
        this.FirstTogglePopup();
      },
      async SharedBadgesPopup(){
        this.SecondTogglePopup();
      }
      
  }
}

</script>

<style>

</style>