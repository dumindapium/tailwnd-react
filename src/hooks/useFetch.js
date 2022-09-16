import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [error,setError] = useState(null);
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=> {

        const abortCont = new AbortController();
        

        setTimeout(()=>

            fetch(url, { signal: abortCont.signal })
                .then(async res =>{
                
                    const isJson  = res.headers.get('content-type')?.includes('application/json');
                    const data = isJson ? await res.json() : null;
    
                    if(!res.ok){
                        const error = (data && data.message) || res.status;
                        return Promise.reject(error);
                    }
                    setData(data);
                })
                .catch((err) => {
                    console.error(`Data loading error: ${err.message}`);
                    setError('Data loading error.'+err);
                })
                .finally(()=>{
                    setIsLoading(false);
                })

        // fetch(url)
        //     .then(async res =>{
                
        //         const isJson  = res.headers.get('content-type')?.includes('application/json');
        //         const data = isJson ? await res.json() : null;

        //         if(!res.ok){
        //             const error = (data && data.message) || res.status;
        //             return Promise.reject(error);
        //         }
        //         setData(data);
        //     })
        //     .catch(err =>{
        //         //console.error('Fetch error: ',err.message);
        //         setError('Data loading error.'+err);
        //     })
        //     .finally(()=>{
        //         setIsLoading(false);
        //     })
        ,3000);

        return abortCont.abort();
    },[url]);


    return {data,isLoading,error};
};

export default useFetch;