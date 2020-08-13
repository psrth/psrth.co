<template>
	<div>
		<h1>Colophone</h1>
		<p>
			This website is set in
			<a
				href="https://fonts.adobe.com/fonts/gibson"
				target="_blank"
				rel="noopener noreferrer"
				>Gibson</a
			>, and uses
			<a
				href="https://fontawesome.com/"
				target="_blank"
				rel="noopener noreferrer"
				>Font Awesome</a
			>
			for all the icons. It's coded in
			<a
				href="https://vuejs.org/"
				target="_blank"
				rel="noopener noreferrer"
				>Vue.js</a
			>
			and uses Netlify functions along with the
			<a
				href="https://www.behance.dev"
				target="_blank"
				rel="noopener noreferrer"
				>Behance</a
			>
			and
			<a
				href="https://www.last.fm/api/"
				target="_blank"
				rel="noopener noreferrer"
				>Last.fm</a
			>
			APIs. <br><br>Check out the original
			<a
				href="https://github.com/vanajmoorthy/vanajmoorthy.com"
				target="_blank"
				rel="noopener noreferrer"
				>source code</a
			> 
			here! 
		</p>
	</div>
</template>

<script>
export default {
	name: "Colophon",
};
</script>

<style scoped>
a {
	color: black;
}

div {
	width: 45%;
}
h1 {
	font-size: 1.8rem;
	color: black;
	font-weight: 500;
	border-bottom: 10px solid rgb(230, 230, 230);
	line-height: 0.4;
	width: 145px;
	margin-block-start: 0;
}
p {
	color: black;
	font-weight: 300;
	font-size: 1rem;
	line-height: 1.3;
	margin-block-end: 0;
}

a:hover {
	opacity: 0.7;
	transition: opacity 0.2s ease;
}

@media screen and (max-width: 610px) {
	div {
		width: 100%;
	}
}
</style>
