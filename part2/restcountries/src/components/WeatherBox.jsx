const WeatherBox = ({capital, data}) => {

    const iconUrl = "https://openweathermap.org/img/wn/"

    // console.log("weather data in WB: ",data);
    
    if ( !data || !data.main || !data.weather ) {
        return (
            <p>Loading weather... </p>
        )
    }

    const icon = `${iconUrl}${data.weather[0].icon}@2x.png`

    return (
        <div>
            <h1>Weather in {capital}</h1>
            <p>Temperature {data.main.temp} celcius</p>
            <img src={icon}></img>
            <p>Wind {data.wind.speed} m/s</p>
            
        </div>
    )
}

export default WeatherBox