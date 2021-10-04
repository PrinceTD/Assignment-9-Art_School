import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './../Title/Title';



const Header = () => {
    return (
        <div>
            <Container>
               
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand to="#">Navbar</Navbar.Brand>
                        <Nav className="ms-auto">
                        
                        <Nav.Link to="/service">Service</Nav.Link>
                        <Nav.Link to="/about">About</Nav.Link>
                        <Nav.Link to="/contact">Contact us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
               
            </Container>
            
        </div>
    );
};

export default Header;