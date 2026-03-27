import { useState, useEffect } from 'react'
import countriesService from './services/countries'

import Search from './components/Search'
import DisplayBox from './components/DisplayBox'
import CountryFocus from './components/CountryFocus'


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [country, setCountry] = useState(null)

  const populateAllCountries = () => {
    countriesService.getAll().then(items => {
      const countryNames = items.map(item => item.name.common)
      setCountries(countryNames)
    })
  }
  
  const handleSearchChange = (e) => {
    // console.log("Search value: ", e.target.value);
    setCountry(null)
    setSearch(e.target.value)
  }

  const handleCountryFocus = (countryName) => {
      // console.log("Focus on!");
      // console.log("Country name is: ", countryName);
      
      countriesService.getCountry(countryName).then( response => 
      {
        const countryData = { 
          name: response.name.common,
          capital: response.capital[0], 
          area: response.area, 
          languages: Object.values(response.languages),
          flag: response.flags.png,
          flagAlt: response.flags.alt
        }
        // console.log("Set country data: ", countryData);
        setCountry(countryData)
      }
      )

  }

  useEffect(() => {
    populateAllCountries()
  }, [])
  
  

  return (
    <>
      <Search value={search} handleSearch={handleSearchChange} />
      { !country && <DisplayBox list={search.trim().length === 0 ? [] : countries.filter(item => item.toLowerCase().includes(search.toLowerCase()))} 
        handleCountryFocus={handleCountryFocus} 
        />}
      <CountryFocus country={country}/>
    </>
  )
}



export default App
