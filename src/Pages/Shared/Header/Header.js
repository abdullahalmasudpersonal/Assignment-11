import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min';
import './Header.css';
import logo from '../../../image/warehouse-logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' className='bg-color' variant="light">
                <Container  >
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} width={60} src={logo} alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>HOME</Nav.Link>
                            <Nav.Link as={Link} to='/inventories'>INVENTORIES</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>BLOGS</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/additem">ADD ITEM</Nav.Link>
                                    <Nav.Link as={Link} to="/manageinventories">MANAGE ITEMS</Nav.Link>
                                </>
                            }
                            <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>
                            {
                                user ?
                                    <button className='signout-btn' onClick={handleSignOut} >SIGN OUT</button>
                                    :
                                    <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;