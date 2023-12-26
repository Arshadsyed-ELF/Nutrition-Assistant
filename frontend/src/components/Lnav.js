// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Lnav = () => {
  
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"black"}}>
      <Container>
        <Navbar.Brand href="/">Nutri-Assist</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            {/* <Link to="/home" style={{padding:"10px",textDecoration:"none"}}>Home</Link> */}
            <Link to="/login" style={{paddingLeft:"10px",paddingTop:"10px",textDecoration:"none"}}>Login/Signup</Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Lnav;
