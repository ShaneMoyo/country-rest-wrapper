import React, { useState, useEffect } from 'react'; 
import { getCountryByName } from '../../services/countryAPI';
import { Link } from 'react-router-dom'; 


export default function CountriesContainer() { 

    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [countries, setCountries] = useState([]);

    const handleSubmit = async event => { 
        event.preventDefault(); 
        console.log('query: ', query); 
        setSearch(query);
    }

    useEffect(() => {
        async function handleSearch() {
            if(search) {   
                try { 
                    setLoading(true);
                    setError(false);
                    const gotCountries = await getCountryByName(search); 
                    console.log( 'countries: ', gotCountries); 
                    setCountries(gotCountries); 
                    setLoading(false);
                } catch (error) { 
                    console.log('error'); 
                    setLoading(false);
                    setError(true);
                }
            } 
        }
        handleSearch()
        
    }, [search])

    const countrieItems = countries.map(({ name }, index) => (
        <li key={index}><Link to={`/country/${name}`}>{name}</Link></li>
    )) 

    const countryList = countries.length > 0 && !error ? <ul>{countrieItems}</ul> : null;

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
                    <button type="submit">{loading ? 'loading....' : 'Search'}</button> 
                </fieldset>
            </form>
            {loading ? "Loading..." : countryList}
        </section>
    ); 
}