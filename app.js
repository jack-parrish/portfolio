const navBarLinks = document.getElementsByClassName("mobile-nav-links")[0];
const navCheckbox = document.getElementById("nav-toggle");

navBarLinks.addEventListener("focusout", function() {
    const container = document.getElementsByClassName("mobile-nav-links")[0];
    const focusedWithin = container.matches(":focus-within");
    if (!focusedWithin) {
        document.getElementById("nav-toggle").checked = false;
    }
});
