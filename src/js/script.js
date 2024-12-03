// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox > img");
const closeBtn = document.querySelector("#lightbox > button");

document.body.addEventListener("click", (evt) => {
    if (evt.target.matches("img[data-full-img]")) {
        const fullImgUrl = evt.target.dataset.fullImg;
        lightboxImg.src = fullImgUrl;
        lightbox.showModal();
    }
    closeBtn.addEventListener("click", () => lightbox.close());
    if (evt.target === lightbox) {
        lightbox.close();
    }
}



)