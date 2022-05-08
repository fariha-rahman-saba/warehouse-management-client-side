import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <div className=''>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Book Mania</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='text-dark' as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to='/blogs'>Blogs</Nav.Link>


                        {/* Handle signout and login in the navbar */}

                        {
                            user ?
                                <>
                                    <Nav.Link className='text-dark' as={Link} to='/add-items'>Add Items</Nav.Link>

                                    <Nav.Link className='text-dark' as={Link} to='/my-items'>My items</Nav.Link>

                                    <Nav.Link className='text-dark' as={Link} to='/manage-inventory'>Manage Items</Nav.Link>

                                    {/* {user.displayName} */}

                                    <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Sign Out</button>

                                </>
                                :
                                <Nav.Link className='text-dark' as={Link} to='/login'>
                                    Login
                                </Nav.Link>

                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;