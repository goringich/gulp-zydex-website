/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("AOS.init({\r\n    // Global settings:\r\n    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function\r\n    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on\r\n    initClassName: 'aos-init', // class applied after initialization\r\n    animatedClassName: 'aos-animate', // class applied on animation\r\n    useClassNames: true, // if true, will add content of `data-aos` as classes on scroll\r\n    disableMutationObserver: false, // disables automatic mutations' detections (advanced)\r\n    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)\r\n    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)\r\n    \r\n  \r\n    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:\r\n    offset: -200, // offset (in px) from the original trigger point\r\n    delay: 750, // что появится первым / values from 0 to 3000, with step 50ms\r\n    duration: 900, // скорость появления\r\n    easing: 'ease', // default easing for AOS animations\r\n    once: false, // whether animation should happen only once - while scrolling down\r\n    mirror: false, // whether elements should animate out while scrolling past them\r\n    anchorPlacement: 'bottom-bottom', // defines which position of the element regarding to window should trigger the animation\r\n});\r\n\r\n\r\n// slider\r\n$('.single-item').slick({\r\n    dots: false,\r\n    infinite: true,\r\n    speed: 1000,\r\n    fade: true,\r\n\r\n    prevArrow: $('.btn--prev'),\r\n    nextArrow: $('.btn--next'),\r\n});\r\n\r\n\r\n//parallax нельзя выше\r\nvar scene = document.getElementById('scene');\r\nvar scene2 = document.getElementById('scene2');\r\nvar scene4 = document.getElementById('scene4');\r\nvar parallaxInstance = new Parallax(scene);\r\nvar parallaxInstance = new Parallax(scene2);\r\nvar parallaxInstance = new Parallax(scene4);\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// portfolio after header\nlet lol = document.getElementById(\"prob\");\n    lol.style.left = \"0px\";\n\nfunction transformM(){\n    let right = lol.style.left;\n    if(right  != \"\") right  = parseInt(right );\n    else right  = 100;\n    right  += 7;\n    lol.style.left = right + \"px\";\n}\n\nfunction transformL(){\n    let left = lol.style.left;\n    if(left != \"\") left = parseInt(left);\n    else left = 100;\n    left -= 7;\n    lol.style.left = left + \"px\";\n}\n\nlet rightF = document.getElementById(\"first\")\nrightF.addEventListener(\"mousemove\", transformM, false)\n\nlet leftF = document.getElementById(\"second\")\nleftF.addEventListener(\"mousemove\", transformL, false)\n\n\n\n// circle\ndocument.querySelectorAll( '.ciclegraph' ).forEach( ( ciclegraph )=>{\n    let circles = ciclegraph.querySelectorAll( '.circle' )\n    let angle = 360-90, dangle = 360 / circles.length\n    for( let i = 0; i < circles.length; ++i ){\n      let circle = circles[i]\n      angle += dangle\n      circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`\n    }\n})\n\n\n// text portfolio\nvar elements = document.querySelectorAll(\".whywe__item\");\n\nvar counter = 1;\nsetInterval(function(){\n    for (var i = 0; i < elements.length; ++i) {\n        elements[i].style.display = 'none';\n    }\n\n    if (counter > elements.length - 1)\n    counter = 0;\n\n    elements[counter].style.display = 'block';\n    counter++;\n}, 2000);\n\n  \n// plash\nconst plash = document.getElementById(\"plash\")\nplash.style.transform = \"scale(1) rotate(0deg)\";\n\n$(window).scroll(function(){\n\tvar wt = $(window).scrollTop();\n\tvar wh = $(window).height();\n\tvar et = $('.back__serv').offset().top;\n\tvar eh = $('.back__serv').outerHeight();\n\tvar dh = $(document).height();   \n\tif (wt + wh >= et || wh + wt == dh || eh + et < wh){\n        function plashF(){\n            plash.style.transform = \"scale(1) rotate(0deg)\";\n        }\n        plashF()\n\t}\n    else{\n        function plashF(){\n            plash.style.transform = \"scale(0) rotate(-180deg)\";\n        }\n        plashF()\n    }\n});\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\projects\\3\\gulp4-project\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\projects\\3\\gulp4-project\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });