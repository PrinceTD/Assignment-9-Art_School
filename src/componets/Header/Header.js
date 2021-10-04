import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div>
           
               
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand to="#">Art School</Navbar.Brand>
                        <Nav className="ms-auto">
                        
                        <Link className='nav' to="/home">Home</Link>
                        <Link className='nav' to="/service">Service</Link>
                        <Link className='nav' to="/about">About us</Link>
                        
                        </Nav>
                    </Container>
                </Navbar>
               

            
        </div>
    );
};

export default Header;