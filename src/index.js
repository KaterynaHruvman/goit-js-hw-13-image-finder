import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import galleryItem from './tampetes/gallery-item.hbs';

refs.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    apiService.pageClear();
    const searchValue = e.currentTarget.elements.query.value;
    apiService.getImage(searchValue).then(images => {
      if (images.length !== 0) {
        refs.loadMore.classList.remove('visability');
        return refs.gallery.insertAdjacentHTML('beforeend', galleryItem(images));
      }
    });
    apiService.request = searchValue;
  });
  
  refs.loadMore.addEventListener('click', e => {
    e.preventDefault();
    const searchValue = apiService.request;
    apiService.pageUpdate();
    apiService.getImage(searchValue).then(images => {
      if (images.length !== 0) {
        return refs.gallery.insertAdjacentHTML('beforeend', galleryItem(images));
      }
    });
    window.scrollTo({
      top: document.documentElement.scrollHeight - 100,
      behavior: 'smooth',
    });
  });