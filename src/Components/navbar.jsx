import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import  CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom'

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Buscando: ${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <Navbar bg="light" expand="lg" className="px-5 py-3">
    <Navbar.Brand href="#home"><Link to='/'>Jagues</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <div className='bar'>
        <NavLink to='/category/Mujer'>Fragancias Femeninas</NavLink>
        <NavLink to='/category/Hombre'>Fragancias Masculinas</NavLink>
        </div>
      </Nav>
      <CartWidget />
      <Form onSubmit={handleSearch}>
        <FormControl
          type="text"
          placeholder="Buscar productos"
          className="mr-sm-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-success" type="submit">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  )
  }
export default NavBar;