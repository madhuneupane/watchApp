<template>
  <div class="camera">
    <video autoplay class="feed"></video>
    <canvas></canvas>

    <button @click.prevent="displayImage">snap</button>
    <img v-bind:src="imageSource" />
  </div>
</template>
<script>
// import { getStorage } from "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
  name: "JoinSignUp",
  data() {
    return {
      imageSource: "",
      //a: "",
    };
  },
  methods: {
    displayImage() {
      //let ratio = window.innerHeight > window.innerWidth ? 16 / 9 : 9 / 16;
      const picture = document.querySelector("canvas");
      const ctx = picture.getContext("2d");

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      this.imageSource = document.querySelector("video");
      ctx.drawImage(
        document.querySelector("video"),
        0,
        0,
        picture.width,
        picture.height
      );

      this.imageSource = picture.toDataURL();
      // let a = "";
      picture.toBlob((blob) => {
        const storage = getStorage();
        const storageRef = ref(storage, "madhu29");
        uploadBytes(storageRef, blob).then(() => {
          getDownloadURL(storageRef).then((result) => {
            console.log(result);
          });
        });
      });
    },
    init() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      } else {
        console.log("ok");
      }
    },
  },
  beforeMount() {
    this.init();
  },
};
</script>
<style>
.feed {
  display: block;
  margin: 0 auto;
  widows: 100%;
  max-width: 1200px;
  background-color: #171717;
  padding: 25px;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.2);
}
.camera {
  width: 100vw;
  height: 100vw;
  box-sizing: border-box;
}
</style>