<template>
    <img class="image-type" :src="`/types/${type}.png`" :alt="`image ${type}`">
</template>

<script setup>
import bug from '../assets/types/bug.png';
import dark from '../assets/types/dark.png';
import dragon from '../assets/types/dragon.png';
import electric from '../assets/types/electric.png';
import fairy from '../assets/types/fairy.png';
import fighting from '../assets/types/fighting.png';
import fire from '../assets/types/fire.png';
import flying from '../assets/types/flying.png';
import ghost from '../assets/types/ghost.png';
import grass from '../assets/types/grass.png';
import ground from '../assets/types/ground.png';
import ice from '../assets/types/ice.png';
import normal from '../assets/types/normal.png';
import poison from '../assets/types/poison.png';
import psychic from '../assets/types/psychic.png';
import rock from '../assets/types/rock.png';
import steel from '../assets/types/steel.png';
import water from '../assets/types/water.png';

defineProps({
    type: String
});
const asingType = type => {
    const { url } = types.find(element => type === element.name);
    return url;
}

const types = [
    { name: 'bug', url: bug },
    { name: 'dark', url: dark },
    { name: 'dragon', url: dragon },
    { name: 'electric', url: electric },
    { name: 'fairy', url: fairy },
    { name: 'fighting', url: fighting },
    { name: 'fire', url: fire },
    { name: 'flying', url: flying },
    { name: 'ghost', url: ghost },
    { name: 'grass', url: grass },
    { name: 'ground', url: ground },
    { name: 'ice', url: ice },
    { name: 'normal', url: normal },
    { name: 'poison', url: poison },
    { name: 'psychic', url: psychic },
    { name: 'rock', url: rock },
    { name: 'steel', url: steel },
    { name: 'water', url: water }
];
</script>

<style lang="scss">
.image-type {
    width: 100%;
}
</style>