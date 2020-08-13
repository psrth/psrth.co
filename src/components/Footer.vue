<template>
	<div>
		<p>
			"Those who dream by day are cognizant of many things which escape those who dream only by night."
		</p>
		<div class="row">
			<p class="italic">
				— Edgar Allan Poe
			</p>
			<p class="top" @click="scrollToTop">Go to top</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer",
	methods: {
		scrollToTop() {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		},
	},
};
</script>

<style scoped>
.top {
	text-decoration: underline;
}

.top:hover {
	opacity: 0.7;
	transition: opacity 0.2s ease;
	cursor: pointer;
}

div {
	color: black;
}

.row {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.italic {
	font-style: italic;
	width: 70%;
}

p {
	line-height: 1.3;
}
</style>
