import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => (
  <header id="app-header">
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#/" style={{color:"white"}}>Library</Navbar.Brand>
    </Navbar>
  </header>
)
export default Header;