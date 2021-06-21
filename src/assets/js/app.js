AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: -200, // offset (in px) from the original trigger point
    delay: 750, // что появится первым / values from 0 to 3000, with step 50ms
    duration: 900, // скорость появления
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'bottom-bottom', // defines which position of the element regarding to window should trigger the animation
});


// slider
$('.single-item').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,

    prevArrow: $('.btn--prev'),
    nextArrow: $('.btn--next'),
});


//parallax нельзя выше
var scene = document.getElementById('scene');
var scene2 = document.getElementById('scene2');
var scene4 = document.getElementById('scene4');
var parallaxInstance = new Parallax(scene);
var parallaxInstance = new Parallax(scene2);
var parallaxInstance = new Parallax(scene4);