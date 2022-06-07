
import './css/styles.css';
import debounce from 'lodash.debounce'
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries'
// import fetchCountries from './fetchCountries'
// import CountriesApiService from './fetchCountries'
// import countriesTpl from './countries.hbs'
// console.log(fetchCountries);
// console.log(CountriesApiService);

const DEBOUNCE_DELAY = 300;


const searchId = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');



function onCountryInput() {
    const name = searchId.value.trim();
    if (name === '') {
        return (countryList.innerHTML = ''), (countryInfo.innerHTML = '')
    }

    fetchCountries(name).then(countries => {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        if (countries.length === 2) {
            countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
            countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
        } else if (countries.length >= 10) {
            // Notify.info('Cogito ergo sum'
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
        } else {
            countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
        }
    })
        .catch(
            // Notify.failure('Oops, there is no country with that name')
            Notiflix.Notify.failure('Oops, there is no country with that name')
        )
}


searchId.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY))


function renderCountryList(countries) {
    const markup = countries
        .map(({ name, flags }) => {
            return `
          <li class="country-list__item">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}">
              <h2 class="country-list__name">${name.official}</h2>
          </li>
          `
        })
        .join('')
    return markup
}

function renderCountryInfo(countries) {
    const markup = countries
        .map(({ capital, population, languages }) => {
            return `
        <ul class="country-info__list">
            <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
            <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
            <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
        </ul>
        `
        })
        .join('')
    return markup
}



// function initialize(countriesData) {
//     countries = countriesData;
//     let options = '';
//     // countries.forEach(country => options += `<li>${country.name}</li>`);
    // for (let i = 0; i < countries.length; i++) {
    //     options += `<li>${name.official}</li>`

    // }


  //  // countries.forEach(element => {
  //  //     element += `<li>${element.official}</li>`
  //  // });

//     searchId.innerHTML = options;
//     displayCountryInfo('AFG')
// }

// setTimeout(() => {
//     console.log(countries);
// }, DEBOUNCE_DELAY)

// function displayCountryInfo(countryName) {
//     const countryData = countries.find(country => country.alpha3Code === countryName)
//     console.log(countryData);
// }


// searchId.addEventListener('input', initialize)



// const onSearchSubmit = event => {
//     event.preventDefault();
//     countryApiService = event.currentTArget.querySelector('#search-box').value;
//     console.log(countryApiService);
// }

// searchId.addEventListener('input', onCountryInput)

// const searchId = document.querySelector('#search-box')






// ******

// const countryApiService = new CountriesApiService();
// // console.log(countryApiService);

// const onSearchSubmit = event => {
//     event.preventDefault();
//     countryApiService.query = event.currentTarget.value;
//     // countryApiService.query = event.currentTarget.elements.query.value;
//     countryApiService.resetPage();
//     countryApiService.fetchCountries()
//     // .then(response => {
//     // console.log(response);;

//     // fetchCountries(searchQuery).then(response => {
//     //     console.log(searchQuery);
//     // })
//     // console.log(searchQuery);
// }


// searchId.addEventListener('input', onSearchSubmit)






// ******

// const options = {
//     headers: {
//         Autorization: 9953d5f7a7mshf41e867bc1dae0ep14f23bjsn5899a8a83112;
//     }
// };

// fetch('https://restcountries.com/v3.1/all', options).then(response => response.json()).then(console.log);

// fetch('https://restcountries.com/v3.1/all?/name/_limit=1')


// fetch('https://restcountries.com/v3.1/alpha?codes=col,pe,at', options)
// fetch('https://restcountries.com/v3.1/all?access_key=9953d5f7a7mshf41e867bc1dae0ep14f23bjsn5899a8a83112')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     }).then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     })

