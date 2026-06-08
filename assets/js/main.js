/*=============== MENU ===============*/

/* Menu show */

/* Menu hidden */

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
	const header = document.getElementById('header');

	this.scrollY >= 50 
	? header.classList.add('bg-header') 
	: header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);

/*=============== HOME HEIGHT ===============*/
const homeHight = () => {
	const home = document.getElementById('home')
}

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
var secondSwiper = new Swiper('.second-swiper', {
	loop: true,
	direction: 'vertical',
});


/*=============== SYNCHRONIZING SWIPERS ===============*/
firstSwiper.controller.control = secondSwiper;

/*=============== GSAP ANIMATION ===============*/
