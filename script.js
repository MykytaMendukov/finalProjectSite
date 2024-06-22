var AboutUs_A = document.getElementById("about-us-more")
var AboutUs_I = document.getElementById("about-us-img")

var Team_A = document.getElementById("team-more")
var Team_I = document.getElementById("team-img")

var Dir_A_1 = document.getElementById("direction-more1")
var Dir_I_1 = document.getElementById("direction-img1")
var Dir_A_2 = document.getElementById("direction-more2")
var Dir_I_2 = document.getElementById("direction-img2")
var Dir_A_3 = document.getElementById("direction-more3")
var Dir_I_3 = document.getElementById("direction-img3")

var Burger = document.getElementById("burger")
var Burger_Menu = document.getElementById("burger-menu")
var burgerDisplay = false;
var BurgerSpan_1 = document.getElementById("burger-span-1")
var BurgerSpan_2 = document.getElementById("burger-span-2")
var BurgerSpan_3 = document.getElementById("burger-span-3")

var Contact_Div = document.getElementById("contact-div")
var Contact_Submit = document.getElementById("contact-div-submit")
var contactDisplay = false;

AboutUs_A.addEventListener("mouseenter", () => AboutUs_I.src = "img/arrow-black.svg");
AboutUs_A.addEventListener("mouseleave", () => AboutUs_I.src = "img/arrow-white.svg");

Team_A.addEventListener("mouseenter", () => Team_I.src = "img/arrow-black.svg");
Team_A.addEventListener("mouseleave", () => Team_I.src = "img/arrow-white.svg");

Dir_A_1.addEventListener("mouseenter", () => Dir_I_1.src = "img/arrow-black.svg");
Dir_A_1.addEventListener("mouseleave", () => Dir_I_1.src = "img/arrow-white.svg");
Dir_A_2.addEventListener("mouseenter", () => Dir_I_2.src = "img/arrow-black.svg");
Dir_A_2.addEventListener("mouseleave", () => Dir_I_2.src = "img/arrow-white.svg");
Dir_A_3.addEventListener("mouseenter", () => Dir_I_3.src = "img/arrow-black.svg");
Dir_A_3.addEventListener("mouseleave", () => Dir_I_3.src = "img/arrow-white.svg");

function burgerFunc() {
    if (burgerDisplay == false) {
        Burger_Menu.style.display = "flex";
        burgerDisplay = true;

        BurgerSpan_1.style.transform = "rotate(45deg)";
        BurgerSpan_1.style.top = "7px";
        BurgerSpan_2.style.display = "none";
        BurgerSpan_3.style.transform = "rotate(-45deg)";
        BurgerSpan_3.style.bottom = "-7px";
    }
    else if (burgerDisplay == true) {
        Burger_Menu.style.display = "none";
        burgerDisplay = false;

        BurgerSpan_1.style.transform = "rotate(0)";
        BurgerSpan_1.style.top = "-10px";
        BurgerSpan_2.style.display = "inline";
        BurgerSpan_3.style.transform = "rotate(0)";
        BurgerSpan_3.style.bottom = "-10px";
    }

}

function changeContactDisplay() {
    if (contactDisplay == false) {
        Contact_Div.style.display = "inline";
        contactDisplay = true;
    }
    else if (contactDisplay == true) {
        Contact_Div.style.display = "none";
        contactDisplay = false;
    }
}