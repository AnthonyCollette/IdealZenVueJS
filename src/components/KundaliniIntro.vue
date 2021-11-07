<template>
	<section class="kundalini">
		<div class="container">
			<h1 class="h1">Formations Reiki</h1>
			<div class="kundalini__intro">
				<h2>Reiki Kundalini</h2>
				<div class="religion">
					<p>
						Le reiki est une énergie accessible à tous et qui ne nécessite aucun
						pré-requis. Il se transmet et se pratique en dehors de toute
						religion ou dogme.
					</p>
				</div>
				<p>
					Le Reiki Kundalini allie l'énergie de la kundalini et l'énergie
					vitale. C'est un système d'une grande simplicité, qui se déroule en 3
					degrés. Chaque degré prépare le praticien et accroit progressivement
					ces capacités. Ole Gabrielsen, créateur du système laisse les maîtres
					enseignants libres de transmettre le Reiki Kundalini selon chacun.
					J'ai choisi d'ajouter les fondamentaux pour une pratique de
					l'énergétique saine et simple, en incluant là aussi une progression
					dans le développement physique et psychique du praticien.
				</p>
				<p>
					Chaque degré est suivi de 21 jours d'autotraitement et un certificat
					de formation est délivré à la fin de chaque niveau. Les initiations se
					déroulent principalement à distance.
				</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'KundaliniIntro',
}
</script>

<style lang="scss" scoped>
.kundalini {
	padding: 50px 0 100px 0;
	@include min($lg) {
		padding: 90px 0 200px 0;
	}
	&__intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		h2 {
			background-color: $color-005;
			position: relative;
			padding: 20px 100px;
			width: fit-content;
			width: -moz-fit-content;
			margin: 30px auto 0;
			display: block;
			&::after {
				content: '';
				width: 100%;
				height: 100%;
				position: absolute;
				border: 3px solid $color-009;
				left: 3%;
				bottom: 10%;
				z-index: -1;
			}
		}
		.religion {
			margin: 40px 0;
			@include min($lg) {
				margin: 75px 0;
				max-width: 47%;
			}
			p {
				font-size: $font-md;
				color: $color-003;
				font-family: $font-001;
				font-style: italic;
				max-width: 100%;
				@include min($xxl) {
					font-size: $font-lg;
				}
			}
		}
		p {
			font-size: $font-md;
			color: $color-003;
			font-family: $font-001;
			text-align: center;
			@include min($lg) {
				max-width: 80%;
			}
			@include min($xxl) {
				font-size: $font-lg;
			}
			&:last-of-type {
				margin-top: 20px;
			}
		}
	}
}
</style>
