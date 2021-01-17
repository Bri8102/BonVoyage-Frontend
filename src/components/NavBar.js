import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="NavbarContainer">
            <NavLink to='/' className="NavbarLink">Home</NavLink>
            <NavLink to='/destinations' className="NavbarLink">Destinations</NavLink>
            <NavLink to='/destinations/visited' className="NavbarLink">My Destinations</NavLink>
            <NavLink to='/destinations/wish-list' className="NavbarLink">Wish List</NavLink>
        </div>

    )
}

export default NavBar;