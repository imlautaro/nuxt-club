import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api',
		'@nuxtjs/tailwindcss',
	],
	components: true,
	generate: {
		interval: 2000,
	},
	srcDir: 'src',
	target: 'static',
}

export default config
