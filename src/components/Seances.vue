<template>
	<section class="details-seances">
		<div class="container">
			<div class="details-seances__bg">
				<img
					src="../../public/images/leafsinthewind.svg"
					alt="Feuilles dans le vent"
				/>
				<div class="details-seances__left-column">
					<h3>À MON DOMICILE</h3>
					<h4>Comment se déroule un soin ?</h4>
					<p>
						Nous commençons par un temps d'échange pour faire connaissance,
						connaître vos attentes et les possibilités de soin qui s'offre à
						votre situation. Vous vous allongez ensuite sur la table de soin, en
						restant habillé(e). La séance commence, j'appose mes mains sur ou
						au-dessus du corps, de manière à fluidifier et à faire circuler
						l'énergie vitale, plus ou moins longtemps, en fonction des zones où
						l'énergie est plus ou moins dense. Pendant la séance, c'est un
						moment de détente, un profond bien-être qui est ressenti, les
						tensions se relâchent. Vous pouvez (ou non) ressentir des sensations
						ou des émotions diverses, les ressentis dépendent de chacun. La
						séance se déroule en toute bienveillance, l'essentiel est de ne rien
						attendre et de profiter d'un moment de bien-être.
					</p>
					<div class="details-seances__left-column--tarifs">
						<h5>TARIFS</h5>
						<p>Soin bien-être / harmonisation (1h-1h30) : 50 €</p>
						<p>Harmonisation tarif enfant (1h) : 30 €</p>
						<p>Soin émotionnel (1h30-2h) : 70 €</p>
						<p>Les soins sont réglables par chèque ou espèces.</p>
					</div>
				</div>
				<div class="details-seances__right-column">
					<h3>À DISTANCE</h3>
					<h4>Comment se déroule un soin à distance ?</h4>
					<h4>Pour une harmonisation :</h4>
					<p>
						A la date et à l'heure convenue, je vous contacte via skype (ou
						téléphone si vous n'avez pas la possibilité d'utiliser la visio).
						Nous prenons un moment pour échanger sur vos attentes, puis vous
						vous installez confortablement, en prenant soin de ne pas être
						dérangé(e), avec une couverture et un verre d'eau à disposition. Je
						pratique le soin de la même manière qu'en présence en me connectant
						à vous. A la fin du soin, nous échangeons à nouveau.
					</p>
					<h4>Pour un boost énergétique :</h4>
					<p>
						Nous prenons rendez-vous et au jour et à l'heure choisie, je vous
						contacte (par tél., sms, ou messenger selon votre choix). Ensuite
						vous vous installez confortablement en prenant soin de ne pas être
						dérangé(e). Pensez à préparer une couverture et un verre d'eau. La
						séance commence et dure environ 45min. Je vous laisse me recontacter
						pour un échange après la séance, afin de ne pas vous déranger et que
						vous puissiez profiter du moment tout le temps nécessaire.
					</p>
					<div class="details-seances__right-column--tarifs">
						<h5>TARIFS</h5>
						<p>Harmonisation (1h) : 50 €</p>
						<p>Boost énergétique (45min) : 30 €</p>
						<p>
							Les soins à distance sont payables d'avance par virement, chèque
							ou PayPal. Le rendez-vous sera confirmé à réception du paiement.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Seances',
}
</script>

<style lang="scss" scoped>
.details-seances {
	background-color: $color-006;
	padding: 160px 0 100px 0;
	margin-top: 20px;
	&__bg {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		@include min($xxl) {
			flex-direction: row;
			align-items: stretch;
		}
		> img {
			display: none;
			@include min($lg) {
				display: block;
				width: 411px;
				bottom: 90%;
				right: 70%;
				z-index: 999;
				position: absolute;
			}
			@include min($xxl) {
				bottom: 80%;
				right: 90%;
			}
			@include min($xxxl) {
				right: 80%;
			}
		}
	}
	&__left-column {
		background-color: $color-005;
		width: 90%;
		min-width: 35%;
		padding: 75px 20px;
		position: relative;
		@include min($lg) {
			width: 600px;
			height: 500px;
			padding: 75px 60px 0 60px;
		}
		@include min($xxl) {
			height: auto;
		}
		@include min($xxxl) {
			padding: 75px 0 0 60px;
		}
		&::after {
			display: none;
			@include min($xxxl) {
				content: '';
				display: inline-block;
				height: 0;
				width: 0;
				border-top: 658px solid $color-005;
				border-right: 100px solid transparent;
				position: absolute;
				left: 99.9%;
				top: 0;
			}
		}
		h3 {
			left: 15%;
			text-align: center;
			@include min($xxxl) {
				left: 27%;
			}
		}
		h4 {
			margin-bottom: 30px;
		}
		p {
			font-size: $font-md;
		}
		&--tarifs {
			background-color: $color-008;
			padding: 20px;
			margin-top: 50px;
			left: -5%;
			bottom: 5%;
			width: 80%;
			box-shadow: -5px 5px 5px rgba($color: $color-002, $alpha: 0.2);
			@include min($sm) {
				padding: 20px 60px 40px;
			}
			@include min($lg) {
				position: absolute;
				margin-top: 0;
			}
			h5 {
				margin-bottom: 20px;
			}
		}
	}
	&__right-column {
		background-color: $color-010;
		width: 90%;
		min-width: 30%;
		padding: 75px 20px;
		position: relative;
		margin: 100px 0 0 0;
		@include min($lg) {
			width: 600px;
			padding: 75px 75px 240px 75px;
			margin: 100px 0 0 5%;
		}
		@include min($xxl) {
			margin-top: 0;
		}
		@include min($xxxl) {
			margin: 0 0 0 -7%;
			padding: 75px 75px 240px 0;
		}
		&::after {
			display: none;
			@include min($xxxl) {
				content: '';
				display: inline-block;
				height: 0;
				width: 0;
				border-bottom: 658px solid $color-010;
				border-left: 100px solid transparent;
				position: absolute;
				right: 99.9%;
				top: 0;
			}
		}
		h3 {
			right: 5%;
			text-align: center;
			@include min($md) {
				right: 26%;
			}
			@include min($xxl) {
				right: 27%;
			}
		}
		h4 {
			margin-bottom: 10px;
			text-align: end;
			&:last-of-type {
				margin-top: 10px;
			}
		}
		p {
			font-size: $font-md;
			text-align: end;
		}
		&--tarifs {
			background-color: $color-008;
			padding: 20px;
			margin-top: 50px;
			right: -5%;
			width: 80%;
			bottom: 5%;
			box-shadow: 5px 5px 5px rgba($color: $color-002, $alpha: 0.2);
			text-align: end;
			@include min($sm) {
				padding: 20px 60px 40px;
			}
			@include min($lg) {
				margin-top: 0;
				position: absolute;
			}
			h5 {
				margin-bottom: 20px;
			}
			p {
				max-width: 100%;
			}
		}
	}
	h3 {
		margin: -140px 0 50px 0;
		@include min($sm) {
			margin: -100px 0 50px 0;
		}
		@include min($lg) {
			margin: 0;
			position: absolute;
			bottom: 96%;
		}
	}
}
</style>
