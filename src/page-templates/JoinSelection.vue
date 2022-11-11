<template>
    <NavigationBar />
    <h1>Choose your favorite genre</h1>
    <h3>Select at least one genre</h3>
    <GenreComponent />

    <!-- Failing to call the genres (v-model in GenreComponent) into another file -->

    <BackButton title="Cancel" @click.prevent="backToHome" />
    <SaveButton @click.prevent="saveProfile" />
    <FooterBar />
</template>

<script>
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import GenreComponent from "../components/GenreComponent.vue";
import BackButton from "../components/BackButton.vue";
import SaveButton from "../components/SaveButton.vue"

export default {
    name: "JoinSelection",
    components: {
        NavigationBar,
        FooterBar,
        GenreComponent,
        BackButton,
        SaveButton
    },
    // data() {
    //     return {
    //         genres: []
    //     }
    // },

    // FirebaseError: Function addDoc() called with invalid data. Unsupported field value: undefined (found in field genres in document user/IfKD3RBeDBvk5MFhfIrp)

    methods: {
        backToHome() {
            this.$router.push("/");
        },
        async saveProfile() {
            try {
                const docRef = addDoc(collection(db, "user"), {
                    genres: this.genres,
                });
                this.$router.push("/");
                console.log(docRef);
            }
            catch (e) {
                console.log(e);
            }
        }
    }
}

</script>