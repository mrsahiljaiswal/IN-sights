import React, { useCallback, useEffect, useState } from 'react';
async function fetchQuote(){
    try {
        const response= await fetch("https://api.quotable.io/random")
        const data =await response.json()
        return data;
    } catch (error) {
        console.log("Error During Fetching: ",error);
        return null;
    }
}

function Quotes () {
    
    const [refresh , setRefresh] = useState(false)
    const [quote , setQuote] = useState({
        content:"",
        author:""
    })
    const handleClick=()=>{
        setRefresh((prevValue)=>!prevValue)
        
    }

    useEffect(()=>{
        const generateQuote = async()=>{
            const quote = await fetchQuote();
            const {author , content}=quote;
            setQuote({
                    author:author,
                    content:content
                })
        };
        generateQuote();
    },[refresh])

    return(
        <div className="quotes">
            <h4>{quote.content}</h4>
            <p>{quote.author}</p>
            <button className='refresh-btn' onClick={handleClick}>Refresh</button>
        </div>
    )
        
};

export {Quotes};
