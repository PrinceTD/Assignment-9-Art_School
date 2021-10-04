import React from 'react';

const HomeDataLoad = (props) => {
    const { img, name, title, price } = props.artLoad
    return (
            <div class="col">
                <div class="card">
                  <img src={img} alt="" height='200px' width='260px'/>
                    <div class ="card-body">
                    <h5 class ="card-title">{name}</h5>
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