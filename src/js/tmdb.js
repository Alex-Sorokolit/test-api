refs = {
 toWatchBtn: document.querySelector('.to-watch-btn'),
 toQueueBtn: document.querySelector('.to-queue-btn'),
 galleryList: document.querySelector('.gallery')
}

console.log(refs.toWatchBtn);
console.log(refs.toQueueBtn);
console.log(refs.galleryList);

// Запит на бекенд _________________________________________________________
const userKey = '77f4196daae31eca36e03f9aa498784a';
const BASE_URL = 'https://api.themoviedb.org/3';
// const options = {
//  method: 'GET',
//  api_key: '77f4196daae31eca36e03f9aa498784a',
// }
const urlFilmById = `${BASE_URL}/movie/550?api_key=${userKey}`;
// const urlMostPopular = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${userKey}`
console.log(urlFilmById);

fetch(urlFilmById).then(response => response.json()).then(console.log)

// Запис в localestorage _________________________________________________________






// Рендер розмітки _________________________________________________________
function renderGallery(data){
  // console.log(data.data.hits);
     const markup = data.data.hits.map(createMurkup).join('');
     galleryList.insertAdjacentHTML('beforeend', markup);
   // console.log(markup);