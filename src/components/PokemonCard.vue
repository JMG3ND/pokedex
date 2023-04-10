<script setup>
import axios from 'axios';
import { ref } from 'vue';

const props = defineProps(['name', 'urlPokemon'])

// Consultar la API para obtener la imágen del pokemon
const urlImage = ref('');
const getData = async () => {
    try {
        const {data} = await axios.get(props.urlPokemon);
        urlImage.value = data.sprites.front_default;
    } catch (error) {
        console.log(error)
    }
}
getData();

</script>

<template>
    <img class="pokemon-card" :src="urlImage" :alt="name">
</template>

<style lang="scss">
@import '../assets/colors.scss';
.pokemon-card {
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.5s;
    &:hover {
        background-color: $colorC;
    }
}
</style>