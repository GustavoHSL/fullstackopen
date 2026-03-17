import { useState, useEffect } from 'react'
import countriesService from './services/countries';
import Notification from './components/Notification.js'

function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

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
        
      })
    }

  }, [filter])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  return (
    <div>
      find countries <input value={filter} onChange={handleFilterChange} />
      <Notification message={errorMessage} />
        {countries.map(country => 
          <p key={country.name.common}>{country.name.official}</p>
        )}
    </div>
  );
}

export default App;
