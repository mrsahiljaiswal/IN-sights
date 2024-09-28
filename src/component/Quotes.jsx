import React, { useCallback, useEffect, useState } from 'react';
import { LuRefreshCw } from "react-icons/lu";


function Quotes () {
    
    const [ refresh , setRefresh ] = useState(false)
    const [ quote , setQuote ] = useState({
        author:"",
        content:"",
    })

    async function fetchQuote(){
        try {
            const response = await fetch("https://johndturn-quotableapiproxy.web.val.run/")
            const data = await response.json()
    
            const {author , content } = data[0];
            setQuote({
                    author,
                    content
            })
    
        } catch (error) {
            console.log("Error During Fetching: ",error);
            return null;
        }
    }

    const handleClick=()=>{
        setRefresh((prevValue)=>!prevValue) 
        document.querySelector('.refresh-btn').classList.add('rotate')
        setTimeout(()=>{
            document.querySelector(`.refresh-btn`).classList.remove('rotate')
        } , 500)   
    }

    useEffect(()=>{
        fetchQuote();
    },[ refresh ])

        return(
            <>
            {
                 
                (quote.author && quote.content) ? (
                    
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
