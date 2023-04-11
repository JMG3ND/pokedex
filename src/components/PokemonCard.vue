<script setup>
import axios from 'axios';
import { ref } from 'vue';
import LoadSpinner from './LoadSpinner.vue';

const props = defineProps(['name', 'urlPokemon'])

//variables reactivas para los tipos del pokemon
const typePokemon = ref([]);

//variable que define si la imagen está cargando
const loadImage = ref(true);
const cargando = () => {
    loadImage.value = false;
}

// Consultar la API para obtener la imágen del pokemon
const urlImage = ref('');
const getData = async () => {
    try {
        const { data } = await axios.get(props.urlPokemon);
        urlImage.value = data.sprites.front_default;
        idPokemon.value = data.id;
        data.types.forEach(element => {
            typePokemon.value.push(element.type.name)
        });
    } catch (error) {
        console.log(error)
    }
}
getData();

//Mostrar ocultar la card del pokemon
const idPokemon = ref(0);
let showPokemon = ref(false);
const mostrarPokemon = () => showPokemon.value = true;
const ocultarPokemon = () => showPokemon.value = false;

</script>

<template>
    <LoadSpinner v-if="loadImage"></LoadSpinner>
    <img @click="mostrarPokemon()" @load="cargando()" class="pokemon-card" :class="loadImage ? 'pokemon-card--load' : ''"
        :src="urlImage" :alt="name">
    <div @click="ocultarPokemon" class="show-pokemon" :class="showPokemon ? 'show-pokemon--show' : ''">
        <div class="show-pokemon__card">
            <header class="show-pokemon__header">
                <h2 class="show-pokemon__title">N. {{ idPokemon }} / {{ name.toUpperCase() }}</h2>
            </header>
            <article class="show-pokemon__article">
                <div class="show-pokemon__aling">
                    <img class="show-pokemon__image" :src="urlImage" :alt="name">
                    <div class="show-pokemon__type-group">
                        <template v-for="types in typePokemon">
                            <img class="show-pokemon__type" v-if="types === 'bug'" src="./image/bug.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'dark'" src="./image/dark.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'dragon'" src="./image/dragon.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'electric'" src="./image/electric.png"
                                :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'fairy'" src="./image/fairy.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'fighting'" src="./image/fighting.png"
                                :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'fire'" src="./image/fire.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'flying'" src="./image/flying.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'ghost'" src="./image/ghost.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'grass'" src="./image/grass.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'ground'" src="./image/ground.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'ice'" src="./image/ice.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'water'" src="./image/water.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'steel'" src="./image/steel.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'psychic'" src="./image/psychic.png"
                                :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'normal'" src="./image/normal.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'rock'" src="./image/rock.png" :alt="types">
                            <img class="show-pokemon__type" v-if="types === 'poison'" src="./image/poison.png" :alt="types">
                        </template>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/colors.scss';

.pokemon-card {
    max-width: 96px;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.5s;

    &:hover {
        background-color: $colorC;
    }

    &--load {
        display: none;
    }
}

@media screen and (min-width: 559px) {
    .show-pokemon {
        z-index: 100;
        display: none;
        align-items: center;
        justify-content: center;
        background-color: $especial;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;

        &__aling {
            margin: 0 auto;
            display: flex;
            gap: 1rem;
            align-items: center;
            justify-content: space-evenly;
        }

        &__type-group {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__type {
            max-width: 100px;
        }

        &--show {
            display: flex;
        }

        &__card {
            background-color: $colorA;
            border-radius: 20px;
            width: 558px;
            height: 400px;
        }

        &__image {
            width: 275px;
            background-color: $colorE;
            border-radius: 20px;
        }

        &__header {
            background-color: $colorD;
            color: $colorC;
            border-radius: 20px 20px 0 0;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__button-close {
            border: none;
            border-radius: 20px;
            background-color: $colorA;
            padding: 0.5rem 1rem;
        }

        &__article {
            display: flex;
            height: 90%;
        }
    }
}

@media screen and (max-width: 558px) {
    .show-pokemon {
        z-index: 100;
        display: none;
        align-items: center;
        justify-content: center;
        background-color: $especial;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;

        &__aling {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            justify-content: space-evenly;
        }

        &__type-group {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__type {
            max-width: 100px;
        }

        &--show {
            display: flex;
        }

        &__card {
            background-color: $colorA;
            border-radius: 20px;
            width: 100%;
            height: 90%;
        }

        &__image {
            width: 275px;
            background-color: $colorE;
            border-radius: 20px;
        }

        &__header {
            background-color: $colorD;
            color: $colorC;
            border-radius: 20px 20px 0 0;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__button-close {
            border: none;
            border-radius: 20px;
            background-color: $colorA;
            padding: 0.5rem 1rem;
        }

        &__article {
            display: flex;
            height: 90%;
        }
    }
}
</style>