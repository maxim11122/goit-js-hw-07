import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryElement = document.querySelector(".gallery");

function gallery(array){
  const list = array.map(({ preview, original, description } = {}) => {
    return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
        
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </li>`;
  })
  .join("");
  galleryElement.insertAdjacentHTML("beforeend", list);
}

gallery(galleryItems);

document.querySelector('.gallery').onclick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const bigImage = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  bigImage.show();
}


