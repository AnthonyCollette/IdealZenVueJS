<template>
	<div class="home">
		<Nav />
		<Hero />
		<Footer />
	</div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Home',
	components: {
		Nav,
		Hero,
		Footer,
	},
}
</script>
