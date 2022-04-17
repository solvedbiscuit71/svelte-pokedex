<script>
	export let id, name, image;
</script>

<a class="card" href="/pokemon/{id}">
	<h2>{name}</h2>
	<img src={image} alt={name} />
</a>

<style>
	* {
		box-sizing: border-box;
		font-family: sans-serif;
	}

	.card {
		display: grid;
		place-content: center;

		padding: 1em;
		background-color: hsl(0, 0%, 94%);
		border-radius: 0.5em;
		box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.125);
	}

	.card:hover {
		cursor: pointer;
		background-color: hsl(0, 0%, 90%);
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
	}

	a {
		text-decoration: none;
		color: black;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 400;
		font-style: normal;

		text-align: center;
		text-transform: capitalize;
	}

	img {
		margin-top: 0.5em;
		transform: scale(1.25);
	}
</style>
