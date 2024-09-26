import { useState } from "react";
import { Quotes } from "./component/Quotes";
import  {Location}  from "./component/Location";
import "./App.css"
import { Time } from "./component/Time";
import { Weather } from "./component/Weather";
function App(){

  const [coordinates,setCoordinates]=useState({
    lat:null,
    lon:null
  })

  return(
    <>
    <Quotes/>
    
    <Time/>
    <Location setCoordinates={setCoordinates}/>
    <Weather coordinates={coordinates}/>
    </>
  )}
export default App;