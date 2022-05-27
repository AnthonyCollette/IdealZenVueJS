<template>
	<div class="soins" id="soins">
		<div class="container">
			<div class="text-wrapper">
				<h1>Soins énerg<span class="white-text">étiques</span></h1>
				<p>
					Les soins énergétiques que je propose apaisent le corps et le mental.
					Selon vos attentes, des outils concrets donnés en complément
					s'inscrivent dans un cheminement autonome -votre cheminement- dans
					lequel vous êtes pleinement acteur. Ces séances, dans une quête de
					sens et d'évolution personnelle, permettent de retrouver en vous les
					ressources nécessaires pour une vie épanouie, en cohérence avec vos
					aspirations profondes....
				</p>
				<p>
					Pour des soins ponctuels ou pour un suivi plus long, je vous
					accompagne sur la voie du bien-être et de l'auto-guérison, ce chemin
					si précieux et unique qui mène vers vous-mêmes !
				</p>
				<router-link to="/avis" class="btn">Voir les témoignages</router-link>
				<div class="img-wrapper">
					<div class="img">
						<img
							src="../../public/images/photo.png"
							alt="Femme dans un champ"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Soins',
}
</script>

<style lang="scss" scoped>
.soins {
	margin: 0px 0 200px 0;
	padding-top: 20%;
	.text-wrapper {
		background-color: $color-005;
		padding: 30px;
		position: relative;
		@include min($sm) {
			padding: 55px 70px;
		}
		@include min($lg) {
			max-width: 50%;
		}
		h1 {
			position: absolute;
			bottom: 100%;
			right: 0;
			left: 0;
			margin: 0 auto;
			width: fit-content;
			@include min($lg) {
				right: 18.5%;
				left: auto;
				margin: 0;
			}
		}
		p:first-of-type {
			margin-bottom: 20px;
		}
		.img-wrapper {
			margin-top: 50px;
			@include min($lg) {
				margin-top: 0;
				bottom: 25%;
				left: 62.5%;
				width: 500px;
				position: absolute;
				z-index: -1;
			}
			@include min($xl) {
				bottom: -5%;
				left: 65.5%;
				width: 600px;
			}
			@include min($xxl) {
				width: 750px;
				left: 67.5%;
			}
			@include min($xxxl) {
				left: 70.5%;
				bottom: -30%;
				width: 1024px;
			}
		}
		a {
			margin: 50px auto 0 auto;
			width: fit-content;
			width: -moz-fit-content;
			display: block;
			z-index: 2;
			@include min($lg) {
				margin: 50px 0 0 auto;
			}
		}
		.img {
			position: relative;
			&::after {
				content: '';
				display: none;
				@include min($lg) {
					position: absolute;
					bottom: 0;
					border: 3px solid $color-007;
					z-index: -2;
					left: 75%;
					width: 90%;
					height: 93%;
					display: block;
					left: 13%;
					bottom: 10%;
				}
			}
			img {
				width: 100%;
			}
		}
	}
}
</style>
