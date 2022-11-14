<template>
  <NavigationBar />
  <div class="contactContainer">
    <h1 class="contactUsHeading">Send us a message</h1>
    <h3 class="contactUsHeading">We'd love to hear from you!</h3>

    <form class="formContact">
      <div>
        <p class="error">{{ fillMessage }}</p>
        <div class="form_email">
          <label>Email Address <span class="req">*</span></label>
          <input v-model="email" type="email" class="inputArea" placeholder="email@gmail.com" />
        </div>
        <div class="form_fName">
          <label>First Name <span class="req">*</span></label>
          <input v-model="fName" type="text" class="inputArea" />
        </div>
        <div class="form_lName">
          <label>Last Name <span class="req">*</span></label>
          <input v-model="lName" type="text" class="inputArea" />
        </div>
        <div class="form_subject">
          <label>Subject <span class="req">*</span></label>
          <input v-model="subject" class="inputArea" type="subject" placeholder="Subject line" />
        </div>
        <div class="form_message">
          <label>Message<span class="req">*</span></label><br>
          <textarea v-model="message" class="messageArea" id="description" placeholder="Message"></textarea>
        </div>

        <div class="btnContainer">
          <button type="submit" class="primaryBtn" @click.prevent="submitMessage(), togglePopup()">
            Submit
          </button>
        </div>
        <PopupModal @close="togglePopup" :popupActive="popupActive">
          <div class="popupContent">
            <h1>This is a Modal Header</h1>
            <p>This is a modal message</p>
          </div>
        </PopupModal>
        <!-- <button @click="toggleModal" type="button" class="secondaryBtn">Open Popup</button> -->
      </div>
    </form>
  </div>
  <FooterBar />
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import FooterBar from '../components/FooterBar.vue';
import PopupModal from '../components/PopupModal.vue';
import { ref } from 'vue';

export default {
  name: "ContactUs",
  components: {
    NavigationBar,
    FooterBar,
    PopupModal
  },
  data() {
    return {
      fillMessage: "",
      email: "",
      fName: "",
      lName: "",
      subject: "",
      message: ""
    }
  },
  methods: {
    submitMessage() {
      this.fillMessage = "";
      if (
        this.email == "" ||
        this.fName == "" ||
        this.lName == "" ||
        this.subject == "" ||
        this.message == ""
      ) {
        this.fillMessage = "Please fill in all the information";
      }
      this.email = "";
      this.fName = "";
      this.lName = "";
      this.subject = "";
      this.message = "";
    },
  },
  setup() {
    const popupActive = ref(false);
    const togglePopup = () => {
      popupActive.value = !popupActive.value;
    }
    return { popupActive, togglePopup };
  }
}
</script>