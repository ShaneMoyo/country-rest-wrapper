import React, { useState } from 'react'; 

export default function Picture({ url })  { 
    const [loading, setLoading] = useState(true); 

    return (
        <div>
            <h1 stlye={{ display: loading ? 'block' : 'none'}}>Loading</h1>
            <img alt="render pic" src={url} onLoad={()=>setLoading(false)} stlye={{ display: loading ? 'none' : 'block', width: '300px', height: '300px'}}/>

        </div>
    ); 
}

