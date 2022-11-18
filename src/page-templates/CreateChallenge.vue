<template>
  <NavigationBar />
  <div class="sectionContainer">
    <div v-if="this.fSectionOn" class="createChallenge_fSection">
      <h1>Let's get started!</h1>
      <h3>How many and what kind of movies<br />do you want to watch?</h3>

      <div class="movieSelection movieQuantity">
        <label for="quantity">Movies</label>
        <div class="movieQuantitySelection">
          <img class="icon" id="minusSign" src="../assets/icons/minus-sign.svg" @click.prevent="decrease" />
          <input v-model="quantity" type="number" id="quantity" name="quantity" min="3" />
          <img class="icon" id="plusSign" src="../assets/icons/plus-sign.svg" @click.prevent="increase" />
        </div>
      </div>

      <div class="movieSelection">
        <label for="genreDropdown">Genre</label>
        <select v-model="genreDropdown" name="genre" id="genreDropdown">
          <option value="" selected disabled>Select</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="27">Horror</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Science Fiction</option>
          <option value="53">Thriller</option>
          <option value="10770">TV Movie</option>
          <option value="10752">War</option>
          <option value="37">Western</option>
        </select>
      </div>

      <div class="btnContainer">
        <NextButton @click.prevent="movieSelect" />
        <BackButton title="Back to Challenge" @click.prevent="chalMain" />
      </div>
    </div>

    <div v-if="this.sSectionOn" class="createChallenge_sSection">
      <h2>Time for selection!</h2>

      <h3>Please select {{ quantity }} movies that suit your challenge</h3>

      <section id="recommendPageSec">
        <div class="movieList">
          <div id="movieSelected" class="movieItem" v-for="(movie, index) in chooseMovie" :key="index" :index="index"
            @click="selectMovie">
            <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              alt="{{ movie.original_title }} + ' Movie Poster'" />
            <!-- <span>{{ movie.original_title }}</span> -->
          </div>
        </div>
      </section>

      <a href="#">Load More</a>

      <div class="btnContainer">
        <NextButton @click.prevent="
  movieDesc();
setSelectedMoviesArray();
        " />
        <BackButton @click.prevent="backMovieSelect" title="Back" />
        <!-- <PopupModal @close="togglePopup" :popupActive="popupActive">
          <div class="popupContent">
            <h1 class="popUpHeading">Uh oh...</h1>
            <h3 class="popUpText">It seems you have selected over {{ quantity }} movies.<br>Please check the movies
              you've selected.</h3>
          </div>
        </PopupModal> -->
      </div>
    </div>

    <div v-if="this.tSectionOn" class="createChallenge_tSection">
      <h2>We are almost there!</h2>
      <h3>Please input information of the challenge</h3>

      <hr />
      <div class="selectedMoviesContainer">
        <p class="moviesSelectedText">Movies Selected</p>
        <ul class="selectedMoviesList">
          <li class="selectedMovieTitle" v-for="movie in selectedMovies" :key="movie">
            <!-- {{ selectedMovies[movie].original_title }} -->
            {{ movie.original_title }}
            <!-- Include the call from the db -->
          </li>
        </ul>
      </div>
      <hr />

      <form class="challengeInfoForm">
        <div class="form_challangeName">
          <label for="chalName">Challenge Name<span class="req">*</span></label>
          <input v-model="chalName" type="text" class="inputArea" id="chalName" />
          <p class="error">{{ errorMessage }}</p>
        </div>
        <div class="dateContainer">
          <div class="form_startDate">
            <label for="startDate">Start Date<span class="req">*</span></label>
            <input v-model="startDate" type="date" name="start" id="startDate" />
            <p class="error">{{ startError }}</p>
          </div>
          <div class="form_endDate">
            <label for="endDate">End Date<span class="req">*</span></label>
            <input v-model="endDate" type="date" name="end" id="endDate" />
            <p class="error">{{ endError }}</p>
          </div>
        </div>
      </form>
      <div class="challengeCoverContainer">
        <h3>Challenge Cover Image</h3>
        <p id="small">
          This will be cover of the challenge. You can select from the default
          image or you can upload the one you want!
        </p>

        <div class="imageSelectionContainer">
          <label class="picture">
            <input type="file" accept="image/*" class="chalImageInput" />
            <!-- @change.prevent="test" -->
            <span class="chalImage"> Choose an image </span>
          </label>
        </div>

        <div class="addDescriptionContainer">
          <img src="../assets/icons/plus-button-challenge.svg" @click.prevent="addDescription" />
          <label>Add a Challenge Description</label>
          <textarea v-model="description" v-if="descriptionArea" name="chalDescription" id="description" cols="30"
            rows="6"></textarea>
        </div>
      </div>

      <div class="btnContainer">
        <SaveButton @click.prevent="addChallenge" />
        <BackButton @click.prevent="backSelection" title="Back" />
      </div>
      <SimplePopup @close="togglePopup" :popupActive="popupActive">
        <div class="popupContent">
          <h1 class="popUpHeading">Saved!</h1>
          <h3 class="popUpText">Hooray! Challenge created!<br>Watch movies to earn special badges!</h3>
          <button @click="redirect" type="button" class="secondaryBtn">Go to Challenges</button>
        </div>
      </SimplePopup>
    </div>
  </div>
  <FooterBar />
</template>


<script>
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import axios from "axios";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import NextButton from "../components/NextButton.vue";
import BackButton from "../components/BackButton.vue";
import SaveButton from "../components/SaveButton.vue";
import SimplePopup from '../components/SimplePopup.vue';
import { ref } from 'vue';


export default {
  name: "CreateChallenge",
  components: {
    NavigationBar,
    FooterBar,
    NextButton,
    BackButton,
    SaveButton,
    SimplePopup
  },
  data() {
    return {
      fSectionOn: true,
      sSectionOn: false,
      tSectionOn: false,
      descriptionArea: false,
      quantity: 3,
      selectedMoviesQuantity: 0,
      chalName: "",
      startDate: "",
      endDate: "",
      errorMessage: "",
      startError: "",
      endError: "",
      chooseMovie: [],
      a: "selected-movie.svg",
      imgPreURL: "https://image.tmdb.org/t/p/w500",
      genreOfChoice: 0,
      description: "",
      uid: "",
      selectedMovies: [],
    };
  },
  /* created() {
    this.chooseMovie = axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=8ec942643846f64d66eed102868455f3&with_genres="+this.genreOfChoice+"&language=en-US&page=1&region=CA"
      )
      .then((info) => {
        this.chooseMovie = info.data.results;
      })
      .then(() => {
        this.chooseMovie = JSON.parse(JSON.stringify(this.chooseMovie));
        this.forceRerender();
      });
  }, */
  methods: {
    movieSelect() {
      this.fSectionOn = false;
      this.sSectionOn = true;
      this.tSectionOn = false;
      this.quantity = document.getElementById('quantity').value;
      this.genreOfChoice = document.getElementById('genreDropdown').value;

      this.chooseMovie = axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=8ec942643846f64d66eed102868455f3&with_genres="+this.genreOfChoice+"&language=en-US&page=1&region=CA"
      )
      .then((info) => {
        this.chooseMovie = info.data.results;
      })
      .then(() => {
        this.chooseMovie = JSON.parse(JSON.stringify(this.chooseMovie));
        this.forceRerender();
      });
    },
    decrease() {
      if (this.quantity == 3) {
        alert("The minimum quantity of movies is 3.");
      } else {
        this.quantity -= 1;
      }
    },
    increase() {
      this.quantity += 1;
    },
    chalMain() {
      this.$router.push("/challenge-main");
    },
    movieDesc() {
      this.fSectionOn = false;
      this.sSectionOn = false;
      this.tSectionOn = true;
    },
    backMovieSelect() {
      this.fSectionOn = true;
      this.sSectionOn = false;
      this.tSectionOn = false;
      this.selectedMoviesQuantity = 0;
    },
    forceRerender() {
      this.carouselKey += 1;
    },
    selectMovie() {
      if(this.selectedMoviesQuantity < this.quantity && !event.currentTarget.classList.contains("selected")) {
        event.currentTarget.classList.toggle("selected");
        this.selectedMoviesQuantity++;
      } 
      else if(event.currentTarget.classList.contains("selected")) {
        event.currentTarget.classList.toggle("selected");
        this.selectedMoviesQuantity--;
      }
    },

    setSelectedMoviesArray() {
      let selected = document.querySelectorAll(".selected");

      for (let i = 0; i < selected.length; i++) {
        this.selectedMovies.push(
          this.chooseMovie[selected[i].attributes.index.nodeValue]
        );
      }
    },
    backSelection() {
      this.fSectionOn = false;
      this.sSectionOn = true;
      this.tSectionOn = false;
      this.selectedMovies = [];
    },
    addDescription() {
      if (this.descriptionArea == false) {
        this.descriptionArea = true;
      } else {
        this.descriptionArea = false;
      }
    },
    async addChallenge() {
      let lname = sessionStorage.getItem("fname");
      console.log(lname);
      this.errorMessage = "";
      this.startError = "";
      this.endError = "";

      if (this.chalName == "") {
        this.errorMessage = "Please input the challenge name";
        return false;
      }
      if (this.startDate == "") {
        this.startError = "Please input the start date";
        return false;
      }
      if (this.endDate == "") {
        this.endError = "Please input the end date";
        return false;
      }
      this.togglePopup();
      try {
        const uid = sessionStorage.getItem("uid");
        const docRef = addDoc(collection(db, "challenge"), {
          quantity: this.quantity,
          genreDropdown: this.genreDropdown,
          chalName: this.chalName,
          startDate: this.startDate,
          endDate: this.endDate,
          description: this.description,
          uid: uid,
          selectedMovies: this.selectedMovies,
          adminChallenge: false,
        });
        // this.$router.push("/challenge-main");
        console.log(docRef);
      } catch (e) {
        console.log(e);
      }
    },
    redirect() {
      this.$router.push("/ongoing-challenges");
    },
  },
  setup() {
    const popupActive = ref(false);
    const togglePopup = () => {
      popupActive.value = !popupActive.value;
    }
    return { popupActive, togglePopup };
  }
};
</script>

<!-- <style>
.chalImageInput {
  display: none;
}

.picture {
  width: 400px;
  aspect-ratio: 16/9;
  background-color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  border: 2px dashed currentColor;
  cursor: pointer;
}

.picture:hover {
  background: #ccc;
}

.chalPicture {
  max-width: 100%;
}

select {
  border-radius: 0.75rem;
  padding: 10px;
  background: #00002a;
  border: 3px solid white;
  margin: 10px;
  color: white;
  font-family: sans-serif;
  font-size: inherit;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#quantity {
  border: none;
  width: 70px;
  text-align: center;
  margin: 10px;
}

#minusSign,
#plusSign {
  width: 30px;
}

div {
  text-align: center;
}

::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

#chalName {
  width: 100%;
}
</style> -->