<template>
	<section class="usui__degrees">
		<div class="usui__degrees--bandeau">
			<h2 class="big">les 3 degrés de formation</h2>
		</div>
		<div class="container">
			<div class="usui__degrees--cards-wrapper">
				<div class="card blue-card">
					<div class="card__wrapper">
						<span class="name">1er degré : Shoden</span>
						<div class="wrapper">
							<div class="text-wrapper">
								<p class="title">shoden</p>
								<p>Pré-requis : aucun</p>
								<p>Durée : 2 jours</p>
							</div>
						</div>
						<p>
							C'est la base de la pratique et pour beaucoup une première
							approche de l'énergie. Lors de ce stage, nous apprenons à
							canaliser l'énergie vitale puis à la transmettre. Nous nous
							exerçons à canaliser et ressentir l'énergie, à trouver la posture
							intérieure juste pour transmettre le reiki. Nous travaillons
							l'ancrage et la relation au corps, en apprenant à améliorer la
							circulation de l'énergie en nous-mêmes.
						</p>
					</div>
				</div>
				<div class="card green-card">
					<div class="card__wrapper">
						<span class="name">2ème degré : Okuden</span>
						<div class="wrapper">
							<div class="text-wrapper">
								<p class="title">OKUDEN</p>
								<p>
									Pré-requis : être initié au 1er degré de Reiki Usui Shiki
									Ryoho
								</p>
								<p>Durée : 2 jours</p>
							</div>
						</div>
						<p>
							Dans ce degré, nous allons plus loin dans la compréhension de
							l'énergie. Ce stage est axé sur la dimension émotionnelle de
							l'être, mais également sur les notions d'espace et de temps. Lors
							de ce degré, nous apprenons les soins à distance, le traitement
							mental et émotionnel. Vous recevrez également les trois premiers
							symboles du Reiki Usui Shiki Ryoho.
						</p>
					</div>
				</div>
				<div class="card red-card">
					<div class="card__wrapper">
						<span class="name">3ème degré : Shinpiden</span>
						<div class="wrapper">
							<div class="text-wrapper">
								<p class="title">SHINPIDEN</p>
								<p>
									Pré-requis : être initié au 2ème degré de Reiki Usui Shiki
									Ryoho
								</p>
								<p>Durée : 2 jours</p>
							</div>
						</div>
						<p>
							Il s'adresse plus spécifiquement aux personnes qui souhaitent
							aller au bout du cursus et pouvoir enseigner à leur tour. Lors de
							ce dernier degré, vous recevrez le symbole de maîtrise, ainsi que
							les protocoles d'initiation. Un accompagnement à l'enseignement et
							la transmission sera mis en place sur le long terme.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="warning">
			<p>
				<strong>Si vous êtes déjà initié par un autre maître-enseignant</strong>
				et souhaitez suivre un stage, je propose des tarifs préférentiels pour
				une remise à niveau afin de partir sur les mêmes bases que mes
				stagiaires.
			</p>
		</div>
	</section>
</template>

<script>
export default {
	name: 'UsuiDegrees',
}
</script>

<style lang="scss" scoped>
.usui__degrees {
	background-color: $color-006;
	padding-bottom: 50px;
	position: relative;
	@include min($sm) {
		padding-bottom: 400px;
	}
	&--bandeau {
		max-width: 100%;
		height: 110px;
		background-color: $color-005;
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		@include min($lg) {
			height: 50px;
		}
		&::before {
			display: none;
			@include min($lg) {
				content: '';
				position: absolute;
				height: 0;
				max-width: 80%;
				width: 650px;
				border-top: 80px solid $color-005;
				border-left: 50px solid transparent;
				border-right: 50px solid transparent;
				z-index: -1;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
				display: block;
			}
			@include min($xl) {
				border-top: 100px solid $color-005;
				width: 850px;
			}
		}
		h2 {
			text-transform: uppercase;
			width: fit-content;
			width: -moz-fit-content;

			@include min($lg) {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				top: 20%;
			}
		}
	}
	&--cards-wrapper {
		margin-top: 100px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		@include min($sm) {
			margin-top: 440px;
		}
		@include min($xxl) {
			flex-direction: row;
		}
	}
	.container {
		position: relative;
	}
	.warning {
		background-color: $color-008;
		padding: 15px 20px;
		text-align: center;
		animation: ease-in-out fromRight 1.5s;
		margin-top: 50px;
		@include min($sm) {
			width: 577px;
			position: absolute;
			right: 0;
			bottom: 100px;
			padding: 15px 0;
		}
		@include min($md) {
			padding: 15px 140px;
		}
		&::before {
			content: '';
			display: inline-block;
			height: 0;
			width: 0;
			position: absolute;
			right: 100%;
			bottom: 0;
			border-bottom: 87px solid $color-008;
			border-left: 80px solid transparent;
			@include min($xxl) {
				border-bottom: 130px solid $color-008;
			}
		}
	}
	.card {
		width: 80%;
		@include min($sm) {
			width: 417px;
		}
		&__wrapper {
			position: relative;
			max-width: 420px;
			box-shadow: 5px 5px 5px rgba($color: $color-002, $alpha: 0.5);
			height: fit-content;
			height: -moz-fit-content;
			@include min($sm) {
				height: 225px;
			}
			> p {
				font-size: $font-md;
				max-width: 85%;
				margin: 0 auto;
				text-align: center;
				padding: 25px 30px;
			}

			.name {
				height: 80px;
				font-family: $font-003;
				font-size: $font-xxl;
				color: $color-003;
				font-size: 29px;
				font-weight: 600;
				display: inline-block;
				background-color: $color-001;
				display: flex;
				justify-content: center;
				align-items: center;

				@include min($sm) {
					font-size: $font-xxl;
					width: 300px;
					transform: rotate(-90deg);
					position: absolute;
					bottom: 335px;
					left: -110px;
				}
			}
			.wrapper {
				height: 350px;
				background-repeat: no-repeat;
				text-align: center;
				background-size: cover;
				@include min($sm) {
					background-size: auto;
					position: absolute;
					bottom: 100%;
					left: 90px;
					width: 290px;
					height: 300px;
				}
				p {
					color: $color-003;
					font-size: $font-md;
					max-width: 80%;
				}
				.title {
					font-size: $font-lg;
					font-family: $font-002;
					text-transform: uppercase;
				}
			}
			.text-wrapper {
				height: 150px;
				background-image: url('../assets/images/Soustraction\ 6.png');
				background-size: cover;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding-top: 20px;
				.title {
					margin-bottom: 10px;
				}
			}
		}
		&.blue-card {
			background-color: $color-008;
			.wrapper {
				background-image: url('../assets/images/shoden-bg.png');
				background-position: -80px 80px;
				@include min($sm) {
					background-position: 0 80px;
				}
			}
		}
		&.green-card {
			background-color: $color-005;
			margin-top: 50px;
			@include min($sm) {
				margin-top: 350px;
			}
			@include min($xxl) {
				margin-top: 0;
			}
			.wrapper {
				background-image: url('../assets/images/abdulla-m-SX0m731jrAs-unsplash.png');
				background-position-y: 20px;
				z-index: 999;
			}
		}
		&.red-card {
			background-color: $color-010;
			margin-top: 50px;
			@include min($sm) {
				margin-top: 350px;
			}
			@include min($xxl) {
				margin-top: 0;
			}
			.wrapper {
				background-image: url('../assets/images/bekir-donmez-eofm5R5f9Kw-unsplash.png');
				background-position-y: 50px;
			}
		}
	}
}
</style>
