<script setup>

</script>

<template>
	<div class="title"><slot></slot></div>
</template>

<style scoped lang="scss">
	.title {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 25px;
		line-height: 150%;
	}
	
	@media screen and (max-width: 1050px) {
		.title {
			font-size: 18px;
			margin-bottom: 15px;
		}
	}
</style>