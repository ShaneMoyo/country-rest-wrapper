import React, { useEffect, useState } from 'react'; 
import { getCountryByName } from '../../../services/countryAPI';

export default function Country(props) { 
    const [loading, setLoading ] = useState(true); 
    const [error, setError] = useState(false); 
    const [country, setCountry] = useState({}); 
    const { country: countryName } = props.match.params; 
    console.log('props: ', props, countryName); 

    async function getCountry(name) { 
        try { 
            console.log('getting with: ', name);
            const response = await getCountryByName(name); 
            setLoading(false)
            console.log('response in get country : ', response[0]); 
            setCountry(response[0]); 
        } catch (error) { 
            console.log( 'error: ', error); 
            setError(true); 
            setLoading(false); 
        }
        
    }
    useEffect(() => { 
        getCountry(countryName); 
    }, [countryName]); 

    if(loading) { 
        return <h1>Loading...</h1>
    } else if(error) { 
        return <h1>Something went wrong...</h1>
    } else { 
        return (
            <section>
                <ul style={{ listStyle: 'none' }}>
                    <li><img style={{ width: '100px', height: '100px'}} alt="flag"src={country.flag}/></li>
                    <li>Country: {country.name}</li>
                    <li>Capitol: {country.capital}</li>
                </ul> 
            </section>
        )
    }
}