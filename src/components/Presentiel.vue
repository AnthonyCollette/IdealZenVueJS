<template>
	<section class="presentiel">
		<div class="container">
			<div class="presentiel__text-wrapper">
				<span class="h1-bis"
					><span class="white-text">Séances</span> en présentiel</span
				>
				<p>
					Pour les séances en présentiel, je vous reçois à Couchey, petit
					village de la côte viticole entre Dijon et Beaune (21 - Côte d'Or)
				</p>
			</div>
			<div class="presentiel__img-wrapper">
				<div class="img">
					<img src="../../public/images/couchey.png" alt="Photo de Couchey" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Presentiel',
}
</script>

<style lang="scss" scoped>
.presentiel {
	background-color: $color-006;
	margin-top: 250px;
	padding: 30px 0 100px 0;
	position: relative;
	@include min($lg) {
		padding: 240px 0 160px 0;
	}
	&::before {
		content: '';
		background-image: url('../assets/images/essaie-fond.png');
		background-size: cover;
		position: absolute;
		width: 100%;
		height: 210px;
		bottom: 100%;
		left: 0;
		transform: rotate(180deg);
		background-repeat: no-repeat;
		background-position-y: -50px;
	}
	.container {
		position: relative;
	}
	&__img-wrapper {
		width: fit-content;
		width: -moz-fit-content;
		margin: 0 auto;
		z-index: 1;
		@include min($lg) {
			position: absolute;
			margin: 0;
			top: -150px;
			right: 47%;
		}
		@include min($xl) {
			right: 41.5%;
		}
		@include min($xxl) {
			right: 44%;
		}
		@include min($xxxl) {
			right: 48%;
		}
		.img {
			position: relative;
			width: 100%;
			&::before {
				display: none;
				@include min($lg) {
					content: '';
					display: block;
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
				@include min($lg) {
					width: 500px;
				}
				@include min($xl) {
					width: 674px;
				}
			}
		}
	}
	&__text-wrapper {
		background-color: $color-005;
		padding: 45px 40px;
		position: relative;
		z-index: 2;
		@include min($lg) {
			margin-left: 30%;
			max-width: 60%;
			padding: 45px 80px;
		}
		@include min($xl) {
			max-width: 40%;
			margin-left: 40%;
		}
		.h1-bis {
			position: absolute;
			bottom: 100%;
			font-weight: 600;
			font-family: $font-003;
			font-size: $font-xxl;
			color: $color-003;
			@include min($sm) {
				font-size: $font-xxxl;
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
