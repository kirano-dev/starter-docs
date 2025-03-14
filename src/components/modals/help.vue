<script setup>

import ModalStore from "@/stores/ModalStore.js";
</script>

<template>
	<shared-modal
		name="help"
		:content="ModalStore.state.help.content"
	>
		<template #title><folder>{{ ModalStore.state.help.title }}</folder></template>
	</shared-modal>
</template>

<style scoped lang="scss">

</style>