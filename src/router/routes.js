export default [
	{
		path: '/',
		name: 'nuxt',
		component: () => import('@views/nuxt.vue'),
	},
	{
		path: '/vue',
		name: 'vue',
		component: () => import('@views/vue.vue'),
	},
 ]
