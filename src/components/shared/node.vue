<script setup>
	import HelpIcon from '@icons/help.svg?raw'
	import ModalStore from "@/stores/ModalStore.js";

	const props = defineProps({
		name: String,
		comment: String,
		help: String,
	})
	
	const segments = inject('node-segment', '');
	provide('node-segment', `${segments}/${props.name}`)

	const isOpen = ref(false)
	
	const handleToggle = () => isOpen.value = !isOpen.value
	
	const slots = useSlots()
	
	const handleHelp = () => {
		ModalStore.setStateFor('help', {
			title: segments + '/' + props.name,
			content: slots.help()[0].children,
		})
		ModalStore.open('help')
	}
</script>

<template>
	<div class="folder" v-auto-animate>
		<div class="folder__row" @click="handleToggle">
			<div class="folder__details">
				<div class="folder__name">{{ name }}</div>
				<div class="folder__comment">{{ comment }}</div>
			</div>
			
			<div class="folder__help" @click.prevent="handleHelp" v-if="slots.hasOwnProperty('help')">
				<i v-html="HelpIcon"></i>
			</div>
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
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		cursor: pointer;
		transition: .1s ease-in-out;
		
		&:hover {
			background: #3a3a3a;
			
			.folder__help {
				opacity: 1;
			}
		}
	}
	
	&__help {
		transition: .2s ease-in-out;
		cursor: pointer;
		opacity: 0;
		
		&:hover {
			transform: scale(1.05);
		}
	}
	
	&__details {
		display: flex;
		align-items: center;
		gap: 10px;
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