import React from 'react';
import {NavLink} from 'react-router-dom';
import homeicon from '../assets/homeicon.png';

export function Navbar(){
    return (
        <nav className="navbar">
            <NavLink to="/"><img className="navicon" src={homeicon} alt={homeicon}/></NavLink>
        </nav>
    )
}