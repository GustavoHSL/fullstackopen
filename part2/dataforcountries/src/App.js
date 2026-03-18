import { useState, useEffect } from 'react'
import countriesService from './services/countries';
import Notification from './components/Notification.js'
import CountryInfo from './components/CountryInfo.js';
import weatherService from './services/weather.js';

function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weather, setWeather] = useState(null)


  useEffect(() => {
    if(filter) {
    countriesService
      .getByName(filter)
      .then(countriesFound => {
        if(countriesFound.length<10){
          setErrorMessage(null)
          setCountries(countriesFound)
        }else{
          setCountries([])
          setErrorMessage(`Too many matches, specify another filter`)
        }
      }).catch(error => {
          setCountries([])
          setErrorMessage(null)
      })
    }

  }, [filter])

useEffect(() => {
  if (countries.length === 1) {
    console.log('latlng:', countries[0].latlng)
    const [lat, lng] = countries[0].latlng
    console.log('lat:', lat, 'lng:', lng)
    weatherService.getWeather(lat, lng)
      .then(data => setWeather(data))
      .catch(error => console.error('Weather error:', error))
  } else {
    setWeather(null)
  }
}, [countries])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const showCountry = (country) => {
    setSelectedCountry(country)
  }
  return (
    <div>
      find countries <input value={filter} onChange={handleFilterChange} />
      <Notification message={errorMessage} />
      {countries.length === 1 
        ? <CountryInfo country={countries[0]} weather={weather} />
        : countries.map(country => (
          <div key={country.name.common}>
            <p >

              {country.name.official} 
             <button onClick={() => showCountry(country)}>Show</button>
             {selectedCountry && <CountryInfo country={selectedCountry} />}

            </p>
            </div>
        )
          )
      }
    </div>
  );
}

export default App;
