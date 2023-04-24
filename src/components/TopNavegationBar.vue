<template>
    <header class="top-navegation-bar">
        <div class="top-navegation-bar__separator">
            <img @click="backHome" class="top-navegation-bar__logo" src="./image/pokedex-ico.png" alt="logo de pokedex">
            <h1 class="top-navegation-bar__title">Pokedex</h1>
        </div>
        <div class="top-navegation-bar__separator">
            <div class="selected" :class="showSelectedClass">
                <button @click="activeSelected" class="selected__button"><img
                        src="../components/image/chevron-left-solid.svg" alt=""></button>
                <select v-model="select" @change="dataStore.selectedDataPokemons(select)">
                    <option value="All" selected>Todos</option>
                    <option value="OU">Over Used</option>
                    <option value="UU">Under Used</option>
                    <option value="NU">Never Used</option>
                    <option value="ST">Sin Tier</option>
                </select>
            </div>
            <div class="button-group">
                <button @click="dataStore.previewDataPokemons" class="button-group__button"> <img
                        src="../components/image/chevron-left-solid.svg" alt=""> </button>
                <button @click="dataStore.nextDataPokemons" class="button-group__button"> <img
                        src="../components/image/chevron-right-solid.svg" alt=""> </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useStoreDataPokemon } from '../store/storeDataPokemon';
import { ref, computed } from 'vue';
const dataStore = useStoreDataPokemon();
const select = ref('');

const showSelected = ref(false);
const activeSelected = () => showSelected.value = !showSelected.value;
const showSelectedClass = computed(() => showSelected.value ? 'selected--show' : '');
</script>

<style lang="scss">
@import '../assets/colors.scss';

.top-navegation-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

    &__separator {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .router-link-active {
        background-color: $colorE;
    }
}

.button-group {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;

    &__button {
        margin-left: 20px;
        cursor: pointer;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: $colorB;
        transition: background-color 0.5s;

        &:hover {
            background-color: $colorC;
        }

        img {
            width: 30%;
        }
    }
}

@media screen and (max-width: 500px) {
    .selected {
        position: fixed;
        background-color: $colorB;
        padding: 0.5rem 2rem;
        border: 1px solid $colorC;
        z-index: 2;
        top: 4rem;
        right: 0;
        transition: transform 0.3s;
        transform: translateX(100%);

        &__button {
            border: 1px solid $colorC;
            margin-left: 20px;
            cursor: pointer;
            position: absolute;
            right: 100%;
            top: 0;
            width: 40px;
            height: 100%;
            border-radius: 50% 0 0 50%;
            background-color: $colorB;
            transition: background-color 0.5s;

            &:hover {
                background-color: $colorC;
            }

            img {
                width: 30%;
            }
        }

        &--show {
            transform: unset;
        }

        select {
            background-color: $colorA;
            padding: 0.5rem;
            border-radius: 10px;
        }
    }
}

@media screen and (min-width: 501px) {
    .selected {
        &__button {
            display: none;
        }

        select {
            background-color: $colorA;
            padding: 0.5rem;
            border-radius: 10px;
        }
    }
}
</style>