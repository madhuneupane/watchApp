<template>
    <div class="navbar navbar-gradient">
        <img id="logo" src="../assets/icons/whitelogo.svg" alt="watchapp">
        <div class="navbar-items">
            <router-link class="nav-link" id="home" to="/">Home</router-link>
            <DropdownMenu v-if="isSignedIn" title="Challenges" />
            <!-- v-if="user" -->
            <router-link v-if="!isSignedIn" class="nav-link" id="login" to="/login-page">Login</router-link>
            <img v-if="isSignedIn" id="userIcon" src="../assets/icons/1538515088893.jpeg" alt="userPic"
                @click.prevent="profile">
            <!-- <router-link v-if="isSignedIn" @click.prevent="signOut" class="nav-link" id="signOut">Sign
                Out
            </router-link> -->
            <!-- Navbar disappears -->
        </div>
    </div>
</template>

<script>
import DropdownMenu from "./DropdownMenu.vue";

export default {
    name: "NavigationBar",
    components: {
        DropdownMenu,
    },
    data() {
        return {
            user: "",
            isSignedIn: true
        }
    },
    methods: {
        profile() {
            this.$router.push("/profile-page");
        },
        //     signOut() {
        //         this.isSignedIn = false;
        //         this.$router.push("/");
        //     }
    }
}
</script>

<style>
#userIcon {
    width: 70px;
    border-radius: 50%;
    cursor: pointer;
}

.navbar-items {
    display: inline-flex;
    align-items: center;
    padding: 5px;
}

.nav-link {
    margin-left: 40px;
    margin-right: 40px;
}

.icon {
    width: 20px;
    padding-left: 5px;
}

#logo {
    padding-left: 20px;
}
</style>