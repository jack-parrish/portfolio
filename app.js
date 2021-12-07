const navBarLinks = document.getElementsByClassName("mobile-nav-links")[0];
const navChildren = navBarLinks.children;
const navCheckbox = document.getElementById("nav-toggle");

const navChildrenArray = [...navChildren];

navChildrenArray.forEach(el => el.addEventListener("blur", removeNavChecked(navBarLinks,navCheckbox)));

function removeNavChecked(container,target) {
    const focusedWithin = container.matches(':focus-within');
    if (!focusedWithin) {
        target.checked = false;
        console.log("we got here");
    }
}