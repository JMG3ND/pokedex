<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="top-navegation-bar">
        
        <RouterLink to="/home">Home</RouterLink>
    </header>
</template>

<style lang="scss">
.top-navegation-bar{
    max-width: 1500px;
    margin: 0 auto;
}
</style>