import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Students Data</Navbar.Brand>
    <Nav className="mx-auto">
      <Link to ="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/students/add">Add Students</Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;