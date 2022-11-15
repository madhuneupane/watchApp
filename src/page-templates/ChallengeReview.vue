<template>
    <NavigationBar />
    <!-- <img src="https://images.pexels.com/photos/10313368/pexels-photo-10313368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="testing"> -->
    <h1>Movie Name</h1>
    <h3>Movie Genre</h3>
    <p><strong>Release Date: </strong>API Date</p>
    <p><strong>Rating: </strong>API Rating/10</p>
    <h3>Overview</h3>
    <p>API Overview</p>
    <hr>
    <h3>What do you think of this movie?</h3>

    <label for="userRating">Rating<span class="req">*</span></label>
    <input v-model="userRating" type="number" name="userRating" id="userRating">

    <label for="userReview">Review<span class="req">*</span></label>
    <textarea v-model="userReview" id="userReview" cols="30" rows="10" placeholder="Leave your review here!"></textarea>

    <p class="error">{{ fillMessage }}</p>

    <SaveButton @click.prevent="saveReview(); togglePopup()" />
    <BackButton @click.prevent="goBack" title="Back" />
    <PopupModal @close="togglePopup" :popupActive="popupActive">
        <div class="popupContent">
            <h1>Your review has been saved!</h1>
            <p>For retrieving this information,<br>please visit your profile</p>
            <button @click="redirect" type="button" class="secondaryBtn">Done</button>
        </div>
    </PopupModal>
    <FooterBar />
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import FooterBar from "../components/FooterBar.vue";
import PopupModal from "../components/PopupModal.vue";
import { ref } from 'vue';
import SaveButton from '../components/SaveButton.vue';
import BackButton from "../components/BackButton.vue";

export default {
    name: "ChallengeReview",
    components: {
        NavigationBar,
        FooterBar,
        PopupModal,
        SaveButton,
        BackButton
    },
    data() {
        return {
            fillMessage: "",
            userRating: "",
            userReview: ""
        }
    },
    setup() {
        const popupActive = ref(false);
        const togglePopup = () => {
            popupActive.value = !popupActive.value;
        }
        return { popupActive, togglePopup };
    },
    methods: {
        saveReview() {
            this.fillMessage = "";
            if (
                this.userRating == "" ||
                this.userReview == ""
            ) {
                this.fillMessage = "Don't forget to write your review!";
            }
            // We need to update db using the challenge title
        },
        goBack() {
            this.$router.push("/ongoing-challenges");
        },
        redirect() {
            this.$router.push("/");
        }
    }
}

</script>