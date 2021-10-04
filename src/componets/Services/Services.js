import React, { useEffect, useState } from 'react';
import Service from '../service/Service';

const Services = () => {
    const [art, setArt] = useState([]);
    useEffect(() => {
        fetch(`./dataService.json`)
            .then(res => res.json())
            .then(data => setArt(data))
    }, [])
    return (
        <div className="container mt-5">
            <h2>
                Our Course
            </h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-4'>
           
           {
               art.map(art => <Service
                   art={art}
               ></Service>)
           }
       </div>
        </div>
    );
};

export default Services;