<template>
	<vueper-slides fixed-height="true" :dragging-distance="40">
		<vueper-slide
			v-for="(slide, i) in slides"
			:key="i"
			:content="slide.content"
			:title="slide.title"
		/>
	</vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
	name: 'Slider',
	components: {
		VueperSlides,
		VueperSlide,
	},
	data() {
		return {
			slides: [
				{
					title: `<i class="fas fa-user"></i> M-Christine`,
					content: ` Un cancer du sein diagnostiqué fin 2018, suivi du protocole classique très contraignant ( chirurgie, chimio, radiothérapie, hormonothérapie ) De lourds traitements qui font beaucoup de dégâts et plombent l'énergie, et je ne parle pas du choc émotionnel à gérer. J'ai été accompagnée par Virginie tout au long de l'année 2019 et j'ai récupéré une énergie et une vitalité à peine croyables, allant jusqu'à faire des randonnées de 8 kms les lendemains de chimio. Je ne pourrai jamais assez te remercier Virginie mais je sais que je te serai éternellement reconnaissante. Grace à toi et aussi à moi 😄 j'ai vécu une vraie libération. Merci pour tout.`,
				},
				{
					content: `N’hésitez pas une seule seconde…l’écoute , la grande sensibilité, et des soins qui dépotent🔥❤️🤗vous êtes entre de très bonnes mains ☀️`,
					title: `<i class="fas fa-user"></i> Christine`,
				},
				{
					content: ` Des soins qui m'ont souvent permis d'éviter un arrêt de travail et surtout trois jours de carences à cause de tendinites des épaules, j'ai appelé à nouveau Ideal Zen à l'aide quand mon chat a fini aux urgences vétérinaires avec un diagnostic des plus pessimistes (les vétos ne le voyaient pas passer le week-end). Grâce à des soins énergétiques à distance, mon gros matou est
                        à nouveau à la maison, il récupère doucement et s'il n'est pas encore sorti d'affaire, les vétérinaires sont impressionnés par ses progrès rapides ! Un immense merci ! Je recommande vivement !`,
					title: `<i class="fas fa-user"></i> Marlène`,
				},
				{
					content: `Virginie est une belle personne douce, bienveillante et à l'écoute. J'ai eu des ressentis vraiment différents au fil des soins, intenses ou doux comme des plumes, légers comme des nuages, tous très agréable. La dernière séance m'amène à réfléchir plus profondément sur moi. Merci infiniment Virginie pour ces moments qui m'apportent beaucoup 🙏🏼🙏🏼🙏🏼❤❤❤`,
					title: `<i class="fas fa-user"></i> Solange`,
				},
				{
					content: `Agréable moment, très relaxant ! Bulle de bien-être ! Thérapeute très à l'écoute, douce, passionnée. Personne qui a beaucoup d'empathie. Soin de qualité. Je recommande vivement.`,
					title: `<i class="fas fa-user"></i> Mélanie`,
				},
			],
		}
	},
}
</script>

<style lang="scss">
.vueperslides {
	margin: 0 0 100px 0;
	&--fixed-height {
		height: 1000px;
		@include min($sm) {
			height: 800px;
		}
		@include min($lg) {
			height: 500px;
		}
	}
}
.vueperslides__inner {
	background-color: $color-004;
	@include min($lg) {
		margin: 300px 0 0;
	}
	.vueperslides__arrows,
	.vueperslides__bullets {
		color: $color-003;
	}
	.vueperslides__arrows {
		display: none;
		@include min($sm) {
			display: block;
		}
	}
	.vueperslide__content {
		color: $color-003;
		max-width: 75%;
		position: relative;
		font-family: $font-001;
		font-size: $font-lg;
		&::before {
			@include min($xl) {
				content: '';
				position: absolute;
				bottom: 100%;
				right: 100%;
				width: 100px;
				height: 75px;
				background-image: url('../assets/images/guillemets.png');
				background-repeat: no-repeat;
			}
		}
		&::after {
			@include min($xl) {
				content: '';
				position: absolute;
				top: 100%;
				left: 100%;
				width: 100px;
				height: 75px;
				background-image: url('../assets/images/guillemets.png');
				background-repeat: no-repeat;
				transform: rotate(180deg);
			}
		}
	}
	.vueperslides__parallax-wrapper {
		box-shadow: none;
	}
	.vueperslide__title {
		color: $color-003;
		font-family: $font-001;
		margin-top: 50px;
		order: 2;
		font-size: $font-lg;
		i {
			margin-right: 10px;
		}
	}
}
</style>
