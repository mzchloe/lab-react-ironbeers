import React from 'react';
import {NavLink} from 'react-router-dom';

export function Navbar(){
    return (
        <nav>
            <NavLink to="/"><h1>Iron Beers</h1></NavLink>
        </nav>
    )
}