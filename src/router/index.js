import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Accompagnements from '../views/Accompagnements.vue'
import ReikiUsui from '../views/ReikiUsui.vue'
import ReikiKundalini from '../views/ReikiKundalini.vue'
import VoixDuSilence from '../views/VoixDuSilence.vue'
import Presentation from '../views/Presentation.vue'
import ContactPage from '../views/Contact.vue'
import Mentions from '../views/Mentions.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/soin-energetique-reiki',
		name: 'Accompagnements',
		component: Accompagnements,
	},
	{
		path: '/formation-reiki-usui',
		name: 'ReikiUsui',
		component: ReikiUsui,
	},
	{
		path: '/formation-reiki-kundalini',
		name: 'ReikiKundalini',
		component: ReikiKundalini,
	},
	{
		path: '/formation-voie-du-silence',
		name: 'VoixDuSilence',
		component: VoixDuSilence,
	},
	{
		path: '/presentation',
		name: 'Presentation',
		component: Presentation,
	},
	{
		path: '/contact',
		name: 'ContactPage',
		component: ContactPage,
	},
	{
		path: '/mentions-legales',
		name: 'Mentions',
		component: Mentions,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { left: 0, top: 0 }
	},
})

export default router
