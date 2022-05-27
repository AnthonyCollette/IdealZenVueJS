<template>
	<div class="avis">
		<Nav />
		<Slider />
		<Footer />
	</div>
</template>

<script>
import Slider from '../components/Slider.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Avis',
	components: {
		Slider,
		Nav,
		Footer,
	},
}
</script>

<style lang="scss" scoped>
.avis {
	background-color: $color-006;
}
</style>
