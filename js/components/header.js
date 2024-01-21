const player = document.querySelector(".player");
const palais = document.querySelector(".palais");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY < header.clientHeight) {
        player.style.transform = `translateX(${window.scrollY / 2}px)`;
        player.style.filter = `blur(${window.scrollY / 100}px)`;
        palais.style.transform = `translateX(-${window.scrollY * 1.5}px)`;
        palais.style.filter = `blur(${2 - window.scrollY / 100}px)`;
    }
});
