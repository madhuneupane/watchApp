<template>
    <NavigationBar />
    <h1>Let's get started!</h1>
    <h3>How many and what kind of movies do you want to watch?</h3>

    <div class="movieSelection movieQuantity">
        <label for="quantity">Movies</label>
        <img class="icon" id="minusSign" src="../assets/icons/minus-sign.svg" />
        <input v-model="quantity" type="number" id="quantity" name="quantity" min="3">
        <img class="icon" id="plusSign" src="../assets/icons/plus-sign.svg" />
    </div>

    <div class="movieSelection">
        <label for="genreDropdown">Genre</label>
        <select v-model="genreDropdown" name="genre" id="genreDropdown">
            <option value="select" selected>Select</option>
            <option value="horror">Horror</option>
        </select>
    </div>

    <NextButton @click.prevent="movieSelect" />
    <BackButton title="Back to Challenge" @click.prevent="chalMain" />
    <FooterBar />
</template>

<script>
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import NextButton from "../components/NextButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
    name: "CreateChallenges",
    components: {
        NavigationBar,
        FooterBar,
        NextButton,
        BackButton
    },
    data() {
        return {
            quantity: 3,
            // genreDropdown: "Select",
        }
    },
    methods: {
        movieSelect() {
            try {
                const docRef = addDoc(collection(db, "challenge"), {
                    quantity: this.quantity,
                    genreDropdown: this.genreDropdown
                });
                this.$router.push("/CMovieSelect");
                console.log(docRef);
            }
            catch (e) {
                console.log(e);
            }
        },
        chalMain() {
            this.$router.push("/ChallengeMain");
        }
    }
};
</script>