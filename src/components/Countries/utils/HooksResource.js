import React, { useEffect, useState } from 'react'

export default function useFetch(props) {
    const [data, setData] = useState({data: null, loading: true, error: false}); 

    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await props.fetch(); 
                console.log('in useEffect (responseData): ', response);
                setData({data: response, loading: false});
            } catch (error) {
                console.log('error: ', error); 
                setData({data: null, loading: false, error: true});
            }
        } 
        fetchData();
    }, []);

    console.log('useFecth returning: ',data)
    return data


}