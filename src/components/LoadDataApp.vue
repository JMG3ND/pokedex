<template>
    <div class="screen-loader">
        <LoadSpinner />
    </div>
</template>

<script setup>
import LoadSpinner from './LoadSpinner.vue';
</script>

<style lang="scss">
@import '../assets/colors.scss';

.screen-loader {
    background-color: $colorD;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>