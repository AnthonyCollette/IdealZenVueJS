<template>
	<Nav />
	<SilenceIntro />
	<SilenceFormation />
	<Footer :color="'#f9f4ec'" />
</template>

<script>
import Nav from '@/components/Nav.vue'
import SilenceIntro from '@/components/SilenceIntro.vue'
import SilenceFormation from '@/components/SilenceFormation.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'VoixDuSilence',
	components: {
		Nav,
		SilenceIntro,
		SilenceFormation,
		Footer,
	},
}
</script>

<style lang="scss" scoped></style>
