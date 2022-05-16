import Pack from "./pack.js"
import Portfolio from "./portfolio.js"
import Contact from "./contact.js"

$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$("nav li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});

const scenes = document.querySelectorAll('.scene');
const parallaxes = Array.from(scenes, (scene) => new Parallax(scene));

let portfolio = document.getElementById("portfolio")
let pack = document.getElementById("package__page")
let contact = document.getElementById("contact__page")
console.log(contact);

if (pack !== null){
  Pack()
} else if (portfolio !== null){
  Portfolio(portfolio)
} else if (contact !== null){
  Contact()
} else{
  console.log("дефолтная страница");
}