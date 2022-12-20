
const BASE_URL = 'https://restcountries.com/v3.1/name/'
const API_KEY = '9953d5f7a7mshf41e867bc1dae0ep14f23bjsn5899a8a83112';
const informs = 'fields=name,capital,official,population,flags,languages'

export function fetchCountries(name) {
    return fetch(`${BASE_URL}${name}?${API_KEY}&${informs}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}


