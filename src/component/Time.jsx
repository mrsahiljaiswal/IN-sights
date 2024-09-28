import { useEffect , useState } from "react";
import  {Location}  from "./";
function Time({setCoordinates}){

    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
      const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const [ currentTime , setCurrentTime ] = useState(new Date())

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

    if(hours < 10) modifiedhours = `0` + hours.toString() ;
    else modifiedhours = hours.toString();
    
    if(min<10) modifiedMinutes = `0` + min.toString() ;
    else modifiedMinutes = min.toString();


    const updateBackgroud = () => {

        const bodyClassList = document.querySelector("body").classList;
        bodyClassList.remove("img0" , "img1" ,"img2" , "img3" , "img4" , "img5" , "img6" , "img7");

        if(hours < 1) bodyClassList.add('img0')
        else if(hours < 3) bodyClassList.add('img1')
        else if(hours < 5) bodyClassList.add('img2')
        else if(hours < 6) bodyClassList.add('img4')
        else if(hours < 7) bodyClassList.add('img5')
        else if(hours < 8) bodyClassList.add('img7')
        else if(hours < 15) bodyClassList.add('img6')
        else if(hours < 18) bodyClassList.add('img5')
        else if(hours < 24 && min <60) bodyClassList.add('img3')
        else bodyClassList.add('.img3')
    }
    useEffect(()=>{ updateBackgroud() } , [hours] )

    //Styling the first letter of hours and Day

    const firstLetterOfHours = modifiedhours.charAt(0);
    const restOfHours = modifiedhours.slice(1);

    const firstLetterOfDay = daysOfWeek[date.getDay()].charAt(0);
    const restOfDay = daysOfWeek[date.getDay()].slice(1);

    return(

        <div>
            <div className="date-time-day">
                <div>
                    <div className="time-timezone">
                        <h1 className="time">
                            <span className="theme-color">{firstLetterOfHours}</span>
                            <span>{restOfHours}</span>:{modifiedMinutes}
                        </h1>
                        <h3 className="time-zone">{timeZone}</h3>
                    </div>
                </div>

                <div className="day-container">
                    <h4 className="day"> 
                        <span className="theme-color first-letter-of-day mobile-theme" >{firstLetterOfDay}</span>
                        <span>{restOfDay}</span>, {months[date.getMonth()]} {date.getDate()} 
                    </h4> 
                </div>

            </div>

            <div className="location-container">
                <Location setCoordinates={setCoordinates}  />
            </div>
            
        </div>
    )
}

export default Time 