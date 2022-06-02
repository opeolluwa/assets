//ref the svg
const navigationButton = document.getElementById("nav-btn");
const navLinks = document.querySelectorAll("nav a");
const navigation = document.querySelector("nav");
const menu = document.querySelector("#navigation");
navigationButton.addEventListener("click", () => {
    //alert("hey");
    menu.classList.toggle("d-block");
});

//change navigation color on scroll
window.onscroll = function () {
    "use strict";
    if (
        document.body.scrollTop >= 280 ||
        document.documentElement.scrollTop >= 280
    ) {
        navigation.classList.add("nav-scroll");
        menu.classList.add("overlay");
        navLinks.forEach((navLink) => {
            navLink.classList.add("nav-link-scroll");
        });
    } else {
        navigation.classList.remove("nav-scroll");
        menu.classList.remove("overlay");
        navLinks.forEach((navLink) => {
            navLink.classList.remove("nav-link-scroll");
        });
    }
};