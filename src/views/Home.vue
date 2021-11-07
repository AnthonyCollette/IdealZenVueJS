<template>
	<div class="home">
		<Nav />
		<Hero />
		<Soins />
		<Slider />
		<Footer />
	</div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Nav from '../components/Nav.vue'
import Soins from '../components/Soins.vue'
import Footer from '../components/Footer.vue'
import Slider from '../components/Slider.vue'

export default {
	name: 'Home',
	components: {
		Nav,
		Hero,
		Soins,
		Footer,
		Slider,
	},
}
</script>
