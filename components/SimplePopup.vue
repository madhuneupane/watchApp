<template>
    <transition name="popupAnimation">
        <div v-show="popupActive" class="popup">
            <transition name="popupAnimationInner">
                <div v-show="popupActive" class="popupInner">
                    <img @click="close" src="../assets/icons/close.svg" alt="close" id="closePopup">
                    <!-- Modal content -->
                    <slot />
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
export default {
    props: ["popupActive"],
    setup(props, { emit }) {
        const close = () => {
            emit("close");
        }
        return { close };
    },
}
</script>