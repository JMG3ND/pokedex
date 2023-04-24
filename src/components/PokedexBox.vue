<script setup>
import PokemonCard from '../components/PokemonCard.vue';
import { useStoreDataPokemon } from '../store/storeDataPokemon';

const dataStore = useStoreDataPokemon();
</script>

<template>
    <div v-if="dataStore.dataPokemons" class="colocador">
        <div class="poke-list">
            <div class="poke-list__separator-container">
                <ul class="poke-list__container">
                    <li class="poke-list__item" v-for="pokemon in dataStore.dataPokemons">
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
</style>