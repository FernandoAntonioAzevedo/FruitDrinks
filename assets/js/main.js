/*=============== MENU ===============*/

/* Menu show */

/* Menu hidden */

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== HOME HEIGHT ===============*/

/*=============== FIRST SWIPER ===============*/
var firstSwiper = new Swiper('.first-swiper', {
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	on: {
		slideChange: function() {
			const slideIndex = this.realIndex;
			const isAtFirstSlide = slideIndex === 0;
			const left = isAtFirstSlide ? 0.25 : slideIndex * 50;

			const mockupImage = document.getElementById('home-mockup');
			mockupImage.style.setProperty('--left', `${left}%`);
		},
	},
});

/*=============== SECOND SWIPER ===============*/

/*=============== SYNCHRONIZING SWIPERS ===============*/

/*=============== GSAP ANIMATION ===============*/
