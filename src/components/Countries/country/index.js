import React from 'react'; 
import { getCountryByName } from '../../../services/countryAPI';
//import Resource from '../utils/Resource';
import HooksResource from '../utils/HooksResource';
import Picture from '../utils/Picture'; 

export default function Country(props) { 
    const { data: country, loading } = HooksResource({ fetch: () => getCountryByName(props.match.params.country)})

    if(loading) {
        return <h1>loading....</h1>
    } else {
        return (
            <section>
                <ul style={{ listStyle: 'none' }}>
                    <li><Picture url={country[0].flag}/></li>
                    <li>Country: {country[0].name}</li>
                    <li>Capitol: {country[0].capital}</li>
                </ul> 
            </section>
        )
    }
}