window.onscroll = function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "black";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
};