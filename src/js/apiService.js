
export default class apiService {
    constructor() {
        this.serchQuery = '';
        this.page = 1;
}
    
    async fetchImg() {
   
    const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
    const API_KEY = '20764916-f72ac860731c159c811384133'
    const url = `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`
      
        const response = await fetch(url)
        const newImg = response.json()
        const markup = newImg.then(data => {
                this.incrementPage();
                
                return data.hits;
            });    
      return markup  
}   
    incrementPage() {
       this.page += 1 
    } 

    resetPage() {
        this.page = 1;
    }

     get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery
    }
}