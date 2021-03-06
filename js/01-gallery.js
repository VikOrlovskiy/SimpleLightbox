import { galleryItems } from "./gallery-items.js";
// Change code below this line
// ------------------Const----------------------------------
const galeryComponentRef = document.querySelector(".gallery");
const addedGalleryCard = galleryCardsCreator(galleryItems);
let instance = {};
// ------------------functionCreator---------------------------
function galleryCardsCreator(gallery) {
  return gallery
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
  <a class="gallery__link"  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
galeryComponentRef.insertAdjacentHTML("beforeend", addedGalleryCard);
// ------------------functionClick---------------------------
function onGalleryCardClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  openModalWindow(e.target.dataset.source);
}
galeryComponentRef.addEventListener("click", onGalleryCardClick);
// ------------------functionCreateModal---------------------------
function createModalImg(pic) {
  return basicLightbox.create(`
    <img src="${pic}" width="800" height="600">
`);
}
// ------------------functionOpenModal----------------------
function openModalWindow(pic) {
  instance = createModalImg(pic);
  instance.show();
  document.addEventListener("keyup", pressEscapeInModal);
  // document.addEventListener("click", klickInModal);
}
// ------------------functionRemoveAndExitModal----------------------
function pressEscapeInModal(e) {
  if (e.code !== "Escape") {
    return;
  }
  instance.close();
  document.removeEventListener("keyup", pressEscapeInModal);
}
