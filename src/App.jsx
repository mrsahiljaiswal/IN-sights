import { useState } from "react";
import { Location , Quotes , Time , Weather } from "./component"
import "./App.css"


function App(){


  const [coordinates,setCoordinates]=useState({
    lat:null,
    lon:null
  })

  return(
    <>
    <div className="quote-weather-container">
      <Quotes />
      <Weather coordinates={coordinates}/>
    </div>
    <Time setCoordinates={setCoordinates}/>
    </>
  )}
export default App;