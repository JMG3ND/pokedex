<script setup>
import PokemonCard from '../components/PokemonCard.vue'
import { ref } from 'vue';
import axios, { formToJSON } from 'axios';

const dataPokemons = ref([]);
let position = 0;
const limit = 80;

const nextPage = () => {
    position += 80;
    getData();
};
const previewPage = () => {
    position -= 80;
    getData();
};

const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${position}&limit=${limit}`)
        dataPokemons.value = data.results;
    } catch (error) {
        console.log(error)
    }
};

getData();
</script>

<template>
    <div class="colocador">
        <div class="button-group">
            <button :disabled="position<=0" @click="previewPage" class="button-group__button"> <img src="../components/image/chevron-left-solid.svg"
                    alt=""> </button>
            <button :disabled="position>=1199" @click="nextPage" class="button-group__button"> <img src="../components/image/chevron-right-solid.svg"
                    alt=""> </button>
        </div>
        <div class="poke-list">
            <div class="poke-list__separator-container">
                <ul class="poke-list__container">
                    <li class="poke-list__item" v-for="pokemon in dataPokemons">
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

    &::-webkit-scrollbar{
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