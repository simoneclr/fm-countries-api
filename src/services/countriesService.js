import Country from "../model/country"

const ENDPOINTS = {
	all: "https://restcountries.com/v2/all",
  getById: "https://restcountries.com/v2/alpha/",
	filters: "?fields=name"
}

// Rudimentary cache to avoid spamming API requests for no reason
const CACHE = new Map()

// Test assignment to avoid spamming API request while developing
// CACHE.set("COL", new Country({
//   "name": "Colombia",
//   "topLevelDomain": [
//     ".co"
//   ],
//   "alpha2Code": "CO",
//   "alpha3Code": "COL",
//   "callingCodes": [
//     "57"
//   ],
//   "capital": "Bogotá",
//   "altSpellings": [
//     "CO",
//     "Republic of Colombia",
//     "República de Colombia"
//   ],
//   "region": "South America",
//   "continent": "Americas",
//   "population": 48759958,
//   "latlng": [
//     4.0,
//     -72.0
//   ],
//   "demonym": "Colombian",
//   "area": 1141748.0,
//   "gini": 55.9,
//   "timezones": [
//     "UTC-05:00"
//   ],
//   "borders": [
//     "BRA",
//     "ECU",
//     "PAN",
//     "PER",
//     "VEN"
//   ],
//   "nativeName": "Colombia",
//   "numericCode": "170",
//   "currencies": [
//     {
//       "code": "COP",
//       "name": "Colombian peso",
//       "symbol": "$"
//     }
//   ],
//   "languages": [
//     {
//       "iso639_1": "es",
//       "iso639_2": "spa",
//       "name": "Spanish",
//       "nativeName": "Español"
//     }
//   ],
//   "translations": {
//     "br": "Colômbia",
//     "pt": "Colômbia",
//     "nl": "Colombia",
//     "hr": "Kolumbija",
//     "fa": "کلمبیا",
//     "de": "Kolumbien",
//     "es": "Colombia",
//     "fr": "Colombie",
//     "ja": "コロンビア",
//     "it": "Colombia",
//     "hu": "Kolumbia"
//   },
//   "flags": {
// 		"svg": "https://flagcdn.com/co.svg"
// 	},
//   "regionalBlocs": [
//     {
//       "acronym": "PA",
//       "name": "Pacific Alliance",
//       "otherNames": [
//         "Alianza del Pacífico"
//       ]
//     },
//     {
//       "acronym": "USAN",
//       "name": "Union of South American Nations",
//       "otherAcronyms": [
//         "UNASUR",
//         "UNASUL",
//         "UZAN"
//       ],
//       "otherNames": [
//         "Unión de Naciones Suramericanas",
//         "União de Nações Sul-Americanas",
//         "Unie van Zuid-Amerikaanse Naties",
//         "South American Union"
//       ]
//     }
//   ],
//   "cioc": "COL",
//   "independent": true
// }))

const countriesService = {
	getAll: () => {
		if (CACHE.size > 0) {
			console.log("countriesService: Returning cache")

			return new Promise((resolve, reject) => {
				resolve(CACHE)
			})			
		} else {
			console.log("countriesService: Requesting to API")

			return fetch(ENDPOINTS.all)
				.then(response => response.json())
				.then(data => {
					data.forEach(country => {
						CACHE.set(country.alpha3Code, new Country(country))
					})

					return CACHE
				})
		}
	},

  getCountryById: (id) => {
    if (CACHE.has(id)) {
      console.log("countriesService: Retrieving " + id + " from cache")

      return new Promise((resolve, reject) => {
        resolve(CACHE.get(id))
      })
    } else {
      console.log("countriesService: Requesting " + id + " data to API")

      return fetch(ENDPOINTS.getById + id)
        .then(response => {
          if (!response.ok) {
            let err = new Error("HTTP status code: " + response.status)
            err.response = response
            err.status = response.status
            throw err
          }
          
          return response.json()
        })
        .then(data => {
          let c = new Country(data)

          // This causes bugs when trying to retrie all countries;
          // TODO Find a smarter cache implementation
          // CACHE.set(c.id, c)

          return c
        })
        .catch(console.error)
    }
  }
}

export default countriesService
