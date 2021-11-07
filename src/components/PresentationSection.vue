<template>
	<section class="presentation">
		<div class="container">
			<h1 class="h1">Présentation</h1>
			<div class="presentation__intro">
				<h2>Thérapeute énergéticienne et Maître-enseignante Reiki</h2>
				<div class="presentation__intro--text-wrapper">
					<p>
						Très jeune, comme la plupart des enfants, je voyais de la magie
						partout. Il y avait la réalité concrète et tangible mais mon monde
						ne s'arrêtait pas à ce que l'on pouvait voir, sentir, toucher. Il y
						avait aussi tout ce que « les grands » ne voyaient pas et qui était
						pourtant tout aussi réel. Très tôt j'ai eu conscience de certaines
						énergies qui nous entourent, d'un monde subtil existant au-delà du
						monde physique. En grandissant j'ai commencé à me poser des
						questions métaphysiques, sans réussir à trouver de réponses
						satisfaisantes. J'ai alors ressenti une envie boulimique
						d'apprendre. J'ai lu, beaucoup... Sur des sujets variés (la
						psychologie, les spiritualités orientales, le symbolisme, les rêves,
						la médiumnité, … ). Je cherchais des réponses, me confrontais à de
						nouvelles questions, j'ai appris, expérimenté, fait des erreurs,
						travaillé et vécu des expériences qui m'ont conforté sur mon chemin.
					</p>
					<p>
						En parallèle, j'ai exercé principalement dans l'accompagnement
						professionnel et la formation pour adulte. Accompagner les autres,
						soutenir leurs projets, c'était un moteur... difficilement
						compatible avec des objectifs donnés en terme de profit et de
						rentabilité. J'avais besoin de me réaliser dans mon travail autant
						que dans ma vie personnelle. Je ressentais le besoin de remettre
						l'humain (et plus encore) au cœur de ma profession. J'ai découvert
						la pratique des soins reiki, qui ont été une aide considérable. Je
						me suis formée en 2013 et j'ai reçu l'initiation à la maîtrise en
						Usui Reiki Ryoho. J'ai redéfini mes priorités, quitté le monde de
						l'entreprise et j'ai choisi d'allier ma passion à ce qui me faisait
						vibrer dans mes choix professionnels.
					</p>
					<p>
						En recherche de simplicité et d'un retour à l'essentiel, j'ai reçu
						la maitrise en Reiki Usui Shiki Ryoho et Reiki Kundalini. J'ai
						également suivi pendant 2 ans le cursus de « La Voie du Silence »,
						chemin empirique qui allie soins énergétiques, hypnose et
						enseignements mystiques occidentaux, ce qui m'a permis de me
						déconditionner de nombreuses croyances limitantes (même s'il en
						reste encore!) et à me libérer des fioritures du courant New Age.
					</p>
				</div>
			</div>
			<img
				src="../../public/images/hands-and-dots.png"
				alt="Mains portant un lotus"
			/>
		</div>
	</section>
</template>

<script>
export default {
	name: 'PresentationSection',
}
</script>

<style lang="scss" scoped>
.presentation {
	padding: 100px 0 40px 0;
	.container {
		> img {
			width: 300px;
			margin: 0 auto;
			display: block;
		}
	}
	&__intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		h2 {
			background-color: $color-005;
			position: relative;
			padding: 20px;
			width: fit-content;
			width: -moz-fit-content;
			margin: 30px auto 75px;
			display: block;
			max-width: 90%;
			text-align: center;
			@include min($md) {
				padding: 20px 50px;
			}
			@include min($lg) {
				max-width: 30%;
			}
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
		&--text-wrapper {
			max-width: 80%;
			margin-bottom: 100px;
			position: relative;
			&::before {
				@include min($sm) {
					content: '';
					background-image: url('../assets/images/leafs-hover.svg');
					background-size: cover;
					transform: scale(-1, 1);
					position: absolute;
					width: 80px;
					height: 75px;
					right: 100%;
					bottom: 100%;
				}
			}
			&::after {
				@include min($sm) {
					content: '';
					background-image: url('../assets/images/leafs-hover.svg');
					background-size: cover;
					position: absolute;
					width: 80px;
					height: 75px;
					left: 100%;
					bottom: 100%;
				}
			}
			p {
				color: $color-003;

				margin-bottom: 30px;
			}
		}
	}
}
</style>
