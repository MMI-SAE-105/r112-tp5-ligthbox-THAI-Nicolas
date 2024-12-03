// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox > img");

document.body.addEventListener("click", (evt) => {
    if (evt.target.matches("img[data-full-img]")) {
        lightboxImg.src = evt.target.dataset.fullImg;
        lightbox.classList.remove("hidden", "sortie");
        lightbox.showModal();
    }

})
lightbox.addEventListener("click", (evt) => {
    lightbox.classList.add("sortie");
    lightbox.addEventListener("animationend", () => {
        lightbox.close();
        lightbox.classList.add("hidden");
    }, { once: true });
})