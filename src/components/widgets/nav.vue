<script setup>
import BurgerIcon from '@icons/burger.svg?raw'
import TimesIcon from '@icons/times.svg?raw'
import NuxtIcon from '@icons/nuxt.svg?raw'
import VueIcon from '@icons/vue.svg?raw'
import LaravelIcon from '@icons/laravel.svg?raw'
import Intersection from "@/stores/Intersection.js";
import {useRoute} from "vue-router";

const route = useRoute()

const items = computed(() => ({
	vue: [
		{ id: 'start', label: 'Разворачивание проекта' },
		{ id: 'stages', label: 'Этапы работы над проектом' },
		{ id: 'file-structure', label: 'Файловая структура' },
		{ id: 'naming', label: 'Нейминг' },
		{ id: 'import', label: 'Импорт' },
		{ id: 'formats', label: 'Форматы' },
		{ id: 'rules', label: 'Общие правила' },
		{ id: 'repository-pattern', label: 'Паттерн репозиториев' },
		{ id: 'dry', label: 'DRY' },
		{ id: 'dependencies', label: 'Использование сторонних зависимостей' },
	],
	nuxt: [
		{ id: 'start', label: 'Разворачивание проекта' },
		{ id: 'stages', label: 'Этапы работы над проектом' },
		{ id: 'file-structure', label: 'Файловая структура' },
		{ id: 'naming', label: 'Нейминг' },
		{ id: 'import', label: 'Импорт' },
		{ id: 'formats', label: 'Форматы' },
		{ id: 'rules', label: 'Общие правила' },
		{ id: 'repository-pattern', label: 'Паттерн репозиториев' },
		{ id: 'dry', label: 'DRY' },
		{ id: 'dependencies', label: 'Использование сторонних зависимостей' },
	],
	laravel: [
		{ id: 'media', label: 'Работа с медиа' },
		{ id: 'sms', label: 'Работа с СМС информированием' },
		{ id: 'payment', label: 'Работа с платежными системами' },
	]
}[route.name]))

const isOpen = ref(false)

const handleToggle = () => isOpen.value = !isOpen.value

</script>

<template>
	<div :class="{
		nav: true,
		nav_active: isOpen
	}" @click="handleToggle">
		<div class="templates">
			<router-link to="/" :class="{templates__item: true, templates__item_active: route.name === 'nuxt'}">
				<i v-html="NuxtIcon"></i> Nuxt
			</router-link>
			<router-link to="vue" :class="{templates__item: true, templates__item_active: route.name === 'vue'}">
				<i v-html="VueIcon"></i> Vue
			</router-link>
			<router-link to="laravel" :class="{templates__item: true, templates__item_active: route.name === 'laravel'}">
				<i v-html="LaravelIcon"></i> Laravel
			</router-link>
		</div>
		<a
			v-for="item in items"
			:href="`#${item.id}`"
			:class="{
				nav__item: true,
				nav__item_active: Intersection.isVisible[item.id]
			}"
		>{{ item.label }}</a>
	</div>
	
	<div class="nav__toggler"  @click="handleToggle">
		<i v-auto-animate v-html="isOpen ? TimesIcon : BurgerIcon"></i>
	</div>
</template>

<style scoped lang="scss">
	.nav {
		background: $block;
		border-radius: 4px;
		padding: 20px;
		height: fit-content;
		position: sticky;
		top: 30px;
		width: 300px;
		
		&__item {
			color: $comment;
			transition: .1s ease-in-out;
			padding-left: 20px;
			text-decoration: none;
			display: block;
			position: relative;
			
			&:hover {
				color: $text;
			}
			
			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				width: 10px;
				height: 10px;
				background: $comment;
				border-radius: 100%;
			}
			
			&.nav__item_active {
				color: $text;
				
				&::before {
					background: $accent;
				}
			}
			
			&+.nav__item {
				margin-top: 10px;
			}
		}
		
		&__toggler {
			border-radius: 100%;
			position: fixed;
			top: 20px;
			right: 20px;
			width: 80px;
			height: 80px;
			display: none;
			align-items: center;
			justify-content: center;
			z-index: 10;
			background: #141414;
			
			i {
				width: 35px;
				height: 35px;
			}
		}
	}
	
	.templates {
		display: grid;
		gap: 5px;
		margin-bottom: 15px;
		grid-template-columns: repeat(2, 1fr);
		
		&__item {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			border-radius: 5px;
			flex: 1;
			height: 40px;
			font-weight: 700;
			transition: .1s ease-in-out;
			background: transparent;
			cursor: pointer;
			border: 2px solid transparent;
			text-decoration: none;
			color: $text;
			
			&:nth-child(odd):last-child {
				grid-column: span 2;
			}
			
			&:hover {
				background: #434343;
			}
			
			&.templates__item_active {
				background: #434343;
			}
			
			i {
				width: 30px;
				height: 30px;
			}
		}
	}
	
	@media screen and (max-width: 1050px) {
		.nav {
			pointer-events: none;
			top: -100%;
			position: fixed;
			transition: .3s ease-in-out;
			z-index: 9;
			left: 20px;
			right: 20px;
			width: auto;
			
			&.nav_active {
				pointer-events: auto;
				top: 120px;
			}
			
			&__toggler {
				display: flex;
			}
		}
	}
</style>