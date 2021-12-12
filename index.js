const navBarLinks = document.getElementsByClassName("mobile-nav-links")[0];
const navCheckbox = document.getElementsByClassName("nav-toggle")[0];
const mainHeader = document.getElementById("main-header");

navBarLinks.addEventListener("focusout", function() {
    const container = document.getElementsByClassName("mobile-nav-links")[0];
    const focusedWithin = container.matches(":focus-within");
    if (!focusedWithin) {
        const toggle = document.getElementById("nav-toggle");
        if (toggle.checked) {
            toggle.checked = !toggle.checked;
            toggle.classList.add("togglefalse");
        }
    }
});

document.addEventListener("click", function(e) {
    const toggle = document.getElementById("nav-toggle");
    const toggleLabel = document.getElementsByClassName("nav-toggle-label")[0];
    const toggleLabelChild = toggleLabel.children[0];

    if (toggle.classList.contains("togglefalse")) {
        toggle.classList.remove("togglefalse");
        if (e.target === toggleLabel || e.target === toggleLabelChild) {
            e.preventDefault();
        }
    }
});

//Hide navbar when scrolling down, add it back when scrolling up
let didScroll;
let lastKnownScrollPosition = 0;
document.addEventListener("scroll", function() {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        if (window.scrollY > lastKnownScrollPosition && window.scrollY > 40) {
            scrolledDown();
            lastKnownScrollPosition = window.scrollY;
            didScroll = false;
        }
        else if (window.scrollY < lastKnownScrollPosition) {
            scrolledUp();
            lastKnownScrollPosition = window.scrollY;
            didScroll = false;
        }
    }
}, 250); 

function scrolledDown() {
    mainHeader.classList.add("hidden");
}
function scrolledUp() {
    mainHeader.classList.remove("hidden");
}