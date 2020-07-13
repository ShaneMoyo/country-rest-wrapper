import React from 'react'; 
import { getCountryByName } from '../../../services/countryAPI';
import HooksResource from '../utils/HooksResource';
import Country from './Country';

export default function CountryContainer(props) { 
    const { data: country, loading } = HooksResource({ fetch: () => getCountryByName(props.match.params.country)})

    if(loading) {
        return <h1>loading....</h1>
    } else {
        return <Country country={country} />
    }
}