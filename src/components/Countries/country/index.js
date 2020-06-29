import React from 'react'; 
import { getCountryByName } from '../../../services/countryAPI';
import Resource from '../utils/Resource';

export default function Country(props) { 
    return (
        <Resource fetch={() => getCountryByName(props.match.params.country)}>
            { country => (
                <section>
                    <ul style={{ listStyle: 'none' }}>
                        <li><img style={{ width: '100px', height: '100px'}} alt="flag"src={country[0].flag}/></li>
                        <li>Country: {country[0].name}</li>
                        <li>Capitol: {country[0].capital}</li>
                    </ul> 
                </section>
            )}  
        </Resource>
    )
}