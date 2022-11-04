<template>
    <NavigationBar />

    <h1>Time for selection!</h1>

    <h3>Please select # movies that suit your challenge</h3>
    <!-- Add function to the number item -->

    <!-- Adding list of movies -->

    <a href="#">Load More</a>

    <NextButton @click.prevent="movieDesc" />
    <BackButton @click.prevent="backMovieSelect" title="Back" />
    <FooterBar />
</template>


<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import NextButton from "../components/NextButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
    name: "CMovieSelect",
    components: {
        NavigationBar,
        FooterBar,
        NextButton,
        BackButton
    },
    methods: {
        movieDesc() {
            this.$router.push("/CChallengeDescription");
        },
        backMovieSelect() {
            this.$router.push("/CreateChallenges");
        }
    }
};
</script>