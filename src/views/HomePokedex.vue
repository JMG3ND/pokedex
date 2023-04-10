<script setup>
import PokemonCard from '../components/PokemonCard.vue'
import { ref } from 'vue';
import axios from 'axios';

const dataPokemons = ref([]);
let position = 0;
const limit = 80;

/*const nextPage = () => {
    position+=40;
    getData();
};*/

const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279`)
        dataPokemons.value = data.results;
    } catch (error) {
        console.log(error)
    }
};

getData();
</script>

<template>
    <!--<button @click="nextPage">Siguiente</button>-->
    <div class="poke-list">
        <div class="poke-list__separator-container" >
            <ul class="poke-list__container">
                <li class="poke-list__item" v-for="pokemon in dataPokemons.slice(position, limit)">
                    <PokemonCard :key="pokemon.name" :name="pokemon.name" :urlPokemon="pokemon.url">
                    </PokemonCard>
                </li>
            </ul>
        </div>
        <div class="poke-list__separator-container" >
            <ul class="poke-list__container">
                <li class="poke-list__item" v-for="pokemon in dataPokemons.slice(position+80, limit+80)">
                    <PokemonCard :key="pokemon.name" :name="pokemon.name" :urlPokemon="pokemon.url">
                    </PokemonCard>
                </li>
            </ul>
        </div>
    </div>
    <div class="button-group">
        <button class="button-group__button"> <img src="../components/image/chevron-left-solid.svg" alt=""> </button>
        <button class="button-group__button"> <img src="../components/image/chevron-right-solid.svg" alt=""> </button>
    </div>
</template>

<style lang="scss">
@import '../assets/_colors.scss';

.poke-list {
    overflow: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    display: flex;
    border-radius: 10px;
    background-color: $colorB;

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

    &__button {
        cursor: pointer;
        border: none;
        width: 50px;
        height: 50px;
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
}</style>