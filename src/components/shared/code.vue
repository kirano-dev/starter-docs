<script setup>
	import CopyIcon from '@icons/copy.svg?raw'
	import CheckIcon from '@icons/check.svg?raw'
	
	const codeRef = ref()
	const isCopied = ref(false)
	
	const handleCopy = () => {
		window.navigator.clipboard.writeText(codeRef.value.innerText)
		isCopied.value = true
		
		setTimeout(() => isCopied.value = false, 1000)
	}
</script>

<template>
	<div class="code" ref="codeRef">
		<slot></slot>
		<div class="code__copy" @click="handleCopy">
			<i v-auto-animate v-html="isCopied ? CheckIcon : CopyIcon"></i>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.code {
		background: $block;
		padding: 20px;
		border-radius: 4px;
		margin-bottom: 15px;
		position: relative;
		
		&__copy {
			position: absolute;
			top: 10px;
			right: 10px;
			width: 30px;
			height: 30px;
			cursor: pointer;
			transition: .1s ease-in-out;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 5px;
			padding: 5px;
			
			&:hover {
				background: #4f4f4f;
			}
		}
	}
	
	@media screen and (max-width: 1050px) {
		.code {
			padding: 10px;
			
			&__copy {
				
				top: 5px;
				right: 5px;
				width: 25px;
				height: 25px;
			}
		}
	}
</style>