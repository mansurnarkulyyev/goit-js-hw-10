
const BASE_URL = 'https://restcountries.com/v3.1/name/'
const API_KEY = '9953d5f7a7mshf41e867bc1dae0ep14f23bjsn5899a8a83112';
const informs = 'fields=name,capital,official,population,flags,languages'

export function fetchCountries(name) {
    return fetch(`${BASE_URL}${name}?${API_KEY}&${informs}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}




// const BASE_URL = 'https://restcountries.com/v2/all?fields=name,name.official,capital,population,languages,flags';
// const API_KEY = '9953d5f7a7mshf41e867bc1dae0ep14f23bjsn5899a8a83112';

// export function fetchCountries(name) {
//     return fetch(`${BASE_URL}?&appid=${API_KEY}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }

//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }








// export default class CountriesApiService {
//     constructor() {
//         this.searchQuery = '';
//         this.page = 1;
//     }

//     fetchCountries() {
//         const BASE_URL = 'https://restcountries.com/v2/all?fields=name,name.official,capital,population,languages,flags.svg';
//         const API_KEY = '9953d5f7a7mshf41e867bc1dae0ep14f23bjsn5899a8a83112';

//         return fetch(`${BASE_URL}?name=${this.searchQuery}&appid=${API_KEY}&page=${this.page}`)
//             .then(response => response.json())
//             .then(data => {
//                 // this.page += 1;
//                 console.log(data);
//                 this.incrementPage()
//                 // this.data.value
//                 console.log(this);
//             })
//     }

//     incrementPage() {
//         this.page += 1;
//     }

//     resetPage() {
//         this.page = 1;
//     }

//     get query() {
//         return this.searchQuery;
//     };
//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     }
// }





// const options = {
//     headers: {
// 'BASE_URL': 'https://restcountries.com/v3.1/all',
//         'API-Key': '9953d5f7a7mshf41e867bc1dae0ep14f23bjsn5899a8a83112'
//     }
// };

// const BASE_URL = 'https://restcountries.com/v3.1/all';
// const API_KEY = '9953d5f7a7mshf41e867bc1dae0ep14f23bjsn5899a8a83112';


// export const fetchCountries = (name) => {


    //     // fetch('https://restcountries.com/v3.1/all', options)

    // return fetch(`${BASE_URL}?name=${name}&appid=${API_KEY}&lang=en&pageSize=10&per=1`)
    //     .then(response => response.json())
    //     .then(console.log)
    //     // .then(response => {
    //     //     if (!response.ok) {
    //     //         throw new Error(response.status);
    //     //     }
    //     //     return response.json();
    //     // })
    //     // .then(console.log)
    //     // .then(response => console.log(response))
    //     // .catch(err => console.error(err));
// }
// fetchCountries()




// export const fetchCountries = (name) => {

//     // fetch('https://restcountries.com/v3.1/all', options)

//     return fetch(`${BASE_URL}?q=${name}&appid=${API_KEY}`)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }
