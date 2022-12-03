<template>
  <div class="offline">
    <img src="../assets/icons/camera-roll.svg" alt="cameraRoll">
    <h1>Error</h1>
    <h2 class="offlineMessage">Something went wrong. Please try again later</h2>
    <button type="submit" class="primaryBtn" @click.prevent="reload">
      Reload Page
    </button>
  </div>
</template>

<script>
export default {
  name: "OfflinePage",
  methods: {
    reload() {
      this.$router.push("/");
    }
  }
}
</script>