let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
     menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const autotype = document.querySelector(".auto-type");

    if (autotype && typeof Typed !== "undefined") {
        new Typed(".auto-type", {
            strings: [
                "Programmer",
                "Web Developer",
                "???",
                "!!!",
                "...",
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true
        });
    }
});