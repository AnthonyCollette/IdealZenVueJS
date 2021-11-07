<template>
	<section class="usui__presentiel">
		<div class="container">
			<img src="../../public/images/hands-and-dots.png" alt="" />
			<div class="usui__presentiel--intro">
				<p>
					La pratique du Reiki Usui Shiki Ryoho s'affine avec le temps et
					l'expérience et les questions peuvent venir longtemps après
					l'enseignement.
				</p>
				<p>
					Je reste disponible pour vous accompagner tout au long du chemin,
					aussi longtemps que nécessaire.
				</p>
			</div>
			<div class="usui__presentiel__text-wrapper">
				<span class="h1-bis"
					><span class="white-text">Formati</span>on en présentiel</span
				>
				<p>
					Pour les formations en présentiel, je vous reçois à Couchey, petit
					village de la côte viticole entre Dijon et Beaune (21 - Côte d'Or)
				</p>
				<p>Retrouvez les dates de formations dans les</p>
				<div class="usui__presentiel__text-wrapper--buttons-wrapper">
					<div class="btn-wrapper">
						<a class="btn" href="https://idealzen.wordpress.com/">Acualités</a>
					</div>
					<span>ou</span>
					<div class="btn-wrapper">
						<router-link class="btn" to="contact">contactez-moi !</router-link>
					</div>
				</div>
			</div>
			<div class="usui__presentiel__img-wrapper">
				<div class="img">
					<img src="../../public/images/couchey.png" alt="Photo de Couchey" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'UsuiPresentiel',
}
</script>

<style lang="scss" scoped>
.usui__presentiel {
	padding: 50px 0 160px 0;
	position: relative;
	.container {
		display: flex;
		flex-direction: column;
		position: relative;
		> img {
			width: 350px;
			display: block;
			margin: 0 auto;
			max-width: 80%;
			order: 1;
		}
	}
	&--intro {
		margin: 50px auto 100px;
		order: 2;
		@include min($lg) {
			margin: 50px auto 270px;
		}
		p {
			font-style: italic;
			color: $color-003;
			text-align: center;
		}
	}
	&__img-wrapper {
		order: 4;
		max-width: 100%;
		z-index: 1;
		@include min($lg) {
			position: absolute;
			top: 44%;
			right: 40.6%;
		}
		@include min($xl) {
			right: 45.1%;
		}
		@include min($xxl) {
			right: 48%;
		}
		@include min($xxxl) {
			top: 280px;
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
			img {
				width: 100%;
				@include min($xl) {
					width: 600px;
				}
				@include min($xxl) {
					width: 100%;
				}
			}
		}
	}
	&__text-wrapper {
		max-width: 90%;
		background-color: $color-005;
		padding: 45px 40px;
		position: relative;
		z-index: 2;
		order: 3;
		@include min($lg) {
			padding: 45px 80px;
			max-width: 50%;
			margin-left: 36.3%;
		}
		@include min($xxxl) {
			max-width: 40%;
			margin-left: 40%;
		}
		.h1-bis {
			font-family: $font-003;
			font-size: $font-xxl;
			color: $color-003;
			font-weight: 600;
			text-align: center;
			position: absolute;
			bottom: 100%;
			left: 0;
			right: 0;
			margin: 0 auto;
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
