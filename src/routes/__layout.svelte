<script>
	import Nav from '../components/nav.svelte';
</script>

<Nav />
<slot />

<style>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		font-family: sans-serif;
	}
</style>
