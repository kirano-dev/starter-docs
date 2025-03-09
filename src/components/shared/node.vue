<script setup>
	defineProps({
		name: String,
		comment: String,
	})

	const isOpen = ref(false)
	
	const handleToggle = () => isOpen.value = !isOpen.value
</script>

<template>
	<div class="folder" v-auto-animate>
		<div class="folder__row" @click="handleToggle">
			<div class="folder__name">{{ name }}</div>
			<div class="folder__comment">{{ comment }}</div>
		</div>
		
		<div class="folder__body" v-if="isOpen">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped lang="scss">
.folder {
	&__row {
		background: $block;
		padding: 10px 20px;
		border-radius: 4px;
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
		transition: .1s ease-in-out;
		
		&:hover {
			background: #3a3a3a;
		}
	}
	
	&+.folder {
		margin-top: 10px;
	}
	
	&__comment {
		color: $comment;
	}
	
	.folder {
		margin-top: 10px;
		margin-left: 25px;
	}
}

@media screen and (max-width: 1050px) {
	.folder {
		&__row {
			padding: 10px;
			flex-wrap: wrap;
			row-gap: 5px;
		}
		
		&+.folder {
			margin-top: 5px;
		}
	}
}
</style>