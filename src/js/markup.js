import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import refs from './refs';

import { template } from 'handlebars';


export default data => {
  const markup = template(data);
  refs.gallery.insertAdjacentElement('beforeend', markup);
  refs.gallery.addEventListener('click', e => {
    const largeImg = e.target.dataset.source;
    const instance = basicLightbox.create(
      `<img src="${largeImg}" width="800" height="600">`,
    );
    console.dir(instance.show());
    instance.show();
  });
};