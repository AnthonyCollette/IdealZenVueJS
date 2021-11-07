<template>
	<nav>
		<div class="container">
			<router-link class="nav-brand" to="/" @click="ResetBurger">
				<img src="../../public/images/logo.svg" alt="Logo Ideal Zen" />
			</router-link>
			<div class="nav">
				<button class="burger-button" id="burger-btn" @click="ToggleNav">
					<div class="burger-button--line line1" id="line1"></div>
					<div class="burger-button--line line2" id="line2"></div>
					<div class="burger-button--line line3" id="line3"></div>
				</button>
				<ul class="nav__items" id="nav__items" v-if="NavShow">
					<li>
						<router-link to="/" @click="ResetBurger"> Accueil </router-link>
					</li>
					<li>
						<router-link to="/soin-energetique-reiki" @click="ResetBurger">
							Accompagnements
						</router-link>
					</li>
					<li
						class="menu-formations"
						id="menu-formations"
						@click="ToggleFormationsNav"
					>
						Formations
						<div class="sub-formations" id="sub-formations" v-if="SubNav">
							<router-link to="/formation-reiki-usui" @click="ResetBurger">
								Formation Reiki Usui
							</router-link>
							<router-link to="formation-reiki-kundalini" @click="ResetBurger">
								Formation Reiki Kundalini
							</router-link>
							<router-link to="formation-voie-du-silence" @click="ResetBurger">
								Formation Voie du Silence
							</router-link>
						</div>
					</li>
					<li>
						<router-link to="/presentation" @click="ResetBurger">
							Présentation
						</router-link>
					</li>
					<li>
						<a
							href="https://idealzen.wordpress.com"
							target="_blank"
							rel="noreferrer"
							@click="ResetBurger"
						>
							Actualités
						</a>
					</li>
					<li>
						<router-link to="/contact" @click="ResetBurger">
							Contact
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Nav',
	data() {
		return {
			SubNav: false,
			NavShow: false,
		}
	},
	methods: {
		ToggleFormationsNav() {
			this.SubNav = !this.SubNav
		},
		ToggleNav() {
			this.NavShow = !this.NavShow
			let line1 = document.getElementById('line1')
			let line2 = document.getElementById('line2')
			let line3 = document.getElementById('line3')
			if (this.NavShow == false) {
				line1.style.transform = 'rotate(0deg) translateY(0)'
				line2.style.opacity = '1'
				line3.style.transform = 'rotate(0deg) translateY(0px)'
			} else {
				line1.style.transform = 'rotate(45deg) translateY(12px)'
				line2.style.opacity = '0'
				line3.style.transform = 'rotate(-45deg) translateY(-12px)'
			}
		},
		ResetBurger() {
			let line1 = document.getElementById('line1')
			let line2 = document.getElementById('line2')
			let line3 = document.getElementById('line3')
			line1.style.transform = 'rotate(0deg) translateY(0)'
			line2.style.opacity = '1'
			line3.style.transform = 'rotate(0deg) translateY(0px)'
		},
	},
	created() {
		if (screen.width >= '1400') {
			this.NavShow = true
		} else {
			this.NavShow = false
		}
	},
}
</script>

<style lang="scss" scoped>
nav {
	background-color: $color-004;
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 35px 0;
		img {
			width: 175px;
		}
		ul {
			li {
				margin-left: 50px;
				&:hover {
					color: $color-008;
				}
			}
			a {
				color: $color-005;
				font-size: 21px;
				font-family: $font-001;
				transition: 0.4s;
				&:hover {
					color: $color-008;
				}
			}
		}
	}
	.nav {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	#nav__items {
		flex-direction: column;
		align-items: flex-end;
		position: relative;
		position: absolute;
		z-index: 999;
		background-color: $color-004;
		top: 100%;
		padding: 10px 0;
		transition-duration: 0.4s;
		@include min($xxl) {
			display: flex;
			flex-direction: row;
			align-items: center;
			position: relative;
		}
		li {
			padding: 10px 50px;
			@include min($xxl) {
				padding: 0;
			}
		}
	}
	.burger-button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		width: fit-content;
		height: fit-content;
		&--line {
			height: 3px;
			width: 25px;
			background-color: $color-005;
			margin: 5px;
		}
		#line1,
		#line2,
		#line3 {
			transition: 0.4s ease-in-out;
		}
		@include min($xxl) {
			display: none;
		}
	}

	.menu-formations {
		position: relative;
		color: $color-005;
		font-size: 21px;
		font-family: $font-001;
		cursor: pointer;
	}
}

.opened-line1 {
	transform: rotate(45deg) translateY(12px);
}
.opened-line2 {
	opacity: 0;
}
.opened-line3 {
	transform: rotate(-45deg) translateY(-12px);
}

.sub-formations {
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 999;
	max-width: fit-content;
	max-width: -moz-fit-content;
	right: 0;
	top: 100%;
	@include min($sm) {
		top: 0;
		right: 100%;
	}
	@include min($xxl) {
		top: 100%;
		right: 0;
	}
	a {
		text-align: end;
		background-color: $color-004;
		padding: 10px 50px;
		width: 220px;
		@include min($xxl) {
			width: 340px;
			padding: 40px 50px 40px 0;
		}
		&:not(:last-of-type) {
			border-bottom: 1px solid $color-005;
		}
	}
}
</style>
