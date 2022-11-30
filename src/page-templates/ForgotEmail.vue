<template>
    <NavigationBar />
    <section id="forgotEmail">
        <h1>Retrieve your email</h1>
        <p class="forgotEmailText">Please contact the administrator to retrieve your email or reach us at
            <a id="fakeEmail" href="mailto:help@watchapp.com">help@watchapp.com</a>
        </p>

        <router-link class="seeMoreBtn link backToLogin" to="/login-page">Back to login page</router-link>
    </section>
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