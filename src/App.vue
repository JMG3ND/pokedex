<template>
	<div class="justify-content">
		<TopNavegationBar />
		<RouterView />
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TopNavegationBar from './components/TopNavegationBar.vue';
import { useStoreTier } from './store/TierPokemmo';
const storetier = useStoreTier();
storetier.getAllPokemos() //Obtiene la lista de todos los pokemones hasta la 5ta generación para pokemmo

</script>

<style lang="scss">
@import './assets/colors.scss';

.justify-content {
	max-width: 1200px;
	margin: 0 auto;
}

*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-color: $colorD;
}
</style>