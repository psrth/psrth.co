<template>
	<nav>
		<div class="name" id="name">
			<h1>@psrth</h1>
		</div>
		<ul>
			<a
				href="https://twitter.com/parthsharma_151"
				target="_blank"
				rel="noopener noreferrer"
			>
				<li class="first"><i class="fab fa-twitter fa-lg"></i></li>
			</a>
			<a
				href="https://instagram.com/parthsharma151"
				target="_blank"
				rel="noopener noreferrer"
			>
				<li><i class="fab fa-instagram fa-lg"></i></li>
			</a>
			<a
				href="https://github.com/psrth"
				target="_blank"
				rel="noopener noreferrer"
			>
				<li><i class="fab fa-github fa-lg"></i></li>
			</a>
			<a
				href="mailto:parthsharma151@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<li><i class="fas fa-envelope fa-lg"></i></li>
			</a>
			<a
				href="https://www.behance.net/psrth"
				target="_blank"
				rel="noopener noreferrer"
			>
				<li class="last">
					<i class="fab fa-behance-square fa-lg"></i>
				</li>
			</a>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
	color: black;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.name {
	display: flex;
	align-items: flex-end;
}

.name h1 {
	margin: 0 0 0 0;
	font-size: 1.8rem;
	font-weight: 600;
	border-bottom: 6px solid rgb(230, 230, 230);
	line-height: 0.4;
}

ul {
	margin: 0;
	list-style-type: none;
	display: flex;
	flex-direction: row;
}

li {
	margin-left: 2rem;
	padding: 10px;
	display: flex;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
	background-color: rgb(230, 230, 230);
	transition: all ease 0.2s;
}

li:hover {
	background-color: rgb(230, 230, 230);
	transform: translateY(-5px);
	transition: all ease 0.2s;
}

.fa-twitter {
	color: #2bf1ff;
}

.fa-instagram {
	color: #c457ff;
}

.fa-github {
	color: #3ed3a1;
}

.fa-envelope {
	color: #e3655b;
}

.fa-behance-square {
	color: #228cdb;
}

@media screen and (max-width: 1250px) {
	nav {
		flex-direction: column;
		margin-top: 3rem;
	}

	li {
		margin-left: 0;
		margin-right: 2rem;
	}

	ul {
		justify-content: flex-start;
		align-items: flex-start;
		padding-inline-start: 0;
		margin-top: 2rem;
	}
}

@media screen and (max-width: 530px) {
	ul {
		width: 100%;
		justify-content: space-between;
	}

	.first {
		margin-right: 2rem;
		margin-left: 0;
	}

	.last {
		margin: 0;
	}
}

@media screen and (max-width: 410px) {
	li {
		margin-right: 1rem;
	}

	.first {
		margin-right: 1rem;
		margin-left: 0;
	}

	.last {
		margin: 0;
	}

	i {
		height: 80%;
	}
}
</style>
