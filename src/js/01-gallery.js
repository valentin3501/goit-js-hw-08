// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery__item';
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;
  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__image';
  galleryImage.src = element.preview;
  galleryImage.setAttribute('data-source', element.original);
  galleryImage.alt = element.description;

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
  items.push(galleryItem);
});

gallery.append(...items);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
