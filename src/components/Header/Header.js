import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">

           <div className="logo-style">
               <h3>kishok bari.com</h3>
           </div>
           <nav className="nav-style">
               <NavLink className="link" to="/home">Home</NavLink>
               <NavLink className="link" to="/about">About</NavLink>
               <NavLink className="link" to="/service">Service</NavLink>
               <NavLink className="link" to="/admission">Admission</NavLink>
               <NavLink className="link" to="/contact">Contact</NavLink>
           </nav>
        </div>
    );
};

export default Header;