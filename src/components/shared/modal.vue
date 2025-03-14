<script setup>
	import ModalStore from "@/stores/ModalStore.js";
	import TimesIcon from "@icons/times.svg?raw";
	
	defineProps({
		name: String,
		content: String,
	})
</script>

<template>
	<div class="modal" v-if="ModalStore.modals[name]">
		<div class="modal__title">
			<slot name="title"></slot>
		</div>
		<div class="modal__content" v-if="content" v-html="content"></div>
		
		<i v-html="TimesIcon" @click="ModalStore.close(name)" class="modal__close"></i>
	</div>
</template>

<style scoped lang="scss">
	.modal {
		padding: 30px;
		position: relative;
		width: 800px;
		max-width: 100%;
		background: $block;
		border-radius: 10px;
		
		&__title {
			font-size: 18px;
			font-weight: 700;
			text-align: center;
			margin-bottom: 20px;
		}
		
		&__content {
			font-size: 16px;
		}
		
		&__close {
			cursor: pointer;
			width: 25px;
			height: 25px;
			position: absolute;
			top: 20px;
			right: 20px;
		}
	}
</style>