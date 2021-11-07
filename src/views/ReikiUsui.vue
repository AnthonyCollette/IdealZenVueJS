<template>
	<Nav />
	<UsuiIntro />
	<UsuiDegrees />
	<UsuiPresentiel />
	<Footer />
</template>

<script>
import Nav from '@/components/Nav.vue'
import UsuiIntro from '@/components/UsuiIntro.vue'
import UsuiDegrees from '@/components/UsuiDegrees.vue'
import UsuiPresentiel from '@/components/UsuiPresentiel.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'ReikiUsui',
	components: {
		Nav,
		UsuiIntro,
		UsuiDegrees,
		UsuiPresentiel,
		Footer,
	},
}
</script>

<style lang="scss" scoped></style>
