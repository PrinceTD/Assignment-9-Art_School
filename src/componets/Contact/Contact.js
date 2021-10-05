import React from 'react';
import "./contact.css"

const Contact = () => {
    return (
        <div className='pt-5 mt-5 mb-3 pb-3'>
            <div className="container bg-con">
                <div className='row'>
                    <div className='col-md-6 ps-3 pe-4'>
                        <h1>
                            Join us <br /> and stay tuned!
                        </h1>
                        <p>
                            Curation active learning ecosystem learning content management system lxd lxp rapid learning
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <div className="p-2 ">
                            <input className='input border-0' type="text" name="" id="" placeholder="Your Name" />
                            <input className='input border-0' type="text" name="" id="" placeholder="Your Email" />
                        </div>
                        <div className="p-2">
                            <input className='input-message border-0' type="text" name="" id="" placeholder="Message" />
                        </div >
                        <div className="input ">
                            <button className="input-btn border-0">Sent Massage</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;