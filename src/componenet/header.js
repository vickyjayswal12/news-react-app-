import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{height:'20vh'}}>
    <Container>
      <Navbar.Brand href="#home">NEWS APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        
          <Nav.Link ><Link to="/all">ALL</Link></Nav.Link>
          <Nav.Link ><Link to="/top">Top news</Link></Nav.Link>
          <Nav.Link ><Link to="/trend">Trending news</Link></Nav.Link>
          <Nav.Link ><Link to="/scie">Science news</Link></Nav.Link>
          <Nav.Link ><Link to="/enter">Entertainment news</Link></Nav.Link>
        
          <Nav.Link ><Link to="/sport">sport</Link></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header