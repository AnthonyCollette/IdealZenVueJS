<template>
	<section class="forfaits">
		<div class="forfaits__bandeau">
			<h2 class="big">LES FORFAITS</h2>
		</div>
		<div class="container">
			<div class="forfaits__text">
				<p>
					Pour un travail en profondeur, 4 séances rapprochées permettent un
					résultat optimal.
				</p>
				<p>
					Le travail énergétique agit directement sur la cause et non sur le
					symptôme.
				</p>
			</div>
			<div class="forfaits__details">
				<div class="forfaits__details--unite">
					<h6>4 HARMONISATIONS</h6>
					<p class="details-text">
						À mon domicile<br />
						ou<br />
						à distance
					</p>
					<p class="tarif">180€</p>
				</div>
				<div class="forfaits__details--unite">
					<h6>4 HARMONISATIONS</h6>
					<p class="details-text">Tarif enfant</p>
					<p class="tarif">100€</p>
				</div>
				<div class="forfaits__details--unite">
					<h6>4 BOOSTS ÉNERGÉTIQUES</h6>
					<p class="details-text">À distance</p>
					<p class="tarif">100€</p>
				</div>
			</div>
			<div class="text-link-wrapper">
				<p>
					Vous souhaitez prendre un rendez-vous ? Vous avez besoin d'un
					accompagnement spécifique ou vous avez des difficultés financières ?
				</p>
				<router-link class="btn" to="/contact">Contactez-moi !</router-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Forfaits',
}
</script>

<style lang="scss" scoped>
.forfaits {
	&__bandeau {
		max-width: 100%;
		height: 110px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: $color-005;
		position: relative;
		@include min($lg) {
			display: block;
			height: 50px;
		}
		&::before {
			@include min($lg) {
				content: '';
				position: absolute;
				height: 0;
				width: 600px;
				border-top: 100px solid $color-005;
				border-left: 50px solid transparent;
				border-right: 50px solid transparent;
				z-index: -1;
				top: -20%;
				left: 50%;
				transform: translateX(-50%);
			}
		}
		h2 {
			@include min($lg) {
				top: 30%;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
	.container {
		margin-top: 100px;
		.text-link-wrapper {
			text-align: center;
			max-width: fit-content;
			max-width: -moz-fit-content;
			margin: 0 auto;
			p {
				font-size: $font-lg;
				color: $color-003;
				font-style: italic;
				margin-bottom: 100px;
			}
			a {
				font-size: $font-lg;
				font-family: $font-001;
			}
		}
	}
	&__text {
		display: flex;
		flex-direction: column;
		align-items: center;
		p {
			color: $color-003;
			font-size: $font-lg;
		}
	}
	&__details {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		margin: 100px auto;
		max-width: 100%;
		@include min($lg) {
			flex-direction: row;
		}
		@include min($xxxl) {
			max-width: 70%;
		}
		&--unite {
			cursor: pointer;
			padding: 40px 30px 150px;
			box-shadow: 5px 5px 5px rgba($color: $color-002, $alpha: 0.2);
			display: flex;
			flex-direction: column;
			position: relative;
			width: 200px;
			height: 110px;
			transition: 0.4s;
			margin-bottom: 50px;
			background-color: $color-001;
			@include min($lg) {
				margin-bottom: 0;
			}
			&::after {
				@include min($sm) {
					content: url('../assets/images/leafs-hover.svg');
					position: absolute;
					bottom: 88%;
					left: 88%;
					opacity: 0;
					transition: 0.4s;
					z-index: -1;
				}
			}
			&:hover {
				box-shadow: 5px 5px 5px rgba($color: $color-002, $alpha: 0.5);
				&::after {
					opacity: 1;
				}
			}
			h6 {
				text-align: center;
			}
		}
		.details-text {
			font-size: $font-md;
			color: $color-003;
			text-align: center;
			margin-top: 30px;
		}
		.tarif {
			background-image: url('../assets/images/details-bg.png');
			background-repeat: no-repeat;
			background-size: cover;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 125px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: $font-002;
			font-size: $font-xxl;
		}
	}
}
</style>
