import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
	],
	components: true,
	generate: {
		interval: 2000,
	},
	googleFonts: {
		families: {
			Inter: [400, 600, 700],
		},
	},
	srcDir: 'src',
	target: 'static',
}

export default config
