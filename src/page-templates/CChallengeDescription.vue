<template>
    <NavigationBar />
    <h1>We are almost there!</h1>
    <h3>Please input information of the challenge</h3>

    <hr>
    <p>Movies Selected</p>
    <!-- Include the call from the DB -->
    <hr>

    <form>
        <div>
            <label for="chalName">Challenge Name<span class="req">*</span></label>
            <input v-model="chalName" type="text" class="inputArea" id="chalName">
            <p class="error">{{ errorMessage }}</p>
        </div>
        <div>
            <label for="startDate">Start Date<span class="req">*</span></label>
            <input v-model="startDate" type="date" name="start" id="startDate">
            <p class="error">{{ startError }}</p>
        </div>
        <div>
            <label for="endDate">End Date<span class="req">*</span></label>
            <input v-model="endDate" type="date" name="end" id="endDate">
            <p class="error">{{ endError }}</p>
        </div>
    </form>

    <p>Challenge Cover Image</p>
    <p id="small">
        This will be cover of the challenge. You can select from the default image or you can upload the one you want!
    </p>

    <div>
        <img src="" alt="imageSelection" id="imgSelected">
    </div>

    <div>
        <img src="../assets/icons/plus-button-challenge.svg">
    </div>

    <SaveButton @click.prevent="addChallenge" />
    <BackButton @click.prevent="backSelection" title="Back" />
    <FooterBar />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import SaveButton from "../components/SaveButton.vue";
import BackButton from "../components/BackButton.vue";



export default {
    name: "CChallengeDescription",
    components: {
        NavigationBar,
        FooterBar,
        SaveButton,
        BackButton
    },

    data() {
        return {
            chalName: "",
            startDate: "",
            endDate: "",
            errorMessage: "",
            startError: "",
            endError: ""
        };
    },

    methods: {
        async addChallenge() {
            this.errorMessage = "";
            this.startError = "";
            this.endError = "";
            if (this.chalName == "") {
                this.errorMessage = "Please input the challenge name"
            }
            if (this.startDate == "") {
                this.startError = "Please input the start date"
            }
            if (this.endDate == "") {
                this.endError = "Please input the end date"
            }
        },





        backSelection() {
            this.$router.push("/CMovieSelect");
        },

    }
}

</script>