<template>
	<Nav />
	<Accompagnements />
	<Seances />
	<Forfaits />
	<Presentiel />
	<Footer :color="'#f9f4ec'" />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Accompagnements from '@/components/Accompagnements'
import Forfaits from '@/components/Forfaits'
import Seances from '@/components/Seances'
import Presentiel from '@/components/Presentiel'

export default {
	name: 'Accompagments',
	components: {
		Nav,
		Accompagnements,
		Seances,
		Forfaits,
		Presentiel,
		Footer,
	},
}
</script>

<style lang="scss" scoped></style>
