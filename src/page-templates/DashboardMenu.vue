<template>
  <section>
    <NavigationBar />
    <!-- <div v-if="FirstSection" class="fSect"> -->
    <h1>Howdy, {{ nickname }}!</h1>

    <div v-if="secondPartFirst" class="profilePicSectionFirst">
      <div class="profilePictureContainer">
        <img id="profilePicture" :src="profilePic" alt="profilePic"
          :class="{ capturedPicture: photoSnapped === true }" />
      </div>
      <img id="changing" src="../assets/icons/edit-photo.svg" alt="changeProfile" @click.prevent="clickImage" />
    </div>

    <div v-if="secondPartSecond" class="profilePicSectionSecond">
      <video autoplay class="feed"></video>
      <button class="secondaryBtn" @click.prevent="displayImage">Snap</button>
    </div>

    <h2>{{ nickname }}</h2>

    <div class="sideMenu">
      <a @click="first">Favorite Genre</a>

      <a @click="second">Watched Movies</a>

      <a @click="third">Badges</a>

      <a @click="fourth">Profile</a>
    </div>

    <div v-if="firstPart">
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
      <button type="cancel" class="secondaryBtn" @click="cancel">Cancel</button>
      <button type="save" class="primaryBtn" @click="saveNewGenres">
        Save
      </button>
    </div>

    <div v-if="secondPart">
      <section id="upcomingPageSec">
        <h1>Movies you've watched</h1>
        <p>Here are the list of movies you've seen from the challenges</p>
        <SecondPopupModal :popupActive="popupActive" :popupTitle="popupTitle" :popupPoster="popupPoster"
          :popupGenreIDs="popupGenreIDs" :popupReleaseDate="popupReleaseDate" :popupAvarage="popupAvarage"
          :popupOverview="popupOverview" :popupRating="popupRating" :popupReview="popupReview"
          v-on:closeClicked="closePopup">
        </SecondPopupModal>
        <div class="movieList">
          <div v-for="(movies, i) in watchedMovies" :key="i" class="ongoingChalItem">
            <img :src="
              'https://image.tmdb.org/t/p/w500' + watchedMovies[i].poster_path
            " @click="
  togglePopup(
    movies.poster_path,
    movies.original_title,
    movies.genre_ids,
    movies.release_date,
    movies.vote_average,
    movies.overview,
    movies.rating,
    movies.review,
    movies
  )
" />
            <!-- <h3>{{ movie[i].title }}</h3> -->
          </div>
        </div>
      </section>
      <a class="seeMoreBtn link" href="">Load More</a>
    </div>

    <div v-if="thirdPart">
      <h1>Here are your badges!</h1>
      <h2>Total of movies you've watched so far:</h2>
      <h1>{{ this.points }}</h1>
      <p>You have {{ movieLeft }} movies left to unlock the next badge</p>
      <div v-if="badgeOne">
        <img src="../assets/popcorn-badge.png" alt="" />
        <h3>Popcorn</h3>
        <p>10th Movie Milestone</p>
      </div>
      <div v-if="badgeTwo">
        <img src="../assets/3d-glasses.png" alt="" />
        <h3>3D Glasses</h3>
        <p>20th Movie Milestone</p>
      </div>
      <div v-if="badgeThree">
        <img src="../assets/mask-badge.png" alt="" />
        <h3>Mask</h3>
        <p>30th Movie Milestone</p>
      </div>

      <img src="../assets/no-badge.png" />
      <h3>{{ nextBadge }}th movie badge</h3>
      <p>Watch more movies to unlock this badge!</p>
      <div class="btnContainer">
        <button type="save" class="primaryBtn" @click="badgesPopup">
          Badges
        </button>
        <button type="save" class="primaryBtn" @click="sharedBadgesPopup">
          Shared Badges
        </button>
        <BadgesPopup @close="firstTogglePopup" :popupActive="firstpopupActive">
          <div class="popupContent">
            <h1 class="popUpHeading">Popcorn</h1>
            <img src="#" alt="#" />
            <h3 class="popUpText">20th movie milestone</h3>
            <button @click="redirect" type="button" class="secondaryBtn">
              Share Badge
            </button>
          </div>
        </BadgesPopup>
        <SharedBadgesPopup @close="secondTogglePopup" :popupActive="secondpopupActive">
          <div class="popupSecondContent">
            <h1 class="popUpHeading">Unlock at 130th movie</h1>
            <img src="#" alt="#" />
            <h3 class="popUpText">Watched more movies to unlock this badge</h3>
            <button @click="redirect" type="button" class="secondaryBtn">
              Watch more movies
            </button>
          </div>
        </SharedBadgesPopup>
      </div>
    </div>

    <div v-if="fourthPart" class="accountProfile">
      <h1>Your Account</h1>
      <section>
        <div>Name:</div>
        <div>{{ this.fname + " " + this.lname }}</div>
        <br />
        <div>Nickname:</div>
        <div>{{ nickname }}</div>
      </section>
      <button type="submit" class="primaryBtn" @click.prevent="resetPassword">
        Change Password
      </button>
    </div>

    <FooterBar />
  </section>
  <!-- </div> -->
</template>

<script>
import * as vue from "vue";
import BadgesPopup from "../components/BadgesPopup.vue";
import SharedBadgesPopup from "../components/SharedBadgesPopup.vue";
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import SecondPopupModal from "../components/SecondPopupModal.vue";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "@/firebase";
import {
  collection,
  updateDoc,
  doc,
  where,
  query,
  getDocs,
} from "firebase/firestore";

export default {
  name: "DashboardMenu",
  components: {
    BadgesPopup,
    SharedBadgesPopup,
    NavigationBar,
    FooterBar,
    SecondPopupModal,
  },
  data() {
    return {
      firstPart: false,
      secondPart: false,
      thirdPart: false,
      fourthPart: true,
      nickname: "",
      fname: "",
      lname: "",
      points: "",
      popupTitle: "",
      rating: "",
      overview: "",
      popupPoster: "",
      popupGenreIDs: "",
      popupReleaseDate: "",
      popupAvarage: "",
      popupOverview: "",
      popupRating: "",
      popupReview: "",
      nextBadge: 10,
      popupActive: false,
      profilePic: "",
      secondPartFirst: true,
      badgeOne: false,
      badgeTwo: false,
      badgeThree: false,
      // genreArray: [],
      watchedMovies: [],
      movieLeft: 0,
      genreArray: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 16,
          name: "Animation",
        },
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 80,
          name: "Crime",
        },
        {
          id: 99,
          name: "Documentary",
        },
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 10751,
          name: "Family",
        },
        {
          id: 14,
          name: "Fantasy",
        },
        {
          id: 36,
          name: "History",
        },
        {
          id: 27,
          name: "Horror",
        },
        {
          id: 10402,
          name: "Music",
        },
        {
          id: 9648,
          name: "Mystery",
        },
        {
          id: 10749,
          name: "Romance",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
        {
          id: 10770,
          name: "TV Movie",
        },
        {
          id: 53,
          name: "Thriller",
        },
        {
          id: 10752,
          name: "War",
        },
        {
          id: 37,
          name: "Western",
        },
      ],
    };
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    first() {
      this.firstPart = true;
      this.secondPart = false;
      this.thirdPart = false;
      this.fourthPart = false;
    },
    second() {
      this.firstPart = false;
      this.secondPart = true;
      this.thirdPart = false;
      this.fourthPart = false;
    },
    third() {
      this.firstPart = false;
      this.secondPart = false;
      this.thirdPart = true;
      this.fourthPart = false;
    },
    fourth() {
      this.firstPart = false;
      this.secondPart = false;
      this.thirdPart = false;
      this.fourthPart = true;
    },
    resetPassword() {
      this.$router.push("/reset-password");
    },
    async badgesPopup() {
      this.firstTogglePopup();
    },
    async sharedBadgesPopup() {
      this.secondTogglePopup();
    },
    cancel() {
      this.firstPart = false;
      this.secondPart = false;
      this.thirdPart = false;
      this.fourthPart = true;
    },
    async saveNewGenres() {
      let checkboxes = document.getElementsByName("genre");
      //let selected = [];
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          console.log(checkboxes[i].value);
          this.genreArray.push(checkboxes[i].value);
        }
      }
      const uid = sessionStorage.getItem("uid");
      const test = await getDocs(
        query(collection(db, "user"), where("uid", "==", uid))
      );
      test.forEach((doc) => {
        this.chalID = doc.id;
      });
      updateDoc(doc(db, "user", this.chalID), {
        genre: this.genreArray,
      });
      // maybe include to go back to the profile
    },
    togglePopup(
      posterPath,
      originalTitle,
      genreids,
      releaseDate,
      voteAverage,
      overview,
      rating,
      review,
      movie
    ) {
      this.popupPoster = posterPath;
      this.popupTitle = originalTitle;
      this.popupReleaseDate = releaseDate;
      this.popupAvarage = voteAverage;
      this.popupOverview = overview;
      this.popupRating = rating;
      this.popupReview = review;
      this.popupActive = true;
      //console.log(movie);
      //movie.genre_ids
      let genreName = "";
      for (let i = 0; i < this.genreArray.length; i++) {
        for (let j = 0; j < movie.genre_ids.length; j++) {
          if (Number(this.genreArray[i].id) == Number(movie.genre_ids[j])) {
            genreName += this.genreArray[i].name + ", ";
          }
        }
      }
      this.popupGenreIDs = genreName.slice(0, genreName.length - 2);
    },
    closePopup() {
      this.popupActive = false;
    },
    clickImage() {
      this.secondPartFirst = false;
      this.secondPartSecond = true;
      this.init();
      this.photoSnapped = true;
    },
    async displayImage() {
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
        const fname = sessionStorage.getItem("fname");
        const storageRef = ref(storage, `images/${fname}`);
        uploadBytes(storageRef, blob).then(() => {
          getDownloadURL(storageRef).then((result) => {
            //console.log(result);
            this.urlOfImage = result;
            console.log(this.urlOfImage);
            let profilePhoto = document.getElementById("profilePicture");
            // console.log("this" + this.a);
            profilePhoto.src = result;
          });
        });
      });
      picture.remove();
      const uid = sessionStorage.getItem("uid");
      const test = await getDocs(
        query(collection(db, "user"), where("uid", "==", uid))
      );
      test.forEach((doc) => {
        this.chalID = doc.id;
        // console.log(doc.data().endDate);
      });
      console.log(this.urlOfImage);
      //let review = this.movieName + "userReview";
      updateDoc(doc(db, "user", this.chalID), {
        profilePicUrl: this.urlOfImage,
      });

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
  },
  async mounted() {
    this.nickname = sessionStorage.getItem("nickname");
    this.fname = sessionStorage.getItem("fname");
    this.lname = sessionStorage.getItem("lname");
    this.profilePic = sessionStorage.getItem("profilePic");
    let uid = sessionStorage.getItem("uid");
    const test1 = await getDocs(
      query(collection(db, "user"), where("uid", "==", uid))
    );
    test1.forEach((doc) => {
      this.chalID = doc.id;
      this.points = Number(doc.data().points);
      this.points = this.points / 5;
      // console.log(doc.data().endDate);
    });
    const querySnap = await getDocs(query(collection(db, "challenge")));
    querySnap.forEach((doc1) => {
      const userId = doc1.data().uid;
      if (userId == uid) {
        for (let i = 0; i < doc1.data().selectedMovies.length; i++) {
          // console.log(
          //   doc1.data().chalName + doc1.data().selectedMovies[i].review
          // );
          if (doc1.data().selectedMovies[i].review) {
            //console.log(doc1.data().selectedMovies[i]);

            this.watchedMovies.push(doc1.data().selectedMovies[i]);
          }
        }
      }
    });
    if (this.points >= 10) {
      this.badgeOne = true;
      this.nextBadge = 20;
    }
    if (this.points >= 20) {
      this.badgeTwo = true;
      this.nextBadge = 30;
    }
    if (this.points >= 30) {
      this.badgeThree = true;
      this.nextBadge = 40;
    }
    this.movieLeft = this.points % 10;
    this.movieLeft = 10 - this.movieLeft;
  },
  setup() {
    const firstpopupActive = vue.ref(false);
    const firstTogglePopup = () => {
      firstpopupActive.value = !firstpopupActive.value;
    };
    const secondpopupActive = vue.ref(false);
    const secondTogglePopup = () => {
      secondpopupActive.value = !secondpopupActive.value;
    };
    return {
      firstpopupActive,
      firstTogglePopup,
      secondpopupActive,
      secondTogglePopup,
    };
  },
};
</script>

<style>
.sideMenu a {
  cursor: pointer;
}

#changing {
  cursor: pointer;
}
</style>