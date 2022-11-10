<template>
    <NavigationBar />
    <section id="ongoingChalSec" v-if="chalBrief">
        <h1>Defy Us!</h1>
        <h2>Try beating WatchApp!</h2>
        <div class="chalList">
            <div class="chalInfo" v-for="(challenge, index) in chalLoading" :key="index">
                {{ challenge }}
                <div>
                    <img src="" id="chalImage">
                    <h2 id="chalName" @click.prevent="chalDetailCall">TEST</h2>
                    <p id="dates">2022.10.01 - 2022.10.31</p>
                    <p id="qntExisting"># movies waiting for you!</p>
                    <button v-if="fButton" @click.prevent="acceptChal">Accept Challenge</button>
                    <!-- Include a v-model or whatever to save it to the DB -->
                    <button v-if="sButton">Challenge Accepted <img src="../assets/icons/challenge-accepted.svg">
                    </button>
                </div>
            </div>
            <button @click.prevent="loadMore">Load More</button>
            <BackButton title="Back to Challenge" @click.prevent="backChal" />
        </div>
        <section id="ongoingChalDetails">
            <div v-if="chalDetail">
                <img src="" id="chalImage">
                <h1 id="chalName">TEST</h1>
                <h2 id="dates">2022.10.01 - 2022.10.31</h2>
                <h3>Ready for a Challenge?</h3>
                <p>TESTTESTTESTTESTTESTTESTTESTTESTTESTTEST</p>
                <!-- Movies list -->
                <button v-if="fButton" @click.prevent="acceptChal">Accept Challenge</button>
                <!-- Include a v-model or whatever to save it to the DB -->
                <button v-if="sButton">Challenge Accepted <img src="../assets/icons/challenge-accepted.svg">
                </button>
                <BackButton title="Back to List" @click.prevent="backToList" />
            </div>
        </section>

    </section>
    <FooterBar />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import BackButton from "../components/BackButton.vue";

export default {
    name: "OngoingChallenges",
    components: {
        NavigationBar,
        FooterBar,
        BackButton
    },
    data() {
        return {
            challengedb: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            length: 4,
            fButton: true,
            sButton: false,
            chalBrief: true,
            chalDetail: false,

        };
    },
    methods: {
        createChallenge() {
            this.$router.push("/create-challenge")
        },
        backChal() {
            this.$router.push("/challenge-main")
        },
        loadMore() {
            if (this.length > this.challengedb.length) return;
            this.length = this.length + 4;
        },
        acceptChal() {
            this.fButton = false;
            this.sButton = true;
        },
        backToList() {
            this.chalDetail = false;
            this.chalBrief = true;
        },
        chalDetailCall() {
            this.chalDetail = true;
            this.chalBrief = false;
        }
    },
    computed: {
        chalLoading() {
            return this.challengedb.slice(0, this.length);
        }
    }
}
</script>