import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

const markup = createMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', openModal);

let modalInstance = null; 

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item"> 
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" 
          src="${preview}" data-source="${original}" 
          alt="${description}"/>
        </a> 
        </li>`;
    })
    .join('');
}

function openModal(event) {
  event.preventDefault();

  const clickedElement = event.target.closest('.gallery__item');
  if (!clickedElement) return;

  modalInstance = basicLightbox.create(`
    <div class="modal">
      <img src="${clickedElement.querySelector('.gallery__image').dataset.source}" alt="${clickedElement.querySelector('.gallery__image').alt}" />
    </div>
  `);

  modalInstance.show();

  window.addEventListener('keydown', closeModalOnEscape);
}

function closeModal() {
  if (modalInstance) {
    modalInstance.close();
    modalInstance = null;
    
    window.removeEventListener('keydown', closeModalOnEscape);
  }
}

function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

console.log(galleryItems);
