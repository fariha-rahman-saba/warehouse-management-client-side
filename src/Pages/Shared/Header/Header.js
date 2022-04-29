import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Book Mania</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='text-dark' as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to='/add-items'>Add Items</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to='/login'>Login</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;