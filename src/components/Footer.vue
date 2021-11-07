<template>
	<footer :style="{ backgroundColor: color }">
		<div class="container">
			<div class="col-lg-4">
				<ul>
					<li>© Images et textes par Virginie Gembala</li>
					<li>
						© Site internet par
						<a href="http://www.anthonycollette.fr" target="_blank"
							>Anthony Collette</a
						>
					</li>
				</ul>
			</div>
			<div class="col-lg-4 mentions-wrapper">
				<router-link to="/mentions-legales">Mentions légales</router-link>
			</div>
			<div class="col-lg-4 social-media-footer">
				<a href="http://instagram.com/idealzen" target="_blank"
					><i class="fab fa-instagram-square"></i></a
				><a href="https://www.facebook.com/IdealZen21" target="_blank"
					><i class="fab fa-facebook-square"></i
				></a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	props: {
		color: String,
	},
}
</script>

<style lang="scss" scoped>
footer {
	background-image: url('../assets/images/footer.png');
	width: 100%;
	height: 383px;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
	display: flex;
	align-items: flex-end;
	color: $color-001;
	padding: 0 0 50px 0;
	a {
		color: $color-001;
		transition: 0.4s;
		&:hover {
			color: $color-007;
		}
	}
	.mentions-wrapper {
		margin: 20px 0;
		@include min($lg) {
			margin: 0;
		}
		a {
			font-family: $font-001;
			font-weight: 600;
			font-size: 24px;
		}
	}
	ul {
		li {
			font-family: $font-001;
			font-size: $font-md;
		}
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		@include min($lg) {
			flex-direction: row;
		}
	}
	.col-lg-4 {
		display: flex;
		flex-direction: column;
		align-items: center;
		@include min($lg) {
			width: 20vw;
		}
	}
	.social-media-footer {
		flex-direction: row;
		justify-content: center;
		i {
			font-size: 40px;
		}
		a:nth-of-type(2) {
			margin-left: 20px;
		}
	}
}

footer.colored-bg {
	background-color: $color-006;
}

footer.background {
	position: relative;
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 500px;
		background-color: $color-004;
		z-index: -1;
		bottom: 0;
	}
}
</style>
