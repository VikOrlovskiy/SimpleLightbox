import { galleryItems } from "./gallery-items.js";
// Change code below this line
// ------------------Const----------------------------------
const galeryComponentRef = document.querySelector(".gallery");
const addedGalleryCard = galleryCardsCreator(galleryItems);
// ------------------lightboxSettings---------------------------
const lightboxSettings = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};
// ------------------functionCreator---------------------------
function galleryCardsCreator(gallery) {
  return gallery
    .map(({ preview, description, original }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
    })
    .join("");
}
galeryComponentRef.innerHTML = addedGalleryCard;

// ------------------lightbox---------------------------
const lightbox = new SimpleLightbox(".gallery a", lightboxSettings);
