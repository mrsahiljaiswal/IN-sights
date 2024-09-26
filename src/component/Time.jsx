import { useEffect , useState } from "react";

function Time(){

    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
      const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const [currentTime , setCurrentTime] = useState(new Date())

    const date=currentTime;

    useEffect(()=>{
        const updateTime = () =>{
            setCurrentTime(new Date())
        }
        
        setInterval(updateTime,1000);

    },[currentTime])
    let timeZone="";
    //Getting Time-Zone-Identifier
    const timeZoneIdentifier=Intl.DateTimeFormat().resolvedOptions().timeZone;

    //Getting Time-Zone
    const stringDate=date.toString();
    const startIndexOfST=(stringDate.indexOf("("))
    const endIndexOfST=(stringDate.indexOf(")"))

    if(startIndexOfST !== -1 && endIndexOfST !== -1){

        timeZone = stringDate.slice(startIndexOfST + 1  , endIndexOfST)
    }

    //Modifying Hours and Minutes to convert them in two digit if time < 10

    const hours=date.getHours();
    const min=date.getMinutes();
    let modifiedhours = "";
    let modifiedMinutes = "";

    if(hours < 10){
    modifiedhours = `0` + hours.toString() ;
    }
    else{
    modifiedhours = hours.toString();
    }
    
    if(min<10){
    modifiedMinutes = `0` + min.toString() ;
    }

    else{
    modifiedMinutes = min.toString();
    }

    //Styling the first letter of hours and Day

    const firstLetterOfHours = modifiedhours.charAt(0);
    const restOfHours = modifiedhours.slice(1);

    const firstLetterOfDay = daysOfWeek[date.getDay()].charAt(0);
    const restOfDay = daysOfWeek[date.getDay()].slice(1);

    return(

        
        <div className="date-time">
            <h1>
                <span style={{color:"red", }}>{firstLetterOfHours}</span>
                <span>{restOfHours}</span>:{modifiedMinutes}
            </h1>
                <h3>{timeZone}</h3>
                <h3>{timeZoneIdentifier}</h3>
                <h4> <span style={{color:"red", }}>{firstLetterOfDay}</span>
                <span>{restOfDay}</span>, {months[date.getMonth()]} {date.getDate()} </h4> 
        </div>
    )
}

export {Time}