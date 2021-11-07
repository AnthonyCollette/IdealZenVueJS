<template>
	<div class="header">
		<div class="container">
			<div class="header__quote">
				<q class="header__quote--text">
					Le plus grand secret pour le bonheur, c'est d'être bien avec soi
				</q>
				<span class="header__quote--author">Fontenelle</span>
			</div>
			<div class="header__logo-wrapper">
				<img
					src="../../public/images/Groupe4.png"
					alt="Feuille de lotus"
					class="leaf-1"
					id="leaf-1"
				/>
				<img
					src="../../public/images/Groupe1.png"
					alt="Feuille de lotus"
					class="leaf-2"
					id="leaf-2"
				/>
				<img
					src="../../public/images/Groupe3.png"
					alt="Feuille de lotus"
					class="leaf-3"
					id="leaf-3"
				/>
				<img
					src="../../public/images/Groupe2.png"
					alt="Feuille de lotus"
					class="leaf-4"
					id="leaf-4"
				/>
				<img
					src="../../public/images/Groupe5.png"
					alt="Feuille de lotus"
					class="leaf-5"
					id="leaf-5"
				/>
				<img
					src="../../public/images/Ellipse1.png"
					alt="Ellipse"
					class="ellipse"
					id="ellipse"
				/>
				<span class="text-logo">Ideal Zen</span>
				<a href="#soins" class="hands-logo">
					<img src="../../public/images/hands.png" alt="Mains" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Hero',
}
</script>

<style lang="scss" scoped>
.header {
	background-color: $color-006;
	position: relative;
	height: calc(100vh - 107px);
	@include min($lg) {
		height: auto;
	}
	&::after {
		content: '';
		position: absolute;
		background-image: url('../assets/images/essaie-fond.png');
		width: 100%;
		height: 272px;
		top: 85%;
		z-index: -1;
		background-repeat: no-repeat;
		background-size: cover;
	}
	&__logo-wrapper {
		position: relative;
		width: 300px;
		height: calc(100vh - 107px);
		margin: 0 auto;

		@include min($lg) {
			min-height: 840px;
		}
		img {
			position: absolute;
			bottom: 30%;
		}
		.leaf-1 {
			left: -25%;
			transform: scale(0.6);
			z-index: 2;
			transform-origin: bottom right;
			animation: leaf1 2s ease-in-out;
			@include min($sm) {
				left: -25%;
				transform: none;
			}
			@include min($lg) {
				left: -21%;
			}
		}
		.leaf-2 {
			left: -8%;
			bottom: 31%;
			z-index: 3;
			transform-origin: bottom right;
			animation: leaf2 2s ease-in-out;
			transform: scale(0.6);
			@include min($sm) {
				transform: none;
				left: -5%;
				bottom: 32%;
			}
			@include min($lg) {
				left: -2%;
			}
		}
		.leaf-3 {
			left: 31%;
			bottom: 30%;
			z-index: 2;
			animation: leaf3 2s ease-in-out;
			transform: scale(0.6);
			@include min($sm) {
				transform: none;
				left: 29%;
				bottom: 36%;
			}
			@include min($lg) {
				left: 29.5%;
			}
		}
		.leaf-4 {
			left: 41%;
			bottom: 31%;
			z-index: 3;
			transform-origin: bottom left;
			animation: leaf4 2s ease-in-out;
			transform: scale(0.6);
			@include min($sm) {
				transform: none;
				left: 31%;
				bottom: 32%;
			}
			@include min($lg) {
				left: 33%;
			}
		}
		.leaf-5 {
			left: 43%;
			z-index: 2;
			transform-origin: bottom left;
			animation: leaf5 2s ease-in-out;
			transform: scale(0.6);
			@include min($sm) {
				transform: none;
				left: 40.5%;
			}
			@include min($lg) {
				left: 40.5%;
			}
		}
		.ellipse {
			left: -2%;
			bottom: 30%;
			animation: apparition 1.5s ease-in-out;
			transform: scale(0.6);
			@include min($sm) {
				transform: none;
				left: -5%;
				bottom: 33%;
			}
			@include min($lg) {
				left: -2.5%;
			}
		}
		.text-logo {
			position: absolute;
			bottom: 22%;
			left: 0;
			right: 0;
			width: fit-content;
			width: -moz-fit-content;
			margin: 0 auto;
			font-family: $font-004;
			color: $color-008;
			font-size: $font-xl;
			font-weight: 600;
			opacity: 0;
			animation: apparition 1.5s ease-in-out forwards;
			animation-delay: 1s;
			@include min($sm) {
				font-size: $font-xxxl;
			}
		}
		.hands-logo {
			position: absolute;
			bottom: 5%;
			left: 0;
			right: 0;
			width: 170px;
			margin: 0 auto;
			animation: apparition 1.5s ease-in-out forwards;
			animation-delay: 1.5s;
			opacity: 0;
			@include min($sm) {
				bottom: 10%;
			}
		}
	}
	&__quote {
		&--text {
			font-size: 28px;
			font-family: $font-003;
			color: $color-003;
			text-align: center;
			left: 0;
			right: 0;
			margin: 0 auto;
			display: block;
			font-weight: 600;
			position: absolute;
			max-width: 90%;
			top: 5%;
			animation: apparition 1.5s ease-in-out forwards;
			animation-delay: 1s;
			opacity: 0;
			@include min($sm) {
				top: 10%;
				font-size: $font-xxl;
			}
			@include min($lg) {
				margin: 0;
				left: auto;
				max-width: 35%;
				right: 140px;
			}
			@include min($xxl) {
				font-size: $font-xxxl;
			}
		}
		&--author {
			font-family: $font-001;
			font-size: $font-md;
			color: $color-003;
			font-style: italic;
			font-weight: 300;
			position: absolute;
			right: 10%;
			top: 20%;
			animation: apparition 1.5s ease-in-out forwards;
			animation-delay: 1.5s;
			opacity: 0;
			@include min($sm) {
				font-size: $font-lg;
				top: 20%;
			}
			@include min($lg) {
				right: 10%;
				top: 23%;
			}
			@include min($xxl) {
				font-size: $font-xl;
				top: 30%;
			}
		}
	}
}
</style>
