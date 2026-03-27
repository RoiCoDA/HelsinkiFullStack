import { useEffect, useState } from 'react';
import countriesService from '../services/countries'
import WeatherBox from './WeatherBox';

const CountryFocus = ({country}) => {

    const [weatherData, setWeatherData] = useState(null)


    useEffect(() => {
        if ( country && country.capital ) {
            countriesService.getWeather(country.capital)
            .then( response => {
                setWeatherData(response)
            }
        )}
    }, [country])

    // console.log("Weather data from CF: ", weatherData);
    

    if ( !country )
        {
            return null
        } 

    
        
        return (
            <div>
                <h1> {country.name} </h1>
                <p>Capital {country.capital} </p>
                <p>Area {country.area} </p>
                <h2>Languages</h2>
                <ul>
                    { country.languages.map(item => <li key={item}>{item}</li>)}
                </ul>
                <img src={country.flag} alt={country.flagAlt} />
                <WeatherBox capital={country.capital} data={weatherData} />
            </div>
        )

}

export default CountryFocus

// structure: 
// const countryData = { 
//           name: response.name.common,
//           capital: response.capital[0], 
//           area: response.area, 
//           languages: Object.values(response.languages),
//           flag: response.flags.png,
//           flagAlt: response.flags.alt
//          }