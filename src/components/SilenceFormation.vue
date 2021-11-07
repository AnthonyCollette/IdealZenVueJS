<template>
	<section class="silence__formation">
		<div class="container">
			<div class="silence__formation__text-wrapper">
				<span class="h1-bis"
					><span class="white-text">Formati</span>on en présentiel</span
				>
				<p>
					Pour les formations en présentiel, je vous reçois à Couchey, petit
					village de la côte viticole entre Dijon et Beaune (21 - Côte d'Or)
				</p>
				<p>Retrouvez les dates de formations dans les</p>
				<div class="silence__formation__text-wrapper--buttons-wrapper">
					<div class="btn-wrapper">
						<a class="btn" href="https://idealzen.wordpress.com/">Acualités</a>
					</div>
					<span>ou</span>
					<div class="btn-wrapper">
						<router-link class="btn" to="/contact">contactez-moi !</router-link>
					</div>
				</div>
			</div>
			<div class="silence__formation__img-wrapper">
				<div class="img">
					<img src="../../public/images/couchey.png" alt="Photo de Couchey" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'SilenceFormation',
}
</script>

<style lang="scss" scoped>
.silence__formation {
	background-color: $color-006;
	padding: 150px 0 80px 0;
	position: relative;
	@include min($lg) {
		padding: 300px 0 80px 0;
	}
	.container {
		position: relative;
	}
	&__img-wrapper {
		z-index: 1;
		@include min($lg) {
			position: absolute;
			right: 40%;
			bottom: -8%;
		}
		@include min($xl) {
			right: 44.5%;
			bottom: -20%;
		}
		@include min($xxl) {
			right: 47.2%;
		}
		@include min($xxxl) {
			right: 48%;
		}
		.img {
			position: relative;
			&::before {
				@include min($lg) {
					content: '';
					position: absolute;
					width: 90%;
					height: 90%;
					border: 3px solid $color-007;
					bottom: 13%;
					right: 12%;
					z-index: -1;
				}
			}
		}
		img {
			width: 100%;
		}
	}
	&__text-wrapper {
		background-color: $color-005;
		position: relative;
		z-index: 2;
		padding: 45px 40px;
		@include min($lg) {
			padding: 45px 80px;
			margin-left: 37%;
			max-width: 50%;
		}
		@include min($xxxl) {
			max-width: 40%;
			margin-left: 40%;
		}
		.h1-bis {
			font-family: $font-003;
			font-size: $font-xxl;
			color: $color-003;
			position: absolute;
			bottom: 100%;
			font-weight: 600;
			left: 0;
			right: 0;
			margin: 0 auto;
			text-align: center;
			@include min($sm) {
				font-size: $font-xxxl;
			}
			@include min($lg) {
				margin: 0;
				left: auto;
				right: auto;
			}
		}
		&--buttons-wrapper {
			display: flex;
			justify-content: space-around;
			align-items: center;
			max-width: 100%;
			margin-top: 20px;
			color: $color-001;
			font-size: $font-lg;
			font-family: $font-001;
			flex-direction: column;
			@include min($lg) {
				flex-direction: row;
				margin-top: 50px;
			}
			span {
				font-size: $font-md;
				@include min($xxl) {
					font-size: $font-lg;
				}
			}
		}
	}
}
</style>
