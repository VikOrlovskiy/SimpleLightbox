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
  document.addEventListener("keydown", pressEscapeInModal);
  // document.addEventListener("click", klickInModal);
}
// ------------------functionRemoveAndExitModal----------------------
function pressEscapeInModal(e) {
  if (e.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", pressEscapeInModal);
    // document.removeEventListener("click", klickInModal);
  }
}
// function klickInModal(e) {
//   console.log(e.target.classList.contains(".basicLightbox"));
// console.log(e.currentTarget);
// if (e.target.classlist.includes(".basicLightbox basicLightbox--img")) {

// }
// }
// .classList.contains(".basicLightbox .basicLightbox--img")
