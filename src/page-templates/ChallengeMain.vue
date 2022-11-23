<template>
    <NavigationBar />
    <div id="chlngMainPage">
        <div class="headContainer">
            <h1 class="pageTitle">Challenges</h1>
        </div>
        <OngoingCarousel />
        <AdminCarousel />
        <PastCarousel />
    </div>
    <FooterBar />
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import FooterBar from "../components/FooterBar.vue";
import OngoingCarousel from '../components/OngoingCarousel.vue';
import AdminCarousel from '../components/AdminCarousel.vue';
import PastCarousel from '../components/PastCarousel.vue';

export default {
    name: "ChallengeMain",
    components: {
        NavigationBar,
        FooterBar,
        OngoingCarousel,
        AdminCarousel,
        PastCarousel
    },
}
</script>