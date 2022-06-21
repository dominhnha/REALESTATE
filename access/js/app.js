
// ------ animation---------------//
new WOW().init();

// -------navmenu----------//
let navbutton = document.querySelector(".Header-nav-button");
let navclose = document.querySelector(".navbar-mobile-close");
// open and close nav menu
function activeNavMenu() {
    let navMobile = document.querySelector(".navbar-mobile")
    navMobile.classList.toggle("navbar-mobile-active");
}
navbutton.addEventListener("click", activeNavMenu);
navclose.addEventListener("click", activeNavMenu);