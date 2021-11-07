<template>
	<section class="kundalini-formations">
		<img
			src="../../public/images/hands-and-dots.png"
			alt="Icone de mains portant un lotus"
		/>
		<div class="kundalini-formations__text-wrapper">
			<p>Retrouvez les dates de formations dans les</p>
			<div class="kundalini-formations__text-wrapper--buttons-wrapper">
				<div class="btn-wrapper">
					<a class="btn" href="https://idealzen.wordpress.com/" target="_blank"
						>Acualités</a
					>
				</div>
				<span>ou</span>
				<div class="btn-wrapper">
					<router-link class="btn" to="/contact">contactez-moi !</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'KundaliniFormations',
}
</script>

<style lang="scss" scoped>
.kundalini-formations {
	background-color: $color-006;
	padding: 50px 0 130px 0;
	> img {
		display: block;
		width: 300px;
		margin: 0 auto 50px;
		max-width: 80%;
	}
	&__text-wrapper {
		max-width: 90%;
		background-color: $color-005;
		position: relative;
		margin: 0 auto;
		padding: 45px 40px;
		p {
			text-align: center;
		}
		@include min($lg) {
			max-width: 40%;
			padding: 45px 80px;
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
