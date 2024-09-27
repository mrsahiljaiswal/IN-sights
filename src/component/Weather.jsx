import React, { useEffect, useState } from 'react'

const APIKEY = import.meta.env.VITE_APIKEY;
;
const Weather = ( {coordinates}  ) => {

  const [ loading , setLoading ] = useState(true)
  const [ error , setError ] = useState(null)
  const [ weatherData , setWeatherData ] = useState( null ) 
  const [ icon , setIcon ] = useState("")

  const fetchWeather = async ( lat , lon ) => {
    try {
      setLoading(true)
      const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`);
      const result = await res.json();  
      setWeatherData(result);
      setIcon(result.weather[0].icon)
    } 
    catch (error) {
      setError(error.message)
    } 
    finally{
      setLoading(false)
    }
  }

  useEffect( () => {
   
    
    if( coordinates.lat && coordinates.lon ){
      const lat = coordinates.lat;
      const lon = coordinates.lon;
        fetchWeather( lat , lon )
    }    
  } , [coordinates] )

    if(loading) return (<p>Loading...</p>)
    if(error) return (<p>{error}</p> )
      
  
  return (
    <div className='weather-container'>
      {
        coordinates.lat && ( 
          <div className='weather-box'>
              <div className='temperature-icon-container'>
                  <p className='temperature-value'>{Math.round(JSON.stringify(weatherData.main.temp-273.15))} <span className='theme-color deg-symbol'>&deg;C</span></p>
                  <img className='weather-icon' src={`svg/openweathermap/${icon}.svg`} alt="" />
              </div>

              <div className='humidity-wind-container'>

                <div className='humidity-container'>
                  <img className='humidity-icon' src="/svg/humidity.svg" alt="" />
                  <p className='humidity'>{Math.round(JSON.stringify(weatherData.main.humidity))} %</p>
                </div>

                <div className='separator'></div>

                <div className='wind-container'>
                  <img className='wind-icon' src="/svg/wind.svg" alt="" />
                  <p className='wind-speed'>{JSON.stringify(weatherData.wind.speed)} <span className='small'>km/hr</span>
                  </p>
                </div>
              </div>
          </div>
        )
      }
      
    </div>
  )
}

export default Weather
