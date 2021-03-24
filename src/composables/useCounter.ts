import { ref } from '@nuxtjs/composition-api'

export default () => {
	const counter = ref(0)

	const add = () => {
		counter.value++
	}

	return { counter, add }
}
