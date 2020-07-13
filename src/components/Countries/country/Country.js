import React from 'react'; 
import Picture from '../utils/Picture';

export default function Country({ country }) { 
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