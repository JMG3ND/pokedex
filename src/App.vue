<template>
	<div v-if="store.dataPokemons" class="justify-content">
		<TopNavegationBar />
		<PokedexBox />
	</div>
	<LoadDataApp v-else />
</template>

<script setup>
import LoadDataApp from './components/LoadDataApp.vue'
import PokedexBox from './components/PokedexBox.vue';
import TopNavegationBar from './components/TopNavegationBar.vue';
import { useStoreDataPokemon } from './store/storeDataPokemon';

const store = useStoreDataPokemon();
store.getDataAllPokemon();
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