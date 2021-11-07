<template>
	<section class="human">
		<div class="human__orange">
			<p>
				Le fil conducteur de mon parcours, c'est la rencontre humaine, celle qui
				se déroule au-delà du perceptible et c'est le cœur de ma pratique.
				J'aime l'humain dans toute sa complexité et sa richesse intérieure.
				Aujourd'hui je vous propose des séances enrichies de ce que j'ai appris
				tout au long de mon parcours, afin de vous apaiser, vous recentrer sur
				vos propres aspirations et vous aider à vous rencontrer vous-mêmes...
			</p>
		</div>
		<div class="human__gray">
			<div class="human__gray--text-wrapper">
				<p>Virginie Gembala</p>
				<p class="human__gray--italic">Energéticienne</p>
				<p class="human__gray--italic">Enseignante de La Voie du Silence</p>
				<p class="human__gray--italic">Maître-enseignante indépendante Reiki</p>
				<p class="human__gray--italic">Usui Shiki Ryoho & Reiki Kundalini</p>
			</div>
			<div class="human__gray--img-wrapper">
				<img src="../../public/images/virginie.jpg" alt="Virginie Gembala" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Human',
}
</script>

<style lang="scss" scoped>
.human {
	display: flex;
	width: 100%;
	margin-bottom: -260px;
	flex-direction: column;
	@include min($lg) {
		flex-direction: row;
	}
	&__orange {
		background-color: $color-010;
		width: 90%;
		padding: 50px 20px;
		z-index: -1;
		margin: 0 auto;
		@include min($lg) {
			margin: 0;
			width: 50%;
			padding: 85px 140px 300px;
		}
	}
	&__gray {
		width: 90%;
		background-color: $color-004;
		padding: 50px 20px 20vh;
		z-index: -1;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		@include min($lg) {
			width: 50%;
			padding: 60px 140px 300px;
			margin: 0;
			align-items: flex-end;
		}
		@include min($xl) {
			flex-direction: row;
			align-items: center;
			justify-content: end;
		}
		p {
			color: $color-003;
			text-align: center;
			@include min($lg) {
				text-align: end;
			}
			&:first-of-type {
				margin-bottom: 30px;
			}
		}
		&--italic {
			font-style: italic;
		}
		&--img-wrapper {
			width: 120px;
			max-width: 90%;
			margin-left: 5%;
			margin-top: 20px;
			@include min($xl) {
				margin-top: 0;
			}
			img {
				width: 100%;
			}
		}
	}
}
</style>
