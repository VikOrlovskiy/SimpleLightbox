import { galleryItems } from "./gallery-items.js";
// Change code below this line
// ------------------Const----------------------------------
const galeryComponentRef = document.querySelector(".gallery");
const addedGalleryCard = galleryCardsCreator(galleryItems);
// ------------------functionCreator---------------------------
function galleryCardsCreator(gallery) {
  return gallery
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" data-lightbox="mygallery">
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

// -----------------------------------------------------------
const galleryLink = document.querySelectorAll(".gallery__item .gallery__link");
console.log(galleryLink);
// -----------------------------------------------------------
galeryComponentRef.addEventListener("click", onGalleryCardClick);

function onGalleryCardClick(e) {
  galleryLink.preventDefault();
  //   e.preventDefault();
  console.log(e.target.dataset.source);
  console.log(e.currentTarget);
}
