<template>
	<div class="hero">
		<div class="image-holder">
			<img src="../assets/psrth.png" alt="Image of Parth Sharma" />
		</div>
		<div class="text">
			<div class="top-text">
				<h1>
					Hi, I'm Parth. I'm a developer and graphic designer from New Delhi, India.
				</h1>
			</div>
			<div class="bottom-text">
				<p class="b-margin">
					<!-- Incoming freshman at <a href="https://www.bits-pilani.ac.in/" target="_BLANK">BITS Pilani</a>.  -->
					Currently working as lead front-end developer and UI/UX designer at <a href="https://www.indy.fit" target="_BLANK">Indy Fit</a>. 
					Also a co-founder of <a href="https://www.theorangeyak.co" target="_BLANK">The Orange Yak Co</a>.
				</p>
				<p class="b-margin">
					I'm an avid web and mobile app developer, as well as a UI/UX and graphic designer. 
					Proficient with Java, JS, Vue.js, Tailwind, Bootstrap, Flutter, and tools like Adobe XD, Blender 2.8, Illustrator, and Photoshop. 
					Currently learning backend in Django and Python. I also <a href="https://www.medium/psrth" target="_BLANK">write sometimes</a>.
				</p>
				<p>
					Drop me a message — I'm always looking to work on fun new projects. Grab my resume <a href="#" target="_BLANK">here</a>.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Hero",
};
</script>

<style scoped>
/* unvisited link */
	a:link {
	font-weight: 500;
	color: #4f4f4f;
	text-decoration: none;
	}

	/* visited link */
	a:visited {
		font-weight: 500;
	color: #4f4f4f;
	text-decoration: none;
	}

	/* mouse over link */
	a:hover {
	color: black;
	/* text-decoration: underline dotted black; */
	}

	/* selected link */
	a:active {
	color: black;
	}
img {
	height: 400px;
	border-radius: 8px;
}

.b-margin {
	margin-bottom: 1rem;
}

.image-holder {
	height: 125px;
}

.hero {
	display: flex;
}
.text {
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: black;
	margin-left: 2rem;
}

h1,
p {
	margin: 0;
}

h1 {
	font-weight: 500;
	font-size: 1.8rem;
}

p {
	font-weight: 300;
	font-size: 1rem;
	line-height: 1.3;
	/* text-align: justify; */
}

@media screen and (max-width: 1258px) {
	.hero {
		flex-direction: column;
	}

	img {
		height: 150px;
		width: auto;
		clip-path: circle(60px at center);
		position: relative;
		top: -20px;
		margin: 0;
	}

	.text {
		margin-left: 0;
		height: auto;
	}

	h1 {
		margin-bottom: 1rem;
		margin-top: 1rem;
	}
	
}
</style>
