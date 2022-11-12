<template>
  <NavigationBar />
  <div v-if="this.fSectionOn">
    <h1>Let's get started!</h1>
    <h3>How many and what kind of movies<br />do you want to watch?</h3>

    <div class="movieSelection movieQuantity">
      <label for="quantity">Movies</label>
      <img
        class="icon"
        id="minusSign"
        src="../assets/icons/minus-sign.svg"
        @click.prevent="decrease"
      />
      <input
        v-model="quantity"
        type="number"
        id="quantity"
        name="quantity"
        min="3"
      />
      <img
        class="icon"
        id="plusSign"
        src="../assets/icons/plus-sign.svg"
        @click.prevent="increase"
      />
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

    <NextButton @click.prevent="movieSelect" />
    <BackButton title="Back to Challenge" @click.prevent="chalMain" />
  </div>

  <div v-if="this.sSectionOn">
    <h1>Time for selection!</h1>

    <h3>Please select {{ quantity }} movies that suit your challenge</h3>

    <section id="recommendPageSec">
      <div class="movieList">
        <div
          id="movieSelected"
          @click.prevent="chose"
          class="movieItem"
          :key="movie"
          v-for="movie in chooseMovie"
        >
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
            alt="{{ movie.original_title }} + ' Movie Poster'"
          />
          <span>{{ movie.original_title }}</span>
        </div>
      </div>
    </section>

    <a href="#">Load More</a>

    <NextButton @click.prevent="movieDesc" />
    <BackButton @click.prevent="backMovieSelect" title="Back" />
  </div>

  <div v-if="this.tSectionOn">
    <h1>We are almost there!</h1>
    <h3>Please input information of the challenge</h3>

    <hr />
    <p>Movies Selected</p>
    <ul>
      <li>
        {{ chooseMovie[0].original_title }}
        <!-- Include the call from the db -->
      </li>
    </ul>
    <hr />

    <form>
      <div>
        <label for="chalName">Challenge Name<span class="req">*</span></label>
        <input v-model="chalName" type="text" class="inputArea" id="chalName" />
        <p class="error">{{ errorMessage }}</p>
      </div>
      <div>
        <label for="startDate">Start Date<span class="req">*</span></label>
        <input v-model="startDate" type="date" name="start" id="startDate" />
        <p class="error">{{ startError }}</p>
      </div>
      <div>
        <label for="endDate">End Date<span class="req">*</span></label>
        <input v-model="endDate" type="date" name="end" id="endDate" />
        <p class="error">{{ endError }}</p>
      </div>
    </form>

    <h3>Challenge Cover Image</h3>
    <p id="small">
      This will be cover of the challenge. You can select from the default image
      or you can upload the one you want!
    </p>

    <div>
      <label class="picture">
        <input type="file" accept="image/*" class="chalImageInput" />
        <!-- @change.prevent="test" -->
        <span class="chalImage"> Choose an image </span>
      </label>
    </div>

    <div>
      <img
        src="../assets/icons/plus-button-challenge.svg"
        @click.prevent="addDescription"
      />
      <label>Add a Challenge Description</label>
      <textarea
        v-model="description"
        v-if="descriptionArea"
        name="chalDescription"
        id="description"
        cols="30"
        rows="10"
      ></textarea>
    </div>

    <SaveButton @click.prevent="addChallenge" />
    <BackButton @click.prevent="backSelection" title="Back" />
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

export default {
  name: "CreateChallenge",
  components: {
    NavigationBar,
    FooterBar,
    NextButton,
    BackButton,
    SaveButton,
  },
  data() {
    return {
      fSectionOn: true,
      sSectionOn: false,
      tSectionOn: false,
      descriptionArea: false,
      quantity: 3,
      chalName: "",
      startDate: "",
      endDate: "",
      errorMessage: "",
      startError: "",
      endError: "",
      chooseMovie: [],
      a: "selected-movie.svg",
      imgPreURL: "https://image.tmdb.org/t/p/w500",
      movieOfChoice: "",
      description: "",
      uid: "",
    };
  },
  mounted() {
    this.emitter.on("uid", (data) => {
      this.uid = data;
      console.log(data);
    });
    //     // this.emitter.on("docRef", (data2) => {
    //     //   this.docRef = data2;
    //     //   console.log(data2);
    //     // })
  },
  created() {
    this.chooseMovie = axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=8ec942643846f64d66eed102868455f3&language=en-US&page=1&region=US"
      )
      .then((info) => {
        this.chooseMovie = info.data.results;
      })
      .then(() => {
        this.chooseMovie = JSON.parse(JSON.stringify(this.chooseMovie));
        this.forceRerender();
      });
  },
  methods: {
    movieSelect() {
      this.fSectionOn = false;
      this.sSectionOn = true;
      this.tSectionOn = false;
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
    },
    forceRerender() {
      this.carouselKey += 1;
    },
    chose() {
      document.getElementById(
        "movieSelected"
      ).innerHTML = `<img v-bind:src= "a" class="movieItem" style="width: 100%" />`;
    },
    backSelection() {
      this.fSectionOn = false;
      this.sSectionOn = true;
      this.tSectionOn = false;
    },
    addDescription() {
      if (this.descriptionArea == false) {
        this.descriptionArea = true;
      } else {
        this.descriptionArea = false;
      }
    },
    async addChallenge() {
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
      try {
        const docRef = addDoc(collection(db, "challenge"), {
          quantity: this.quantity,
          genreDropdown: this.genreDropdown,
          chalName: this.chalName,
          startDate: this.startDate,
          endDate: this.endDate,
          description: this.description,
        });

        this.$router.push("/challenge-main");
        console.log(docRef);
      } catch (e) {
        console.log(e);
      }
    },
    // test(e) {
    //     const inputFile = e.target;
    //     const file = inputFile.files[0];

    //     if (file) {
    //         const reader = new FileReader();
    //         reader.addEventListener('load', () => {
    //             const readerTarget = e.target;

    //             const img = document.createElement('img');
    //             img.src = readerTarget.result;
    //             img.classList.add('chalPicture');

    //             document.querySelector('chalImage').innerHTML = "";

    //             document.querySelector('chalImage').appendChild(img);
    //         })

    //         reader.readAsDataURL(file);
    //     }
    // }
  },
};
</script>

<style>
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
</style>