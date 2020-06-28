import React, { useState } from 'react'; 
import { getCountryByName } from '../../services/countryAPI';
import { Link } from 'react-router-dom'; 


export default function CountriesContainer() { 

    const [query, setQuery] = useState(""); 
    const [countries, setCountries] = useState([]);

    const handleSubmit = async event => { 
        event.preventDefault(); 
        console.log('query: ', query); 
        try { 
            const gotCountries = await getCountryByName(query); 
            console.log( 'countries: ', gotCountries); 
            setCountries(gotCountries); 
        } catch (error) { 
            console.log('error'); 
        }
    }

    const countrieItems = countries.map(({ name }, index) => (
        <li key={index}><Link to={`/country/${name}`}>{name}</Link></li>
    )) 

    const countryList = countries.length > 0 ?  <ul>{countrieItems}</ul>  : null;
    return (
        <section>
            <h1>Countries</h1> 
            <form onSubmit={event => handleSubmit(event)}> 
                <fieldset>
                    <label htmlFor="country-search">Search for a country</label><br/>
                    <input 
                        id="country-search"
                        type="text" 
                        onChange={({ target }) => setQuery(target.value)} 
                        value={query}
                        placeholder="Enter a country name"/>
                    <button type="submit">Search</button> 
                </fieldset>
            </form>
            {countryList}
        </section>
    ); 
}