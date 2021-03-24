<template>
	<select class="bg-white dark:bg-gray-800" v-model="$colorMode.preference">
		<option value="system">System</option>
		<option value="light">Light</option>
		<option value="dark">Dark</option>
	</select>
</template>

<style lang="postcss">
body {
	@apply bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100;
}
</style>
