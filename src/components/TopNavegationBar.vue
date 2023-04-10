<script setup>
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter()
const backHome = () => router.push('/home');
</script>

<template>
    <header class="top-navegation-bar">
        <img @click="backHome" class="top-navegation-bar__logo" src="./image/pokedex-ico.png" alt="logo de pokedex">
        <h1 class="top-navegation-bar__title">Pokedex</h1>
        <nav class="top-navegation-bar__nav">
            <RouterLink class="top-navegation-bar__link" to="/home">Home</RouterLink>
        </nav>
    </header>
</template>

<style lang="scss">
    @import '../assets/colors.scss';
    .top-navegation-bar {
        display: flex;
        align-items: center;
        gap: 1rem;

        &__logo {
            max-width: 50px;
        }

        &__title {
            color: $colorC;
        }

        &__link {
            padding: 0.5rem 1rem;
            display: inline-block;
            text-decoration: none;
            border-radius: 5px;
            color: black;

            &:hover {
                background-color: $colorA;
            }
        }

        .router-link-active{
            background-color: $colorE;
        }
    }
</style>