const navBarLinks = document.getElementsByClassName("mobile-nav-links")[0];
const navCheckbox = document.getElementsByClassName("nav-toggle")[0];

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
