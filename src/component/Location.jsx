import { useEffect, useState } from "react";

const APIKEY = import.meta.env.VITE_APIKEY;
async function getLocation(lat,lon){
    try {
        const response= await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${APIKEY}`);

        const data = await response.json();
        return data;

    } catch (error) {
        console.log("Failed to fetch Geolocation")
        return null
    }
}

function Location({setCoordinates}){

const [lat , setLat] = useState(null);
const [lon , setLon] = useState(null);
const [geolocation , setGeolocation] = useState({
    country:"",
    state:"",
    city:""
})

    const success=(position)=>{

        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;
        setLat(latitude);
        setLon(longitude);

        const fetchLocation = async () =>{

            const UserLocation = await getLocation(latitude,longitude)
            const {state , country , name} =  UserLocation[0];
             setGeolocation({
                state:state,
                country:country,
                city:name
             })
             
        setCoordinates({ lat:latitude, lon:longitude})
            
        }
        fetchLocation()
    }

    const failed=(error)=>{
    console.log("Failed to get User Co-ordinates",error)
    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(success,failed)
    },[])


    return (
        <div className="location-container">
            {geolocation.country ? (
                <>
                    <p>{geolocation.country}</p>
                    {geolocation.city && geolocation.state ? (
                        
                        <p>
                            {geolocation.city}, {geolocation.state}
                        </p>
                    ) : (
                        <p>Location details incomplete</p>
                    )}
                </>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </div>
    );    
}

export default Location