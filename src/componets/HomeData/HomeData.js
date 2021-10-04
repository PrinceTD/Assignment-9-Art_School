import React, { useEffect, useState } from 'react';
import HomeDataLoad from './HomeDataLoad';

const HomeData = () => {
    const [artLoad, setArtLoad] =useState([]);
    useEffect(()=>{
        fetch('./fackData.json')
        .then(res=> res.json())
        .then(data=> setArtLoad(data))
    },[])
    return (
        <div className='container mt-4'>
            <h2>Our services</h2>
            <div className='row row-cols-1 row-cols-md-4 g-4 mt-5 mb-5'>
            {
                artLoad.map(artLoad=>
                    <HomeDataLoad
                    artLoad={artLoad}
                    ></HomeDataLoad>
                    )
            }
        </div>
        </div>
    );
};

export default HomeData;