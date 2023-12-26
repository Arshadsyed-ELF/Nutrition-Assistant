// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Unavbar = () => {
  const get=localStorage.getItem('user')
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"black"}}>
      <Container>
        <Navbar.Brand href="/">Nutri-Assist</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/home" style={{padding:"10px",textDecoration:"none"}}>Home</Link>
            <Link to="/suggestion" style={{padding:"10px",textDecoration:"none"}}>New Plan</Link>
            <Link to="/suggested-nutrition" style={{padding:"10px",textDecoration:"none"}}>my diet plan</Link>
            <Link to="/login" style={{paddingLeft:"10px",paddingTop:"10px",textDecoration:"none"}}>Logout</Link>
            <h4 style={{color:"white",paddingTop:"0px"}}>({JSON.parse(get).name} )</h4>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
