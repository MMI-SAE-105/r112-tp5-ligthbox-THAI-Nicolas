// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox > img");

document.body.addEventListener("click", (evt) => {
    if (evt.target.matches("img[data-full-img]")) {
        const fullImgUrl = evt.target.dataset.fullImg;
        lightboxImg.src = fullImgUrl;
        lightbox.style.display = "flex";
        lightbox.showModal();
    }
    lightbox.addEventListener("click", () =>
        lightbox.close());
    if (evt.target === lightboxImg) {
        lightbox.close();
        lightbox.style.display = "none";
    }
})

lightbox.addEventListener("click", (evt) => {
    lightbox.classList.add("sortie");
    lightbox.addEventListener("animationend", () => {
        lightbox.classList.remove("sortie");
        lightbox.close();
    }, { once: true });
});
