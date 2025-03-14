<template>
	<slot></slot>
	
	<div class="modals">
		<help />
	</div>
</template>
<script setup lang="ts">
import Help from "@/components/modals/help.vue";
</script>