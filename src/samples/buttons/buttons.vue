<template>
    <div style="padding: 0 1.125rem; margin: 3.75rem 0; display:flex; flex-direction: column;">
        <button class="primaryBtn" style="margin-bottom: 1rem;">Primary</button>
        <button class="secondaryBtn" style="margin-bottom: 1rem;">Secondary</button>
        <button class="tertiaryBtn" style="margin-bottom: 1rem;">Tertiary</button>
        <div class="inputArea">
            <label for="test">Testing</label>
            <input id="test" style="margin-bottom: 1rem;" type="text" placeholder="Placeholder">
        </div>
        <button class="createChllgBtn"></button>
    </div>
</template>

<script>
export default {
    name: 'buttons',
}
</script>
