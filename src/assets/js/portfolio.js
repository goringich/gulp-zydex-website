import {check} from "./pack.js"

export default function Portfolio(){
    // slider
    $('.single-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
    
        prevArrow: $('.btn--prev'),
        nextArrow: $('.btn--next')
    });

    $('#prob').slick({
        dots: true,
        infinite: false,
        speed: 1000,
        fade: false,
    
        prevArrow: $('#hover1'),
        nextArrow: $('#hover2')
    });


    // text portfolio
    let elements = document.querySelectorAll(".whywe__item");
    const len = elements.length

    setInterval(function withoutDelayForTheFirstTime(){
        for (let i = 0, time = 0; elements.length > i; i++, time +=3000){
            setTimeout(() => {
                elements[i].classList.add("active")
                elements[(i+len-1)%len].classList.remove("active")
            }, time)
        }
    }(), 3000*4)

    // scroll
    window.addEventListener("scroll", () => {
        check(document.querySelector(".stories"), document.querySelectorAll(".stories__item__img"), 1000, 0)
        check(document.querySelector(".stories"), document.querySelectorAll(".stories__text"), 1000, 500)
    })
}