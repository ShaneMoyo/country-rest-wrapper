import React, { useState } from 'react'; 


export default function CountriesContainer() { 

    const [query, setQuery] = useState(""); 
    const handleSubmit = event => { 
        event.preventDefault(); 
        console.log('query: ', query); 

    }

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
        </section>
    ); 
}