<template>
    <footer id="footer">
        <img id="watchappLogo" src="../assets/icons/whitelogo.svg" alt="watchapp">
        <p id="sevenKnights">The Seven Knights</p>
        <router-link id="linksAbout" to="/about-us">About Us</router-link>
        <router-link id="linksContact" to="/contact-us">Contact Us</router-link>
        <span id="address">100 W 49th Ave, Vancouver, BC V5Y 2Z6</span>
        <span id="reserved">All rights reserved</span>
    </footer>
</template>

<script>
export default {
    name: 'FooterBar',
}
</script>

<style>
/* #footer {
    position: absolute;
    width: 100%;
    bottom: 0;
} */
</style>