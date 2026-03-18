const CountryInfo = ({country, weather}) => {

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>
            <h2>Languages</h2>
            <ul>
            {Object.values(country.languages).map(language => 
                    <li key={language}>{language}</li>
                
             )}
             </ul>
            <img src={country.flags.png} alt={country.name.common} />
            {weather && (
            <div>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {(weather.main.temp - 273.15).toFixed(1)} °C</p>
            <img 
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt={weather.weather[0].description} 
            />             
             <p>Wind {weather.wind.speed} m/s</p>
            </div>
            )}
        </div>
    )
}

export default CountryInfo