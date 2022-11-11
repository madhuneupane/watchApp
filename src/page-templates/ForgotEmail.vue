<template>
    <NavigationBar />
    <h1>Retrieve your email</h1>
    <p>Please contact the administrator to retrieve your email or reach us at <a style="textDecoration: underline"
            id="fakeEmail" href="mailto:help@watchapp.com">help@watchapp.com</a></p>

    <router-link id="backToLogin" to="/login-page">Back to login page</router-link>
    <FooterBar />
</template>


<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
    name: "ForgotEmail",
    components: {
        NavigationBar,
        FooterBar
    }
}
</script>