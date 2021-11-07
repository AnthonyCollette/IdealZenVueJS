<template>
	<section class="silence__intro">
		<div class="container">
			<h1 class="h1">Formations reiki</h1>
			<div class="silence__intro--text-wrapper">
				<h2>La Voie du Silence</h2>
			</div>
			<img
				src="../../public/images/hands-and-dots.png"
				alt="Mains portant un lotus"
			/>
		</div>
		<div class="warning">
			<i class="fas fa-exclamation-triangle"></i>
			<p>Infos à venir prochainement !</p>
			<i class="fas fa-exclamation-triangle"></i>
		</div>
	</section>
</template>

<script>
export default {
	name: 'SilenceIntro',
}
</script>

<style lang="scss" scoped>
.silence {
	&__intro {
		padding: 50px 0 25px 0;
		position: relative;
		@include min($lg) {
			padding: 100px 0 25px 0;
		}
		.warning {
			position: absolute;
			background-color: $color-008;
			color: $color-001;
			padding: 40px 100px;
			left: 0;
			bottom: 30%;
			animation: fromLeft 1s ease-in-out;
			width: calc(100% - 200px);
			text-align: center;
			@include min($lg) {
				width: auto;
			}
			&::after {
				@include min($lg) {
					content: '';
					height: 0;
					width: 0;
					border-right: 100px solid transparent;
					border-bottom: 105px solid $color-008;
					position: absolute;
					left: 100%;
					bottom: 0;
				}
				@include min($xl) {
					border-bottom: 120px solid $color-008;
				}
			}
			i {
				font-size: $font-lg;
				@include min($xl) {
					font-size: $font-xl;
				}
			}
			p {
				display: inline-block;
				font-size: $font-lg;
				font-family: $font-001;
				font-weight: 600;
				margin: 0 10px;
				@include min($xl) {
					font-size: $font-xl;
				}
			}
		}
		.container {
			position: relative;
			> img {
				width: 300px;
				margin: 400px auto 0;
				display: block;
			}
		}
		h2 {
			background-color: $color-005;
			position: relative;
			padding: 20px 70px;
			width: fit-content;
			width: -moz-fit-content;
			margin: 80px auto 0;
			display: block;
			@include min($sm) {
				padding: 20px 100px;
			}
			@include min($lg) {
				margin: 50px auto 0;
			}
			@include min($xxxl) {
				margin: 30px auto 0;
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
	}
}
</style>
