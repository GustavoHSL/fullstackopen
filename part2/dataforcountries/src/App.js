import { useState, useEffect } from 'react'
import countriesService from './services/countries';
import Notification from './components/Notification.js'
import CountryInfo from './components/CountryInfo.js';

function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)

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
        ? <CountryInfo country={countries[0]} />
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
