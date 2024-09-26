import { useEffect, useState } from "react";
const APIKEY=`e6cf19cdee9a6e87d96ed178cab81e02`;


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
        setCoordinates({ lat:latitude, lon:longitude})
        setLat(latitude);
        setLon(longitude);

        const fetchLocation=async()=>{

            const UserLocation = await getLocation(latitude,longitude)
            const {state , country , name} =  UserLocation[0];
             setGeolocation({
                state:state,
                country:country,
                city:name
             })
             
            
        }
        fetchLocation()
    }

    const failed=(error)=>{
        console.log("Failed to get User Co-ordinates",error)
    }
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(success,failed)
    },[])


    return(
        <div className="localGeolocation">
            <div>
                <p>{geolocation.country}</p>
                <p>{geolocation.city}</p>
                <p>{geolocation.state}</p>
            </div>
        </div>
    )
    
    
}

export {Location}