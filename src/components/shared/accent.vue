<script setup>
	defineProps({
		link: String
	})
</script>

<template>
	<a :class="{accent: true, accent_link: link}" :href="link" target="_blank"><slot></slot></a>
</template>

<style scoped lang="scss">
	.accent {
		color: $accent;
	}
</style>