import { useEffect, useState } from "react";

const APIKEY=`e6cf19cdee9a6e87d96ed178cab81e02`;

function Weather({coordinates}){

    const [lat , lon] = useState({
        lat:null,
        lon:null
    }) 

    async function fetchWeather(lat,lon){
        try{
            console.log(lat,lon)
            const response = await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
            const data = await response.json()
            console.log(data)
            return data;
        }
        catch(error){
            console.log("Failed to fetch weather: ",error)
        }
    }
    
    useEffect(()=>{
        const getWeather= async () => {
            setC
            const currentWeather= await fetchWeather(lat,lon)

            console.log(currentWeather)
        }

        getWeather();
    },[])
}

export {Weather}

