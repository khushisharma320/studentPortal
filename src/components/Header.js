import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark" style={{width : "100%"}}>
        <Container>
          <Navbar.Brand href="#home">Student Portal</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default Header;