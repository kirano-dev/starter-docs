<script setup>
	defineProps({
		tab: Boolean,
	})
</script>

<template>
	<div :class="{
		li: true,
		li_tab: tab,
	}">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
	.li {
		position: relative;
		padding-left: 20px;
		margin-bottom: 10px;
		
		&.li_tab {
			margin-left: 30px;
		}
		
		&::before {
			content: '';
			background: $accent;
			border-radius: 100%;
			width: 10px;
			height: 10px;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	
	@media screen and (max-width: 1050px) {
		.li {
			margin-bottom: 8px;
			
			&::before {
				width: 6px;
				height: 6px;
			}
		}
	}
</style>