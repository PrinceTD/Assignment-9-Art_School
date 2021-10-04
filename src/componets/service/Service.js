import React from 'react';

const Service = (props) => {
    const { name, img, title, price } = props.art
    return (

        < div >
            <div className="col">
                <div className="card">
                    <img src={img} alt="" height='250px' width='355px' />
                   
                    <div className ="card-body">
                    <h5 className ="card-title">{name}</h5>
                    <hr />
                    <p className ="card-text">{title}</p>
                    <p className='text-danger'>${price} </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;