<template>
	<div class="justify-content">
		<TopNavegationBar />
		<PokedexBox />
	</div>
</template>

<script setup>
import LoadDataApp from './components/LoadDataApp.vue';
import PokedexBox from './components/PokedexBox.vue';
import TopNavegationBar from './components/TopNavegationBar.vue';

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