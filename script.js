const navToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})

const nextIcon = '<img src="images/next-icon.png">';
const prevIcon = '<img src="images/prev-icon.png">';
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:false,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],

    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true
        }
    }
})