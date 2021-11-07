<template>
	<Nav />
	<KundaliniIntro />
	<KundaliniFormations />
	<Footer :color="'#f9f4ec'" />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import KundaliniIntro from '@/components/KundaliniIntro.vue'
import KundaliniFormations from '@/components/KundaliniFormations.vue'

export default {
	name: 'ReikiKundalini',
	components: {
		Nav,
		KundaliniIntro,
		KundaliniFormations,
		Footer,
	},
}
</script>

<style lang="scss" scoped></style>
