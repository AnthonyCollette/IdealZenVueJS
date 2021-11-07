<template>
	<Nav />
	<Contact />
	<Footer />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Contact from '@/components/Contact.vue'

export default {
	name: 'ContactPage',
	components: {
		Nav,
		Footer,
		Contact,
	},
}
</script>

<style lang="scss" scoped></style>
