<template>
    <div class="challengesMenu">
        <h2>Challenges</h2>
        <ul class="challengesMenuList">
            <li class="challengesMenuItem" :class="{ 'challengePageActive' : past === true}" @click.prevent="gotoPastChallenges">Past</li>
            <li class="challengesMenuItem"  :class="{ 'challengePageActive' : ongoing === true }" @click.prevent="gotoOngoingChallenges">Ongoing</li>
            <li class="challengesMenuItem"  :class="{ 'challengePageActive' : defyUs === true}" @click.prevent="gotoAdminChallenges">Defy us</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ChallengesMenu",
    props:{
        challengePage: String,
    },
    data() {
        return {
            past: false,
            ongoing: false,
            defyUs: false,
        }
    },

    created() {
        if(this.challengePage == 'past') {
            this.past=true;
        }
        if(this.challengePage == 'ongoing') {
            this.ongoing=true;
        }
        if(this.challengePage == 'defyUs') {
            this.defyUs=true;
        }
    },

    methods: {
        gotoPastChallenges() {
            this.$router.push("/past-challenge");
        },
        gotoOngoingChallenges() {
            this.$router.push("/ongoing-challenges");
        },
        gotoAdminChallenges() {
            this.$router.push("/admin-challenge");
        }
    }
}
</script>