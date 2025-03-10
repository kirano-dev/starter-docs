<script setup>
import CopyIcon from '@icons/copy.svg?raw'
import CheckIcon from '@icons/check.svg?raw'

const copyRef = ref()
const isCopied = ref(false)

const handleCopy = () => {
	window.navigator.clipboard.writeText(copyRef.value.innerText)
	isCopied.value = true
	
	setTimeout(() => isCopied.value = false, 1000)
}

defineProps({
	link: String,
	copy: Boolean,
})
</script>

<template>
	<a :class="{
		accent: true,
		accent_link: link,
		accent_copy: copy,
		accent_copied: isCopied,
	}" :href="link" target="_blank" ref="copyRef" @click="handleCopy">
		<slot></slot>
		<div v-if="copy" class="accent__copy">
			<i :v-auto-animate="{ duration: 300 }" v-html="isCopied ? CheckIcon : CopyIcon"></i>
		</div>
	</a>
</template>

<style scoped lang="scss">
.accent {
	color: $accent;
	position: relative;
	
	&.accent_copy {
		cursor: pointer;
		
		&:hover {
			.accent__copy {
				opacity: 1;
			}
		}
	}
	
	&.accent_copied {
		.accent__copy {
			opacity: 1;
		}
	}
	
	&__copy {
		position: absolute;
		display: flex;
		opacity: 0;
		top: 50%;
		width: 30px;
		height: 30px;
		transform: translateY(-50%);
		right: -35px;
		cursor: pointer;
		transition: .2s ease-in-out;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		padding: 5px;
		
		&:hover {
			background: #4f4f4f;
		}
	}
}
</style>