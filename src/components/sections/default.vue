<script setup>
import Intersection from "@/stores/Intersection.js";

import { useIntersectionObserver } from '@vueuse/core'
import { useTemplateRef } from 'vue'

	const props = defineProps({
		title: String,
		id: String,
	})

const target = useTemplateRef('target')

useIntersectionObserver(
	target,
	([entry]) => {
		Intersection.isVisible[props.id] = entry?.isIntersecting || false
	},
)
</script>

<template>
	<section class="section" ref="target" :id="id">
		<shared-title>{{ title }}</shared-title>
		<slot></slot>
	</section>
</template>

<style scoped lang="scss">
	.section {
		margin-bottom: 40px;
	}
	
	@media screen and (max-width: 1050px) {
		.section {
			margin-bottom: 30px;
		}
	}
</style>