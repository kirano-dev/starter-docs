<script setup>
	defineProps({
		tab: Boolean,
		content: String,
	})
</script>

<template>
	<div :class="{
		code__line: true,
		code__line_tab: tab,
	}">
		<highlightjs autodetect :code="$slots.default ? $slots.default()[0].children : content" />
	</div>
</template>

<style scoped lang="scss">
	.code__line {
		
		&.code__line_tab {
			padding-left: 30px;
		}
 	}
</style>