import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
 
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', handlerProductClick);

function createMarkup(arr){
    return arr.map(({ preview, original, description }) => {
        return `<li class="gallery__item"> 
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" 
          src="${preview}" data-source="${original}" 
          alt="${description}"/>
        </a> 
        </li>`
    }).join('');
}
  
function handlerProductClick(event) {
     if(event.target === event.currentTarget){
        return;
     }
    event.preventDefault();
     
    const instance = basicLightbox.create(`
    <div class="modal">
     <img src="${event.target.dataset.source}" alt="${event.target.alt}" />
    </div>
    `)
    instance.show();
}

console.log(galleryItems);
