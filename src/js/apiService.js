import refs from './refs';

const apiKey = '20764916-f72ac860731c159c811384133';

export default {
    page: 1,
    perPage: 12,
  searchRequest: '',

  getImage(request) {
    const baseUrl = `https://pixabay.com/api/`;
    const params = `?image_type=photo&orientation=horizontal&q=${request}&page=${this.page}&per_page=${this.perPage}&key=${apiKey}`;
    return fetch(baseUrl + params)
      .then(responce => responce.json())
      .then(data => data.hits)
      .catch(error => error);
  },
  pageUpdate() {
    return (this.page += 1);
  },
  pageClear() {
    return (refs.gallery.innerHTML = '');
  },
  get request() {
    return this.searchRequest;
  },
  set request(value) {
    this.searchRequest = value;
  },
};