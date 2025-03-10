<script setup>
	defineProps({
		tab: Number,
		content: String,
		language: String,
	})
</script>

<template>
	<div :class="{
		code__line: true,
		code__line_tab: tab,
	}" :style="tab ? `--tab-size: ${tab}` : ''">
		<highlightjs
			:autodetect="!language"
			:language='language'
			:code="$slots.default ? $slots.default()[0].children : content"
		/>
	</div>
</template>

<style scoped lang="scss">
	.code__line {
		--tab-size: 1;
		
		&.code__line_tab {
			padding-left: calc(var(--tab-size) * 30px);
		}
 	}
</style>