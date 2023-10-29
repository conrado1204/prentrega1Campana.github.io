import React, { useState } from 'react';
import CartWidget from './CartWidget';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
  const [category, setCategory] = useState(1);

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-center" style={{ flex: 1 }}>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => handleCategoryClick(1)}>Categoría 1</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategoryClick(2)}>Categoría 2</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategoryClick(3)}>Categoría 3</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategoryClick(4)}>Categoría 4</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleCategoryClick(5)}>Categoría 5</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
