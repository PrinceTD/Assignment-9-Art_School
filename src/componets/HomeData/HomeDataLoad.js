import React from 'react';
import './HomeDataLoad.css'

const HomeDataLoad = (props) => {
    const { img, name, title, price } = props.artLoad
    return (
            <div className="col">
                <div className="card border-0 shadow">
                  <img src={img} alt="" height='200px' width='260px'/>
                    <div className ="card-body">
                    <h5 className ="card-title name">{name}</h5>
                    <p>
                        {title.slice(0, 100)}....
                    </p>
                    <p className='text-danger'>
                        ${price}
                    </p>
                    </div>
                </div>
            </div>
    );
};

export default HomeDataLoad;