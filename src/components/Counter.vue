<template>
	<div>
		{{ counter }}
		<button @click="add">Add</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useCounter from '~/composables/useCounter'

export default defineComponent({
	setup() {
		const { counter, add } = useCounter()
		return { counter, add }
	},
})
</script>
