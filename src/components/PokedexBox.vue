<script setup>
import PokemonCard from '../components/PokemonCard.vue';
import { useGetData } from '../composables/getData';

const { data, getData } = useGetData();

getData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=80');
</script>

<template>
    <div v-if="data" class="colocador">
        <div class="button-group">
            <button :disabled="!data.previous" @click="getData(data.previous)" class="button-group__button"> <img
                    src="../components/image/chevron-left-solid.svg" alt=""> </button>
            <button :disabled="!data.next" @click="getData(data.next)" class="button-group__button"> <img
                    src="../components/image/chevron-right-solid.svg" alt=""> </button>
        </div>
        <div class="poke-list">
            <div class="poke-list__separator-container">
                <ul class="poke-list__container">
                    <li class="poke-list__item" v-for="pokemon in data.results">
                        <PokemonCard :key="pokemon.name" :name="pokemon.name" :urlPokemon="pokemon.url">
                        </PokemonCard>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/_colors.scss';

.colocador {
    position: relative;
}

.poke-list {
    display: flex;
    border-radius: 10px;
    background-color: $colorB;
    max-height: 93vh;
    overflow-y: auto;

    &__separator-container {
        min-width: 100%;
    }

    &__container {
        display: grid;
        margin: 0 auto;
        width: fit-content;
        list-style-type: none;
        border-radius: 10px;
    }

    &::-webkit-scrollbar {
        background-color: $colorB;
        border-radius: 5px;
    }
}

//Función que crea un @media para cada 96px que salte en resolución
@for $i from 1 through 10 {
    $res: 96px * $i;

    @media screen and (min-width: $res) {
        .poke-list {
            &__container {
                grid-template-columns: repeat($i, 1fr);
            }
        }
    }
}

.button-group {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: -50px;
    right: 10px;

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
</style>