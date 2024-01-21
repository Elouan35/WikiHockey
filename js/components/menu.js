const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const cross = document.querySelector(".fa-xmark");

burgerMenu.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
});

cross.addEventListener("click", () => {
    menu.style.transform = "translateX(100%)";
});

menu.addEventListener("click", () => {
    menu.style.transform = "translateX(100%)";
});
