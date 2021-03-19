
const API_KEY = '20764916-f72ac860731c159c811384133';
const BASE_URL = 'https://pixabay.com/api/';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class PicApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPicteres() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=${this.perPage}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(({ pictures }) => {
        this.incrementPage();
        return pictures;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}


https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ