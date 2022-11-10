<template>
<div class="404">
<h1>Oops!</h1>
<h1>We can't seem to find the page you are looking for.</h1>
<p>Don't Worry! You can try these useful links instead:</p>
<button type="submit" class="primaryBtn" @click.prevent="Home">
Home
</button>
<button type="submit" class="secondaryBtn" @click.prevent="Goback">
Go Back
</button>
</div>
</template>

<script>
export default {
  name: "ErrorPage"
}
</script>