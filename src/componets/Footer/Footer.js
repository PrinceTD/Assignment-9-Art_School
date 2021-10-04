import React from 'react';

const Footer = () => {
    return (
        <div className='row text-center bg-dark text-white mt-5 pt-4'>
            <div className='col-md-4'>
                <h3>
                    Location
                </h3>
                <p>
                    London view 089 A/b london
                </p>
            </div>
            <div className='col-md-4'>
                <h3>
                    Around The Web
                </h3>
                <div className="">
                    <i className="fab fa-facebook pe-3"></i>
                    <i className="far fa-envelope pe-3"></i>
                    <i className="fab fa-youtube pe-3"></i>
                    <i className="fab fa-google-plus-g pe-3"></i>
                    <i className="fab fa-twitter pe-3"></i>
                </div>
            </div>
            <div className='col-md-4'>
                <h3>
                    About
                </h3>
                <p className='p-2'>An art school is an educational institution with a primary focus on the visual arts, graphic design</p>
            </div>
            <div className="text-center pt-3">
                <p>
                ©Copyright PrinceTd
                </p>
            </div>
        </div>
    );
};

export default Footer;