import React, { useCallback, useEffect, useState } from 'react';
import { LuRefreshCw } from "react-icons/lu";

async function fetchQuote(){
    try {
        const response = await fetch("https://api.quotable.io/random?maxLength=200")
        const data = await response.json()
        return data;
    } catch (error) {
        console.log("Error During Fetching: ",error);
        return null;
    }
}

function Quotes () {
    
    const [ refresh , setRefresh ] = useState(false)
    const [ quote , setQuote ] = useState({
        content:"",
        author:""
    })

    const handleClick=()=>{
        setRefresh((prevValue)=>!prevValue) 
        document.querySelector('.refresh-btn').classList.add('rotate')
        setTimeout(()=>{
            document.querySelector(`.refresh-btn`).classList.remove('rotate')
        } , 500)   
    }

    useEffect(()=>{
        const generateQuote = async () => {
            const quote = await fetchQuote();
            const { author , content } = quote;
            setQuote({
                    author,
                    content
                })
        };
        generateQuote();
    },[ refresh ])

        return(
            <>
            {
                 
                (quote.content) ? (
                    <div className="quotes">
                        <p className='quote-content'>"{quote.content}"</p>
                        <div className='quote-author-refresh'>
                            <p className='quote-author'>- {quote.author}</p>
                            <LuRefreshCw className='refresh-btn theme-color' onClick={handleClick}  />
                        </div>
                    </div>
                )
                :
                (
                    <p className='loading'>Loading...</p>
                )
            }
            </>      
)};

export default Quotes;
