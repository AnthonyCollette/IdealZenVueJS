<template>
	<router-view />
</template>

<style lang="scss">
* {
	margin: 0;
}

html {
	scroll-behavior: smooth;
}

body {
	overflow-x: hidden;
}

a {
	color: $color-002;
	text-decoration: none;
}

li {
	list-style: none;
}

.container {
	max-width: 90%;
	margin: 0 auto;
	@include min($lg) {
		max-width: 890px;
	}
	@include min($xl) {
		max-width: 1100px;
	}
	@include min($xxl) {
		max-width: 1300px;
	}
	@include min($xxxl) {
		max-width: 1715px;
	}
}

.flex {
	display: flex !important;
}

.white-text {
	color: $color-003;
	@include min($lg) {
		color: $color-001;
	}
}

#freeprivacypolicy-com---nb {
	position: fixed;
	bottom: 0;
	background-color: $color-008;
	p {
		color: $color-001;
	}
	.cc-nb-okagree {
		background-color: $color-007;
	}
	.cc-nb-reject {
		background-color: $color-007;
	}
}

.router-link-active {
	color: $color-008 !important;
}

// IMPORT FONTS

@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@font-face {
	font-family: 'Champagne';
	src: url('./assets/fonts/Champagne&Limousines.ttf');
}

@font-face {
	font-family: 'Britannic';
	src: url('./assets/fonts/BRITANIC.TTF');
}

// FONTS STYLE

h1 {
	font-family: $font-003;
	font-size: $font-xxl;
	color: $color-003;
	font-weight: 600;
	@include min($sm) {
		font-size: $font-xxxl;
	}
}

.h1 {
	display: flex;
	align-items: center;
	&::after {
		@include min($sm) {
			content: '';
			background-image: url('./assets/images/Groupe\ 5.png');
			display: inline-block;
			background-size: cover;
			transform: rotate(-10deg);
			width: 70px;
			height: 65px;
		}
	}
}

h2 {
	font-family: $font-002;
	font-size: $font-xl;
	color: $color-001;
	text-align: center;
	@include min($lg) {
		font-size: $font-xxl;
	}
}
h2.big {
	font-size: $font-xxl;
	text-align: center;
	@include min($xl) {
		font-size: $font-xxxl;
	}
}

h3 {
	font-family: $font-002;
	font-size: $font-xxxl;
	color: $color-007;
}

h4 {
	font-family: $font-001;
	font-size: $font-lg;
	color: $color-001;
	font-weight: 400;
}

h5 {
	font-size: $font-lg;
	font-family: $font-002;
	color: $color-001;
}

h6 {
	font-size: $font-lg;
	font-family: $font-002;
	color: $color-003;
}

p {
	font-family: $font-001;
	font-size: $font-md;
	color: $color-001;
	@include min($xxl) {
		font-size: $font-lg;
	}
}

// BUTTONS STYLES

.btn {
	color: $color-001;
	background-color: $color-007;
	position: relative;
	border-radius: 50px;
	padding: 15px 20px;
	transition: 0.4s;
	font-family: $font-001;
	font-size: $font-md;
	z-index: 1;
	@include min($xxl) {
		font-size: $font-lg;
	}
	&::after {
		position: absolute;
		content: '';
		background-image: url('./assets/images/leafs-hover.svg');
		background-size: cover;
		background-repeat: no-repeat;
		height: 60px;
		width: 60px;
		opacity: 0;
		bottom: 30%;
		right: 0%;
		transition: 0.4s;
		z-index: -1;
		transform: translateX(50%);

		@include min($xxl) {
			font-size: $font-lg;
			height: 80px;
			width: 80px;
		}
	}
	&:hover {
		color: $color-007;
		background-color: $color-001;
		&::after {
			opacity: 1;
		}
	}
}

.btn-wrapper {
	margin-block: 20px;
	@include min($lg) {
		margin-block: 0;
	}
}
</style>
