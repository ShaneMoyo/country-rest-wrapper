export const getCountryByName = async country => { 
    try { 
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`); 
        console.log('response: ', response);
        if(!response.ok) throw new Error({ status: 500, message: 'Server error.'}); 
        return response.json(); 
    } catch (error) { 
        console.log('error: ', error); 
    }
}