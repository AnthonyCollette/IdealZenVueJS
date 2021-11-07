<template>
	<Nav />
	<PresentationSection />
	<Human />
	<Footer />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import PresentationSection from '@/components/PresentationSection.vue'
import Human from '@/components/Human.vue'

export default {
	name: 'Presentation',
	components: {
		Nav,
		Footer,
		PresentationSection,
		Human,
	},
}
</script>

<style lang="scss" scoped></style>
