import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="row  mt-5 mb-5 pb-4">
            <div className='col-md-6  ms-auto'>
                <h2 className='bg-img text-end'>404</h2>
            </div>
            <div className='col-md-6 pt-5 mt-5'>
                <h3>
                    Page not Found
                </h3>
                <p>
                404 is a 'not found' error, please go to home page
                </p>
               
               <Link to='/home'>
               <button className='home'>Home</button>
               </Link>
               
            </div>
        </div>
    );
};

export default NotFound;