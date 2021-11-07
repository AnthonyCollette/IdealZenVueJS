<template>
	<section class="accompagnements">
		<div class="accompagnements__blocs-wrapper--warning">
			<i class="fas fa-exclamation-triangle"></i>
			<p>
				Une séance énergétique ne remplace pas une consultation médicale ni le
				traitement prescrit par un médecin.
			</p>
			<i class="fas fa-exclamation-triangle"></i>
		</div>
		<div class="container">
			<h1 class="h1">Accompagnements et tarifs</h1>
			<div data-aos="fade-in" class="accompagnements__blocs-wrapper">
				<div class="accompagnements__blocs-wrapper--bloc-h2">
					<h2>Un accompagnement sur mesure</h2>
				</div>
				<div class="accompagnements__blocs-wrapper--text">
					<ul>
						<li>en préventif</li>
						<li>
							en accompagnement d'une prise en charge médicale
							(traitement/chirurgie)
						</li>
						<li>pour gérer une période de stress</li>
						<li>une problématique émotionnelle</li>
						<li>dans une démarche de développement personnel</li>
						<li>
							simplement pour s'offrir un moment de relaxation, de détente et de
							bien-être !
						</li>
					</ul>
					<p>
						J'interviens également à distance lors de traitement en
						chimiothérapie et radiothérapie afin de limiter les effets
						secondaires (coupe feu). Cette prise en charge est bénévole. Je
						m'engage à vous suivre sur la totalité du protocole médical, en
						fonction de mes disponibilités au moment de votre demande (me
						contacter).
					</p>
				</div>
			</div>
			<img
				src="../../public/images/hands-and-dots.png"
				alt="logo avec points décoratifs"
			/>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Accompagnements',
}
</script>

<style lang="scss" scoped>
.accompagnements {
	padding-top: 50px;
	position: relative;
	@include min($lg) {
		padding-top: 100px;
	}
	&__blocs-wrapper {
		position: relative;
		margin-top: 150px;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		@include min($lg) {
			margin-top: 95px;
		}
		&--bloc-h2 {
			background-color: $color-005;
			max-width: 510px;
			text-align: center;
			padding: 20px;
			position: absolute;
			bottom: 95%;
			left: 0;
			right: 0;
			margin: 0 auto;
			@include min($lg) {
				left: 32%;
				right: auto;
				margin: 0;
				bottom: 85%;
			}
			&::after {
				content: '';
				display: none;
				@include min($lg) {
					position: absolute;
					display: block;
					width: 100%;
					height: 100%;
					border: 3px solid $color-009;
					bottom: 10%;
					left: 2%;
					z-index: -1;
				}
			}
		}
		&--text {
			background-color: $color-006;
			padding: 110px 20px 80px;

			@include min($lg) {
				max-width: 60%;
				padding: 110px 60px 80px;
			}
			@include min($xxl) {
				max-width: 40%;
			}
			ul {
				padding-left: 0;
			}
			li {
				font-size: $font-md;
				color: $color-003;
				font-family: $font-001;
				&::before {
					content: url('../assets/images/arrow.svg');
					margin-right: 5px;
				}
			}
			p {
				margin-top: 25px;
				color: $color-003;
				font-size: $font-md;
				text-align: center;
			}
		}
		&--warning {
			background-color: $color-008;
			padding: 30px;
			width: 585px;
			max-width: 90%;
			height: fit-content;
			height: -moz-fit-content;
			text-align: center;
			right: 0;
			bottom: 150px;
			position: absolute;
			@include min($lg) {
				padding: 30px 130px 30px 0;
			}
			&::before {
				@include min($lg) {
					content: '';
					display: inline-block;
					height: 0;
					width: 0;
					border-bottom: 98px solid $color-008;
					border-left: 77px solid transparent;
					position: absolute;
					right: 100%;
					top: 0;
				}

				@include min($xxl) {
					border-bottom: 135px solid $color-008;
					border-left: 77px solid transparent;
				}
			}

			p {
				display: inline;
				max-width: 80%;
			}
			i {
				color: $color-001;
			}
		}
	}
	.container > img {
		margin: 0 auto;
		width: 300px;
		display: block;
		margin-top: 200px;
		@include min($sm) {
			width: 350px;
		}
		@include min($xxl) {
			margin-top: 280px;
		}
	}
}
</style>
