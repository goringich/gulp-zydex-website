export function check(parent, items, timeDifference, timeFirst){
  function getPosition(element) {
    let clientRect = element.getBoundingClientRect();
    return {left: clientRect.left + document.body.scrollLeft,
            top: clientRect.top + document.body.scrollTop};
  }

  let parentHeight = -parent.clientHeight
  if ( getPosition(parent).top <= 0 && getPosition(parent).top >= parentHeight){
    for (let i = 0, time = timeFirst; items.length > i; i++, time+=timeDifference){
      setTimeout(() =>{
        items[i].classList.add("active")
      }, time)
    }
  } else{
    for (let i = 0; items.length > i; i++){
      setTimeout(() =>{
        items[i].classList.remove("active")
      }, 1)
    }
  } 
}


export default function Pack(){
  // circle
  document.querySelectorAll('.ciclegraph').forEach((ciclegraph) => {
  let circles = ciclegraph.querySelectorAll( '.circle' );
      let angle = 360-90,
      dangle = 360 / circles.length;
      for( let i = 0; i < circles.length; ++i ){
          let circle = circles[i];
          angle += dangle;
          circle.style.transform = `rotate(${angle}deg) translate(calc(570*.007rem / 2)) rotate(-${angle}deg)`;
      }
  });

  let items2 = document.querySelectorAll(".package__text")
  const parent2 = document.querySelector(".package")
  const plash = document.getElementById("back__serv")
  plash.classList.add("active")

  window.addEventListener("scroll", function(){
    let value2 = scrollY + plash.clientHeight
    let plashOffsetBottom = $(window).height() + plash.clientHeight

    check(parent2, items2, 100, 300)

    if(value2 <= plash.offsetTop + plash.clientHeight && plash.offsetTop < plashOffsetBottom){
      plash.classList.add("active")
    } else{
      plash.classList.remove("active")
    }
  })
}
