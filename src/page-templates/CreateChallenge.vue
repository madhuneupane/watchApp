<template>
  <NavigationBar />
  <div class="sectionContainer">
    <div v-if="this.fSectionOn" class="createChallenge_fSection">
      <h1>Let's get started!</h1>
      <h3>How many and what kind of movies<br />do you want to watch?</h3>

      <div class="movieSelection movieQuantity">
        <label class="movieLabel" for="quantity">Movies</label>
        <div class="movieQuantitySelection">
          <img class="icon" id="minusSign" src="../assets/icons/minus-sign.svg" @click.prevent="decrease" />
          <input v-model="quantity" type="number" id="quantity" name="quantity" min="3" />
          <img class="icon" id="plusSign" src="../assets/icons/plus-sign.svg" @click.prevent="increase" />
        </div>
      </div>

      <div class="movieSelection">
        <label class="genreLabel" for="genreDropdown">Genre</label>
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

      <!-- <a @click.prevent="loadMoreMovies">Load More</a> -->

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
          <label class="labelClass" for="chalName">Challenge Name<span class="req">*</span></label>
          <input v-model="chalName" type="text" class="inputArea" id="chalName" />
          <p class="error">{{ errorMessage }}</p>
        </div>
        <div class="dateContainer">
          <div class="form_startDate">
            <label class="labelClass" for="startDate">Start Date<span class="req">*</span></label>
            <input v-model="startDate" type="date" name="start" id="startDate" />
            <p class="error">{{ startError }}</p>
          </div>
          <div class="form_endDate">
            <label class="labelClass" for="endDate">End Date<span class="req">*</span></label>
            <input v-model="endDate" type="date" name="end" id="endDate" />
            <p class="error">{{ endError }}</p>
          </div>
        </div>
      </form>
      <div class="challengeCoverContainer">
        <h3>Challenge Cover Image</h3>
        <p class="labelClass" id="small">
          This will be cover of the challenge. You can select from the default
          image or you can take the picture that you want!
        </p>
        <!-- <div class="imageSelectionContainer">
          <label class="picture">
            <input id="inputForImage" type="file" accept="image/*" class="chalImageInput" hidden />
            <p style="text-decoration: underline; cursor: default" id="chooseChalImage"
              @click.prevent="chooseChalImage">Choose
              an image</p>
          </label>
        </div> -->

        <div class="standardImages">
          <img class="standardImage" id="firstImage"
            src="https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/images%2Fsamuel-ferrara-1527pjeb6jg-unsplash.jpg?alt=media&token=d9d36de1-0033-4e6c-9171-566f1085b5c6"
            @click="photo1Clicked" style="width: 100px; height: 100px" />
          <img class="standardImage" id="secondImage"
            src="https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/images%2Fmyke-simon-atsUqIm3wxo-unsplash.jpg?alt=media&token=03de8d15-04ca-41d4-ab6c-72c8dafb1ccc"
            @click="photo2Clicked" style="width: 100px; height: 100px" />
          <img class="standardImage" id="thirdImage"
            src="https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/images%2Fcharlesdeluvio-PvAAYZx-yf8-unsplash.jpg?alt=media&token=5df36fa5-8309-4467-8761-288d1634cf17"
            @click="photo3Clicked" style="width: 100px; height: 100px" />
        </div>

        <p class="labelClass" style="text-decoration: underline; cursor: default" @click.prevent="clickImage">
          Take a photo
        </p>
      </div>

      <div v-if="secondPartFirst" class="profilePicSectionFirst">
        <div class="profilePictureContainer">
          <img id="profilePicture" src="" :class="{ capturedPicture: photoSnapped === true }" />
        </div>
      </div>

      <div v-if="secondPartSecond" class="profilePicSectionSecond">
        <video autoplay class="feed"></video>
        <button class="secondaryBtn" @click.prevent="displayImage">Snap</button>
      </div>

      <div class="addDescriptionContainer">
        <div class="addDescriptionLabelContainer">
          <img src="../assets/icons/plus-button-challenge.svg" @click.prevent="addDescription" />
          <label class="labelClass">Add a Challenge Description</label>
        </div>
        <textarea v-model="description" v-if="descriptionArea" name="chalDescription" id="description" cols="30"
          rows="6"></textarea>
      </div>

      <div class="btnContainer">
        <SaveButton @click.prevent="addChallenge" />
        <BackButton @click.prevent="backSelection" title="Back" />
      </div>
      <SimplePopup @close="togglePopup" :popupActive="popupActive">
        <div class="popupContent">
          <div class="reviewSaved">
            <h1 class="popUpHeading">Saved!</h1>
            <h3 class="popUpText">
              Hooray! Challenge created!<br />Watch movies to earn special
              badges!
            </h3>
            <button @click="redirect" type="button" class="secondaryBtn">
              Go to Challenges
            </button>
          </div>
        </div>
      </SimplePopup>
    </div>
  </div>
  <FooterBar id="footer" />
</template>


<script>
import { db } from "@/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import axios from "axios";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import NextButton from "../components/NextButton.vue";
import BackButton from "../components/BackButton.vue";
import SaveButton from "../components/SaveButton.vue";

import SimplePopup from "../components/SimplePopup.vue";
// import { ref } as ref1 from 'vue';
import * as vue from "vue";

export default {
  name: "CreateChallenge",
  components: {
    NavigationBar,
    FooterBar,
    NextButton,
    BackButton,
    SaveButton,
    SimplePopup,
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
      secondPartSecond: false,
      secondPartFirst: false,
      urlOfImage: "",
      adminChallenge: false,
      apiMoviePages: 1,
      selectedImageQuantity: 1,
    };
  },
  mounted() {
    if (this.fSectionOn) {
      let footer = document.getElementById("footer");
      footer.style.width = "100%";
      footer.style.bottom = "0";
      footer.style.position = "fixed";
    }
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
      this.secondPartFirst = false;
      this.secondPartSecond = false;
      let footer = document.getElementById("footer");
      // footer.style.width = "100%";
      // footer.style.bottom = "0";
      footer.style.position = "relative";

      this.quantity = document.getElementById("quantity").value;
      this.genreOfChoice = document.getElementById("genreDropdown").value;

      this.chooseMovie = axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=8ec942643846f64d66eed102868455f3&with_genres=" +
          this.genreOfChoice +
          "&language=en-US&page=" +
          this.apiMoviePages +
          "&region=CA"
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
        this.quantity = Number(this.quantity);
        this.quantity = Number(this.quantity - 1);
      }
    },
    increase() {
      this.quantity = Number(this.quantity);
      this.quantity = Number(this.quantity + 1);
    },
    chalMain() {
      this.$router.push("/challenge-main");
    },
    movieDesc() {
      // if (this.selectedMovies.length == this.quantity) {
      this.fSectionOn = false;
      this.sSectionOn = false;
      this.tSectionOn = true;
      this.secondPartFirst = true;
      this.secondPartSecond = false;
      // }
    },
    backMovieSelect() {
      this.fSectionOn = true;
      this.sSectionOn = false;
      this.tSectionOn = false;
      this.secondPartFirst = false;
      this.secondPartSecond = false;
      this.selectedMoviesQuantity = 0;
      this.selectedMovies = [];
      document.getElementById("footer").style.position = "fixed";
    },
    forceRerender() {
      this.carouselKey += 1;
    },
    selectMovie() {
      if (
        this.selectedMoviesQuantity < this.quantity &&
        !event.currentTarget.classList.contains("selected")
      ) {
        event.currentTarget.classList.toggle("selected");
        this.selectedMoviesQuantity++;
      } else if (event.currentTarget.classList.contains("selected")) {
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
      this.secondPartFirst = false;
      this.secondPartSecond = false;
      this.selectedMovies = [];
      this.selectedMoviesQuantity = 0;
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
        if (uid == "ZrWSmu9sXegAiU2XO7rPXMF0Jwj1") {
          this.adminChallenge = true;
        }
        const docRef = addDoc(collection(db, "challenge"), {
          quantity: this.quantity,
          genreDropdown: this.genreDropdown,
          chalName: this.chalName,
          startDate: this.startDate,
          endDate: this.endDate,
          description: this.description,
          uid: uid,
          selectedMovies: this.selectedMovies,
          adminChallenge: this.adminChallenge,
          image: this.urlOfImage,
        });
        // this.$router.push("/challenge-main");
        console.log(docRef);
      } catch (e) {
        console.log(e);
      }
    },
    photo1Clicked() {
      let photo1 = document.getElementById("firstImage");
      let photo2 = document.getElementById("secondImage");
      let photo3 = document.getElementById("thirdImage");
      photo1.style.border = "3px solid white";
      photo1.style.borderRadius = "5px";
      photo2.style.border = "";
      photo2.style.borderRadius = "";
      photo3.style.border = "";
      photo3.style.borderRadius = "";

      this.urlOfImage =
        "https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/images%2Fsamuel-ferrara-1527pjeb6jg-unsplash.jpg?alt=media&token=d9d36de1-0033-4e6c-9171-566f1085b5c6";
    },
    photo2Clicked() {
      let photo1 = document.getElementById("firstImage");
      let photo2 = document.getElementById("secondImage");
      let photo3 = document.getElementById("thirdImage");
      photo2.style.border = "3px solid white";
      photo2.style.borderRadius = "5px";
      photo1.style.border = "";
      photo1.style.borderRadius = "";
      photo3.style.border = "";
      photo3.style.borderRadius = "";
      this.urlOfImage =
        "https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/images%2Fmyke-simon-atsUqIm3wxo-unsplash.jpg?alt=media&token=03de8d15-04ca-41d4-ab6c-72c8dafb1ccc";
    },
    photo3Clicked() {
      let photo1 = document.getElementById("firstImage");
      let photo2 = document.getElementById("secondImage");
      let photo3 = document.getElementById("thirdImage");
      photo3.style.border = "3px solid white";
      photo3.style.borderRadius = "5px";
      photo2.style.border = "";
      photo2.style.borderRadius = "";
      photo1.style.border = "";
      photo1.style.borderRadius = "";
      this.urlOfImage =
        "https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/images%2Fcharlesdeluvio-PvAAYZx-yf8-unsplash.jpg?alt=media&token=5df36fa5-8309-4467-8761-288d1634cf17";
    },
    redirect() {
      this.$router.push("/ongoing-challenges");
    },
    // loadMoreMovies() {
    //   this.apiMoviePages++;
    //   this.chooseMovie = axios
    //     .get(
    //       "https://api.themoviedb.org/3/discover/movie?api_key=8ec942643846f64d66eed102868455f3&with_genres=" +
    //       this.genreOfChoice +
    //       "&language=en-US&page=" + this.apiMoviePages + "&region=CA"
    //     )
    //     .then((info) => {
    //       this.chooseMovie = info.data.results;
    //     })
    //     .then(() => {
    //       this.chooseMovie = JSON.parse(JSON.stringify(this.chooseMovie));
    //       this.forceRerender();
    //     });
    // },
    clickImage() {
      this.fSectionOn = false;
      this.sSectionOn = false;
      this.tSectionOn = true;
      this.secondPartFirst = false;
      this.secondPartSecond = true;
      this.init();
      this.photoSnapped = true;
    },

    displayImage() {
      const picture = document.createElement("canvas");
      const ctx = picture.getContext("2d");

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(
        document.querySelector("video"),
        0,
        0,
        picture.width,
        picture.height
      );

      // this.imageSource = picture.toDataURL();

      picture.toBlob((blob) => {
        const storage = getStorage();
        let currentDate = new Date();
        let dateTime =
          String(currentDate.getDay()) +
          currentDate.getMonth() +
          currentDate.getFullYear() +
          currentDate.getHours() +
          +currentDate.getMinutes() +
          currentDate.getSeconds();
        const storageRef = ref(storage, `images/${dateTime}`);
        uploadBytes(storageRef, blob).then(() => {
          getDownloadURL(storageRef).then((result) => {
            console.log(result);
            this.urlOfImage = result;
            let profilePhoto = document.getElementById("profilePicture");
            // console.log("this" + this.a);
            profilePhoto.src = result;
          });
        });
      });
      picture.remove();

      this.secondPartSecond = false;
      this.secondPartFirst = true;
    },
    init() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      } else {
        console.log("ok");
      }
    },
    selectStandardImg(event) {
      if (
        this.selectedImageQuantity == 1 &&
        !event.currentTarget.classList.contains("selectedStandardImg")
      ) {
        event.target.classList.toggle("selectedStandardImg");
        this.selectedImageQuantity++;
      } else if (
        event.currentTarget.classList.contains("selectedStandardImg")
      ) {
        event.target.classList.toggle("selectedStandardImg");
        this.selectedImageQuantity--;
      }
    },
  },

  setup() {
    const popupActive = vue.ref(false);
    const togglePopup = () => {
      popupActive.value = !popupActive.value;
    };
    return { popupActive, togglePopup };
  },
};
</script>
