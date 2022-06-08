
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


const searchId = document.querySelector('#search-box')
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')

searchId.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY))

function onCountryInput() {
    const name = searchId.value.trim()
    if (name === '') {
        return (countryList.innerHTML = ''), (countryInfo.innerHTML = '')
    }

    fetchCountries(name)
        .then(countries => {
            countryList.innerHTML = ''
            countryInfo.innerHTML = ''
            if (countries.length === 1) {
                countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
                countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
            } else if (countries.length >= 10) {
                alertTooManyMatches()
            } else {
                countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
            }
        })
        .catch(alertWrongName)
}

function renderCountryList(countries) {
    const markup = countries
        .map(({ name, flags }) => {
            return `
          <li class="country-list__item">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
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

function alertWrongName() {
    Notiflix.Notify.failure('Oops, there is no country with that name')
}

function alertTooManyMatches() {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
}

// *********


// const searchId = document.querySelector('#search-box');
// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');


// function renderCountryList(countries) {
//     if (countries.length > 10) {
//         alertTooManyMatches()
//         return;
//     }
//     if (countries.length === 1) {
//         // renderCountryInfo();
//         countryInfo.insertAdjacentHTML('beforeend',
//             markup = countries
//                 .map(({ capital, population, languages }) => {
//                     return `
//         <ul class="country-info__list">
//             <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
//             <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
//             <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
//         </ul>
//         `
//                 })
//                 .join(''))

//         countryList.innerHTML = '';
//     } else {
//         countryList.insertAdjacentHTML('beforeend',
//             markup = countries
//                 .map(({ name, flags }) => {
//                     return `
//           <li class="country-list__item">
//               <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}">
//               <h2 class="country-list__name">${name.official}</h2>
//           </li>
//           `
//                 })
//                 .join(''))
//         countryInfo.innerHTML = '';
//     }
// }

// const onCountryInput = debounce(event => {
//     event.preventDefault();
//     const searchQuery = event.target.value.trim();

//     if (searchQuery) {
//         fetchCountries(searchQuery)
//             .then(response => {
//                 renderCountryList(response);
//             })
//             .catch(alertWrong);
//     } else {
//         countryList.innerHTML = '';
//         countryInfo.innerHTML = '';
//     }
// }, DEBOUNCE_DELAY);

// searchId.addEventListener('input', onCountryInput);



// function alertWrong() {
//     Notiflix.Notify.failure('Oops, there is no country with that name')
// }

// function alertTooManyMatches() {
//     Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
// }


// **********




// searchId.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY))


// function onCountryInput() {
//     const name = searchId.value.trim();
//     if (name === '') {
//         return (countryList.innerHTML = ''), (countryInfo.innerHTML = '')
//     }

//     fetchCountries(name).then(countries => {

//         if (countries.length >= 10) {
//             alertTooManyMatches()
//             return
//         } else if (countries.length === 1) {
//             countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
//             countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
//             countryList.innerHTML = '';

//             alertTooManyMatches()
//         } else {
//             // countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
//             countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
//             countryInfo.innerHTML = '';

//         }

//         // if (countries.length === 1) {
//         //     countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
//         //     countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
//         //     // alertTooManyMatches()
//         // } else if (countries.length < 10 && countries.length > 1) {
//         //     alertTooManyMatches()
//         // } else {
//         //     // alertWrong()
//         //     countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
//         // }
//     })
//         .catch(alertWrong)
// }


// function renderCountryList(countries) {
//     const markup = countries
//         .map(({ name, flags }) => {
//             return `
//           <li class="country-list__item">
//               <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}">
//               <h2 class="country-list__name">${name.official}</h2>
//           </li>
//           `
//         })
//         .join('')
//     return markup
// }

// function renderCountryInfo(countries) {
//     const markup = countries
//         .map(({ capital, population, languages }) => {
//             return `
//         <ul class="country-info__list">
//             <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
//             <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
//             <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
//         </ul>
//         `
//         })
//         .join('')
//     return markup
// }




