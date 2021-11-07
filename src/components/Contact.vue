<template>
	<section class="contact">
		<div class="container">
			<div class="row">
				<div class="contact__infos col-lg-4">
					<h1>Pour prendre rendez-vous</h1>
					<p>Du lundi au vendredi 9h-12h / 14h-18h</p>
					<p>Par téléphone 06.07.64.04.05</p>
					<p>
						ou par mail
						<a href="mailto:contact@idealzen.fr" target="_blank"
							>contact@idealzen.fr</a
						>
					</p>
				</div>
				<div class="contact__location col-lg-4">
					<h1>Pour me trouver</h1>
					<p>17 rue Saint-Exupery</p>
					<p>21160 Couchey</p>
					<div class="map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.7795176489844!2d4.9855300162625875!3d47.26001451984776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29bac14704987%3A0x5984b242d4ac25fa!2sIdeal%20Zen!5e0!3m2!1sfr!2sfr!4v1635348210259!5m2!1sfr!2sfr"
							width="320"
							height="280"
							style="border: 0"
							allowfullscreen=""
							loading="lazy"
						></iframe>
					</div>
				</div>
				<div class="contact__social-media col-lg-4">
					<h1>Pour ne rien manquer</h1>
					<div class="contact__social-media--link">
						<a href="http://instagram.com/idealzen" target="_blank"
							><i class="fab fa-instagram-square"></i
						></a>
						<p>@idealzen</p>
					</div>
					<div class="contact__social-media--link">
						<a href="https://www.facebook.com/IdealZen21" target="_blank"
							><i class="fab fa-facebook-square"></i
						></a>
						<p>/IdealZen21</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Contact',
}
</script>

<style lang="scss" scoped>
.contact {
	min-height: 60vh;
	h1 {
		align-self: center;
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.col-lg-4 {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		width: 95%;
		@include min($lg) {
			margin: 0 50px;
			width: 30%;
		}
		@include min($xxl) {
			margin: 0;
			width: 33.33%;
		}
	}
	iframe {
		width: 250px;
		@include min($sm) {
			width: auto;
		}
	}
	&__infos {
		a {
			color: $color-008;
		}
	}
	h1 {
		font-family: $font-002;
		font-size: $font-xl;
		text-align: center;
		color: $color-008;
		margin: 100px 0 50px;
		@include min($lg) {
			font-size: $font-xxl;
		}
	}
	p {
		color: $color-003;
	}
	iframe {
		margin-top: 50px;
		position: relative;
		&::after {
			position: absolute;
			content: '';
			background-image: url('../assets/images/leafs-hover.svg');
			background-size: cover;
			background-repeat: no-repeat;
			height: 60px;
			width: 60px;
			opacity: 0;
			bottom: 30%;
			right: 0%;
			transition: 0.4s;
			z-index: -1;
			transform: translateX(50%);

			@include min($xxl) {
				font-size: $font-lg;
				height: 80px;
				width: 80px;
			}
		}
	}
	&__social-media {
		margin-top: 50px;
		@include min($lg) {
			margin-top: 0;
		}
		&--link {
			display: flex;
			align-items: center;
			p {
				margin-bottom: 0;
			}
		}
		i {
			color: $color-008;
			font-size: 40px;
		}
		p {
			margin-left: 20px;
		}
	}
}
</style>
