import {  Navbar, Container, Nav } from "react-bootstrap"
import React from "react";
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from "react-router-dom";

//styling

const NavbarStyle = () => {
    return (
//   <nav className="navbar">
//   <ul className="nav_links">
//   <nav className="navbar">
//   <ul className="nav_links">
//     <a href="/">Home</a> | <a href="/staff">Staff</a> | <a href="/services">Services</a> | <a href="/booking">Booking</a> | <a href="/admin">Admin</a> 
//     </ul>
//   </nav>
//     <li><a href="/">Home</a></li>
//     <li><a href="/staff">Staff</a></li>
//     <li><a href="/services">Services</a></li>
//     <li><a href="/booking">Booking</a></li>
//     <li><a href="/admin">Amin</a></li> 
//    </ul>
//    </nav> 

        <>
        <Navbar sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Navbar.Brand href='#home'>Mane Salon</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#staff'>Staff</Nav.Link>
                    <Nav.Link href='#services'>Services</Nav.Link>
                    <Nav.Link href='#booking'>Booking</Nav.Link>
                    <Nav.Link href='#admin'>Admin</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default NavbarStyle

{/* <nav className="navbar">
<ul className="nav_links">
  <nav>
<a href="/">Home</a> | <a href="/staff">Staff</a> | <a href="/services">Services</a> | <a href="/booking">Booking</a> | <a href="/admin">Admin</a> 
  </nav>
    {/* <li><a href="/">Home</a></li>
    <li><a href="/staff">Staff</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/booking">Booking</a></li>
    <li><a href="/admin">Amin</a></li> */}
// </ul>
// </nav> */}