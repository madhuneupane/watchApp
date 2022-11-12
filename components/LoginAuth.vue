<template>
    <div id="googleSignIn" v-if="isLoggedOut">
        <!-- <img src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=499339548885535&autoLogAppEvents=1"
            alt="signInFacebook"> -->
        <button class="btn btn-facebook" @click.prevent="signInWithFacebook">Facebook</button>
    </div>

    <!-- Step 2: Include the JavaScript SDK on your page once, ideally right after the opening body tag. -->
    <!-- <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=499339548885535&autoLogAppEvents=1" nonce="hKx5L9q4"></script> -->

    <!-- Step 3: Place this code wherever you want the plugin to appear on your page. -->
    <!-- <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div> -->

    <div id="googleSignIn" v-if="isLoggedOut">
        <img src="../assets/icons/btn_google_signin_light_normal_web.png" alt="signInGoogle"
            @click.prevent="signInWithGoogle">
        <!-- <button class="btn btn-google" @click.prevent="signInWithGoogle">Google</button> -->
    </div>
</template>

<script>
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const providergo = new GoogleAuthProvider();
const providerfb = new FacebookAuthProvider();

export default {
    name: "LoginAuth",
    data() {
        return {
            isLoggedOut: true
        }
    },
    methods: {
        signInWithGoogle() {
            signInWithPopup(auth, providergo)
                .then((result) => {
                    console.log(result);
                }).catch((error) => {
                    console.log(error);
                });
        },
        signInWithFacebook() {
            signInWithPopup(auth, providerfb)
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>