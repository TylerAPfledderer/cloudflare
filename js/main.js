// Grab mobile media size
const mobileSize = window.matchMedia("(max-width: 767px)");

// Grab main-nav
const mainNav = document.querySelector(".main-nav");

// To add or remove class for mainNav when checking screen size
const mobileScreen = () => {
    if (mobileSize.matches)  {
        /* Hide main-nav initially when in a mobile screen size 
            for dropdown functionallity. */
        mainNav.classList.add("hidden");
    } else {
        mainNav.classList.remove("hidden");
    }
}

// Run screen size check on load
window.addEventListener("load", mobileScreen());

// Trigger for main nav display when window resizes
window.addEventListener("resize", () => {
    mobileScreen();
});

// Grab nav dropdown for toggle event
const dropdown = document.querySelector("#nav-dropdown");

// On click or "Enter". Toggle the nav menu into view (for mobile) and rotate the chevron glyph

const dropdownToggle = () => {
    dropdown.classList.toggle("clicked");
    mainNav.classList.toggle("hidden");
}

dropdown.addEventListener("click", () => {
    dropdownToggle();  
});