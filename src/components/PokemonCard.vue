<template>
    <LoadSpinner v-if="loadImage"></LoadSpinner>
    <template v-if="data">
        <img @click="mostrarPokemon()" @load="cargando()" class="pokemon-card"
            :class="loadImage ? 'pokemon-card--load' : ''" :src="data.sprites.front_default" :alt="data.name">
        <div @click="ocultarPokemon" class="show-pokemon" :class="showPokemon ? 'show-pokemon--show' : ''">
            <div class="show-pokemon__card">
                <header class="show-pokemon__header">
                    <h2 class="show-pokemon__title">N. {{ data.id }} / {{ data.name.toUpperCase() }}</h2>
                </header>
                <article class="show-pokemon__article">
                    <div class="show-pokemon__aling">
                        <img class="show-pokemon__image" :src="data.sprites.front_default" :alt="data.name">
                        <div class="show-pokemon__type-group">
                            <template v-for="types in data.types">
                                <div class="show-pokemon__image-type-container">
                                    <img class="show-pokemon__image-type" :src="`/types/${types.type.name}.png`"
                                        :alt="`image ${types.type.name}`">
                                </div>
                            </template>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </template>
</template>

<script setup>
import { ref } from 'vue';
import LoadSpinner from './LoadSpinner.vue';
import { useGetData } from '../composables/getData';

const props = defineProps(['name', 'urlPokemon'])
const { data, getData } = useGetData();

getData(props.urlPokemon);

//variable que define si la imagen está cargando
const loadImage = ref(true);
const cargando = () => loadImage.value = false

//Mostrar ocultar la card del pokemon
let showPokemon = ref(false);
const mostrarPokemon = () => showPokemon.value = true;
const ocultarPokemon = () => showPokemon.value = false;
</script>

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

        &__image-type-container {
            max-width: 100px;
        }

        &__image-type {
            width: 100%;
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

        &__image-type-container {
            max-width: 100px;
        }

        &__image-type {
            width: 100%;
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