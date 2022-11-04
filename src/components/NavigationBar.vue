<template>
    <div class="navbar navbar-gradient">
        <img src="../assets/icons/whitelogo.svg" alt="watchapp">
        <div class="navbar-items">
            <router-link class="nav-link" to="/TestTest">Home</router-link>
            <DropdownMenu title="Challenges" />
        </div>
        <router-link to="/LoginPage">Login</router-link>
    </div>
</template>

<script>
import DropdownMenu from "./DropdownMenu.vue";

export default {
    name: "NavigationBar",
    components: {
        DropdownMenu,
    },
}
</script>

<style>
.navbar-gradient {
    background: linear-gradient(91.25deg, blue 0%, purple 51.47%, orange 100%);
}
</style>