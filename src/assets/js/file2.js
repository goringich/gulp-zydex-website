// portfolio after header
let lol = document.getElementById("prob");
    lol.style.left = "0px";

function transformM(){
    let right = lol.style.left;
    if(right  != "") right  = parseInt(right );
    else right  = 100;
    right  += 7;
    lol.style.left = right + "px";
}

function transformL(){
    let left = lol.style.left;
    if(left != "") left = parseInt(left);
    else left = 100;
    left -= 7;
    lol.style.left = left + "px";
}

let rightF = document.getElementById("first")
rightF.addEventListener("mousemove", transformM, false)

let leftF = document.getElementById("second")
leftF.addEventListener("mousemove", transformL, false)



// circle
document.querySelectorAll( '.ciclegraph' ).forEach( ( ciclegraph )=>{
    let circles = ciclegraph.querySelectorAll( '.circle' )
    let angle = 360-90, dangle = 360 / circles.length
    for( let i = 0; i < circles.length; ++i ){
      let circle = circles[i]
      angle += dangle
      circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
    }
})


// text portfolio
var elements = document.querySelectorAll(".whywe__item");

var counter = 1;
setInterval(function(){
    for (var i = 0; i < elements.length; ++i) {
        elements[i].style.display = 'none';
    }

    if (counter > elements.length - 1)
    counter = 0;

    elements[counter].style.display = 'block';
    counter++;
}, 2000);

  
// plash
const plash = document.getElementById("plash")
plash.style.transform = "scale(1) rotate(0deg)";

$(window).scroll(function(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.back__serv').offset().top;
	var eh = $('.back__serv').outerHeight();
	var dh = $(document).height();   
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
        function plashF(){
            plash.style.transform = "scale(1) rotate(0deg)";
        }
        plashF()
	}
    else{
        function plashF(){
            plash.style.transform = "scale(0) rotate(-180deg)";
        }
        plashF()
    }
});