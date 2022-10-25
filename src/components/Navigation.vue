<template>
    <div class="navbar navbar-gradient">
        <div class="navbar-image">
            <router-link class="navbar navbar-logo" to="/"></router-link> <!-- Add logo image -->
        </div>
        <div class="navbar-items">
            <router-link class="nav-link" to="/home">Home</router-link>
            <!-- We need to confirm with the Designers if this needs to appear if not logged in as user -->
            <ChallengesNav title="Challenges"></ChallengesNav>
        </div>
    </div>
</template>

<script>
// import 
export default {
    name: "navigation",
    components: {
        ChallengesNav,
    },
}
</script>