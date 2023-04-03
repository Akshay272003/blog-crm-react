import { useState, useEffect } from 'react';

const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, { signal:abortCont.signal })
        .then(res =>{
            if(!res.ok){
                throw Error("Error while fetching the data");
            }
            return res.json();
        }).then(data =>{
            setError(null);
            setData(data);
            setIsPending(false);
        }).catch(error =>{
            if(error.name !== 'AbortError'){
                setError(error.message);
                setIsPending(false);
            }
        });
        
        // in react v6 this is no more needed to do in strict mode
        return ()=> abortCont.abort();

    }, [url]);
    
    return { data, isPending, error };
}

export default useFetch;