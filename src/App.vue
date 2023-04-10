<script setup>
import { RouterView } from 'vue-router';
import TopNavegationBar from './components/TopNavegationBar.vue';
</script>

<template>
	<div class="justify-content">
		<TopNavegationBar />
		<RouterView />
	</div>
</template>

<style lang="scss">
@import './assets/colors.scss';

.justify-content {
	max-width: 1200px;
	margin: 0 auto;
}
*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
	background-color: $colorD;
}
</style>