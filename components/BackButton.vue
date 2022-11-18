<template>
    <button type="submit" class="secondaryBtn">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: "BackButton",
    props: ['title']
}
</script>