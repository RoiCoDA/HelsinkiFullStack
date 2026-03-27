import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";
const weatherBaseUrl = "https://api.openweathermap.org/data/2.5/weather";
const api_key = import.meta.env.VITE_WEATHER;

const getAll = () => {
    const request = axios.get(baseUrl+"all")
    return request.then(response => response.data)
}

const getCountry = (country) => {
    console.log("Pulling country..." , `${baseUrl}name/${country}` );
    
    const request = axios.get(`${baseUrl}name/${country}`)
    return request.then( response => response.data)
}

const getWeather = (city) => {
    const request = axios.get(`${weatherBaseUrl}?q=${city}&appid=${api_key}&units=metric`)
    return request.then( response => response.data )
}


export default { getAll, getCountry, getWeather }