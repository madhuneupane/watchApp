<template>
  <div class="camera">
    <video autoplay class="feed"></video>
    <canvas></canvas>

    <button @click.prevent="displayImage">Snap</button>
    <img v-bind:src="imageSource" />
  </div>
</template>
<script>
// import { getStorage } from "firebase/storage";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
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
      let url = "";
      this.imageSource = picture.toDataURL();
      let a = "";
      picture.toBlob((blob) => {
        const newImg = document.createElement("img");
        url = URL.createObjectURL(blob);
        //console.log(url);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          a = reader.result;
          console.log("Base64:", reader.result);
        });
        // if you want to deal with it as base64 string (e.g. img src)
        console.log("a'" + reader.readAsDataURL(blob));

        const storage = getStorage();
        const storageRef = ref(storage, "madhu24");
        //console.log(storageRef);

        // 'file' comes from the Blob or File API
        // uploadBytes(storageRef, url, {
        //   contentType: "image/jpeg",
        // }).then((snapshot) => {
        //   console.log("hey" + snapshot);
        // });
        //const message2 = reader.result;
        uploadString(storageRef, this.imageSource).then((snapshot) => {
          console.log("Uploaded a base64 string!" + snapshot);
        });
        newImg.onload = () => {
          // no longer need to read the blob so it's revoked
          URL.revokeObjectURL(url);
        };

        newImg.src = url;
        document.body.appendChild(newImg);
      });
      // const storageRef = getStorage.ref(`madhu`).put(this.imageSource);
      // storageRef.snapshot.ref.getDownloadURL().then((url) => {
      //   const a = url;
      //   console.log(a);
      // });
      const storage = getStorage();
      const storageRef = ref(storage, "madhu29");
      //console.log(storageRef);

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, a, {
        contentType: "image/jpeg",
      }).then((snapshot) => {
        console.log("hey" + snapshot);
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