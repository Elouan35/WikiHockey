const loader = document.querySelector(".back-loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});
